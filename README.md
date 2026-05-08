# Kanaan Guest Farm — website

Next.js 16 (App Router) + Tailwind v4 + TypeScript. Static-rendered, optimised for SEO.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (all pages prerendered as static)
npm run lint
```

## Structure

```
src/
  app/
    page.tsx           Home
    lodge/             Self-catering lodge units
    backpackers/       8-bed hostel
    camping/           Shaded campsites
    amenities/         Amenities + house rules + getting here
    groups/            School / corporate / team-building
    attractions/       Kruger, Panorama Route, Sabie, etc.
    contact/           Booking enquiry form (mailto + WhatsApp)
    sitemap.ts         /sitemap.xml
    robots.ts          /robots.txt
    layout.tsx         Global metadata, JSON-LD (Organization + WebSite)
  components/          Header, Footer, Hero, AccommodationCard, CTA, etc.
  lib/
    site.ts            All NAP, social, policy values
    images.ts          Image catalogue (Unsplash placeholders)
    jsonld.ts          Schema.org helpers (LodgingBusiness, Hotel, Hostel,
                       Campground, FAQPage, BreadcrumbList)
```

## SEO baked in

- Per-page metadata (title, description, OpenGraph, Twitter card, canonical).
- Structured data: `LodgingBusiness` (site-wide) + per-page `Hotel` / `Hostel` /
  `Campground` / `BreadcrumbList` / `FAQPage` JSON-LD, all in static HTML.
- `sitemap.xml` and `robots.txt` generated from the route list.
- Semantic landmarks (`<header>`, `<nav aria-label>`, `<main>`, `<footer>`),
  heading hierarchy, descriptive `alt` text.
- `next/image` with AVIF/WebP, hero with `priority` + `preload`.
- Self-hosted variable fonts via `next/font` (Fraunces + Inter).
- All routes prerender as static — fast LCP, cache-friendly.

## Things to swap before launch

1. **Real photos.** Drop final images into `public/images/` and replace the
   Unsplash URLs in `src/lib/images.ts` with `/images/<file>.jpg`. The
   `remotePatterns` in `next.config.ts` can then be removed.
2. **Open Graph image.** Add `public/og.jpg` (1200×630) — referenced by
   `metadata.openGraph.images` in the root layout.
3. **Favicon.** Replace `src/app/favicon.ico` with a Kanaan mark.
4. **Exact GPS coordinates.** Update `site.geo` in `src/lib/site.ts` with the
   farm's true lat/lng for the Schema.org `GeoCoordinates` block.
5. **Production domain.** If different from `https://kanaanguestfarm.com`,
   change `site.url` in `src/lib/site.ts` (drives canonical, OG, sitemap).
6. **Booking flow.** The contact form composes a `mailto:` and a WhatsApp
   deep-link. To accept submissions server-side, add a route handler at
   `src/app/api/booking/route.ts` and wire `ContactForm` to `fetch()` it.

## Deploy

Vercel is the easy default — `vercel` from the project root, or push to a
GitHub repo and import. Any static host that supports Next.js (or
`next export` for fully static output) works.
