# "First Light" dawn-drive guide (Blog 7) — image generation prompts

**Two dedicated AI scene shots** for `/blog/early-morning-kruger-safari-from-hazyview`
— the two signature frames the piece turns on, which no existing library image
covers. This guide is **AI-imagery throughout**: these are pre-dawn / in-park
scenes no on-farm camera can capture, so faking them is not the never-fake-the-farm
problem — the *farm* is never depicted here. The rest of the body **reuses existing
dawn/Kruger AI shots** already in `src/lib/images.ts` (see the reuse list below).

> Distinctness-checked against the library: `lowveld-sunrise-road` is the empty
> road to Phabeni at dawn; `kruger-winter-waterhole` is a wide dry-season waterhole
> with elephants. The two new frames are closer and more cinematic: (1) a POV from
> *inside the car*, headlights on a misty road, apricot sky ahead; (2) a single
> elephant looming out of the dawn mist right in front of the viewer — "the grey
> boulder that lifts its trunk."

## How to use

1. Generate in Gemini (Imagen / "Nano Banana") using the **shared style line +
   the per-image prompt** below.
2. Save each as `public/images/<public_id>.jpg` — the filename **must** match the
   `public_id` exactly.
3. Run the uploader: `python scripts/upload-to-cloudinary.py`
4. Flip each placeholder in `src/lib/images.ts`: change `krugerDawnDriveHero`'s
   public_id from `"lowveld-sunrise-road"` → `"kruger-dawn-drive-hero"`, and
   `krugerDawnElephant`'s from `"kruger-winter-waterhole"` → `"kruger-dawn-elephant"`.
   (Until then the closest real asset shows, so the page is never broken.)

## Shared style line (prepend to every prompt)

> Photorealistic travel/wildlife photograph, shot on a full-frame camera, natural
> light, rich but true-to-life colour, high dynamic range, crisp South African
> Lowveld / Kruger light. No text, no captions, no watermark, no logos. Any people
> are small, incidental and seen from behind — no recognisable faces. Any animals
> are at a respectful, natural distance and never distressed.

---

## 1. `kruger-dawn-drive-hero` — hero (16:9, wide)

A cinematic point-of-view shot from just inside a slowly-moving safari self-drive
vehicle at first light in the southern Kruger bushveld. The lower edge of the frame
catches a hint of the car — the top of the dashboard and the interior curve of an
open side window — so it reads as *the driver's own view*. Ahead, a narrow tar-and-
gravel park road runs straight into the distance through open winter bushveld, low
ground mist pooling knee-high across it and drifting between leafless golden trees.
The car's headlights throw two soft cones of light onto the misty road. The sky
above the treeline is caught mid-transformation: deep charcoal-blue at the top
grading down through violet to a warm band of apricot and rose-gold right on the
horizon where the sun is about to break, the first light rimming the ridgelines and
catching the top of the mist. A couple of dark bird silhouettes on a bare branch.
Cold, still, hushed, full of anticipation — the single best moment of the day.
Wide-angle, deep depth of field, painterly natural colour, gentle motion. No text,
no faces, no dashboard clutter.

## 2. `kruger-dawn-elephant` — the first sighting (16:9)

A large, calm elephant bull standing on or just beside a misty Kruger park road in
the soft apricot light of very early morning, seen from a respectful distance from
the viewpoint of a stopped car a little way down the road. He emerges from thin
dawn mist and long golden winter grass so that at first glance he reads almost like
a huge grey boulder — until the raised, curling trunk and the great ears give him
away. Warm low sunlight rakes in from the side behind him, backlighting the mist
and the fine dust around his feet into a glowing haze and rim-lighting the ridge of
his back and the edges of his ears. Bare golden trees and blue-grey bush recede into
mist behind him. Utterly still, monumental, quietly thrilling — the payoff of the
early start. Natural true colour, soft directional dawn light, shallow-to-medium
depth of field keeping the elephant crisp against a dissolving misty background. No
text, no people, no faces.

---

## Reuse (do **not** generate) — existing library shots carry the rest

- The road, charcoal → apricot → `img.lowveldSunriseRoad` (the road to Phabeni at dawn).
- The gate / the boom → `img.krugerEntranceGate` (a car at a Kruger-style entrance boom).
- The golden-hour plains → `img.krugerWinterWaterhole` (dry-dawn waterhole, elephants, mist).
- The coffee-and-rusks stop → `img.krugerPicnicCoffee` (thermos and enamel cup in the park).
- Spare / seasonal note → `img.kruger` (elephant at a waterhole), `img.impalaLambingSummer`.
