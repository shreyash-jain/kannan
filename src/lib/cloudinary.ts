// Helpers that build Cloudinary delivery URLs for our `kanaan/` folder.
// Originals are uploaded once by scripts/upload-to-cloudinary.py; this
// module is the only place the cloud name lives in source.

const CLOUD = "dn9snfizy";
const FOLDER = "kanaan";

const IMG_BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;
const VID_BASE = `https://res.cloudinary.com/${CLOUD}/video/upload`;

// f_auto = best format per browser (AVIF/WebP/JPEG)
// q_auto = best quality/size trade-off
// c_limit,w_<n> = cap the longest edge without upscaling
const DEFAULT_IMG_TRANSFORMS = "f_auto,q_auto,c_limit,w_1600";
const DEFAULT_VID_TRANSFORMS = "q_auto,f_mp4";

export function cldImage(publicId: string, transforms = DEFAULT_IMG_TRANSFORMS): string {
  return `${IMG_BASE}/${transforms}/${FOLDER}/${publicId}`;
}

export function cldVideo(publicId: string, transforms = DEFAULT_VID_TRANSFORMS): string {
  return `${VID_BASE}/${transforms}/${FOLDER}/${publicId}.mp4`;
}

// A still poster frame for a video — Cloudinary derives a JPG from the
// first frame automatically when you swap /video/ for /video/upload with
// .jpg as the file extension on a video public_id.
export function cldVideoPoster(publicId: string, transforms = "f_auto,q_auto,c_limit,w_1600"): string {
  return `${VID_BASE}/${transforms}/${FOLDER}/${publicId}.jpg`;
}