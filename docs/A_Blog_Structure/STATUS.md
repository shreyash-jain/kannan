# STATUS — living handoff ledger

The "where we are right now" file. Update this **before you step away** — it's what keeps
this whole pack true.

## Handoff protocol

- **Before you start:** read this file top to bottom. Pull `main`. Check "In flight" below
  and the open blockers.
- **While you work:** one unit of work = one branch (`blog-<n>-<slug>` for posts). Keep the
  build green (`npm run build`). Don't touch `postcss.config.mjs`.
- **Before you leave:** update "In flight" and "Recommended next actions", commit, **push
  your branch**, open a PR into `main`. Bump the `Last updated` date below.

## Snapshot (verified 2026-07-16)

> **The repo is the only source of truth.** Blog *titles* get planned in chats and decks and
> are easy to lose track of — a post only exists if there is a
> `src/app/blog/<slug>/page.tsx`. The two lists below are that check, run against
> `origin`. If a title isn't here, it hasn't been built.

### ✅ LIVE on `main` — 12 posts

- **6 founder Stories** (series is **closed** — no new ones): `the-discovery`,
  `the-promise`, `africa`, `the-welcome`, `the-celebration`, `the-future`.
- **6 Guides**: `kruger-from-hazyview`, `panorama-route-from-hazyview`,
  `when-to-visit-kruger-hazyview-month-by-month`, `things-to-do-with-kids-hazyview-kruger`,
  `cost-of-a-kruger-lowveld-week-2026`, and **`under-the-mango-trees`** (merged; its AI hero
  is live and generative-filled to a true 16:9).

Every new post is filed under the **Guide** category — "Guide" is just the label for a blog
post; it need not be a how-to (the mango-grove piece is a narrative filed as a Guide).

### 🚧 BUILT but NOT merged — all sitting on `blog-7-first-light`

| What | Why it matters |
| --- | --- |
| **Revised cost blog** — leaner, R200–R250, no fuel/variable, "week at a glance" summary, things-to-do split out | **Anneli's review changes are NOT live.** `main` still serves the OLD cost blog (no summary, activities menu still inside it). |
| **`things-to-do-around-hazyview`** — the new broad Activities guide | The content Anneli asked to be split *out* of the cost blog. Hub for "things to do in Hazyview"; the kids guide stays the child-specific spoke. |
| **`early-morning-kruger-safari-from-hazyview`** — "First Light" dawn drive | Written; both AI images fixed (generative-filled square→16:9). **Never sent to the owner.** |
| **`.npmrc`** (`legacy-peer-deps=true`) | See blocker 1. |

### ⚠️ Two live blockers — read before deploying anything

1. **`main` has no `.npmrc` → the next deploy from `main` WILL FAIL.** `npx
   @cloudflare/next-on-pages` dies on an npm ERESOLVE: `wrangler@4.110` now requires
   `@cloudflare/workers-types@^5` while `next-on-pages` pins `^4`. The one-line
   `.npmrc` fixes it and exists on `blog-6`/`blog-7` but was never merged to `main`.
2. **Anneli's cost-blog feedback is not live** — it is stranded on `blog-7-first-light`.
   Merging that branch publishes it *and* fixes blocker 1.

## In flight

| Work | Branch | State | Next action |
| --- | --- | --- | --- |
| "Under the Mango Trees" | merged to `main` | **Done / live** | none |
| Revised cost blog + Activities guide + "First Light" + `.npmrc` | `blog-7-first-light` | **Built, awaiting merge** | **Merge into `main`.** This one merge publishes Anneli's cost changes, ships 2 new guides and unblocks the deploy. |
| Food guide — restaurants, breakfast/lunch/dinner, honest 💲💲💲 grading | not started | **Next up** | Research current reviews/prices (Red Litchi, Kuka, River's Edge, Mugg & Bean, Spur, Casterbridge, Perry's Bridge) *before* writing — Anneli asked for honest grading. Then follow `BLOG_PLAYBOOK.md`. |

## Owner feedback log (Anneli) — what she has actually asked for

Keep this current; it is the record of what the client wants, so nobody has to re-listen to
voice notes.

- **2026-07-08 (typed):** the cost blog is *"very cost focused"* → make it **leaner**;
  accommodation **R200–R325** (Aadi later tightened this to **R200–R250** — use R200–R250);
  **leave out variable stuff like fuel**; add a bottom **summary: Accommodation / Travel /
  Activities / Food**. ✅ done (on `blog-7-first-light`).
- **2026-07-15 (voice note):** the cost blog mixed **cost AND things to do** → **split it**.
  (1) edit the cost blog to be **purely cost**; (2) **create the Activities guide** from the
  content that was in it, using her "Hazyview Activities – 5 Day Guide" list, and *"make it
  broad"*; (3) then a **Food** blog. That is **1 edit + 2 new blogs** — she specified nothing
  else. ✅ (1) and (2) done; (3) outstanding.
- **Standing rule:** Hazyview is **not** a malaria area. Never frame malaria as a
  farm/Hazyview risk; scope any mention to inside Kruger only.

## Standing decisions (settled — don't re-litigate)

- **Deploy = Cloudflare Pages**, not Vercel (the root README's "Vercel" line is stale).
  `@cloudflare/next-on-pages`, output `.vercel/output/static`, `nodejs_compat`. *(2026-06)*
- **Media = Cloudinary** (cloud `dprx4pret`, folder `kanaan/`); originals are **not**
  committed (25 MiB Cloudflare per-asset cap; video sources moved out of `public/`). *(2026-06)*
- **CTAs are WhatsApp-first** via `wa.me` deep-links; no server booking form. *(scaffold)*
- **One blog per branch, merged via PR**; posts shipped one at a time, not batched. *(observed cadence)*
- **`postcss.config.mjs` stays tracked and plugin-only** — required for CSS. *(2026-06, commit `86729f2`)*
- **Voice = Anneli's warm SA register**; Hazyview is not malaria — scope malaria to Kruger
  only. *(owner corrections)*
- **Journal (Story) series is CLOSED at its 6 chapters.** Every new post ships under the
  **Guide** category — used simply as the label for blog posts; a "Guide" need not be a
  how-to (a narrative blog like "Under the Mango Trees" is filed as a Guide). No new
  `category: "story"` / chapter-numbered posts. *(owner, 2026-07-07)*
- **Prices/fees in guides are dated 2026 and cite Sources** with a "verify live" note. *(guide convention)*

## Security remediation — status (incident: postcss.config.mjs build-time RCE)

**DONE 2026-07-06/07 — git side complete:**
- Infected blob purged from **all** history with `git filter-repo`; now unreachable from
  every ref and gone from the local object DB (only the two clean postcss blobs remain).
  `npm run build` still passes on the rewritten tree.
- No repo-level injector persistence (no active hooks, no `core.hooksPath`, no aliases,
  clean `package.json` scripts, no other obfuscated payloads in tracked source).
- **`origin/main` force-pushed clean** (`76df683`→`737e0a9`; lease held) and the six
  merged/stale branches (blog-2..5, refinement, accommodation-photos-galleries) **deleted**
  on GitHub and locally. `origin` now has only clean `main` (+ GitHub's pull refs).
- Full-ref backup bundle + ref map saved off-repo (session scratchpad).

**STILL REQUIRED (owner / external — cannot be done from the repo):**
1. **Rotate secrets regardless of the purge** — exposed 2026-05-12 → 06-12, so removing the
   code does not un-expose them: `CLOUDINARY_URL` (Cloudinary API secret), Cloudflare Pages
   build-env secrets, any GitHub PAT / SSH / npm tokens.
2. **GitHub retention:** the infected commits survive only in immutable pull refs
   **`refs/pull/3/head` … `refs/pull/14/head` (PRs #3–#14)** until GitHub garbage-collects.
   Ask GitHub Support to GC/purge if the SHA must be fully dead. (Branch tips are all clean.)
3. **Redeploy** Cloudflare Pages from clean `main`.
4. **Audit dev-machine VS Code extensions** (suspected original injector).

## Open blockers / decisions pending

- **Exact farm GPS** for `site.geo` and the true upper `priceRange` in `organizationLd()`
  are still placeholders (`TODO(anneli)`). Confirm with the owner.

## Standing decision — production domain

**`https://kanaanguestfarm.com` is the permanent production domain** (confirmed by owner
2026-07-06). It is already set in `src/lib/site.ts` (`site.url`), which drives canonical
URLs, OpenGraph, sitemap and JSON-LD. Do not change it.

## Recommended next actions (in order)

1. **Owner:** force-push the cleaned branches + rotate the exposed secrets (see above) —
   highest priority.
2. Delete the stale `accommodation-photos-galleries` branch once confirmed redundant.
3. Ship the next Guide (Logistics/Planning segment) per `BLOG_PLAYBOOK.md`.
4. Confirm the remaining placeholders: farm GPS, `priceRange`.

---

*Last updated: 2026-07-16*
