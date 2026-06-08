"""
Convert raw Drive videos to web-friendly MP4 (H.264) clips.

- B-roll clips (silent autoplay loops) have audio stripped — see PICKS rows
  with `silent=True`.
- Narrated clips (Matthew or Anneli speaking) keep their audio so the viewer
  can unmute the autoplay-muted video and hear the founder narration.
- Caps at 720p / 1280px wide; trims to MAX_SECONDS so file size stays small.
- Target < 10 MB per clip so they comfortably fit Cloudflare Pages 25MB-per-file.
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

# (raw_relative_path, output_filename, start_seconds, max_seconds, silent)
PICKS: list[tuple[str, str, float, int, bool]] = [
    # ---- Silent B-roll loops (no narration in the source) -----------
    ("Old Mangos/20250619_092711.mp4", "mango-grove.mp4", 0.0, DEFAULT_MAX_SECONDS, True),
    ("Lodge Reno (unit 11)/20250709_124153.mp4", "lodge-walk.mp4", 0.0, DEFAULT_MAX_SECONDS, True),
    ("Rooms/IMG_4759.MOV", "lodge-room-walk.mp4", 0.0, DEFAULT_MAX_SECONDS, True),
    ("Pool/20250709_080153.mp4", "pool-tour.mp4", 0.0, 20, True),
    # ---- Matthew-narrated walk-throughs (audio kept) ----------------
    # IMG_8318 is the 30-second walk used on /the-land
    ("IMG_8318.MOV", "property-tour.mp4", 0.0, 30, False),
    # IMG_8320 is the 5-minute Matthew-narrated property tour, broken
    # into four context-specific clips — each embedded on the page
    # whose section it matches. Audio kept so visitors can unmute and
    # hear Matthew talking through the farm.
    ("IMG_8320.MOV", "tour-mac-grove.mp4", 0.0, 18, False),
    ("IMG_8320.MOV", "tour-venue.mp4", 108.0, 20, False),
    # Shifted +10s (start was 168.0) — drops the laugh at the head of
    # the old cut and picks up 10s of camping-ground footage at the
    # tail that wasn't in the previous window. Keeps the same 32s length
    # so the interview pacing reads consistently.
    ("IMG_8320.MOV", "tour-camping.mp4", 178.0, 32, False),
    ("IMG_8320.MOV", "tour-lodge-unit.mp4", 280.0, 18, False),
]


def convert(src: Path, dst: Path, start: float, max_seconds: int, silent: bool) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    # -ss before -i is fast seek; -t limits duration. Silent clips strip
    # audio with -an; narrated clips re-encode it to AAC for web delivery.
    cmd: list[str] = [
        FFMPEG, "-y",
        "-ss", str(start),
        "-i", str(src),
        "-t", str(max_seconds),
    ]
    if silent:
        cmd += ["-an"]
    else:
        cmd += ["-c:a", "aac", "-b:a", "96k", "-ac", "2"]
    cmd += [
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
    for rel, name, start, max_seconds, silent in PICKS:
        src = RAW / rel
        if not src.exists():
            print(f"  MISSING  {rel}")
            continue
        dst = OUT / name
        flag = "silent" if silent else "WITH AUDIO"
        print(f"  ... {name}  <-  {rel}  ({max_seconds}s, {flag})")
        convert(src, dst, start, max_seconds, silent)
        size_kb = dst.stat().st_size / 1024
        print(f"  {name:24s}  {size_kb:7.1f} KB")
    print("\nDone.")
    return 0


if __name__ == "__main__":
    sys.exit(main())