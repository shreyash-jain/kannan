# Blog 10 — "Accommodation near Kruger National Park" — image prompts

> **STATUS (2026-07-27): all five generated, uploaded and live in the post.** Every render
> came back **square (1024×1024)**, so each slot in `src/lib/images.ts` uses
> `c_pad,ar_16:9,b_gen_fill` rather than `c_fill` — see step 5 below. Slots:
> `stayNearKrugerArrival` (hero), `krugerRestCampDusk`, `hazyviewBaseAerial`,
> `predawnKitchenetteCoffee`, `farmBraaiMixedGroup`. The rooms, the kitchenette, the
> camping ground and the pool remain **real Kanaan photographs** in the body.
>
> Two artefacts to know about if these are ever regenerated: the arrival frame has an
> illegible squiggle where a wall sign would be (plus a nonsense number plate), and the
> pre-dawn kitchen frame carries a legible "VORTEX" on the binocular strap and gibberish
> text on the map and mugs. All are small at display size; add "no signage, no number
> plates, no brand names on equipment" to the prompt to avoid them next time.

The where-to-stay guide ships **complete today on real Kanaan photography** — the hero is
the real `lodge-veranda` frame cropped to 16:9 (`img.stayNearKrugerHero`), and the body
runs on `img.lodgeRoom`, `img.lodgeKitchen`, `img.campingGround` and `img.poolSunset`.
That is deliberate: the whole argument of this post is *"here is an honest, affordable,
real place to sleep half an hour from the gate"*, so the same honesty logic as the cost
and food guides applies — **real photos carry the real farm.**

So these five frames are **optional**. Three of them (2, 3 and 4) cover scenes no on-site
camera can capture — inside a Kruger rest camp, the region from the air, a pre-dawn
kitchen at 4:45am — and are the strongest candidates. Prompts 1 and 5 are only worth
generating if a real photograph never materialises; if Anneli can send a real arrival
shot or a real braai evening, **use hers instead**.

All five are **landscape 16:9**, photographic, warm South African Lowveld light, **no
text, no logos, no watermarks**, and **no identifiable faces** (shoot from behind, in
silhouette, or soft focus). Honest and lived-in, not a styled brochure.

## How to add one once generated

1. Save as `public/images/<public_id>.jpg` (use the id in each heading below).
2. Run `scripts/upload-to-cloudinary.py`.
3. Add a slot to `src/lib/images.ts`, e.g.
   `krugerBaseArrival: { src: cldImage("stay-near-kruger-arrival", "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920"), alt: "…", width: 1920, height: 1080 }`.
4. Reference it in `src/app/blog/accommodation-near-kruger-national-park/page.tsx` in
   place of the figure it replaces, and write a true, descriptive `alt`.
5. If a square (1:1) source is all the generator gives you, use
   `f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920` rather than `c_fill` — generative-fill
   widens the frame instead of cropping the subject away (same treatment as
   `underMangoTreesHero` and `wedding.krugerHero`).

---

## 1. Hero — arriving at your base · `stay-near-kruger-arrival` (16:9)

> Late golden-hour arrival at a modest, well-kept guest farm cottage in the South African
> Lowveld near Hazyview. A dusty hire car parked on a brick-paved patio in front of a
> whitewashed unit with a wooden-beamed veranda and a built-in braai, a suitcase and a
> cooler box just set down beside the open boot, bougainvillea against the wall. Beyond the
> unit, mown grass gives way to green bushveld and the hazy blue Drakensberg escarpment in
> the far distance. Unpretentious and welcoming — a real working farm, not a luxury lodge.
> Photographic, warm low sun, no people, no text. Landscape 16:9.

## 2. Inside the park, or just outside it — `kruger-rest-camp-dusk` (16:9)

> Dusk inside a Kruger-style national-park rest camp in South Africa — a few round
> thatched rondavels on mown grass, warm lamplight in one window, the tall perimeter game
> fence running along the edge of the frame and open golden bushveld stretching away into
> blue evening haze beyond it. A single camp chair beside a braai stand in the foreground.
> Quiet, atmospheric, slightly institutional — the appeal *and* the limits of sleeping
> inside the park. Photographic, no people, no text, no signage. Landscape 16:9.

## 3. Why Hazyview works — the base between two worlds · `hazyview-base-aerial` (16:9)

> A high, wide aerial view over the Hazyview area of Mpumalanga, South Africa, in clear
> late-afternoon light. In the foreground, green banana, mango and macadamia orchards and
> scattered farmsteads on rolling hills; a tarred road threading through them toward flat
> golden bushveld opening out on the right-hand horizon; the tall forested wall of the
> Drakensberg escarpment rising on the left, layered blue ridges behind it. One valley,
> park on one side and mountains on the other. Photographic drone perspective, long
> shadows, no text, no map labels, no aircraft. Landscape 16:9.

## 4. The 4:45am kitchenette — `predawn-kitchenette-coffee` (16:9)

> The inside of a small self-catering kitchenette in a farm lodge unit before dawn, lit
> only by a single warm lamp. Steam rising from a kettle on a two-plate hob, coffee being
> poured into a stainless travel thermos, a set of car keys, binoculars and a folded park
> map on the counter beside it. The window above is still black, with the very first cold
> blue-grey light just showing at the bottom of the sky. Quiet, purposeful, the morning of
> a game drive. Photographic, close, shallow depth of field, hands only if any (no faces),
> no text, no branding. Landscape 16:9.

## 5. One farm, every kind of traveller — `farm-braai-mixed-group` (16:9)

> An evening braai on the lawn of a Lowveld guest farm under enormous old mango trees,
> last blue light in the sky. Coals glowing in a simple braai stand, a long mismatched
> table with camp chairs and a few plastic garden chairs pulled up to it, a family's
> lodge-unit door lit warm on one side and a couple of backpackers' tents pitched in the
> dappled shade on the other, a dusty overland vehicle parked beyond. People present only
> as soft dark shapes at a respectful distance. Sociable, unpretentious, everyone in one
> place. Photographic, faces not identifiable, no text, no logos. Landscape 16:9.
