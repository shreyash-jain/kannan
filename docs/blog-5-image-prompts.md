# Cost / booking-closer guide (Blog 5) — image generation prompts

Four dedicated **off-farm scene** shots for
`/blog/cost-of-a-kruger-lowveld-week-2026`, so the cost guide has its own visual
identity instead of borrowing frames from Blogs 1–4. Each was distinctness-checked
against the existing library so none is a near-duplicate.

> **The value/closing beats stay REAL Kanaan photos — never AI.** The lodge
> family room (`img.lodgeFamilyTwin`), the self-catering kitchenette
> (`img.lodgeKitchen`) and the pool at sunset (`img.poolSunset`) carry the
> "here's the actual R250 bed" argument. Faking the farm on the very blog that
> asks the reader to trust the numbers would undermine it — and breaks the
> project's never-fake-the-farm rule.

## How to use

1. Generate each image in Gemini (Imagen / "Nano Banana") using the **shared
   style line + the per-image prompt** below.
2. Save the result as `public/images/<public_id>.jpg` — the filename **must**
   match the `public_id` exactly.
3. Run the uploader: `python scripts/upload-to-cloudinary.py`
4. Done — `src/lib/images.ts` already points at these public_ids.

## Shared style line (prepend to every prompt)

> Photorealistic travel/landscape photograph, shot on a full-frame camera,
> natural light, rich but true-to-life colour, high dynamic range, crisp South
> African Lowveld / Mpumalanga light. No text, no captions, no watermark, no
> logos. Any people are small, incidental and seen from behind or in soft
> profile — no recognisable faces. Any animals are at a respectful, natural
> distance.

---

## 1. `lowveld-week-cost-hero` — hero (16:9, wide)

Wide, aspirational golden-hour view from the edge of a guest-farm veranda looking
out over the vast green Lowveld near Hazyview. In the lower foreground a relaxed
couple stand close together, seen entirely from behind — one with an arm loosely
around the other — resting their hands on a low timber-and-stone veranda rail; a
thatched-roof eave casts shade across the top corner and a couple of potted plants
and fruit-laden trees anchor the near edge as a lived-in "farm base." Beyond them
the land opens out abundantly: lush emerald farmland and bushveld, the glint of a
small dam, scattered acacia and broad green canopies rolling for kilometres toward
the layered blue ridges of the Drakensberg escarpment on the horizon. Warm low sun
rakes from the side, rimming the couple's silhouettes and lighting a soft golden
haze and a few high pink-gold clouds, long calm shadows stretching across the
grass. Expansive, unhurried and full of promise, with depth from the intimate
veranda foreground to the far escarpment, rich true greens and warm gold — a calm,
friendly sky, not a storm. Shot wide-angle with deep depth of field, serene,
cinematic. No faces.

## 2. `n4-roadtrip-arrival` — getting here (16:9)

A family SUV or estate car, dusty and clearly packed for a week away — a loaded
roof box or bicycles on a roof rack, bags and a cooler box visible through the rear
glass — seen from behind and slightly to one side as it rolls along an open,
sweeping two-lane highway climbing through rolling green Mpumalanga hills of
macadamia and sugarcane country. The tar road curves invitingly toward distant blue
Drakensberg ridges under a big bright mid-morning sky with a few high cumulus
clouds; roadside grass, a weathered farm-gate post and a cluster of indigenous trees
frame the verge. In the mid-ground the car is just slowing to turn off onto a
red-earth dirt farm track that peels away to the right between fence posts, a faint
plume of dust rising behind the rear wheels. Clean, high-key, warm light; saturated
but true colour — emerald hills, terracotta road, deep-blue distance — the car small
enough in the wide frame that no faces or number plates read. Relaxed eye-level,
deep focus, a sense of motion and road-trip arrival. No text, no logos, no faces.

## 3. `kruger-entrance-gate` — what the gate charges (3:2)

A South African national-park entrance gate at a Kruger-style boom barrier in soft,
warm morning light: a low thatch-roofed gate building of warm face-brick and dark
timber sits to one side, with a raised red-and-white striped boom pole spanning a
single-lane tar entry road. A dusty SUV waits at the boom, seen from behind and
three-quarters, brake lights faintly glowing, the driver's window down as if handing
a card to a uniformed gate attendant who is small and turned away inside the
open-sided gatehouse. Sand-coloured paving, a couple of low aloes and a knobthorn
tree frame the entrance; beyond the raised boom the tar road curves away into
golden, lightly dust-hazed bushveld. Gentle low sun from the left casts soft long
shadows across the road and warm highlights on the thatch and brickwork. Calm,
anticipatory "arriving at the threshold" mood, clean depth of field keeping the gate
building and boom crisp. Absolutely no readable signage text, no logos, no
recognisable faces.

## 4. `panorama-pinnacle-rock` — the Panorama "cheap day" (16:9)

A single dramatic free-standing quartzite rock spire — the Pinnacle Rock near
Graskop on the Panorama Route — rising as a sheer, fluted column straight out of a
deep, densely forested gorge, completely surrounded by Afromontane indigenous trees
cloaking the steep slopes below it. The tower stands isolated and vertical against a
backdrop of layered green escarpment ridges receding into soft blue Lowveld haze, a
thin seasonal waterfall threading down the far gorge wall in the distance. Frame it
from a slightly elevated viewpoint so the spire reads as a lone monolith separated
from the cliff by a plunging gully of forest on either side, emphasising its height
and isolation. Crisp, clear late-morning winter light rakes across the textured
grey-gold rock, picking out the vertical quartzite striations, while cool shadow
fills the gorge below. In the lower foreground a short section of weathered safety
railing and one or two tiny incidental visitors seen from behind give a sense of the
enormous scale. Serene, geological, vertiginous. No recognisable faces.

---

## Reuse (do **not** generate) — real Kanaan photos

- **Where-you-sleep / value beat** → `img.lodgeFamilyTwin` (the real family room
  behind the R250 figure) and `img.lodgeKitchen` (the self-catering kitchenette).
- **Closing beat** → `img.poolSunset` (the real pool at sunset).
