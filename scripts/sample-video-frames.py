"""Pull a handful of still frames out of each long video in raw_photos/
so we can see what's in them before deciding which segments to extract
for the web. Writes to raw_photos/_video_frames/.
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw_photos"
OUT = RAW / "_video_frames"

# (path under raw_photos, slug, list of timestamps in seconds)
TARGETS = [
    # 638 MB — almost certainly the 5-min founder long-form
    ("IMG_8320.MOV", "long-form", [10, 60, 120, 180, 240, 290]),
    # 47 MB — medium
    ("IMG_8319.MOV", "mid-form", [3, 10, 20, 35, 50]),
    # 98 MB
    ("20250801_114541.mp4", "aug-tour", [5, 20, 45, 70, 100]),
    # 276 MB — current property-tour was first 30s; peek past that
    ("IMG_8318.MOV", "prop-extra", [40, 70, 100, 140, 180]),
]


def grab_frame(src: Path, seconds: int, dst: Path) -> bool:
    dst.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        [
            FFMPEG, "-y",
            "-ss", str(seconds),
            "-i", str(src),
            "-vframes", "1",
            "-vf", "scale='min(900,iw)':-2",
            "-q:v", "4",
            str(dst),
        ],
        capture_output=True,
    )
    return result.returncode == 0 and dst.exists() and dst.stat().st_size > 0


def main() -> int:
    for rel, slug, timestamps in TARGETS:
        src = RAW / rel
        if not src.exists():
            print(f"missing: {rel}")
            continue
        print(f"\n{rel}")
        for t in timestamps:
            dst = OUT / f"{slug}_{t}s.jpg"
            ok = grab_frame(src, t, dst)
            status = "ok" if ok else "FAIL (likely past end)"
            print(f"  {t:4d}s  {status:24s}  {dst.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())