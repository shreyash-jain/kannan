"""
Upload the professional shoot to Cloudinary under kanaan/pro/.

The source photographs are NOT kept in this repo — 105 frames at 1600px is
about 55 MB, none of it needed at build time, since every page references
the Cloudinary URL. They live outside the working tree:

    C:\\Saral\\kannan\\pixieset-xxl        (override with --src)

Each file keeps the photographer's own frame number, so ARN_5885.jpg becomes
kanaan/pro/arn-5885 and any photo on the site can be traced straight back to
the original gallery.

Re-runnable: uploads overwrite on collision, so a corrected or re-exported
frame just replaces the old one at the same URL.

    python scripts/upload-pro-photos.py [--src DIR] [--dry-run]
"""

from __future__ import annotations

import argparse
import io
import os
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SRC = Path(r"C:\Saral\kannan\pixieset-xxl")
MAX_DIM = 1600
QUALITY = 82


def load_env() -> None:
    env = ROOT / ".env.local"
    if not env.exists():
        return
    for line in env.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, _, value = line.partition("=")
            os.environ.setdefault(key.strip(), value.strip())


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", type=Path, default=DEFAULT_SRC)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not args.src.exists():
        print(f"source not found: {args.src}", file=sys.stderr)
        return 1

    files = sorted(args.src.glob("ARN_*.jpg"))
    if not files:
        print(f"no ARN_*.jpg in {args.src}", file=sys.stderr)
        return 1
    print(f"{len(files)} photographs in {args.src}")

    if args.dry_run:
        for f in files[:5]:
            print(f"  would upload {f.name} -> kanaan/pro/{slug(f)}")
        print("  ...")
        return 0

    load_env()
    url = os.environ.get("CLOUDINARY_URL")
    if not url:
        print("CLOUDINARY_URL not set — put it in .env.local", file=sys.stderr)
        return 1

    try:
        from PIL import Image
        import cloudinary
        import cloudinary.uploader
    except ImportError:
        print("install first: python -m pip install pillow cloudinary", file=sys.stderr)
        return 1

    parsed = urlparse(url)
    cloudinary.config(
        cloud_name=parsed.hostname,
        api_key=parsed.username,
        api_secret=parsed.password,
        secure=True,
    )

    ok = fail = 0
    for f in files:
        try:
            # Re-encode in memory rather than writing a staging copy into the
            # repo — the bytes only need to exist long enough to be uploaded.
            with Image.open(f) as im:
                im = im.convert("RGB")
                w, h = im.size
                scale = min(1.0, MAX_DIM / max(w, h))
                if scale < 1.0:
                    im = im.resize(
                        (round(w * scale), round(h * scale)),
                        Image.Resampling.LANCZOS,
                    )
                buf = io.BytesIO()
                im.save(buf, "JPEG", quality=QUALITY, optimize=True, progressive=True)
                buf.seek(0)

            cloudinary.uploader.upload(
                buf,
                public_id=f"kanaan/pro/{slug(f)}",
                overwrite=True,
                invalidate=True,
                use_filename=False,
                unique_filename=False,
            )
            ok += 1
            if ok % 20 == 0:
                print(f"  {ok} uploaded...", flush=True)
        except Exception as e:  # noqa: BLE001
            fail += 1
            print(f"  FAIL {f.name}: {e}", file=sys.stderr)

    print(f"\n{ok} uploaded to kanaan/pro/, {fail} failed")
    return 2 if fail else 0


def slug(path: Path) -> str:
    return path.stem.lower().replace("_", "-")


if __name__ == "__main__":
    sys.exit(main())
