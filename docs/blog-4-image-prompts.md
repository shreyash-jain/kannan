# Family & Kids guide (Blog 4) — image generation prompts

Only **three** dedicated shots need generating — the Hazyview-specific kid
scenes that have no existing asset. Everything else on the page reuses **real
Kanaan photos** (the pool + kids' play structure, the mango-grove camping, the
farm waterfall, a family room, the pool at sunset) and the **existing Blog 2/3
scene shots** (Graskop Gorge Lift, Mac Mac Falls, the winter waterhole, the
impala lambs).

## How to use

1. Generate each image in Gemini (Imagen / "Nano Banana") using the **shared
   style line + the per-image prompt** below.
2. Save the result as `public/images/<public_id>.jpg` — the filename **must**
   match the `public_id` exactly.
3. Run the uploader: `python scripts/upload-to-cloudinary.py`
4. Done — `src/lib/images.ts` already points at these public_ids.

## Shared style line (prepend to every prompt)

> Photorealistic travel/lifestyle photograph, shot on a full-frame camera,
> natural light, rich but true-to-life colour, high dynamic range. Authentic
> South African Lowveld / Mpumalanga scenery. Warm, candid, family-holiday
> feeling. No text, no captions, no watermark, no logos. **Children and adults
> are seen from behind or in soft profile — no recognisable faces.** Any
> animals are at a respectful, natural distance.

---

## 1. `family-kruger-kids-hero` — hero (16:9, wide)

A child, seen from behind, leaning to an open car window on a first self-drive
Kruger safari at golden early-morning light, pointing excitedly at a small herd
of elephants crossing the tarred road ahead. Warm low sun, dusty-gold winter
bushveld, acacia trees, a film of mist in the distance. The car window frame
and the child's silhouette in the foreground; the elephants at a safe, natural
distance in the mid-ground. Tender, joyful, cinematic. No faces, no text.

## 2. `hazyview-ziplines-canopy` — Hazyview adventure (3:2 landscape)

A zip-line canopy tour through lush indigenous forest near Hazyview on the
Drakensberg escarpment. A harnessed adventurer (small in the frame, seen from
behind) glides along a steel cable between timber treetop platforms, high above
a deep green forested gorge with a glimpse of a waterfall or river below.
Dappled sunlight through the canopy, vivid greens, a sense of height and fun.
Adventurous, bright, safe-looking. No faces, no text.

## 3. `kids-safari-binoculars` — easy safari with kids (3:2 landscape)

A child, seen from behind or in soft profile, looking through a pair of
binoculars out of a stationary car window into golden Lowveld bushveld on a
self-drive safari. On the back seat beside them, a simple animal "spotting"
checklist and a pair of small hands. In the softly-blurred distance, an impala
and a giraffe among the trees. Warm morning light, shallow depth of field,
candid and absorbed. No recognisable face, no text.

---

## Reuse (do **not** generate)

- **Farm / family base beats** → real Kanaan photos already on Cloudinary:
  `pool-second` (pool + kids' play structure), `camping-mango`, `waterfall`,
  `lodge-family-twin`, `pool-sunset`.
- **Kruger beat** → `kruger-winter-waterhole` (or `kruger-elephant`).
- **Panorama beats** → `graskop-gorge-lift`, `panorama-mac-mac-falls`.
- **Wild-animals-up-close beat** → `impala-lambing-summer`.
