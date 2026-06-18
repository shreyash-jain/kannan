# Seasonal Almanac guide (Blog 3) — image generation prompts

Five dedicated scene shots for
`/blog/when-to-visit-kruger-hazyview-month-by-month`, one per season/month
beat, so the month-by-month guide never reuses a landscape that already
appears on another page. The "comes home to the farm" beat reuses the **real**
`img.poolSunset` — we don't fake the farm.

## How to use

1. Generate each image in Gemini (Imagen / "Nano Banana") using the **shared
   style line + the per-image prompt** below.
2. Save the result as `public/images/<public_id>.jpg` — the filename **must**
   match the `public_id` exactly.
3. Run the uploader: `python scripts/upload-to-cloudinary.py`
   (reads `CLOUDINARY_URL` from `.env.local`; uploads to `kanaan/<public_id>`).
4. Done — `src/lib/images.ts` already points at these public_ids, so the page
   picks them up with no code change.

## Shared style line (prepend to every prompt)

> Photorealistic travel/landscape photograph, shot on a full-frame camera,
> natural light, rich but true-to-life colour, high dynamic range. Authentic
> South African Lowveld / Mpumalanga / Drakensberg-escarpment scenery. No text,
> no captions, no watermark, no logos. Any people are small, incidental and
> seen from behind — no recognisable faces. Any animals are at a respectful,
> natural distance.

---

## 1. `lowveld-green-season` — hero (16:9, wide)

Wide green-summer Lowveld near Hazyview in the mid-afternoon. Emerald bushveld
and tall green grass rolling away to low blue hills, a towering cumulonimbus
thunderhead building on the horizon with dramatic shafts of light breaking
through, glossy well-watered acacia and bushwillow trees, a full river catching
the light in the middle distance. Rich saturated greens, storm-grey sky, golden
pockets of late-afternoon sun. No people, no text. 35mm, crisp foreground,
epic and lush.

## 2. `kruger-winter-waterhole` — dry-season spotlight (3:2 landscape)

Dry-winter (July) southern Kruger National Park. A shrinking waterhole in open,
bare, dusty bushveld with leafless trees and pale golden grass; a small herd of
elephants and a few zebra drinking in crisp early-morning light, low ground
mist hanging over the water, breath faintly visible in the cold air. Muted
dusty golds and browns, pale-blue cold winter sky. Animals at a respectful
distance. Telephoto compression, soft early light.

## 3. `panorama-clear-winter-view` — clear-view spotlight (16:9 landscape)

The view from God's Window on the Panorama Route on a crisp, clear winter
morning. Sheer forested cliffs drop almost a kilometre to the hazy green
Lowveld far below; layered blue ridges recede into the distance toward a clean,
deep-blue cloudless sky. Crystalline dry winter air — maximum long-distance
clarity, no mist. One or two tiny distant figures seen from behind at a railing
for scale. Indigenous rock and fynbos in the foreground. Wide-angle, deep depth
of field, serene. (Make it visibly a *winter* frame — bare clarity, deep blue
sky — distinct from the summer hero.)

## 4. `sabie-waterfall-full-flow` — full-summer falls spotlight (3:2 landscape)

A tall Panorama Route waterfall at full summer flow. A powerful, broad white
ribbon of water thundering down a dark wet rock face into a green rainforest
amphitheatre; heavy mist drifting off the plunge pool, dripping ferns, moss and
lush indigenous trees framing the gorge. Vivid wet greens, brilliant white
spray. Slight motion blur on the falling water. Bright overcast-summer light.

## 5. `impala-lambing-summer` — newborns spotlight (telephoto, 3:2)

Kruger National Park in November. An impala ewe standing watchfully over several
wobbly newborn lambs in fresh green grass scattered with small wildflowers after
the first summer rains. Soft side light, tender mood, fresh saturated greens, a
softly blurred green background. Shot on a telephoto lens at a respectful
distance, shallow depth of field.

---

## Reuse (do **not** generate)

- **The farm beat** → reuse the real `img.poolSunset` (the Kanaan pool at
  sunset). We have real farm photography; don't fake the farm.
