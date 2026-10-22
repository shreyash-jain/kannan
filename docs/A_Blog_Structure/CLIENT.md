# CLIENT — Kanaan Guest Farm

Who the client is, who reads them, how they sound, and every standing instruction they
have given. **This file is living.** Every time Anneli or the marketing lead reacts to a
draft, write the lesson down here as a rule with its reason. That is the whole mechanism
by which the next blog is better than this one.

---

## The business

**Kanaan Guest Farm** — a small, family-run guest farm in **Hazyview, Mpumalanga, South
Africa**, on the R40, about **48 minutes from Kruger Mpumalanga International Airport**.
Owners **Anneli and Matthew** took it over in **August 2025**.

- Site: **https://kanaanguestfarm.com** (journal at `/blog`)
- What they sell: self-catering lodge rooms, twin rooms, backpacker beds and campsites
  under forty-year-old mango trees — **from R250 per person sharing** — plus weddings and
  gatherings.
- Positioning: an affordable, genuinely warm base for a **Kruger + Panorama Route**
  holiday, and a wedding venue.
- Contact: WhatsApp **+27 63 794 3880** · bookings@kanaanguestfarm.com

## The reader

Two audiences, and a post serves one of them, not both:

1. **Trip planners** — families and couples planning a Lowveld holiday, deciding where to
   base themselves for Kruger and the Panorama Route, weighing cost and driving times.
2. **Couples looking for a wedding or gathering venue.**

They arrive from organic search with a practical question. Answer it properly, then
invite them to WhatsApp.

## Voice — Anneli's

Warm South African hospitality, **first-person "we"**, honest and generous. **Not**
minimalist ad-copy, and not a listicle voice. Match the cadence of the existing posts,
especially her own AFRICA piece.

- Specific facts anchor trust; vague enthusiasm destroys it. Name the road, the turnoff,
  the month, the rand figure, the thing that goes wrong.
- Honesty is the marketing. "Phone ahead to check the hours" outperforms a confident
  wrong opening time.
- SA / British spelling: metres, kilometres, colour, realise.
- Anti-hype. If a season is difficult, say so, then say why you'd still come.

### Banned phrasing

`nestled` · `hidden gem` · `home away from home` · `something for everyone` ·
`bucket list` · `unwind` · `best-kept secret` · `must-see` · `nature lover's paradise` ·
`in today's fast-paced world` · `delve` · `unlock` · `seamless`

## Commercial rules

- **WhatsApp is the primary call to action.** Bookings go through `wa.me` deep links
  (`whatsappLink(pageKey)`), never a server booking form. Every page ends in a WhatsApp
  CTA. Don't change this unless asked.
- Prices quoted in the blog must match `src/lib/site.ts`. If a post needs a price that
  isn't there, ask — don't estimate.

## Visual direction

Real, sunlit, lived-in. The farm as it actually is — mango trees, the Lowveld light, the
R40, the Kruger gates — not a glossy safari-brochure fantasy. Generic guests only: faces
should be out of frame, turned away, or in silhouette. No visible number plates, park
permits, badges, ID documents or third-party logos.

Media does **not** live in the repo — it goes to Cloudinary and is referenced by a slot in
`src/lib/images.ts`. See `ARCHITECTURE.md § Media pipeline`.

---

## Standing instructions and past feedback

*Append every new one, newest first, with the date and the reason. Never delete an entry
— supersede it and say so.*

- **No Boer War history — say "rich in history" instead** (Anneli, 2026-10-13, Joburg-to-
  Kruger post). A line about the Long Tom Pass being named after Boer War guns was pulled.
  *Why:* there is a lot of politics around the Boer War, and the area has plenty of other
  history that appeals to all cultures. Refer to Lydenburg, the Long Tom Pass and the
  escarpment towns as an area "rich in history" and leave it there.
- **The scenic Joburg route is a selling point** (Anneli, 2026-10-13): N4 to Belfast, then
  Dullstroom → Lydenburg (Mashishing) → Long Tom Pass → Sabie → Hazyview. Her highlights:
  Dullstroom, Hops Hollow brewery near the top of the pass ("one of the highest breweries in
  Africa"; sources disagree on highest vs second-highest, so don't rank it), Sabie's
  waterfalls and pancakes. ~415 km, about six hours' driving, only the Middelburg toll.

- **Camping is priced per pitch: R250 a night for two, R180 for one** (marketing, 2026-10-22). Now `site.pricing.campingTwoZAR` / `campingSoloZAR`. The R275 (1 night) / R250 (2+ nights) per-person rate is for rooms. Pensioner and long-stay discounts exist with no published figure: write "ask us". *Why:* the first camping draft quoted the room rate for camping. Note `/camping` and `/stay/camping` still show the per-person room rate and need the owner's word before they change.
- **Kruger cost comparisons must include the campsite fee as well as the conservation fee** (2026-10-22). Inside Kruger is two bills: the site (per site for two; SANParks quotes on request, use the krugerpark.co.za 2026/27 tables) and the per-person daily fee. Never imply camping is in the park fee. Never claim Kanaan is the cheapest campsite near Hazyview (Kiaat, Numbi and Hazy Park caravan parks list similar or lower prices). Sell value: shade, power and water at every pitch, pool, trails, the hosts.
- **Camping post: "under 1,300 words" and "fill the space left & right"** (marketing, 2026-10-05). The brief asked for 1,500–1,800; marketing capped it at 1,300, counted from the H1 to the WhatsApp band including captions, FAQ and the infographic. They then asked for the text column to fill the width, so that post reads at `max-w-5xl` like the birthday post. *Why:* the trend is now consistently shorter and wider — default to ~1,300 words and expect a request to widen; ask before widening, as before.
- **Infographics are coded, not generated** (2026-10-05, camping post). A comparison/drive-time panel built in the page stays sharp on phones and its numbers come from `site.ts` and the article, so they cannot drift. *Why:* generated images garble text and figures, and may not depict the farm.
- **A brief's "Topic" and "Topic Variation" are one post, not two** (2026-09-22,
  contractor-accommodation brief). Two chats each wrote one of the pair on the same branch,
  then overwrote, restored and retired each other's version; both went live for an
  afternoon before marketing chose the *Discounted accommodation for contractors* pillar
  (`/blog/discounted-contractor-accommodation-hazyview`). The other address now 301s to it.
  *Why:* two posts on one keyword compete with each other, and two sessions on one branch
  compete with each other. **One post per brief, one chat per post**, and before writing a
  post check the branch and `origin/preview` for a sibling on the same keyword.
- **Long keyword H1s use `BlogHero titleSize="compact"`** (2026-09-21). The full topic line
  ran to seven lines at the default size; the compact setting is one step down at every
  breakpoint. Other posts are untouched. *Why:* marketing wants the whole topic line as the
  H1, so the hero has to make room for it rather than the title being shortened.
- **The `timeline` list variant is for clock times only.** Its big left column is the
  `time` label; a titled step without `time` renders the title at display size and wraps
  badly. Titled steps use the default numbered list. (2026-09-21, contractor post.)
- **No AI render may depict a scene on this farm** (owner, 2026-09-03, commit
  `a347355`): Anneli pulled an invented braai-with-people frame off three pages. Anything
  showing Kanaan must be a real photograph (the `pro()` shoot or an `img` slot). Generated
  images are only for places we cannot photograph — a private-lodge deck, a Marloth Park
  stoep — and even then say so in the caption. *Why:* the farm's pitch is "as it actually
  is"; a picture of something that never happened here undoes that.
- **Marketing widened the milestone-birthday post too** (2026-09-15): first asked for the
  gap under the TLDR box closed, then for the text to fill the margins. Settled on
  `max-w-5xl` (photo width) on that post, with `pb-0!` sections so blocks sit closer.
  Precedent now: two wide posts (school-trip at `max-w-7xl`, birthdays at `max-w-5xl`),
  the rest narrow. Still ask before widening another; and expect "blank space" feedback
  on a narrow column from this reviewer.
- **Marketing wants short posts now: "under 1,500 words"** (2026-09-15, milestone-birthday
  post) — the brief said 1,800–2,500 and the first draft was 2,550; it was cut to ~1,450
  including FAQ, captions and sources. Ask for the target length up front; when unstated,
  aim for about 1,400 and keep every keyword heading.
- **Sabi Sand is on the Hazyview side, not Hoedspruit** — Shaw's Gate is ~37 km up the
  R536 from town (Sabi Sabi's own directions). Briefs have filed it under Hoedspruit;
  correct it every time. Hoedspruit's reserves are Timbavati, Klaserie, Thornybush,
  Balule and Kapama.
- **Kanaan has no boma.** Do not borrow the word. We have a communal fire, a braai stand
  at the viewpoint and the covered, open-sided venue (60 seated / 100 with a marquee).
  Say that plainly; a "boma dinner" keyword is fine when describing what lodges offer.
- **Verified 2026 comparison figures** (reuse, do not re-guess): Sabi Sabi Bush Lodge
  R29,600 pps/night, Earth Lodge R44,000, plus a R450 reserve levy (sabisabi.com/rates,
  valid 1 Mar 2026–28 Feb 2027); Kruger conservation fee R134 SA / R602 international per
  adult per day to 31 Oct 2026; SANParks festive-season **day-visitor quotas** at each gate
  with a R59/R29 online pre-booking fee. The cost guide's "Sabi Sand from R11,500" line
  is stale against this.
- **School groups: from R180 per learner per night** (marketing, 2026-09-11, unit
  confirmed). Lives in `site.pricing.schoolGroupFromZAR`; quote it from there. The
  general R250 pps rate is not the number a teacher wants — lead with R180 on anything
  aimed at schools. Dinner (braai) still has no published price; write it as on request.
- **Links in the body must look like links.** The site has no global anchor styling.
  Every inline link needs `font-medium text-ochre underline decoration-ochre/50
  underline-offset-4 hover:text-ochre-deep` — marketing twice reported "not
  hyperlinked" when the colour alone was used. *Why:* plain-text links are invisible.
- **Sub-headings need explicit classes.** `.prose-kanaan` styles only `<p>`; a bare
  `<h3>` renders as body text. Use the display font on every h3, and the not-prose
  divide-y block for FAQs (see the cost guide). *Why:* the school-trip post shipped its
  first preview with every sub-heading looking like a paragraph.
- **Marketing prefers a wide reading column on the school-trip post** (`max-w-7xl`,
  the header's edges) with photos at `max-w-5xl`. Per-post choice, not a site
  change — the other guides keep `max-w-prose`. Ask before widening another.
- **Marketing wants the exact supplied topic as the H1 *and* the tab title**, even past
  the 60-character cap in their own brief. Use it verbatim; do not shorten.
- **Hazyview is not a malaria area.** Anneli's own correction. Never frame malaria as a
  farm or Hazyview risk; if it's mentioned at all, scope it strictly to Kruger. *Why:* it
  scares guests off a risk that doesn't apply to where they'd actually be sleeping.
- **Voice is Anneli's, warm — not minimalist.** An early draft came back too clipped and
  brand-agency-ish. *Why:* the farm's whole advantage is that it sounds like a real family
  who live there.
- **One blog at a time**, on its own branch, via a pull request. Don't batch-ship posts.
- **Preserve the existing scaffold.** Don't restructure pages or components while writing
  a post; if something needs changing, raise it separately.
- **Blog data blocks break out of the prose column.** `StatGrid`, `NumberedList`, figures
  and tables render at `max-w-5xl` and must sit **outside** the `prose-kanaan
  max-w-prose` div — inside it they render cramped and wrong. (Full rules in
  `BLOG_PLAYBOOK.md`.)
- **Scope has widened beyond blogs** — Google Business Profile, directories, TGCSA,
  reviews. The R6k Google Ads offer is spend-matched, not free. Site schema is already
  strong. Check whether Cloudflare is blocking AI crawlers before advising on LLM
  visibility.

*Last reviewed: 2026-10-17.*
