// Curated Unsplash images used as placeholders. Each entry documents the slot
// it fills so the property's real photographs can be swapped in later. Replace
// the `src` URLs with `/images/<filename>.jpg` once originals are placed in
// /public/images.

export type Img = { src: string; alt: string; width: number; height: number };

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const img = {
  heroFarm: {
    src: u("photo-1547471080-7cc2caa01a7e"),
    alt: "Sunset over the Lowveld bushveld near Hazyview, with golden grass and acacia trees.",
    width: 1600,
    height: 1067,
  },
  pool: {
    src: u("photo-1540541338287-41700207dee6"),
    alt: "Swimming pool surrounded by garden lawn at a countryside guest farm.",
    width: 1600,
    height: 1067,
  },
  lodgeRoom: {
    src: u("photo-1505693416388-ac5ce068fe85"),
    alt: "Simple, calm en-suite bedroom with neutral linen at a self-catering lodge unit.",
    width: 1600,
    height: 1067,
  },
  lodgeKitchen: {
    src: u("photo-1556909114-f6e7ad7d3136"),
    alt: "Compact self-catering kitchenette with kettle, hob and crockery.",
    width: 1600,
    height: 1067,
  },
  veranda: {
    src: u("photo-1505691938895-1758d7feb511"),
    alt: "Shaded veranda overlooking countryside greenery at golden hour.",
    width: 1600,
    height: 1067,
  },
  backpackers: {
    src: u("photo-1520250497591-112f2f40a3f4"),
    alt: "Bunk beds in a relaxed backpackers dorm with wooden floors and warm light.",
    width: 1600,
    height: 1067,
  },
  campingMango: {
    src: u("photo-1504280390367-361c6d9f38f4"),
    alt: "Tent pitched in dappled shade under large trees at a campsite.",
    width: 1600,
    height: 1067,
  },
  campfire: {
    src: u("photo-1478131143081-80f7f84ca84d"),
    alt: "Campfire glowing at dusk with starlight overhead in the African bushveld.",
    width: 1600,
    height: 1067,
  },
  hiking: {
    src: u("photo-1551632811-561732d1e306"),
    alt: "Hiker on a Lowveld mountain trail with sweeping bushveld views.",
    width: 1600,
    height: 1067,
  },
  mtb: {
    src: u("photo-1485965120184-e220f721d03e"),
    alt: "Mountain biker on a single-track trail through grassland.",
    width: 1600,
    height: 1067,
  },
  kruger: {
    src: u("photo-1516426122078-c23e76319801"),
    alt: "African elephants crossing a road at sunset in Kruger National Park.",
    width: 1600,
    height: 1067,
  },
  panorama: {
    src: u("photo-1591967833506-fe1eb2f5e7df"),
    alt: "Cliffs and forested gorges of the Panorama Route near Graskop, Mpumalanga.",
    width: 1600,
    height: 1067,
  },
  sabieRiver: {
    src: u("photo-1518173946687-a4c8892bbd9f"),
    alt: "River winding through subtropical greenery in the Lowveld.",
    width: 1600,
    height: 1067,
  },
  groups: {
    src: u("photo-1529390079861-591de354faf5"),
    alt: "Group of friends sharing a meal outdoors at a long wooden table.",
    width: 1600,
    height: 1067,
  },
  hosts: {
    src: u("photo-1469854523086-cc02fe5d8800"),
    alt: "Warm, hospitable farmhouse setting with morning light.",
    width: 1600,
    height: 1067,
  },
  ogDefault: {
    src: u("photo-1547471080-7cc2caa01a7e", 1200),
    alt: "Kanaan Guest Farm — Hazyview, near Kruger National Park.",
    width: 1200,
    height: 630,
  },
} as const;
