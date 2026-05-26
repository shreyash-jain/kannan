"""Convert every photo in priority folders to 600px-wide JPG previews so
we can browse them in Claude. Output to raw_photos/_preview/."""

from __future__ import annotations
import sys
from pathlib import Path
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw_photos"
OUT = RAW / "_preview"

PRIORITY = [
    "Rooms",
    "Pool",
    "Lodge Reno (unit 11)",
    "Woodern Wash Room",
    "Camp Site",
    "Old Mangos",
    "Macs",
    "Quarry",
    "Old dam",
    "Fence line infront",
]

MAX_DIM = 800
QUALITY = 75


def convert(src: Path, dst: Path) -> None:
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        scale = min(1.0, MAX_DIM / max(w, h))
        if scale < 1.0:
            im = im.resize(
                (int(round(w * scale)), int(round(h * scale))),
                Image.Resampling.LANCZOS,
            )
        dst.parent.mkdir(parents=True, exist_ok=True)
        im.save(dst, "JPEG", quality=QUALITY, optimize=True)


def main() -> int:
    total = 0
    for folder in PRIORITY:
        src_dir = RAW / folder
        if not src_dir.exists():
            print(f"skip (missing): {folder}")
            continue
        dst_dir = OUT / folder
        for src in sorted(src_dir.iterdir()):
            if src.suffix.lower() not in {".heic", ".jpg", ".jpeg", ".png"}:
                continue
            dst = dst_dir / (src.stem + ".jpg")
            try:
                convert(src, dst)
                total += 1
            except Exception as e:
                print(f"  FAIL  {src.name}: {e}")
        print(f"  {folder}: done ({len(list(dst_dir.glob('*.jpg')))} files)")
    print(f"\nTotal: {total} previews in {OUT}")
    return 0


if __name__ == "__main__":
    sys.exit(main())