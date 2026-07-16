"""
Generate blog scene images with Google's Imagen from the prompts in
scripts/image-gen-manifest.json, and save them where the Cloudinary uploader
expects them: public/images/<public_id>.jpg (JPEG, sized to the given aspect).

Pipeline:
    1. python scripts/generate-images.py <blog-key> [public_id ...]
    2. python scripts/upload-to-cloudinary.py
    3. flip the placeholder public_id(s) in src/lib/images.ts

Examples:
    python scripts/generate-images.py blog-7            # all Blog 7 images
    python scripts/generate-images.py blog-7 kruger-dawn-elephant
    python scripts/generate-images.py all               # every blog in the manifest

Reads GEMINI_API_KEY (or GOOGLE_API_KEY) from .env.local (gitignored) — the repo
never sees your key. Override the model with IMAGE_MODEL in .env.local if needed.
"""

from __future__ import annotations

import io
import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / "scripts" / "image-gen-manifest.json"
OUT_DIR = ROOT / "public" / "images"

DEFAULT_MODEL = "imagen-4.0-generate-001"
# Tried in order if the configured/default model is unavailable to the key.
MODEL_FALLBACKS = [
    "imagen-4.0-generate-001",
    "imagen-3.0-generate-002",
    "imagen-4.0-generate-preview-06-06",
]


def load_env() -> None:
    """Load .env.local without a third-party dotenv dep (matches upload script)."""
    env_path = ROOT / ".env.local"
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip())


def die(msg: str) -> "None":
    print(f"error: {msg}", file=sys.stderr)
    sys.exit(1)


def ensure_ca_bundle() -> None:
    """Some machines set CURL_CA_BUNDLE / SSL_CERT_FILE to a path that does not
    exist (e.g. a PostgreSQL cert), which breaks TLS for httpx/requests. If the
    configured CA path is missing, point the standard vars at certifi's bundle."""
    try:
        import certifi
    except ImportError:
        return
    good = certifi.where()
    for var in ("SSL_CERT_FILE", "REQUESTS_CA_BUNDLE", "CURL_CA_BUNDLE"):
        val = os.environ.get(var)
        if not val or not Path(val).exists():
            os.environ[var] = good


def get_client():
    try:
        from google import genai  # noqa: F401
    except ImportError:
        die("google-genai not installed. Run: python -m pip install google-genai")

    from google import genai

    key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not key:
        die(
            "GEMINI_API_KEY not set. Add a line to .env.local:\n"
            "    GEMINI_API_KEY=your-key-here\n"
            "Get one at https://aistudio.google.com/apikey (never paste it in chat)."
        )
    return genai.Client(api_key=key)


def save_jpeg(data: bytes, public_id: str) -> Path:
    from PIL import Image

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out = OUT_DIR / f"{public_id}.jpg"
    img = Image.open(io.BytesIO(data)).convert("RGB")
    img.save(out, "JPEG", quality=92, optimize=True)
    return out


def generate_one(client, model: str, full_prompt: str, aspect: str, public_id: str) -> Path:
    from google.genai import types

    last_err: Exception | None = None
    # Try the chosen model first, then fall back through known Imagen ids.
    candidates = [model] + [m for m in MODEL_FALLBACKS if m != model]
    for candidate in candidates:
        try:
            result = client.models.generate_images(
                model=candidate,
                prompt=full_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio=aspect,
                    person_generation="allow_adult",
                ),
            )
            gen = result.generated_images
            if not gen:
                raise RuntimeError(
                    "model returned no image (prompt may have been filtered)"
                )
            data = gen[0].image.image_bytes
            if candidate != model:
                print(f"    (used fallback model: {candidate})")
            return save_jpeg(data, public_id)
        except Exception as e:  # noqa: BLE001
            last_err = e
            msg = str(e).lower()
            # Only fall through on model-availability errors; re-raise real ones.
            if "not found" in msg or "not supported" in msg or "permission" in msg or "404" in msg:
                continue
            raise
    raise RuntimeError(f"all models failed; last error: {last_err}")


def main() -> int:
    if len(sys.argv) < 2:
        die("usage: python scripts/generate-images.py <blog-key|all> [public_id ...]")

    load_env()
    ensure_ca_bundle()
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    blog_key = sys.argv[1]
    id_filter = set(sys.argv[2:])

    blogs = [k for k in manifest if not k.startswith("_")] if blog_key == "all" else [blog_key]
    for b in blogs:
        if b not in manifest:
            die(f"blog key '{b}' not in manifest. Available: "
                + ", ".join(k for k in manifest if not k.startswith('_')))

    model = os.environ.get("IMAGE_MODEL", DEFAULT_MODEL)
    client = get_client()

    total = 0
    for b in blogs:
        block = manifest[b]
        shared = block.get("shared_style", "").strip()
        for item in block["images"]:
            pid = item["public_id"]
            if id_filter and pid not in id_filter:
                continue
            full_prompt = f"{shared}\n\n{item['prompt']}".strip() if shared else item["prompt"]
            aspect = item.get("aspect", "16:9")
            print(f"  [{b}] generating {pid}  ({aspect}) ...")
            try:
                out = generate_one(client, model, full_prompt, aspect, pid)
                total += 1
                print(f"    -> {out.relative_to(ROOT)}")
            except Exception as e:  # noqa: BLE001
                print(f"    FAIL {pid}: {e}", file=sys.stderr)

    if total == 0:
        print("\nNothing generated. Check the blog key / public_id filter.", file=sys.stderr)
        return 1
    print(f"\nGenerated {total} image(s) into public/images/.")
    print("Next: python scripts/upload-to-cloudinary.py  ·  then flip the public_ids in src/lib/images.ts")
    return 0


if __name__ == "__main__":
    sys.exit(main())
