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

## Snapshot (verified 2026-07-06)

- `main` is clean and level with `origin/main`. `npm run build` compiles clean → 30 static
  routes prerendered.
- **11 blog posts live:** 6 founder Stories + 5 Guides (Kruger, Panorama Route, Seasonal
  Almanac, Family & Kids, Cost-of-a-week). All wired into `src/app/blog/page.tsx`.
- **A 12th post is up for review** on `blog-6-under-the-mango-trees`: Story · Chapter 7
  "Under the Mango Trees" — the entity-defining mango-grove origin piece. Wired into the
  index and `sitemap.ts` (which also picked up the 5 previously-missing guide URLs).

## In flight

| Work | Branch | State | Next action |
| --- | --- | --- | --- |
| Camping photos + per-category galleries + SEO tweaks | landed on `main` (`76df683`) | **Done / merged** | none |
| Duplicate of the above, committed on an older base | `accommodation-photos-galleries` (2 commits, same subjects as main) | **Stale** | Confirm nothing unique is on it, then delete the branch to avoid confusion |
| Story · Chapter 7 "Under the Mango Trees" (`under-the-mango-trees`) | `blog-6-under-the-mango-trees` | **Up for review** | Owner/reviewer read-through, then merge the PR into `main` |
| Next Guide (Logistics/Planning segment) | not started | **Queued** | Pick the next guide topic, branch, follow `BLOG_PLAYBOOK.md` |

There is **no unfinished code** in the working tree. The genuine open work is (a) the next
blog in the editorial pipeline and (b) the security remediation below.

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

*Last updated: 2026-07-07*
