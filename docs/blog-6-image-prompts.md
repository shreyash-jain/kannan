# "Under the Mango Trees" story (Blog 6) — image generation prompt

**One dedicated hero** for `/blog/under-the-mango-trees`, so this flagship,
entity-defining founder story has its own signature frame instead of reusing the
home-page / *The Discovery* sunset (`mango-sunset`). The **body of the post stays
100% real Kanaan photography** — this is the one story no competitor can copy, so
faking the grove would defeat it. Only the hero is generated, and only because it
carries the OpenGraph / social / search thumbnail for the whole piece.

> Distinctness-checked against the existing library: `mango-sunset` is the sun
> dropping *behind* the hills through the grove; `camping-mango-avenue` is the tree
> avenue *over the camping lawn* with cabins beyond; `mango-detail` is a close view
> *through* the leaves to the valley. This hero is different again: an immersive
> look *down the nave of the avenue* into golden light, with the one detail the
> whole post turns on — a single empty chair waiting in the shade.

## How to use

1. Generate in Gemini (Imagen / "Nano Banana") using the **shared style line +
   the prompt below**.
2. Save the result as `public/images/under-mango-trees-hero.jpg` — the filename
   **must** match the `public_id` exactly.
3. Run the uploader: `python scripts/upload-to-cloudinary.py`
4. Flip the placeholder: in `src/lib/images.ts`, change the `underMangoTreesHero`
   `public_id` from `"mango-sunset"` to `"under-mango-trees-hero"`. (Until then the
   real sunset shows, so the page is never broken.)

## Shared style line (prepend to the prompt)

> Photorealistic travel/landscape photograph, shot on a full-frame camera,
> natural light, rich but true-to-life colour, high dynamic range, crisp South
> African Lowveld / Mpumalanga light. No text, no captions, no watermark, no
> logos. Any people are small, incidental and seen from behind or in soft
> profile — no recognisable faces.

---

## `under-mango-trees-hero` — hero (16:9, wide)

A slow, cinematic golden-hour view looking straight down the long avenue of a
mature, forty-year-old mango grove on a South African Lowveld guest farm. The old
trees stand in two patient rows and their broad, dark-green canopies arch and meet
overhead like the nave of a cathedral, so the eye is drawn down a receding tunnel
of dappled shade toward a warm, glowing opening of low golden sunlight at the far
end. Long shafts of late-afternoon sun rake between the trunks and scatter coins of
light across the mown grass and the deep leaf-litter. In the mid-foreground, off to
one side in a soft pool of shade, sits a single simple weathered wooden chair,
empty, angled invitingly toward the light — the quiet emotional anchor of the frame
("come sit in the shade someone planted for you"). The gnarled, characterful trunks
show the trees' age; a faint haze of golden dust and pollen hangs in the warm air.
Far in the background, past the end of the avenue, a glimpse of open green Lowveld
valley and soft blue escarpment ridges. Deep depth of field, wide-angle, serene,
reverent, unhurried; rich true greens and warm amber gold, long calm shadows. No
people, no text, no logos.

---

## Reuse (do **not** generate) — real Kanaan photos carry the whole body

- Mango-grove B-roll → `video.mangoGrove` (the real walk-through clip).
- The avenue of trees → `img.campingAvenue`. Grove detail → `img.pillows`.
- The wedding beneath the canopy → `wedding.ceremonyAlt`.
- The fire under the grove → `img.campfire`. Tents in the shade → `img.campingTents`.
