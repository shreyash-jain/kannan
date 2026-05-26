"""
Convert selected HEIC/JPG photos from raw_photos/ into web-ready JPGs
in public/images/. Resizes the longest edge to MAX_DIM, exports at QUALITY.

Mapping (raw file -> public/images/ name) is defined in PICKS below.
The names line up with the keys used in src/lib/images.ts so swapping a
photo only requires changing one row here.

Picks reflect the post-renovation batch (IMG_488x) from the Rooms folder
plus the waterfall/rock-pool shots IMG_4756/4757 that match Anneli's
birthday-waterfall story.

Slots still using placeholders (no finished photo available yet):
  - pool        (renovation in progress in all source shots)
  - backpackers (wooden-house dorm is mid-build; only construction shots)
  - kruger / panorama / sabieRiver (third-party shots, not at Kanaan)
  - hosts       (no real Anneli & Matthew portrait in the Drive)
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw_photos"
OUT = ROOT / "public" / "images"

MAX_DIM = 1600
QUALITY = 85

# (raw_relative_path, output_filename)
PICKS: list[tuple[str, str]] = [
    # ---- Mango grove (the forty-year-old trees) -----------------------
    ("Old Mangos/20250619_092750.heic", "hero-mango-grove.jpg"),
    ("Old Mangos/20250619_092741.heic", "mango-detail.jpg"),
    # ---- Lodge interiors (post-renovation IMG_488x batch) -------------
    ("Rooms/IMG_4890.HEIC", "lodge-room.jpg"),         # double, wooden ceiling, fan
    ("Rooms/IMG_4882.HEIC", "twin-room.jpg"),          # twin beds, scalloped headboards
    ("Rooms/IMG_4881.HEIC", "lodge-multi-bed.jpg"),    # multi-bed lodge unit + dining
    ("Rooms/IMG_4887.HEIC", "lodge-kitchen.jpg"),      # self-catering kitchen, red-check curtains
    ("Rooms/IMG_4894.HEIC", "lodge-bathroom.jpg"),     # modern bathroom, vessel sink, glass shower
    ("Rooms/IMG_4895.HEIC", "lodge-bedroom-ensuite.jpg"),  # bedroom + en-suite shower
    ("Rooms/IMG_4897.HEIC", "lodge-veranda.jpg"),      # exterior patio + built-in braai
    # ---- Camping under the mangos -------------------------------------
    ("Camp Site/IMG-20250709-WA0105.jpg", "camping-mango.jpg"),
    ("Camp Site/IMG-20250709-WA0107.jpg", "campfire-terrace.jpg"),
    # ---- The land: waterfall, valley views, trails --------------------
    ("Rooms/IMG_4756.HEIC", "waterfall.jpg"),          # the rock-pool/waterfall on Kanaan (Matt's birthday)
    ("Rooms/IMG_4757.HEIC", "lowveld-view.jpg"),       # valley + escarpment looking out
    ("Macs/IMG_0781.HEIC", "trail-cabin.jpg"),         # rustic cabin on a hillside trail
    # ---- Additional distinct interiors / details (kills duplicate slots) -
    ("Rooms/IMG_4883.HEIC", "lodge-bathroom-pine.jpg"),  # alt bathroom: concrete + pine sliding door
    ("Rooms/IMG_4885.HEIC", "lodge-kitchenette-18.jpg"),  # kitchenette with door 18
    ("Rooms/IMG_4888.HEIC", "lodge-kitchen-wood.jpg"),  # kitchenette with wooden sideboard
    ("Rooms/IMG_4893.HEIC", "lodge-dining-wood.jpg"),  # dining area, wooden ceiling, curtained windows
    ("Rooms/IMG_4886.HEIC", "lodge-twin-suite.jpg"),  # twin beds + bathroom view + dining
    ("Old Mangos/20250619_092651.heic", "mango-road.jpg"),  # the road through the mango grove
    ("Old dam/20250626_140004.heic", "lowveld-path.jpg"),  # dirt path with lodge + valley
    # ---- OG share image (distinct crop) -------------------------------
    ("Camp Site/IMG-20250709-WA0107.jpg", "og-default.jpg"),
]


def convert(src: Path, dst: Path) -> tuple[int, int, int]:
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
        im.save(dst, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        return im.size[0], im.size[1], dst.stat().st_size


def main() -> int:
    if not RAW.exists():
        print(f"raw_photos not found at {RAW}", file=sys.stderr)
        return 1

    missing: list[str] = []
    print(f"Converting {len(PICKS)} photos -> {OUT}")
    for rel, out_name in PICKS:
        src = RAW / rel
        if not src.exists():
            missing.append(rel)
            print(f"  MISSING  {rel}")
            continue
        dst = OUT / out_name
        w, h, size = convert(src, dst)
        print(f"  {out_name:28s}  {w}x{h}  {size / 1024:6.1f} KB  <-  {rel}")

    if missing:
        print(f"\n{len(missing)} source files missing — check the PICKS list.")
        return 2
    print("\nDone.")
    return 0


if __name__ == "__main__":
    sys.exit(main())