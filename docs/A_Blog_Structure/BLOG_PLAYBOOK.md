# BLOG_PLAYBOOK — the blog structure, and how to ship one

This is the "one right way" to add or edit a blog post. Everything here is derived from
the live posts (`src/app/blog/*/page.tsx`) and the block library
(`src/components/blog/Blocks.tsx`). If you copy an existing post and follow the checklist,
you will produce a correct one.

**Best post to clone:** `src/app/blog/cost-of-a-kruger-lowveld-week-2026/page.tsx` — it
uses every block and both JSON-LD types. For a simpler guide, clone
`src/app/blog/kruger-from-hazyview/page.tsx`.

---

## The two kinds of post

| Category | What it is | `category` value |
| --- | --- | --- |
| **Story** | Warm, first-person founder chapters (the six-part Kanaan narrative). | `"story"` |
| **Guide** | Practical, search-optimised cornerstones (Kruger, Panorama, seasons, budget…). | `"guide"` |

Both live under `src/app/blog/<slug>/page.tsx` and share the same block library. Guides
carry the FAQ + Sources blocks and heavier JSON-LD; stories are lighter and more lyrical.

## The locked page grammar (reading rhythm > visual variety)

Every post is built from these blocks, in this order. This grammar is stated at the top of
`src/components/blog/Blocks.tsx` and is deliberately consistent across posts:

1. `<JsonLd data={articleLd(...)} />` and (guides) `<JsonLd data={faqLd(faqs)} />`
2. `<Breadcrumbs>` — Home → Journal & Guides → this post
3. `<BlogHero>` — full-bleed image, eyebrow, H1, intro, byline, date, read time
4. **TLDR** at the top (`<TLDR items={[...]} />`)
5. Prose in a `prose-kanaan max-w-prose` column, with a **data block every ~250–400
   words** — a `Callout`, `StatGrid`, `NumberedList`, `CostTable`, or inline figure
6. `ClosingBlock` as the **second-to-last** element (the thesis, restated), then the
   founder sign-off (`— Anneli & Matthew`)
7. (Guides) `Sources` block
8. `WhatsAppCTA` — the primary conversion
9. Optional "Keep reading" related-post cards, then the shared `<CTA />`

## The block library (`src/components/blog/Blocks.tsx`)

| Block | Use it for |
| --- | --- |
| `TLDR` | The 4–6 bullet summary at the very top. |
| `Callout` | The single most quotable line in a section (big display type). |
| `StatGrid` | Three parallel facts (distances, prices, capacity). Breaks out wide. |
| `NumberedList` | Ordered steps/tips. Variants: `light` (default), `dark`, `timeline`, `grid`. Breaks out wide. |
| `ClosingBlock` | The gradient wrap-up, always second-to-last. |
| `WhatsAppCTA` | The forest CTA band. Pass `pageKey` to pick the pre-filled message. |
| `BlogHero` | The hero header (image + H1 + meta strip). |
| `Sources` | Citations at the foot of a guide, with the "verify the live figure" note. |

Post-specific tables (e.g. `CostTable`, `BudgetBuild`) are defined **inline** in the
page file when they're one-offs — see the cost guide. Only promote a block into
`Blocks.tsx` when a second post needs it.

## THE WIDTH TRAP (read this twice)

Prose lives in `prose-kanaan mx-auto max-w-prose`. But `StatGrid`, `NumberedList`,
figures, and tables are **wider** (`max-w-5xl`) and are marked `not-prose`. They must be
rendered **outside** the prose `<div>`. The pattern is: **close the prose div, drop the
wide block, open a new prose div** for the next paragraphs.

```tsx
<Section>
  <div className="prose-kanaan mx-auto max-w-prose">
    <H2 className="mb-4">A heading</H2>
    <p>Some paragraphs…</p>
  </div>            {/* ← close prose BEFORE the wide block */}
  <StatGrid stats={[…]} />   {/* breaks out to max-w-5xl */}
</Section>
```

Put a `StatGrid`/`NumberedList` *inside* the `max-w-prose` div and it renders cramped and
mis-aligned. This is the single most common blog mistake.

## Metadata & structured data (both required)

- **Page metadata:** export `metadata` via `createBlogPostMetadata({ slug, title,
  description, image, datePublished, category })` from `src/lib/blog.ts`. This sets the
  title suffix, canonical URL, and OpenGraph. All 11 current posts use it — don't hand-roll.
- **JSON-LD:** render `<JsonLd data={articleLd({...})} />` for every post, plus
  `<JsonLd data={faqLd(faqs)} />` for guides with an FAQ. Helpers are in
  `src/lib/jsonld.ts`. The `faqs` array is reused twice: once for the visible FAQ section,
  once for `faqLd()` — keep them the same source.

## Images

1. Upload the original to Cloudinary (folder `kanaan/`) — see ARCHITECTURE for the script.
2. Add a **slot** to `src/lib/images.ts`: `mySlot: { src: cldImage("public-id"), alt: "…", width, height }`.
3. Reference it as `img.mySlot.src` / `img.mySlot.alt`. **Never** hand-type a Cloudinary URL.
4. Always write a real, descriptive `alt` (SEO + accessibility are core to this site).

## Colour & type tokens (`src/app/globals.css`)

Tailwind v4 theme tokens you'll use in blocks: `ink`, `bone`, `sand`, `ochre`,
`ochre-deep`, `forest`, `forest-deep`, `rust`, `muted`. Display font is `font-display`
(Fraunces); body is the default sans (Inter). Body long-read styling comes from
`.prose-kanaan`.

## Voice (this is not optional styling)

Write as **Anneli**: first-person "we", warm South African hospitality, honest and
generous (the cost guide literally shows guests how to spend *less*). Not clipped ad-copy.
Read an existing post aloud and match its cadence.

**Hard content rule:** Hazyview is **not** a malaria area. Never frame malaria as a
farm/Hazyview risk — if it comes up at all, scope it to Kruger only. (Owner correction.)

Guides must be **honest and dated**: every price/fee/time is a 2026 figure, and the
`Sources` block + a Callout remind readers to verify the live number.

---

## Checklist to ship a new blog post

- [ ] Branch off `main`: `git checkout -b blog-<n>-<slug>` (one post per branch).
- [ ] Create `src/app/blog/<slug>/page.tsx` by cloning the cost guide.
- [ ] Upload images to Cloudinary; add slots to `src/lib/images.ts`.
- [ ] Fill `createBlogPostMetadata({...})` (slug matches the folder).
- [ ] Add `articleLd` (+ `faqLd` if it has an FAQ).
- [ ] Follow the grammar: TLDR → prose+data blocks → ClosingBlock → (Sources) → WhatsAppCTA.
- [ ] Obey the width trap: wide blocks outside `max-w-prose`.
- [ ] **Add the post to the `posts` array in `src/app/blog/page.tsx`** so it shows on the
      index (set `status: "live"`, `href`, `image`, `excerpt`, date, read time, category).
      A page with no index entry is unreachable except by direct URL.
- [ ] `npm run build` — must compile clean and prerender your new `/blog/<slug>` route.
- [ ] `npm run lint`.
- [ ] Preview locally (`npm run dev`) and eyeball the width/rhythm on mobile + desktop.
- [ ] Update `STATUS.md`, commit, push the branch, open a PR into `main`.

---

*Last reviewed: 2026-07-06 — verified against the 11 live posts and a clean build.*
