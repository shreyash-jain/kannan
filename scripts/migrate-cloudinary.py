"""
One-shot migration: copy every asset under kanaan/ from the old
Cloudinary cloud (dn9snfizy) to the new one. Cloudinary's upload API
accepts an HTTPS URL as source, so the bytes move cloud-to-cloud and
never round-trip through this machine.

The new cloud's credentials come from .env.local. The old cloud's
URLs are public delivery URLs — no credentials needed for the source
side.

Run this once after switching credentials. Safe to re-run: each upload
uses overwrite=True so repeated runs just replace.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent

# Load .env.local for the NEW cloud credentials.
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

new_url = os.environ.get("CLOUDINARY_URL")
if not new_url:
    print("CLOUDINARY_URL not set", file=sys.stderr)
    sys.exit(1)

parsed = urlparse(new_url)
cloudinary.config(
    cloud_name=parsed.hostname,
    api_key=parsed.username,
    api_secret=parsed.password,
    secure=True,
)

SOURCE_CLOUD = "dn9snfizy"
FOLDER = "kanaan"
SRC_IMG = f"https://res.cloudinary.com/{SOURCE_CLOUD}/image/upload/{FOLDER}"
SRC_VID = f"https://res.cloudinary.com/{SOURCE_CLOUD}/video/upload/{FOLDER}"

IMAGE_IDS = [
    "hero-mango-grove", "mango-detail", "mango-road",
    "lodge-room", "twin-room", "lodge-multi-bed", "lodge-twin-suite",
    "lodge-bedroom-ensuite", "lodge-kitchen", "lodge-kitchenette-18",
    "lodge-kitchen-wood", "lodge-dining-wood",
    "lodge-bathroom", "lodge-bathroom-pine", "lodge-veranda",
    "camping-mango", "campfire-terrace",
    "waterfall", "lowveld-view", "trail-cabin", "lowveld-path",
    "kruger-elephant", "panorama-rondavels", "sabie-waterfall",
    "wedding-ceremony-mango", "wedding-reception-table",
    "wedding-table-detail", "wedding-first-dance", "wedding-morning-after",
    "og-default", "hosts",
]
VIDEO_IDS = ["mango-grove", "lodge-walk", "lodge-room-walk"]


def migrate_one(public_id: str, source_url: str, resource_type: str) -> str:
    result = cloudinary.uploader.upload(
        source_url,
        public_id=f"{FOLDER}/{public_id}",
        resource_type=resource_type,
        overwrite=True,
        invalidate=True,
    )
    return result["secure_url"]


def main() -> int:
    c = cloudinary.config()
    if c.cloud_name == SOURCE_CLOUD:
        print(f"CLOUDINARY_URL still points at the source cloud ({SOURCE_CLOUD}). Switch it first.", file=sys.stderr)
        return 1
    print(f"Migrating  {SOURCE_CLOUD}/{FOLDER}/  ->  {c.cloud_name}/{FOLDER}/\n")

    fail = 0
    for pid in IMAGE_IDS:
        src = f"{SRC_IMG}/{pid}"
        try:
            dst = migrate_one(pid, src, "image")
            print(f"  [image] {pid:32s} -> {dst}")
        except Exception as e:  # noqa: BLE001
            print(f"  FAIL  image {pid}: {e}", file=sys.stderr)
            fail += 1

    for pid in VIDEO_IDS:
        src = f"{SRC_VID}/{pid}.mp4"
        try:
            dst = migrate_one(pid, src, "video")
            print(f"  [video] {pid:32s} -> {dst}")
        except Exception as e:  # noqa: BLE001
            print(f"  FAIL  video {pid}: {e}", file=sys.stderr)
            fail += 1

    total = len(IMAGE_IDS) + len(VIDEO_IDS)
    print(f"\nMigrated {total - fail}/{total} assets.")
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())