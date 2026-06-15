"""
Upload every photo in public/images/ and every video in media/videos/
to Cloudinary under the `kanaan/` folder. Each asset's public_id matches
its filename without extension, so the URL is stable and predictable.

Run once after adding new media to public/. Idempotent — overwrites on
collision so re-runs after a photo refresh just replace the asset.

Reads CLOUDINARY_URL from .env.local (gitignored). The repo never sees
your API secret.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Load .env.local without a third-party dotenv dep — small and robust.
env_path = ROOT / ".env.local"
if env_path.exists():
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip())

try:
    import cloudinary
    import cloudinary.uploader
except ImportError:
    print("install first: python -m pip install cloudinary", file=sys.stderr)
    sys.exit(1)

cloudinary_url = os.environ.get("CLOUDINARY_URL")
if not cloudinary_url:
    print("CLOUDINARY_URL not set — put it in .env.local", file=sys.stderr)
    sys.exit(1)

# Parse cloudinary://<key>:<secret>@<cloud> ourselves — the SDK reads
# env vars at import time and `config(cloudinary_url=...)` doesn't
# always override cleanly when CLOUDINARY_CLOUD_NAME is also set.
from urllib.parse import urlparse

parsed = urlparse(cloudinary_url)
if parsed.scheme != "cloudinary" or not parsed.username or not parsed.password or not parsed.hostname:
    print("CLOUDINARY_URL malformed. Expected cloudinary://<key>:<secret>@<cloud>", file=sys.stderr)
    sys.exit(1)

cloudinary.config(
    cloud_name=parsed.hostname,
    api_key=parsed.username,
    api_secret=parsed.password,
    secure=True,
)

CLOUDINARY_FOLDER = "kanaan"
IMAGES_DIR = ROOT / "public" / "images"
VIDEOS_DIR = ROOT / "media" / "videos"

IMG_EXTS = {".jpg", ".jpeg", ".png", ".webp"}
VID_EXTS = {".mp4", ".webm", ".mov"}


def upload_one(path: Path, resource_type: str) -> str:
    public_id = f"{CLOUDINARY_FOLDER}/{path.stem}"
    result = cloudinary.uploader.upload(
        str(path),
        public_id=public_id,
        resource_type=resource_type,
        overwrite=True,
        invalidate=True,
        use_filename=False,
        unique_filename=False,
    )
    return result["secure_url"]


def main() -> int:
    cloud_name = cloudinary.config().cloud_name
    if not cloud_name:
        print("Cloudinary cloud_name not resolved — check CLOUDINARY_URL.", file=sys.stderr)
        return 1
    print(f"Cloud: {cloud_name}  ·  Folder: {CLOUDINARY_FOLDER}/\n")

    count = 0
    for d, resource_type, exts in [
        (IMAGES_DIR, "image", IMG_EXTS),
        (VIDEOS_DIR, "video", VID_EXTS),
    ]:
        if not d.exists():
            continue
        for path in sorted(d.iterdir()):
            if path.suffix.lower() not in exts:
                continue
            try:
                url = upload_one(path, resource_type)
                count += 1
                print(f"  [{resource_type:5s}] {path.name:32s} -> {url}")
            except Exception as e:  # noqa: BLE001
                print(f"  FAIL {path.name}: {e}", file=sys.stderr)

    print(f"\nUploaded {count} assets to {cloud_name}/{CLOUDINARY_FOLDER}/")
    return 0


if __name__ == "__main__":
    sys.exit(main())