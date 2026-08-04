# ARCHITECTURE — how it works + the traps

## Mental model

A **static marketing site**. There is no server, database, or CMS. Every route is a React
Server Component that renders to HTML at build time (`npm run build` prerenders all 30
routes as static). Content is authored **in code**: page files under `src/app/`, business
facts in `src/lib/site.ts`, images in `src/lib/images.ts`. Media (photos, video) is not in
the repo — it's served from **Cloudinary**. The built static output is deployed to
**Cloudflare Pages**.

```
Author edits .tsx / lib data
        │
        ▼
 next build (Turbopack)  ──►  30 static HTML routes + JSON-LD baked in
        │
        ▼
 @cloudflare/next-on-pages  ──►  .vercel/output/static
        │
        ▼
 Cloudflare Pages (kannan project)  ──►  live site
                                   ▲
        Cloudinary (cloud dprx4pret, folder kanaan/) ── images/video at request time
```

Control flow for a visitor: request → static HTML (already contains SEO metadata +
schema.org JSON-LD) → `next/image` requests optimised Cloudinary URLs → every page's CTA
is a `wa.me` WhatsApp deep-link (no form POST).

## Key modules and responsibilities

| Module | Responsibility |
| --- | --- |
| `src/app/layout.tsx` | Root layout: fonts (`next/font`), site-wide metadata, Organization + WebSite JSON-LD, GA. |
| `src/app/page.tsx` + section pages | The marketing pages (home, stay, packages, weddings, the-land, contact, blog). |
| `src/app/blog/` | The content engine. Index + one folder per post. See `BLOG_PLAYBOOK.md`. |
| `src/lib/site.ts` | Single source of truth for NAP, phones, WhatsApp messages, prices, capacity, hosts, nav. |
| `src/lib/images.ts` | Named image/video **slots** → Cloudinary URLs. Every image reference points here. |
| `src/lib/cloudinary.ts` | Builds Cloudinary delivery URLs. The **only** place the cloud name lives. |
| `src/lib/jsonld.ts` | schema.org builders: LodgingBusiness, WebSite, Breadcrumb, Hotel/Hostel/Campground, FAQ, Article, VideoObject, EventVenue. |
| `src/lib/blog.ts` | `createBlogPostMetadata()` — consistent per-post `<Metadata>`. |
| `src/components/` | Presentational primitives: `Section`, `Hero`/`PageHero`, `CTA`, `Breadcrumbs`, `Header`, `Footer`, `WhatsAppFab`, `Lightbox`, `Video`, `JsonLd`, `BlogPostList`. |
| `src/components/blog/Blocks.tsx` | The blog block library (the heart of `A_Blog_Structure`). |
| `next.config.ts` | Turbopack root pin, `next/image` AVIF/WebP + Cloudinary `remotePatterns`, legacy → new redirects. |
| `wrangler.toml` | Cloudflare Pages project config (`nodejs_compat`, build output dir). |
| `scripts/*.py` | One-off media tooling (upload/convert/sample). Not part of the site build. |

## Verified commands (ran clean on 2026-07-06)

```bash
npm install            # first time only
npm run dev            # local dev at http://localhost:3000 (Turbopack)
npm run build          # production build — prerenders all 30 routes as static ✔ verified
npm run lint           # eslint (flat config, eslint-config-next)
```

There is **no test suite** in this repo. "Verify" here means: the build compiles and
typechecks clean, and you eyeball the affected page in `npm run dev` (desktop + mobile
width). The build is the gate.

### Deploy

Production is **Cloudflare Pages** (project `kannan`), built with
`@cloudflare/next-on-pages`, output to `.vercel/output/static` (per `wrangler.toml`), with
the `nodejs_compat` compatibility flag. `main` is the production branch; other branches
get preview URLs (`<branch>.kannan.pages.dev`).

> The root `README.md` still says "Vercel is the easy default" — that is **stale**. The
> real deploy is Cloudflare Pages. Trust `wrangler.toml` and this file.

## Secrets & keys (names only — never commit values)

| Name | Where | Notes |
| --- | --- | --- |
| `CLOUDINARY_URL` | `.env.local` (gitignored) | Includes the Cloudinary API secret. Used by `scripts/upload-to-cloudinary.py`. Treat as compromised — see Trap 1. |
| Cloudflare Pages build-env secrets | Cloudflare dashboard | For the Pages project `kannan`. |
| `G-FXNZS6QH3L` | in code (`layout.tsx`) | Google Analytics measurement ID, Kanaan-owned property. Public by nature, not a secret. This is the property `/admin` reports on. |
| `G-ZPFRGBWMRS` | in code (`layout.tsx`) | Legacy GA4 property on a former employee's Google account — no admin access. Still tagged so history stays unbroken if access is recovered; safe to delete once that is ruled out. |
| `GOOGLE_ANALYTICS_PROPERTY_ID` | env / Cloudflare | Numeric GA4 **property** ID (not the stream ID, not the `G-` measurement ID). Read by `src/lib/ga.ts`. |
| `GOOGLE_ANALYTICS_CLIENT_EMAIL` | env / Cloudflare | Service account with Viewer on the GA4 property. |
| `GOOGLE_ANALYTICS_PRIVATE_KEY` | env / Cloudflare | Service-account key. Store encrypted; one line, `\n` sequences intact. |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` | env / Cloudflare | Sign-in for `/admin`. |

The Cloudinary **cloud name** (`dprx4pret`) is public delivery info and correctly lives in
`src/lib/cloudinary.ts`.

## Media pipeline

Originals are **not** committed (Cloudflare Pages has a **25 MiB per-asset cap**, and video
sources were deliberately moved out of `public/` — see commit `63675fb`). Instead:

1. Put/produce the original locally.
2. Upload to Cloudinary folder `kanaan/` via `scripts/upload-to-cloudinary.py` (needs
   `CLOUDINARY_URL`). Helper scripts convert/sample frames.
3. Add a slot in `src/lib/images.ts` referencing the Cloudinary `public_id`.

---

## Operational guards & gotchas (the things that will bite you)

### 1. `postcss.config.mjs` — malware history AND load-bearing
- **Load-bearing:** it is the clean, plugin-only Tailwind v4 config. Delete/break it and
  the build emits **zero CSS** → the deployed site is entirely unstyled (commit `86729f2`
  re-added the clean file for exactly this reason). Do **not** un-track it.
- **Malware history:** an obfuscated build-time RCE payload was once injected into this
  file (a ~5,300-char blob appended on one line) and still exists in older
  `main`/`refinement` **history**. The working file today is clean.
- **How to stay safe:** before trusting any `postcss.config.mjs`, open it — it must be
  *only* the `@tailwindcss/postcss` plugin (about 8 lines), with **no long appended line**.
  Verify by **content**, not by hash: the current clean file is functionally identical to
  the known-good one but has a slightly different git blob hash due to a leading blank line,
  so a hash mismatch alone does not mean "infected". A long, obfuscated appended line does.
- **Outstanding remediation** (not yet done, needs repo owner): purge the infected blob
  from history, force-push clean `main`/`refinement`, and rotate the exposed secrets
  (`CLOUDINARY_URL`, Cloudflare build-env, any dev-machine tokens). See STATUS.md.

### 2. "Not the Next.js you know" (Next 16)
`AGENTS.md` mandates reading `node_modules/next/dist/docs/` before any framework-level
change. Metadata, image, routing, and config APIs differ from older Next. Don't pattern-
match from memory.

### 3. Blog width break-out
Wide blocks (`StatGrid`, `NumberedList`, figures, tables) must render **outside** the
`prose-kanaan max-w-prose` div. Full explanation in `BLOG_PLAYBOOK.md` → "THE WIDTH TRAP".

### 4. Cloudinary cloud name — one source, stale comment
The live cloud is `dprx4pret` (see `cloudinary.ts` and `next.config.ts` `remotePatterns`).
A **comment** at the top of `src/lib/images.ts` still says `dn9snfizy` — that comment is
**stale/wrong**; the code uses the helper, so it's cosmetic, but don't be misled. Always
build URLs through `cldImage`/`cldVideo`, never by hand.

### 5. Redirects are permanent (301)
`next.config.ts` 301-redirects several legacy routes (`/lodge`→`/stay#lodge`,
`/amenities`→`/the-land`, `/groups`→`/weddings`, etc.). Browsers cache 301s hard — if you
resurrect one of those paths as a real page, expect stale cached redirects during testing.

### 6. `BlogPostList` is a client component
`src/components/BlogPostList.tsx` is `"use client"` (it has Stories/Guides tabs with
`useState`). The blog **index** page passes it a plain data array. Keep the heavy content
in server components; only the interactive card grid is client-side.

### 7. Approximate/placeholder data still in `site.ts` / `jsonld.ts`
`site.geo` is approximate Hazyview coordinates (not the exact farm GPS), and
`organizationLd()` has a `priceRange` marked `TODO(anneli)`. These are known and flagged in
code — confirm with the owner before treating them as exact.

---

*Last reviewed: 2026-07-06 — build verified (30 static routes); commands and deploy config
read from the repo.*
