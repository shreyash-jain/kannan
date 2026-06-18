# Blog 3 — build brief & handoff (Seasonal Almanac)

**Status:** researched + verified, ready to build. Nothing committed yet for Blog 3.
**Generated:** 2026-06-18, from a 10-agent research workflow (climate · wildlife · Panorama · events/holidays · traveller-fit · SEO → adversarial verification → synthesis). Sources at the bottom.

> New-session quick start: copy [Blog 2](../src/app/blog/panorama-route-from-hazyview/page.tsx) as the template, paste the month data + FAQs below, generate the 6 images, register in the blog index, `tsc` + `build`, then commit on a branch. Everything you need is in this file. Project conventions live in the auto-memory (`MEMORY.md`).

---

## 1. The brief

| Field | Value |
|---|---|
| **Working title** | The Lowveld Almanac: When to Visit Kruger & Hazyview, Month by Month |
| **Slug** | `when-to-visit-kruger-hazyview-month-by-month` |
| **Route** | `/blog/when-to-visit-kruger-hazyview-month-by-month` |
| **Category** | `guide` (the 🌦️ Seasonal cornerstone — the third Planning-segment guide) |
| **Primary keyword** | *best time to visit Kruger National Park (month by month)* |
| **Reading time** | ~11 min |
| **Date** | set `datePublished` to the actual publish date when you build |

**Secondary / long-tail keywords:** best time to visit Hazyview · Kruger month by month · best time to visit Kruger with kids · cheapest time to visit Kruger / low season · Kruger green season vs dry season · Kruger in winter (May–Sept) · Kruger weather December/January · best time to drive the Panorama Route · Kruger weather by month (temp & rainfall) · Kruger malaria season low-risk months · Kruger + Panorama Route in one trip when to go · Lowveld Hazyview weather by month · best month for birding (summer migrants) · Kruger gate opening times by season · best time to avoid crowds (SA school holidays 2026).

**Reader:** A first-time-to-the-Lowveld traveller — usually a South African or overseas family, couple or keen photographer — planning a *do-both* week of Kruger safari **and** the Panorama Route. They've read the generic "best time to visit Kruger" pages and want one honest, base-centric, 2026-practical reference that tells them which month actually suits *them*, what the weather and crowds will really be like *from Hazyview* (not vaguely "the park"), and how to find value outside the two crowded peaks.

**Differentiation angle (why this ranks where operators don't) — three wedges:**
1. **Base-centric, real numbers.** Everything measured from Hazyview/Kanaan (~600 m): Hazyview's own highs/lows and its wet-foot-of-the-escarpment rainfall (~800–900 mm/yr, wettest Dec–Feb, near-dry Jun–Jul) vs the hotter, drier Kruger interior at Skukuza (summer highs ~33 °C, ~550 mm/yr); the honest frost fact (**none at Hazyview** — only on the high escarpment); the closest gate (Phabeni, ~15 min) folded into each month.
2. **Whole-week, not just game drives.** Every month answers Kruger **and** Panorama visibility/waterfall flow **and** on-farm life (pool weather, the mango grove, braai evenings) — a *deepening* of, not a repeat of, the quick 3-card season grids already in Blog 1 (Kruger wildlife) and Blog 2 (Panorama views).
3. **Honest 2026 value.** Name the exact SA school-holiday windows to book around, the genuinely cheaper/quieter weeks, the shifting gate times, the low-malaria winter window — then make the warm farm-owner case for the underrated **green season (Jan–Mar)** that no operator page champions, ending with a clear "best month for *you*" verdict (from R250 pps).

**Draft excerpt (Anneli's voice — for the index card + meta description):**
> *"Here is the thing we tell guests over the breakfast table, and we mean it: there is no bad month in the Lowveld, only different kinds of good — and the months everyone overlooks are often the ones we'd choose for ourselves. The whole world tells you to come in July for the big cats, and they're not wrong; but July is also when the rates climb and the gates queue. So before you book around someone else's calendar, let us walk you honestly through all twelve of ours — Kruger, the Panorama Route and life on the farm — and find the month that's really yours."*

---

## 2. The four seasons at a glance (use for a `NumberedList variant="grid"`, 4 cards)

1. **Green Summer · Nov–Mar** — *Lush, hot and quietly the best value — the months nobody books and we secretly love.* First rains turn the Lowveld emerald under thunderstorm skies. Hazyview ~27–28 °C days / sticky 17–18 °C nights; Kruger interior 33 °C+. Impala lamb in their thousands from late Nov, summer migrants flood in, falls run to thunder. Trade-offs: thick bush scatters game (patience), malaria risk highest, Panorama long-views need an early start. Best for birders, photographers, value-seekers — outside the mid-Dec→mid-Jan festive peak, the quietest, cheapest, greenest park of the year.
2. **Autumn Shoulder · Apr–May** — *The connoisseur's window — easy game viewing, glass-clear escarpment air, soft prices.* Rains taper, bush thins. Hazyview 24–26 °C days / crisp 11–15 °C mornings; humidity & malaria fall away. Impala rut roars Apr→May peak, water concentrates game, God's Window earns its name. Aside from Easter (3–6 Apr 2026), low crowds, soft rates — arguably the best all-round value before July.
3. **Dry Winter · Jun–Sep** — *Classic Big Five country — the easiest, most reliable game viewing, and the clearest views.* Cold dawns (Hazyview ~8 °C) → mild sunny 22–27 °C days, negligible rain. Bare bush pins game to rivers/waterholes; big-cat sightings peak; wild dogs den ~May–Sep. Jun–Jul coldest & busiest (winter school holidays); Aug–Sep many guides' favourite. Clearest Panorama views of the year. Lowest malaria. Trade-off: brown, dusty, cold dawns.
4. **Spring Build-up · Oct** — *The hot, dry crescendo — intense waterhole action just before the rains break.* Hottest, driest run-up. Hazyview ~27 °C, first humidity & late thunderstorms. Game still packed at the last water (drive early); first impala lambs & migrants arrive. Malaria risk climbing. Dust-gold light, building storms, green-up beginning.

---

## 3. The month-by-month almanac (the heart of the piece)

> **Render suggestion:** a custom inline grid of 12 month-cards (like Blog 2's FAQ block — inline JSX, not a locked component), breaking out to `max-w-5xl`. Each card: **Month** (display heading) · *glance* one-liner · then micro-rows **Weather / Wildlife / Panorama / Crowds & value / Best for**. Interleave 2–3 spotlight images between season groups. All figures below are verified (rounded climatological averages; gate times are SANParks entrance-gate times that shift by season — tell readers to confirm before a dawn start).

**January** — *Peak green season: lush, hot, stormy; quiet once the early-Jan festive rush clears.*
- Weather: ~28 °C high / ~18 °C low, ~150 mm (wettest month) as afternoon storms; humidity ~75–80%. Skukuza 33 °C+. No frost.
- Wildlife: Fair–good. Thick bush + full waterholes scatter game, but Nov's impala lambs everywhere (draw wild dogs & lions). Peak birding — migrants in. Gates 05:30–18:30.
- Panorama: Poorest long-view clarity (misty by midday — go at sunrise); waterfalls near thunderous peak, canyon emerald.
- Crowds & value: Festive peak holds until schools return (Term 1 starts 14 Jan 2026), then prices fall sharply. Late Jan = one of the cheapest, quietest windows.
- Best for: Birders, green-season photographers, value-seekers. High-malaria month — take precautions.

**February** — *The greenest, stickiest, best-value month — superb birding, patient game viewing.*
- Weather: ~28 °C / ~18 °C, ~150 mm, highest humidity (~79%). Skukuza ~33 °C. No frost.
- Wildlife: Fair. Greenest/thickest — sightings take patience. Excellent birding (migrants in breeding plumage, weavers nesting). Start of malaria peak-risk. Gates 05:30–18:30.
- Panorama: Mostly misty mornings (go early); waterfalls at maximum flow.
- Crowds & value: Low season, genuinely the cheapest stretch — lodges often discount ~25%.
- Best for: Birders, photographers, budget travellers. High malaria risk.

**March** — *The turn: rains taper, bush starts to open, comfort returns. A lovely transition month.*
- Weather: ~27 °C / ~17 °C, rain dropping to ~90–100 mm; humidity easing. No frost.
- Wildlife: Good & improving. Bush thinning; kudu & buffalo breeding peak (big herds, rutting bulls). Last migrants present. Gates 05:30–18:00.
- Panorama: Clarity improving as mist eases + falls still strong post-rain → one of the best all-round Panorama months.
- Crowds & value: Quiet/good value until schools break (Term 1 ends 27 Mar); week after is calm before Easter. Green-season rates.
- Best for: Green-season photographers, waterfall-chasers, value travellers. Malaria still present.

**April** — *Autumn arrives and the Lowveld turns gentle — one of the most comfortable, rewarding months.*
- Weather: ~25–26 °C / ~15–16 °C, rain ~45–66 mm (dry season begins; skies clear). No frost.
- Wildlife: Very good — standout shoulder month. Impala rut begins (most intense in the south). Cooler/drier, thinning cover = easier sightings. Last migrants depart; malaria starts dropping. Gates 06:00–18:00 (one source 17:30 — confirm).
- Panorama: **Excellent — among the best of the year**: clear long views *and* falls still strong. The rare both-at-once window.
- Crowds & value: Sharp spike over Easter (Good Fri 3 Apr – Family Day 6 Apr 2026) and the Term 1–2 break (28 Mar–7 Apr) — book early. Otherwise quiet, good value.
- Best for: Couples & families wanting warm days / cool evenings / easy sightings; anyone doing **both** Kruger + Panorama.

**May** — *Early winter and, for our money, the best all-round value month of the year.*
- Weather: ~24–25 °C / chilly ~11 °C nights, low rain (~20 mm), reliably blue skies. Frost essentially unknown at the farm.
- Wildlife: Excellent. Impala rut at its loud peak; bush thins fast, water concentrating game. **Wild dogs begin denning (~May–Sep)** — elusive predators far easier to find. Low/dropping malaria. Gates 06:00–17:30.
- Panorama: Very clear (cold nights → glass-clear air); last strong month for waterfall flow before winter thins them.
- Crowds & value: **Arguably the best value of the year** — Easter over, July peak not begun, conditions already excellent. Low crowds, soft pricing.
- Best for: Honeymooners, couples, value travellers, term-time families.

**June** — *Midwinter: the driest, clearest time of year and the start of classic Big Five season.*
- Weather: ~22–23 °C days / cold ~8 °C nights (Skukuza ~6 °C), minimal rain (~13 mm, driest month), low humidity. Frost only on the higher escarpment, not Hazyview.
- Wildlife: Excellent. Game congregates at remaining water — reliable, concentrated; leopard/lion peak in bare bush; wild-dog denning continues. Low malaria. Gates 06:00–17:30. Pack warm layers for the dark gate start.
- Panorama: **Clearest, driest month of all — the best long views of the year.** Forest-fed falls hold up; overall flow declining.
- Crowds & value: Demand climbs toward winter holidays (Term 2 ends 26 Jun; the 15 Jun special + 16 Jun Youth Day cluster = early long-weekend bump). Mid-term weekdays calmer.
- Best for: Big-cat seekers, first-timers wanting the easiest sightings, clear-view chasers. Dress for cold dawns.

**July** — *The coldest month and the heart of dry-season peak — prime Big Five, busiest gates.*
- Weather: cold pre-dawn, mild sunny days. ~22–23 °C / coldest ~8 °C nights (Skukuza ~6 °C), negligible rain (~10–16 mm), exceptionally clear air. No meaningful frost in the Lowveld.
- Wildlife: Excellent — one of the very best months. Thinnest bush + scarce water = hugely rewarding elephant/buffalo/lion/leopard, esp. along the Sabie & permanent rivers. Wild dogs still denning. Low malaria. Gates 06:00–17:30.
- Panorama: Second-best clarity of the year; falls falling further — come for views, not falls.
- Crowds & value: **Peak.** Winter school holiday (27 Jun–20 Jul) + MacMac Ultra (1–5 Jul 2026) + Innibos Arts Festival (2–5 Jul, Mbombela) book out lodging. Book well ahead.
- Best for: Big-cat seekers & Big Five first-timers tied to the winter holiday who don't mind sharing the roads. Warm layers essential.

**August** — *Late winter: water at its scarcest, game concentrations highest, and quieter again.*
- Weather: warming but dry. ~24–25 °C / ~10 °C nights, low rain (~22 mm), clear skies. Late Aug brings first warm dusty days. No frost.
- Wildlife: Excellent. Very limited water → animals cluster predictably (superb for predators, elephant, big cats). Wild-dog pups emerging. Most open/dusty bush. Still low malaria. Gates 06:00–18:00.
- Panorama: Clear, though first spring haze can soften longest views; falls among the lowest of the year.
- Crowds & value: Quieter after July holidays, good value. Women's Day (Sun 9 Aug, observed Mon 10 Aug 2026) lifts that long weekend.
- Best for: Serious big-cat/Big Five seekers, photographers wanting peak concentrations with thinner crowds than July. Excellent winter value.

**September** — *Spring: many guides' single favourite month — scarce water, open bush, surging activity.*
- Weather: warming & dry. ~26–27 °C / ~13 °C nights, rain ticking up (~30–40 mm) with first late storms. Trees flush green; knobthorns flower. No frost.
- Wildlife: **Excellent — arguably the best of the year.** Last waterholes draw huge concentrations; bare bush = max visibility; predators highly active; first newborns appear late month. Malaria starts rising. Gates 06:00–18:00.
- Panorama: Clear but increasingly hazy; waterfalls at their weakest before the rains.
- Crowds & value: Moderate–high around Heritage Day (Thu 24 Sep 2026) + spring break (24 Sep–5 Oct). Term-time weekdays earlier = quiet & high-quality.
- Best for: The connoisseur's pick — couples, photographers, keen safari-goers wanting top dry-season viewing with milder mornings than midwinter.

**October** — *Hot, dry crescendo — intense waterhole action just before the rains break.*
- Weather: warming fast, often hot. ~26–27 °C / ~15 °C nights, rain ~45–65 mm (dramatic late-afternoon storms), first humidity returns. Skukuza hotter. No frost.
- Wildlife: Very good–excellent. Game packed at last water (drive early — fierce midday heat). First impala lambs drop toward month-end; first migrants arrive. Malaria climbing. Gates 05:30–18:00.
- Panorama: Transitional — cloud building, first storms, but falls begin recovering. Mornings can still be clear.
- Crowds & value: Spring break runs to 5 Oct; thereafter quiet, good shoulder value before the festive build-up.
- Best for: Heat-tolerant game-viewers/photographers wanting dust-gold light + intense waterhole sightings; early-birders. Dawn drives to beat the heat.

**November** — *Early summer — an underrated month: newborns everywhere, returning migrants, active predators.*
- Weather: rains establish. ~27 °C / warm ~16 °C nights, rain ~60–70 mm (afternoon storms; wetter datasets put it higher). Bush turning lush. No frost.
- Wildlife: Very good & underrated. The big synchronised **impala lambing pulse** floods the park with newborns → outstanding predator action (wild dogs feeding pups, lions); wildebeest & zebra calve. Migrants pour back (woodland kingfishers from mid-Nov). Bush still opening. Malaria precautions advised. Gates 05:30–18:30.
- Panorama: Wet mornings + afternoon mist (early start), but waterfalls strengthen fast → water over views.
- Crowds & value: Low-crowd, best-value shoulder before mid-Dec spike. One-off local-government **election holiday Wed 4 Nov 2026** = mid-week long-weekend bump.
- Best for: Couples, photographers, value travellers wanting greening bush, baby animals, dramatic skies — soft rates, quiet roads.

**December** — *Full summer: hot, humid, lush, full of young animals — the festive peak.*
- Weather: hot/humid/wet. ~28 °C / muggy ~17 °C nights; Skukuza 33 °C+. Among the wettest (~85–95 mm, higher on wetter datasets), frequent heavy storms, full rivers & falls. No frost.
- Wildlife: Good. Calving continues (impala, wildebeest, zebra young); excellent birding (all migrants breeding). Predators busy, but thick bush + full waterholes disperse game — drive early & slow. Higher malaria. Gates 05:30–18:30 (camp gates ~04:30).
- Panorama: Cloudiest/wettest — least reliable long views (first light); waterfalls very high, canyon greenest.
- Crowds & value: **Year's peak.** Festive holidays + Reconciliation Day (Wed 16 Dec), Christmas (Fri 25 Dec), Day of Goodwill (Sat 26 Dec 2026). Top rates — book 6–12 months ahead.
- Best for: Families tied to the festive break, birders, green-scenery photographers who accept heat & crowds for lush drama & powerful waterfalls. Book very early.

---

## 4. FAQ section (render inline + wire into `faqLd` for FAQPage schema)

Use all 10 (verbatim or lightly trimmed). They target high-intent long-tail queries.

1. **What is the overall best time of year to visit Kruger from Hazyview?** — For most first-timers, the dry winter (~May–Sep) is the easiest, most reliable window: thin bush, game gathered at the few remaining water sources, clearest Panorama views, lowest malaria. Our honest favourite is the shoulder either side of the July crowd — **May or September** — same easy sightings, half the people, softer price.
2. **What is the cheapest time to visit Kruger, and which 2026 SA school-holiday weeks should we book around?** — Cheapest/quietest: late Jan→Feb→Mar green season + the shoulder weeks of May & Nov. The two peaks (mid-Dec→mid-Jan festive; late-Jun→20-Jul winter holiday) drive crowds & prices. 2026 windows to book around: Term 1 ends 27 Mar; Easter 3–6 Apr; winter break 27 Jun–20 Jul (with 15 Jun special + 16 Jun Youth Day); spring break 24 Sep–5 Oct; Term 4 ends 9 Dec into the festive peak. One-off: Wed 4 Nov 2026 election holiday. In-term mid-week stays are quietest — and basing at Kanaan from R250 pps keeps the whole week affordable.
3. **Best time to visit Kruger with young children?** — Dry winter, esp. Apr–early Jun and Sep: thin bush, animals at the water, quick sightings; crisp ~11 °C mornings → mild ~25 °C days; almost no rain to wash out a Panorama day; lowest malaria. The long winter school holiday (~late Jun–20 Jul 2026) is built around this season. From Kanaan the close Phabeni gate (~15 min) makes the dawn start manageable; pool & mango grove waiting after.
4. **Green season or dry season — the real difference for a first-time family?** — Almost opposite holidays. Dry winter (May–Sep): brown, dusty, cold at dawn, but open bush & easy game — classic Big Five, lowest malaria, clearest views. Green summer (Nov–Mar): emerald under storm skies, impala lambing, migrants in, falls thundering — but thick bush scatters game, hot/humid, malaria caution. First family chasing easy sightings → winter; birds/babies/lush/value → green season rewards patience.
5. **What's the weather like in Hazyview & the Lowveld each month?** — Hazyview (~600 m, wet foot of the escarpment): daytime highs steady ~22–23 °C midwinter → ~28 °C midsummer; nights swing ~18 °C summer → ~8 °C coldest July. Rain strongly seasonal (~800–900 mm/yr, wettest Jan/Feb/Dec ~95–155 mm, near-dry Jun–Jul <~15 mm). **No frost in the Hazyview Lowveld — only on the higher escarpment.** Kruger interior (Skukuza) hotter (~33 °C) & drier.
6. **When is malaria a risk, and which months are lowest?** — Low-risk area, not malaria-free; risk follows warmth & rain. Lowest in dry winter (~May–Sep); highest warm/wet months (~Nov–Apr, peaking Feb–May). Bite avoidance year-round; ask your doctor about prophylaxis, esp. green-season, young children, pregnancy.
7. **Best month to do both Kruger and the Panorama Route in one trip?** — **April & May.** Autumn rains have eased enough for clear escarpment long views, yet falls still run strong on leftover rain — the rare both-at-once window — while Kruger's bush thins and game concentrates. Dry winter (Jun–Sep) still gives superb game + clearest views (thinner falls). Always drive the escarpment in the morning, before the afternoon mist climbs.
8. **What time do the Kruger gates open & close, and does it change through the year?** — Yes. Guide: Nov–Mar open ~05:30 (close 18:00–18:30); Apr & Aug–Oct open 06:00 or 05:30 (close 18:00); May–Jul open 06:00 (close 17:30). Entrance-gate times (camp gates differ — as early as 04:30 midsummer); SANParks can change without notice, so confirm for your month. From Kanaan, Phabeni ~15 min — comfortably first in the queue.
9. **Quietest month to avoid the crowds?** — **February** — warm, wet, very green shoulder after the festive crowds clear; even upmarket lodges discount; empty roads. Trade-off: hot/humid, harder big-game spotting. For easy winter game viewing without winter crowds → May (after Easter, before July) or term-time September weekdays.
10. **Best time for birdwatching?** — **Green summer, Nov–Mar**, peaking as migrants arrive through late Sep–Oct. ~500 species (half resident year-round); active list tops 400 in the wet season as migrants pour in — woodland kingfishers (mid-Nov→Mar), cuckoos, bee-eaters, storks; summer rains draw herons/storks/egrets; residents in breeding plumage. The birder's calendar inverts the big-cat seeker's. Escarpment forests around Graskop add forest/highland species within an easy drive.

---

## 5. Suggested block-by-block outline (locked grammar — see `src/components/blog/Blocks.tsx`)

> Reminder: prose lives in `<div className="prose-kanaan mx-auto max-w-prose">`; **StatGrid / NumberedList / the month grid / figures break OUT to `max-w-5xl` and must sit OUTSIDE the prose div.**

1. `JsonLd` ×2 — `articleLd({...})` **and** `faqLd(faqs)`. `Breadcrumbs` (Home › Journal & Guides › this).
2. `BlogHero` — image `lowveld-green-season`; eyebrow `"Guide · Seasonal Almanac"`; title e.g. *"When to come, month by month."*; byline Anneli & Matthew; ~11 min.
3. `TLDR` (4–5): no bad month, only different goods · dry winter (May–Sep) = easiest game + clearest views + lowest malaria · green summer (Nov–Mar) = best value + birds + thundering falls · **Apr–May & Sep are the sweet spots** · book around the 2026 SA school holidays (peaks: mid-Dec→mid-Jan, 27 Jun–20 Jul).
4. Intro prose (Anneli voice — the "no bad month" thesis + the do-both-week framing).
5. `H2` "The four seasons, at a glance" → `NumberedList variant="grid"` (the 4 seasons from §2).
6. Inline image — `kruger-winter-waterhole`.
7. `H2` "When to come, and for what — month by month" → **the 12 month-cards** (custom inline grid, `max-w-5xl`, §3 data).
8. Inline image — `panorama-clear-winter-view` (place ~mid-grid).
9. `H2` "The case for the green season (the months nobody books)" → prose making the honest value argument; `Callout` with the quotable line (e.g. *"There is no bad month in the Lowveld — only different kinds of good."*). Images: `sabie-waterfall-full-flow` + `impala-lambing-summer`.
10. `H2` "Booking around the 2026 calendar" → `NumberedList` of the peak windows to book around + the genuinely-quiet value weeks (use the 2026 calendar in §7).
11. `H2` "So — when should *you* come?" → `NumberedList variant="grid"` mapping traveller → month: **Big-cat seekers** Jun–Sep · **First-time families** Apr–early Jun & Sep (school-tied: winter holiday) · **Birders** Nov–Mar · **Photographers** green season + Sep light · **Couples/honeymoon** May & Sep · **Budget/value** Feb + May & Nov.
12. FAQ section (§4) — inline, wired to `faqLd`.
13. Inline image — `farm-pool-mango-grove-evening` **→ reuse the REAL `img.poolSunset` or `img.heroFarm` instead of generating this one** (we have real farm photos; don't fake the farm).
14. `ClosingBlock` ("The month that's yours") + `— Anneli & Matthew` signoff.
15. `Sources` (§8). `WhatsAppCTA` (`pageKey="theLand"`, button e.g. *"Find your month on WhatsApp"*).
16. Related cards → Kruger from Hazyview + Panorama Route from Hazyview. Then `<CTA />`.

---

## 6. Images — 6 dedicated shots (pipeline: save `public/images/<public_id>.jpg` → `python scripts/upload-to-cloudinary.py`)

Add slots to `src/lib/images.ts`. **For the farm beat, reuse the real `img.poolSunset` / `img.heroFarm` — don't generate `farm-pool-mango-grove-evening`.** Generate the other 5. Prepend the shared style line from [docs/panorama-image-prompts.md](./panorama-image-prompts.md) to keep the set cohesive.

- **`lowveld-green-season`** (hero, 16:9) — *Wide green-summer Lowveld near Hazyview, mid-afternoon. Emerald bushveld & tall grass to low blue hills, a towering cumulonimbus building with shafts of light, glossy well-watered acacia/bushwillow, a full river catching light. Rich greens, storm-grey sky, golden pockets. No people/text. 35mm, crisp foreground.*
- **`kruger-winter-waterhole`** (3:2) — *Dry-winter (July) southern Kruger. A shrinking waterhole in open, bare, dusty bushveld, leafless trees, golden grass; elephants & a few zebra drinking in crisp early light, ground mist, breath visible. Muted dusty golds, pale-blue cold sky. Animals at respectful distance. Telephoto feel.*
- **`panorama-clear-winter-view`** (16:9) — *God's Window on a crisp clear winter morning. Sheer forested cliffs dropping ~1 km to hazy green Lowveld, layered blue ridges to the horizon, clean deep-blue sky. One or two tiny distant figures from behind for scale. Crystalline air. Wide-angle, deep DOF.* (NB: close to Blog 2's `panorama-gods-window` — make it visibly a *winter* frame, or just reuse `img.panoramaGodsWindow`.)
- **`sabie-waterfall-full-flow`** (3:2) — *A tall Panorama Route waterfall at full summer flow. Powerful white ribbon down a dark cliff into a green rainforest amphitheatre, mist off the plunge pool, dripping ferns & moss. Vivid wet greens, white spray. Slight motion blur on the water.* (Or reuse `img.macMacFalls`.)
- **`impala-lambing-summer`** (telephoto) — *Kruger, November. Impala with several wobbly newborn lambs in fresh green grass with wildflowers after first rains, soft side light, watchful ewe, blurred green background. Tender, fresh greens. Respectful distance.*
- *(farm)* — **reuse `img.poolSunset`** (real Kanaan pool at sunset) for the "comes home to the farm" beat.

---

## 7. 2026 calendar reference (for the crowds/value content — verified)

**SA public-school terms 2026:** Term 1 ~14 Jan–27 Mar · Term 2 ~8 Apr–26 Jun · **Winter break 27 Jun–20 Jul** · Term 3 21 Jul–23 Sep · **Spring break 24 Sep–5 Oct** · Term 4 6 Oct–9 Dec (Gauteng public; provinces vary ±1–2 days — confirm).
**Easter 2026:** Good Friday 3 Apr · Family Day (Easter Monday) 6 Apr.
**Key 2026 public holidays:** 1 Jan · Human Rights Day 21 Mar · Good Friday 3 Apr · Family Day 6 Apr · Freedom Day 27 Apr · Workers' Day 1 May · **Special school holiday Mon 15 Jun** + **Youth Day Tue 16 Jun** (long-weekend cluster) · Women's Day 9 Aug (observed Mon 10 Aug) · Heritage Day Thu 24 Sep · **one-off local-government election holiday Wed 4 Nov** · Day of Reconciliation Wed 16 Dec · Christmas Fri 25 Dec · Day of Goodwill Sat 26 Dec.
**Lowveld events:** MacMac Ultra (trail) ~1–5 Jul · Innibos Arts Festival (Mbombela) ~2–5 Jul · Lowveld/agricultural shows (confirm 2026 dates) · Perry's Bridge & Graskop markets (year-round weekends).
**Demand pattern:** peaks = mid-Dec→mid-Jan festive + 27 Jun–20 Jul winter holiday (+ Easter). Quiet/value = Feb (cheapest), May, Nov, and in-term mid-week weeks generally.

---

## 8. Sources (cite a trimmed set in the `Sources` block; verify live before relying on a figure)

SANParks — Kruger climate & rainfall · temps/rainfall averages (PDF) · malaria · entrance gates · rates. climatestotravel.com/skukuza · climate-data.org (Hazyview, Sabie) · weather-atlas / weather-and-climate (Hazyview). krugerpark.co.za gate times · elephantherd.co.za gate hours. safaribookings.com (best-time, climate) · wild-wings-safaris when-to-visit · go2africa when-to-go · rhinoafrica when-to-visit · krugergatehotel 2026 monthly guide. londolozi (impala rut) · getaway / birding.krugerpark.co.za (migrants & birding calendar). education.gov.za 2026 school calendar (PDF) · gov.za school calendar · thesouthafrican / businesstech 2026 term dates · officeholidays.com SA 2026. macmacultra.com · innibos.co.za · mpumalangashow.co.za · southafrica.net (Sabie) · mpumalanga.com.

---

## 9. Technical handoff (so the new session can build without re-discovery)

**Create:** `src/app/blog/when-to-visit-kruger-hazyview-month-by-month/page.tsx`. **Copy [Blog 2](../src/app/blog/panorama-route-from-hazyview/page.tsx) as the template** — it already has the JsonLd + faqLd pattern, the wide-block placement, the inline FAQ grid, and the WhatsApp CTA.

**Register** in [src/app/blog/page.tsx](../src/app/blog/page.tsx) `posts[]` (Guides section), e.g.:
```ts
{
  chapter: "Seasonal Almanac",
  title: "When to visit Kruger & Hazyview: a month-by-month almanac",
  category: "guide", status: "live",
  href: "/blog/when-to-visit-kruger-hazyview-month-by-month",
  image: img.lowveldGreenSeason.src, imageAlt: img.lowveldGreenSeason.alt,
  datePublished: "2026-MM-DD", readingMinutes: 11,
  excerpt: "<the draft excerpt, trimmed>",
},
```

**Blocks** (from `@/components/blog/Blocks`): `BlogHero, TLDR, Callout, StatGrid, NumberedList (light|dark|timeline|grid), ClosingBlock, WhatsAppCTA, Sources`. **Helpers:** `createBlogPostMetadata` (`@/lib/blog`), `articleLd` + `faqLd` (`@/lib/jsonld`), `JsonLd` (`@/components/JsonLd`), `img` (`@/lib/images`), `whatsappLink`/`site` (`@/lib/site`). The 12-month grid + traveller-fit grid are best as **inline JSX** (like Blog 2's FAQ block), wrapped `not-prose mx-auto w-full max-w-5xl`, outside the prose div.

**Conventions & gotchas (all in `MEMORY.md` too):**
- **Wide data blocks:** `StatGrid`/`NumberedList` already break out to `max-w-5xl`; render them OUTSIDE `prose-kanaan max-w-prose` (close the prose div first).
- **Images:** save sources to `public/images/<public_id>.jpg`, run `python scripts/upload-to-cloudinary.py`; reference via `cldImage("<public_id>")` in `src/lib/images.ts`. Use REAL Kanaan photos where they exist.
- **Deploy gotchas (Cloudflare Pages):** (1) **keep `postcss.config.mjs`** (clean blob `61e36849…`) or the build emits **zero CSS** and the site renders unstyled; (2) **no file >25 MiB in `public/`** (Pages rejects it) — videos live in `media/videos/`, served from Cloudinary; (3) build runs `@cloudflare/next-on-pages` (works with Next 16).
- **Voice:** warm South African hospitality register (Anneli) — match `/blog/africa` and the Blog 1/2 guides; not minimalist.

**Verify before commit:** `npx tsc --noEmit -p tsconfig.json` (clean) → `npm run build` (expect **28** static pages incl. the new route). Then branch + commit + push (mirror the Blog 2 flow). Keep `postcss.config.mjs` tracked.

**Don't duplicate:** Blog 1 = `kruger-from-hazyview` (gates/timing/half-day) · Blog 2 = `panorama-route-from-hazyview` (loops/stops/seasons-for-views). Blog 3 is the all-12-months *when-to-come* layer that links to both.
