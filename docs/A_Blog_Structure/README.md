# A_Blog_Structure — START HERE

**What this is:** the permanent onboarding + handoff pack for the Kanaan Guest Farm
website. It exists so a brand-new teammate (human or a fresh AI session with zero chat
history) can understand the project and ship a correct change on day one, using only
files in this repo.

**Read in this order:**
1. `README.md` (this file) — the 60-second picture, the rules, where things live.
2. `CLIENT.md` — who the client is, who reads them, Anneli's voice, and every standing
   instruction they have given. Living file: add to it after every round of feedback.
3. `BLOG_PLAYBOOK.md` — the blog structure: how to add or edit a blog post correctly.
   This is the main day-to-day task and the reason this folder is named *A_Blog_Structure*.
4. `ARCHITECTURE.md` — how the whole site works, the verified commands, and the traps.
5. `STATUS.md` — the living ledger: where we are right now and what to do next.

The day-to-day workflow is the **`/blog`** command (`.claude/commands/blog.md`). It is
identical in every client repo; everything client-specific lives in this folder.

> **These five files win.** When they conflict with memory, an old README, a comment,
> or chat history, believe these — they were derived from the repo and verified on the
> date at the bottom of each file. If you find them wrong, fix them (don't work around
> them) and update the date.

---

## 60-second context

Kanaan Guest Farm is a small, family-run guest farm in Hazyview, Mpumalanga (South
Africa), ~48 minutes from the Kruger National Park airport. Owners **Anneli & Matthew**
took it over in August 2025. This repo is their **marketing website**: it sells stays
(from R250 per person sharing), weddings/events, and positions the farm as an affordable
base for a Kruger + Panorama Route holiday.

The site is a **static, SEO-first brochure + content engine**. There is no database, no
CMS, no login. Everything is code. The most active work is the **Journal & Guides**
(`/blog`): warm founder *Stories* and practical, search-optimised *Guides* (Kruger,
Panorama Route, seasonal, family, budget) that pull in organic search traffic and funnel
readers to a WhatsApp enquiry.

**Who it serves:** prospective guests planning a Lowveld trip, and couples looking for a
wedding venue. Every page ends in a WhatsApp call-to-action.

## Stack in one line

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · TypeScript · media on
Cloudinary · deployed static to **Cloudflare Pages** (`@cloudflare/next-on-pages`).

## The non-negotiables (don't break these)

1. **The postcss.config.mjs must stay the clean, 8-line, plugin-only file.** Without it
   Tailwind emits **zero CSS** and the deployed site is completely unstyled. It also has
   a **malware history** (see ARCHITECTURE → Traps): never trust a `postcss.config.mjs`
   that has a long appended line — verify it is *only* the `@tailwindcss/postcss` plugin.
2. **This is not the Next.js in your training data.** Next 16 has breaking changes. Read
   the relevant guide in `node_modules/next/dist/docs/` before any framework-level change
   (routing, metadata, image, config). This rule is in `AGENTS.md` for a reason.
3. **Blog data blocks break OUT of the prose column.** `StatGrid`, `NumberedList`,
   figures and tables render at `max-w-5xl` and must sit **outside** the
   `prose-kanaan max-w-prose` div. Put them inside it and they render cramped and wrong.
   (Full rules in `BLOG_PLAYBOOK.md`.)
4. **All images go through the Cloudinary helper**, never a hand-typed URL. The cloud
   name lives in exactly one place: `src/lib/cloudinary.ts`. Add a slot to
   `src/lib/images.ts` and reference `img.<slot>`.
5. **Voice is Anneli's** — warm South African hospitality, first-person "we", honest and
   generous. Not minimalist ad-copy. Match the cadence of existing posts.
6. **WhatsApp is the primary CTA.** Bookings happen via `wa.me` deep-links
   (`whatsappLink(pageKey)`), not a server booking form. Keep it that way unless asked.
7. **One blog at a time, on its own branch, merged via PR.** Don't batch-ship posts.

## Where everything lives

| Thing | Path |
| --- | --- |
| Blog index (the post list) | `src/app/blog/page.tsx` |
| A single blog post | `src/app/blog/<slug>/page.tsx` |
| Reusable blog blocks (TLDR, Callout, StatGrid…) | `src/components/blog/Blocks.tsx` |
| Blog metadata helper | `src/lib/blog.ts` (`createBlogPostMetadata`) |
| JSON-LD (Article, FAQ, LodgingBusiness…) | `src/lib/jsonld.ts` + `src/components/JsonLd.tsx` |
| Blog card grid (client, tabbed) | `src/components/BlogPostList.tsx` |
| Image catalogue (all photo/video slots) | `src/lib/images.ts` |
| Cloudinary URL builder (cloud name) | `src/lib/cloudinary.ts` |
| Business facts: NAP, prices, WhatsApp, hosts | `src/lib/site.ts` |
| Colour tokens, fonts, `.prose-kanaan` | `src/app/globals.css` |
| Shared layout, site-wide metadata + JSON-LD | `src/app/layout.tsx` |
| Page sections/headings/hero primitives | `src/components/Section.tsx`, `Hero.tsx`, `CTA.tsx` |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| Deploy config | `wrangler.toml`, `next.config.ts` |
| Media upload / processing scripts | `scripts/*.py` |

## Handoff rule (keep this pack evergreen)

**Before you step away from a piece of work:** update `STATUS.md` (what you did, what's
next), commit, and push your branch. That single habit is what keeps this pack true. Also
bump the `Last reviewed` date on any file whose facts you changed.

---

*Last reviewed: 2026-07-06 — verified against a clean `npm run build` (30 static routes).*
