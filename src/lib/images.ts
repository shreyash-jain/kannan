// Real photographs of Kanaan Guest Farm. Sources sit in /public/images/ and
// are served directly by Next.js — no remote image host needed.
//
// The owners are still producing additional photography and five videos
// (delivery ~2026-05-12). When new media arrives, replace the relevant entry
// here rather than touching component code.

export type Img = { src: string; alt: string; width: number; height: number };

export const img = {
  heroFarm: {
    src: "/images/hero-farm.jpg",
    alt: "The mango grove at Kanaan Guest Farm in Hazyview — forty-year-old trees shading the camping ground and the path to the lodge.",
    width: 1600,
    height: 2000,
  },
  pool: {
    src: "/images/pool.jpg",
    alt: "The swimming pool at Kanaan Guest Farm, framed by palms and a brick-paved deck.",
    width: 1200,
    height: 1600,
  },
  lodgeRoom: {
    src: "/images/lodge-room.jpg",
    alt: "A lodge room at Kanaan Guest Farm — crisp white linen, simple side table, window onto the bushveld.",
    width: 1280,
    height: 1600,
  },
  lodgeKitchen: {
    src: "/images/lodge-kitchen.jpg",
    alt: "The self-catering kitchenette in a Kanaan lodge unit — solid wood cabinetry, microwave, two-plate hob, full sink and crockery shelf.",
    width: 1200,
    height: 1600,
  },
  veranda: {
    src: "/images/lodge-veranda.jpg",
    alt: "The front of a lodge unit at Kanaan — paved patio, a built-in braai under shade, and the bushveld just beyond.",
    width: 1600,
    height: 1200,
  },
  lodgeBathroom: {
    src: "/images/lodge-bathroom.jpg",
    alt: "An en-suite bathroom at Kanaan — concrete-finish walls, walk-in shower with rain head and a wooden-framed mirror.",
    width: 1200,
    height: 1600,
  },
  twinRoom: {
    src: "/images/twin-room.jpg",
    alt: "A basic twin room at Kanaan — two single beds with a scalloped wooden headboard, neutral linen, simple bedside table.",
    width: 1600,
    height: 1200,
  },
  backpackers: {
    src: "/images/backpackers-dorm.jpg",
    alt: "A bunk bed inside the Kanaan backpackers dorm — pine-clad walls, big windows looking out into the trees, a ceiling fan.",
    width: 1600,
    height: 1200,
  },
  backpackersBathroom: {
    src: "/images/backpackers-bathroom.jpg",
    alt: "The shared backpackers bathroom at Kanaan — a row of basins on a polished wooden counter, corrugated-iron stall partitions.",
    width: 1600,
    height: 1200,
  },
  campingMango: {
    src: "/images/camping-mango.jpg",
    alt: "The Kanaan camping ground — open grass shaded by forty-year-old mango trees, room for tents and rooftop campers.",
    width: 1600,
    height: 1200,
  },
  campfire: {
    src: "/images/on-farm-view.jpg",
    alt: "The view from the stone braai terrace at Kanaan — brick paving, a built-in fire, and the Lowveld escarpment beyond.",
    width: 1600,
    height: 1200,
  },
  hiking: {
    src: "/images/landscape.jpg",
    alt: "The Lowveld around Kanaan — smooth rock outcrops, valley forest and farmland rolling toward the escarpment.",
    width: 1600,
    height: 920,
  },
  mtb: {
    src: "/images/landscape.jpg",
    alt: "The trails around Kanaan run through Lowveld bushveld and over weathered rock — terrain for hiking and mountain biking.",
    width: 1600,
    height: 920,
  },
  kruger: {
    src: "/images/kruger-elephant.jpg",
    alt: "An elephant by a waterhole near Kruger — the park's Phabeni and Numbi gates are 30–45 minutes from the farm.",
    width: 1600,
    height: 1600,
  },
  panorama: {
    src: "/images/panorama-rondavels.jpg",
    alt: "The Three Rondavels on the Panorama Route — a viewpoint over the Blyde River Canyon, about ninety minutes from Kanaan.",
    width: 1200,
    height: 1200,
  },
  sabieRiver: {
    src: "/images/sabie-waterfall.jpg",
    alt: "A waterfall in the Sabie waterfall cluster near Hazyview — clear pools and a short forest walk in.",
    width: 1200,
    height: 1600,
  },
  groups: {
    src: "/images/on-farm-view.jpg",
    alt: "The terrace at Kanaan — set up for an evening gathering, with the Lowveld escarpment in the distance.",
    width: 1600,
    height: 1200,
  },
  hosts: {
    src: "/images/hosts.jpg",
    alt: "Anneli and Matthew — owners of Kanaan Guest Farm since August 2025.",
    width: 1600,
    height: 1400,
  },
  pillows: {
    src: "/images/kanaan-pillows.jpg",
    alt: "Crisp white pillows embroidered with the Kanaan name on an ochre throw — a detail from a lodge room.",
    width: 1200,
    height: 1200,
  },
  ogDefault: {
    src: "/images/og-default.jpg",
    alt: "Kanaan Guest Farm — Hazyview, near Kruger National Park.",
    width: 1200,
    height: 630,
  },
} as const;
