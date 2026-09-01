import type { Post } from "@/components/BlogPostList";
import { img, wedding } from "@/lib/images";

/**
 * The single source of truth for every blog post on the site.
 *
 * Three things read this list, and they must never disagree:
 *   1. /blog            — the card grid (src/app/blog/page.tsx)
 *   2. /sitemap.xml     — what gets submitted to Google (src/app/sitemap.ts)
 *   3. /admin           — joins GA4 page paths back to real titles
 *
 * It used to live inline in the blog index, with the sitemap keeping its own
 * hand-typed copy of the paths. That drifted — a post shipped without its
 * sitemap line and went unsubmitted. Add a post here and all three follow.
 */
export const posts: Post[] = [
  // ----- Stories: the six-part founder narrative ----------------------
  {
    n: 1,
    chapter: "The Discovery",
    title: "How we found Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-discovery",
    image: img.hosts.src,
    imageAlt: img.hosts.alt,
    datePublished: "2026-05-22",
    readingMinutes: 6,
    excerpt:
      "A vineyard in Argentina that did not work out. A birthday at the waterfall. An old man catching us snooping on land that turned out to be his. Anneli on how she and Matthew found Kanaan.",
  },
  {
    n: 2,
    chapter: "The Promise",
    title: "The promise we made ourselves",
    category: "story",
    status: "live",
    href: "/blog/the-promise",
    image: img.gateSign.src,
    imageAlt: img.gateSign.alt,
    datePublished: "2026-05-31",
    readingMinutes: 5,
    excerpt:
      "We took the keys in August 2025, read every review the farm had ever received, and started rebuilding Kanaan the slow, honest way — water, WiFi, the gate, the rooms, one thing at a time.",
  },
  {
    n: 3,
    chapter: "The Land",
    title:
      "Africa: a family holiday at Kanaan Guest Farm in the beautiful heart of Hazyview",
    category: "story",
    status: "live",
    href: "/blog/africa",
    image: img.campingTents.src,
    imageAlt: img.campingTents.alt,
    datePublished: "2026-05-12",
    readingMinutes: 7,
    excerpt:
      "Africa is a place where your heart beats a little faster. An invitation to a warm family holiday based at Kanaan — Kruger, Sabie, Graskop and the wonders of the Lowveld.",
  },
  {
    n: 4,
    chapter: "The Welcome",
    title: "The welcome at Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-welcome",
    image: img.veranda.src,
    imageAlt: img.veranda.alt,
    datePublished: "2026-05-31",
    readingMinutes: 6,
    excerpt:
      "What a stay at Kanaan actually feels like — the dust road in, the room you arrive to, the morning at the breakfast table, the long afternoon under the mango trees and the honest line about the kind of traveller the farm was built for.",
  },
  {
    n: 6,
    chapter: "The Future",
    title: "What we are building next at Kanaan",
    category: "story",
    status: "live",
    href: "/blog/the-future",
    image: img.macGrove.src,
    imageAlt: img.macGrove.alt,
    datePublished: "2026-05-22",
    readingMinutes: 5,
    excerpt:
      "A year of renovations later, Anneli on what is coming next — multi-day Kruger packages, the new wooden-house backpackers, affordable weddings, on-request meals, hiking and cycling trails, and a longer ecotourism vision for the wider farm.",
  },

  // ----- Guides: practical, search-friendly cornerstones --------------
  {
    chapter: "Kruger",
    title: "Kruger from Hazyview: a first-timer's guide",
    category: "guide",
    status: "live",
    href: "/blog/kruger-from-hazyview",
    image: img.kruger.src,
    imageAlt: img.kruger.alt,
    datePublished: "2026-06-08",
    readingMinutes: 7,
    excerpt:
      "Phabeni vs Numbi vs Paul Kruger gates, opening times by season, and the half-day plan that gets you back to Kanaan for lunch. The Kruger guide we wish we had on our first visit.",
  },
  {
    chapter: "Panorama Route",
    title:
      "The Panorama Route from Hazyview: God's Window, the Blyde Canyon and the loop that works",
    category: "guide",
    status: "live",
    href: "/blog/panorama-route-from-hazyview",
    image: img.panoramaGodsWindow.src,
    imageAlt: img.panoramaGodsWindow.alt,
    datePublished: "2026-06-15",
    readingMinutes: 9,
    excerpt:
      "God's Window, the Blyde River Canyon, a string of waterfalls and a gorge lift into the rainforest — the whole Panorama Route begins about forty minutes from our gate. The half-day loop, the full-day loop, and why a clear winter morning is the one to do it on.",
  },
  {
    chapter: "Seasonal Almanac",
    title: "When to visit Kruger & Hazyview: a month-by-month almanac",
    category: "guide",
    status: "live",
    href: "/blog/when-to-visit-kruger-hazyview-month-by-month",
    image: img.lowveldGreenSeason.src,
    imageAlt: img.lowveldGreenSeason.alt,
    datePublished: "2026-06-18",
    readingMinutes: 11,
    excerpt:
      "There is no bad month in the Lowveld — only different kinds of good. An honest, base-centric walk through all twelve: what the weather, the wildlife, the Panorama views and the crowds are really like from Hazyview each month — and how to find the one that's yours, away from the two crowded peaks.",
  },
  {
    chapter: "Family & Kids",
    title: "Hazyview & Kruger with kids: a family guide",
    category: "guide",
    status: "live",
    href: "/blog/things-to-do-with-kids-hazyview-kruger",
    image: img.familyKrugerKidsHero.src,
    imageAlt: img.familyKrugerKidsHero.alt,
    datePublished: "2026-06-20",
    readingMinutes: 12,
    excerpt:
      "Big Five mornings, a glass lift into a rainforest, zip-lines, reptile parks and a pool to come home to. The things to do with kids around Hazyview, Kruger and the Panorama Route — and how to pace a family week so nobody melts down before lunch.",
  },
  {
    chapter: "Planning your budget",
    title: "What a Kruger & Lowveld week really costs in 2026",
    category: "guide",
    status: "live",
    href: "/blog/cost-of-a-kruger-lowveld-week-2026",
    image: img.lowveldWeekCostHero.src,
    imageAlt: img.lowveldWeekCostHero.alt,
    datePublished: "2026-06-22",
    readingMinutes: 11,
    excerpt:
      "Every real 2026 number, laid out plainly — Kruger gate fees by tier, the Wild Card break-even, activity prices, flights, fuel and food, and three worked weekly budgets. The honest case for basing at Kanaan from R250 per person sharing and day-tripping into all of it.",
  },
  {
    chapter: "The Farm's Story",
    title: "Under the mango trees",
    category: "guide",
    status: "live",
    href: "/blog/under-the-mango-trees",
    image: img.underMangoTreesHero.src,
    imageAlt: img.underMangoTreesHero.alt,
    datePublished: "2026-07-07",
    readingMinutes: 7,
    excerpt:
      "Someone planted these trees forty years ago knowing they would never sit in their shade. This year, a couple got married under them. The origin story of Kanaan, told through the grove that shades it — and how Anneli and Matthew came to be its keepers.",
  },
  {
    chapter: "The dawn drive",
    title: "First Light: an early-morning Kruger safari",
    category: "guide",
    status: "live",
    href: "/blog/early-morning-kruger-safari-from-hazyview",
    image: img.krugerDawnDriveHero.src,
    imageAlt: img.krugerDawnDriveHero.alt,
    datePublished: "2026-07-07",
    readingMinutes: 9,
    excerpt:
      "4:47am, the kettle, the cold, the gate. A minute-by-minute account of the single best morning of any Kruger trip — the dawn drive through Phabeni — and why you can only catch it when you sleep 30 minutes from the gate.",
  },
  {
    chapter: "Things to do",
    title: "Things to do around Hazyview",
    category: "guide",
    status: "live",
    href: "/blog/things-to-do-around-hazyview",
    image: img.panoramaGodsWindow.src,
    imageAlt: img.panoramaGodsWindow.alt,
    datePublished: "2026-07-15",
    readingMinutes: 11,
    excerpt:
      "Kruger, the Panorama Route and Sabie's waterfalls all within an hour of the gate — plus sanctuaries, zip-lines, quad biking, rafting and a toboggan run. The whole menu, and a five-day plan that fits it in without anyone melting down.",
  },
  {
    chapter: "Things to do · the shortlist",
    title: "7 best things to do in Hazyview: explore the area from Kanaan",
    category: "guide",
    status: "live",
    href: "/blog/things-to-do-in-hazyview",
    image: img.hazyviewThingsToDoHero.src,
    imageAlt: img.hazyviewThingsToDoHero.alt,
    datePublished: "2026-07-27",
    readingMinutes: 7,
    excerpt:
      "The seven we would actually send you to — Kruger, the Panorama Route, God's Window, Bourke's Luck Potholes, the Sabie waterfalls, the hills behind the farm, and one afternoon with nothing planned at all. The short first-timer's shortlist, every one of them a day trip from the same bed.",
  },
  {
    chapter: "Where to stay",
    title:
      "Accommodation near Kruger National Park: where to stay, and why Hazyview works",
    category: "guide",
    status: "live",
    href: "/blog/accommodation-near-kruger-national-park",
    image: img.stayNearKrugerArrival.src,
    imageAlt: img.stayNearKrugerArrival.alt,
    datePublished: "2026-07-27",
    readingMinutes: 7,
    excerpt:
      "In-park rest camps, or a room just outside the gate? What each one is really like, why Hazyview sits between Kruger and the escarpment, and the four ways to stay on a working guest farm — lodge rooms, twin rooms, a backpacker dorm and camping under forty-year-old mango trees. From R250 per person sharing.",
  },
  {
    chapter: "Weddings",
    title:
      "Wedding venues near Kruger: getting married at Kanaan in Hazyview",
    category: "guide",
    status: "live",
    href: "/blog/wedding-venues-near-kruger-hazyview",
    image: wedding.krugerHero.src,
    imageAlt: wedding.krugerHero.alt,
    datePublished: "2026-07-16",
    readingMinutes: 8,
    excerpt:
      "An honest guide to a Lowveld wedding venue near Kruger National Park. What makes a farm wedding at Kanaan in Hazyview different — guest capacity from intimate to 150, where everyone sleeps, catering, the legal bit, the best time of year, and how to start planning. From R250 per person sharing, 30–45 minutes from the Kruger gate.",
  },
  {
    chapter: "Food & Drink",
    title:
      "Where to eat around Hazyview — an honest food guide",
    category: "guide",
    status: "live",
    href: "/blog/where-to-eat-around-hazyview",
    image: img.hazyviewFoodHero.src,
    imageAlt: img.hazyviewFoodHero.alt,
    datePublished: "2026-07-16",
    readingMinutes: 8,
    excerpt:
      "An honest, price-graded guide to eating around Hazyview near Kruger: the Perry's Bridge cluster (Kuka Café, Pioneer's Butcher & Grill, Topolino's), Red Litchi Farm Café, fine dining at Summerfields, the familiar mall chains — and how to eat brilliantly on the farm itself, from a braai under the mango trees to our on-request meals.",
  },
  {
    chapter: "Family Stays",
    title:
      "Family accommodation near Kruger National Park: a farm stay that works with kids",
    category: "guide",
    status: "live",
    href: "/blog/family-accommodation-near-kruger-national-park",
    image: img.familySafariHero.src,
    imageAlt: img.familySafariHero.alt,
    datePublished: "2026-07-27",
    readingMinutes: 8,
    excerpt:
      "Planning a family safari near Kruger National Park? An honest guide to whether Kruger is good for kids, why a farm stay beats a hotel room, and the self-catering family accommodation at Kanaan Guest Farm in Hazyview — 30–45 minutes from the gates, from R250 per person sharing.",
  },
  {
    chapter: "Kruger Guide",
    title:
      "The ultimate Kruger National Park travel guide: Big 5, safari tips & where to stay",
    category: "guide",
    status: "live",
    href: "/blog/ultimate-kruger-national-park-travel-guide",
    image: img.krugerGuideHero.src,
    imageAlt: img.krugerGuideHero.alt,
    datePublished: "2026-07-27",
    readingMinutes: 8,
    excerpt:
      "A complete Kruger National Park travel guide — what to expect from a Big 5 safari, how many days to spend, self-drive vs guided safari, Kruger's own sunrise and sunset drives (and why you have to book them at the gate), what to pack, and where to stay near Hazyview from R250 per person sharing.",
  },
];

/** A post that has actually shipped — narrowed so `href` is guaranteed. */
export type LivePost = Extract<Post, { status: "live" }>;

/** Only the posts that are live. Everything indexable derives from this. */
export const livePosts: LivePost[] = posts.filter(
  (p): p is LivePost => p.status === "live",
);

/**
 * Look a post up by URL path, for joining GA4 `pagePath` rows back to real
 * titles. GA reports paths with and without a trailing slash, and sometimes
 * with a query string attached, so normalise before matching.
 */
export function postByPath(path: string): LivePost | undefined {
  const clean = path.split("?")[0].replace(/\/+$/, "") || "/";
  return livePosts.find((p) => p.href === clean);
}
