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

*Last reviewed: 2026-08-21.*
