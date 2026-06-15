# Panorama Route guide — image generation prompts

Five dedicated scene shots for `/blog/panorama-route-from-hazyview`, one per
attraction, so the guide never reuses a Kanaan landscape that already appears
on another page.

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
> natural light, rich but true-to-life colour, high dynamic range, crisp dry
> South African winter air. Authentic Mpumalanga / Drakensberg-escarpment
> scenery. No text, no captions, no watermark, no logos. Any people are small,
> incidental and seen from behind — no recognisable faces.

---

## 1. `panorama-gods-window` — hero (16:9, wide)

A breathtaking wide cinematic view from God's Window on the Panorama Route,
Mpumalanga, in early-morning winter light. The Drakensberg escarpment drops
almost a kilometre to the green Lowveld far below; layered forested ridges
recede into soft blue haze toward the horizon, the faint silhouette of distant
mountains beyond. Low golden sun raking across the cliff faces, a few wisps of
mist sitting in the valley folds. Foreground of rugged rock and indigenous
fynbos at the cliff edge. No people. Ultra-wide, epic, serene.

## 2. `wonder-view` — God's Window spotlight (3:2 landscape)

A quiet cliff-edge viewpoint (Wonder View) on the Panorama Route escarpment. A
simple weathered metal safety railing runs along the very edge of a sheer drop;
one lone traveller in a warm jacket stands at the railing, seen from behind and
small in the frame, gazing out over the vast hazy Lowveld far below. Clear
early-winter morning light, indigenous rock and low fynbos in the foreground,
an immense layered green valley receding into haze beyond. Calm, uncrowded,
contemplative mood.

## 3. `panorama-mac-mac-falls` — waterfalls spotlight (3:2 landscape)

A tall waterfall near Sabie on the Panorama Route — a clean white ribbon of
water (a slender double cascade) plunging down a dark, wet rock face into a
deep, lush green forested amphitheatre. Indigenous trees, tree ferns and moss
frame the gorge; fine mist drifts at the base where the water hits the pool. A
small wooden viewing deck off to one side gives a sense of scale. Soft
overcast-bright light, vivid winter-green vegetation.

## 4. `graskop-gorge-lift` — gorge lift spotlight (16:9 landscape)

Inside the Graskop Gorge — a network of elevated timber-and-steel suspended
boardwalks and a swing bridge threading through dense indigenous Afromontane
rainforest on the gorge floor. Tall moss-covered trees, ferns and dripping
greenery, dappled emerald light filtering through the canopy, a thin curl of
mist. In the background, the glass viewing lift descends the sheer cliff face.
Lush, atmospheric, immersive — looking along the walkway into the forest.

## 5. `bourkes-luck-potholes` — potholes spotlight (16:9 landscape)

Bourke's Luck Potholes on the Panorama Route — deep, smooth, honey-and-ochre
coloured rock cylinders carved by swirling water where the Treur and Blyde
rivers meet. Turquoise-green pools sit in the rounded hollows; a small
stone-and-steel footbridge arcs across the rocky gorge. Bright, clear midday
winter light brings out the vivid mineral colours in the sculpted rock. Crisp,
sculptural, geological.
