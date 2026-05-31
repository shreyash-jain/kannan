"""
Convert raw Drive videos to web-friendly MP4 (H.264) clips.
- Strips audio (silent B-roll loops better with autoplay)
- Caps at 720p (max 1280px wide)
- Trims to MAX_SECONDS so file size stays small
- Targets <8 MB each so they fit Cloudflare Pages 25MB-per-file limit
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg

FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw_photos"
OUT = ROOT / "public" / "videos"

DEFAULT_MAX_SECONDS = 20  # cap clip length
CRF = 28  # lower = higher quality / larger file. 28 is web-friendly

# (raw_relative_path, output_filename, start_seconds, max_seconds_override)
PICKS: list[tuple[str, str, float, int]] = [
    ("Old Mangos/20250619_092711.mp4", "mango-grove.mp4", 0.0, DEFAULT_MAX_SECONDS),
    ("Lodge Reno (unit 11)/20250709_124153.mp4", "lodge-walk.mp4", 0.0, DEFAULT_MAX_SECONDS),
    ("Rooms/IMG_4759.MOV", "lodge-room-walk.mp4", 0.0, DEFAULT_MAX_SECONDS),
    # Longer property tour from the Drive root — user-requested.
    ("IMG_8318.MOV", "property-tour.mp4", 0.0, 30),
    # Pool video from the Pool folder.
    ("Pool/20250709_080153.mp4", "pool-tour.mp4", 0.0, 20),
]


def convert(src: Path, dst: Path, start: float, max_seconds: int) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    # -ss before -i is fast seek; -t limits duration; -an strips audio.
    # scale filter caps the LONGEST edge at 1280 and keeps even dimensions.
    cmd = [
        FFMPEG, "-y",
        "-ss", str(start),
        "-i", str(src),
        "-t", str(max_seconds),
        "-an",
        "-vf", "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))',fps=30",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", str(CRF),
        "-movflags", "+faststart",
        "-pix_fmt", "yuv420p",
        str(dst),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(result.stderr[-500:], file=sys.stderr)
        raise RuntimeError(f"ffmpeg failed for {src}")


def main() -> int:
    print(f"Converting {len(PICKS)} videos -> {OUT}")
    for rel, name, start, max_seconds in PICKS:
        src = RAW / rel
        if not src.exists():
            print(f"  MISSING  {rel}")
            continue
        dst = OUT / name
        print(f"  ... {name}  <-  {rel}  ({max_seconds}s)")
        convert(src, dst, start, max_seconds)
        size_kb = dst.stat().st_size / 1024
        print(f"  {name:24s}  {size_kb:7.1f} KB")
    print("\nDone.")
    return 0


if __name__ == "__main__":
    sys.exit(main())