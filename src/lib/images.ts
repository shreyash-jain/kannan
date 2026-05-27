// Photographs and videos of Kanaan Guest Farm, served from Cloudinary.
//
// Originals live under the kanaan/ folder of the dn9snfizy cloud and are
// uploaded by scripts/upload-to-cloudinary.py. Every URL goes through
// f_auto + q_auto so the CDN picks the optimal format and quality per
// device.
//
// Slots still using placeholders (no finished photo yet, May 2026):
//   - pool / backpackers / backpackersBathroom (mid-renovation)
//   - hosts (no real Anneli & Matthew portrait yet)

import { cldImage, cldVideo, cldVideoPoster } from "./cloudinary";

export type Img = { src: string; alt: string; width: number; height: number };

export const img = {
  // ---- Hero / mango grove ----------------------------------------------
  heroFarm: {
    src: cldImage("hero-mango-grove"),
    alt: "The forty-year-old mango grove at Kanaan Guest Farm, Hazyview — long rows of dappled shade where the camping ground sits in summer.",
    width: 1200,
    height: 1600,
  },
  pillows: {
    src: cldImage("mango-detail"),
    alt: "A closer view through the mango trees at Kanaan, framing the green Lowveld valley beyond.",
    width: 1200,
    height: 1600,
  },
  mangoRoad: {
    src: cldImage("mango-road"),
    alt: "The dirt road winding through the mango grove at Kanaan — the entrance lane travellers turn onto from the R40.",
    width: 1200,
    height: 1600,
  },

  // ---- Lodge interiors (post-renovation IMG_488x batch) ----------------
  lodgeRoom: {
    src: cldImage("lodge-room"),
    alt: "A double room in a renovated lodge unit at Kanaan — crisp white linen, wooden ceiling with exposed beams, ceiling fan and a wall-mounted TV.",
    width: 1200,
    height: 1600,
  },
  twinRoom: {
    src: cldImage("twin-room"),
    alt: "A twin room at Kanaan — two single beds with scalloped wooden headboards, neutral linen, a big window looking onto the trees.",
    width: 1200,
    height: 1600,
  },
  lodgeMultiBed: {
    src: cldImage("lodge-multi-bed"),
    alt: "A larger lodge unit at Kanaan — two beds, a small dining table and chairs, sliding pine-clad bathroom door, polished concrete floor.",
    width: 1200,
    height: 1600,
  },
  lodgeTwinSuite: {
    src: cldImage("lodge-twin-suite"),
    alt: "An open-plan lodge suite at Kanaan — two beds, a dining nook and a glimpse through to the en-suite bathroom.",
    width: 1200,
    height: 1600,
  },
  lodgeBedroomEnsuite: {
    src: cldImage("lodge-bedroom-ensuite"),
    alt: "A renovated lodge bedroom at Kanaan with the en-suite shower visible through the doorway — wooden ceiling, soft linen, a small rug at the foot of the bed.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchen: {
    src: cldImage("lodge-kitchen"),
    alt: "The self-catering kitchenette in a Kanaan lodge unit — tiled counters, two-plate hob, microwave, kettle, fridge and a small dining table beside a red-checked curtained window.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchenette: {
    src: cldImage("lodge-kitchenette-18"),
    alt: "The dining nook of a self-catering lodge unit at Kanaan, with two wall fans and the door to bedroom 18 just beyond.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchenWood: {
    src: cldImage("lodge-kitchen-wood"),
    alt: "A self-catering kitchenette at Kanaan, with a hand-built wooden sideboard under the window and a dining table opposite.",
    width: 1200,
    height: 1600,
  },
  lodgeDining: {
    src: cldImage("lodge-dining-wood"),
    alt: "The dining corner of a lodge unit at Kanaan — wooden-beamed ceiling, a microwave and two-plate hob on a wooden sideboard, soft linen curtains.",
    width: 1200,
    height: 1600,
  },
  lodgeBathroom: {
    src: cldImage("lodge-bathroom"),
    alt: "An en-suite bathroom in a renovated Kanaan lodge unit — concrete-finish walls, walk-in glass shower, vessel basin on a concrete vanity, wooden-framed mirror.",
    width: 1200,
    height: 1600,
  },
  lodgeBathroomPine: {
    src: cldImage("lodge-bathroom-pine"),
    alt: "A second style of bathroom in a Kanaan lodge unit — pine-clad sliding door onto a concrete walk-in shower, with a small pedestal sink beside it.",
    width: 1200,
    height: 1600,
  },
  veranda: {
    src: cldImage("lodge-veranda"),
    alt: "The front of a lodge unit at Kanaan — a brick-paved patio, a built-in braai under shade, and the bushveld just beyond.",
    width: 1600,
    height: 1200,
  },

  // ---- Camping --------------------------------------------------------
  campingMango: {
    src: cldImage("camping-mango"),
    alt: "The Kanaan camping ground — open grass under the shade of forty-year-old mango trees, with room for tents, rooftop tents and small campers.",
    width: 1600,
    height: 1200,
  },
  campfire: {
    src: cldImage("campfire-terrace"),
    alt: "Open grass at Kanaan's camp site, ringed by old mango trees — the gathering spot for evening braais under the stars.",
    width: 1600,
    height: 1200,
  },

  // ---- The land: waterfall, valley views, trails -----------------------
  waterfall: {
    src: cldImage("waterfall"),
    alt: "The waterfall on Kanaan — smooth rock shelves and a clear pool spilling over the edge with the Lowveld valley stretching out below.",
    width: 1600,
    height: 1200,
  },
  hiking: {
    src: cldImage("lowveld-view"),
    alt: "The Lowveld around Kanaan — smooth rock outcrops giving way to valley forest and farmland rolling toward the escarpment, a natural place for slow walks.",
    width: 1600,
    height: 1200,
  },
  mtb: {
    src: cldImage("trail-cabin"),
    alt: "A rustic wooden cabin on a hillside above Kanaan — the kind of view that opens up on the farm's hiking and mountain-biking trails.",
    width: 1600,
    height: 1200,
  },
  trailView: {
    src: cldImage("lowveld-path"),
    alt: "A dirt path winding past a small wooden cabin at Kanaan, with the Lowveld escarpment opening out in the distance.",
    width: 1200,
    height: 1600,
  },

  // ---- Context shots (third-party / regional) --------------------------
  kruger: {
    src: cldImage("kruger-elephant"),
    alt: "An elephant by a waterhole near Kruger — the park's Phabeni and Numbi gates are 30–45 minutes from Kanaan.",
    width: 1600,
    height: 1600,
  },
  panorama: {
    src: cldImage("panorama-rondavels"),
    alt: "The Three Rondavels on the Panorama Route — a viewpoint over the Blyde River Canyon, about ninety minutes from Kanaan.",
    width: 1200,
    height: 1200,
  },
  sabieRiver: {
    src: cldImage("sabie-waterfall"),
    alt: "A waterfall in the Sabie waterfall cluster near Hazyview — clear pools and a short forest walk in.",
    width: 1200,
    height: 1600,
  },

  // ---- Placeholders (awaiting real photos) ----------------------------
  pool: {
    src: cldImage("lodge-dining-wood"),
    alt: "A quiet corner of a lodge unit at Kanaan — wooden-beamed ceiling, soft linen curtains, a sense of the slowness that runs through the farm. (Pool photography refreshes once the pool work completes.)",
    width: 1200,
    height: 1600,
  },
  backpackers: {
    src: cldImage("lodge-multi-bed"),
    alt: "A larger room at Kanaan with multiple beds — the kind of layout we host groups in while the wooden-house dorm is being finished.",
    width: 1200,
    height: 1600,
  },
  backpackersBathroom: {
    src: cldImage("lodge-bathroom-pine"),
    alt: "A bathroom at Kanaan — concrete-finish walls, walk-in shower behind a pine sliding door. (Dedicated backpacker bathroom photography arrives with the wooden-house dorm opening.)",
    width: 1200,
    height: 1600,
  },
  groups: {
    src: cldImage("wedding-ceremony-mango"),
    alt: "A wedding ceremony at Kanaan Guest Farm — rows of white chairs under the canopy of the forty-year-old mango grove, an arch of dried grass at the altar.",
    width: 1600,
    height: 900,
  },
  hosts: {
    src: cldImage("hosts"),
    alt: "Anneli and Matthew — owners of Kanaan Guest Farm since August 2025.",
    width: 1600,
    height: 1400,
  },

  // ---- Open Graph / share image ---------------------------------------
  ogDefault: {
    src: cldImage("og-default"),
    alt: "Kanaan Guest Farm — Hazyview, near Kruger National Park.",
    width: 1600,
    height: 1200,
  },
} as const;

// ---------------------------------------------------------------------
// Wedding photography
// ---------------------------------------------------------------------
export const wedding = {
  ceremony: {
    src: cldImage("wedding-ceremony-mango"),
    alt: "A wedding ceremony at Kanaan Guest Farm — rows of white chairs under the canopy of the forty-year-old mango grove, an arch of dried grass at the altar.",
    width: 1600,
    height: 900,
  },
  reception: {
    src: cldImage("wedding-reception-table"),
    alt: "A long-table wedding reception at Kanaan, lit by strings of warm Edison bulbs strung between the mango trees, with the Lowveld escarpment visible in the twilight beyond.",
    width: 1600,
    height: 1200,
  },
  tableDetail: {
    src: cldImage("wedding-table-detail"),
    alt: "A close-up of a wedding table setting at Kanaan — a ceramic plate with jasmine and a dried protea, a handwritten place card, a beeswax taper candle in a clay holder.",
    width: 1200,
    height: 1500,
  },
  firstDance: {
    src: cldImage("wedding-first-dance"),
    alt: "First dance at a Kanaan wedding — the couple in soft silhouette under strings of warm Edison bulbs, the Milky Way overhead and the mango grove in dark profile behind them.",
    width: 1600,
    height: 900,
  },
  morningAfter: {
    src: cldImage("wedding-morning-after"),
    alt: "A long Sunday-morning breakfast table on Kanaan's wedding lawn, under the dappled shade of mango trees, set with South African breakfast plates and the Lowveld escarpment in the distance.",
    width: 1600,
    height: 900,
  },
} as const;

// ---------------------------------------------------------------------
// Property B-roll videos — Cloudinary auto-format, auto-quality MP4.
// Posters are JPGs Cloudinary derives from the first frame.
// ---------------------------------------------------------------------
export type Vid = { src: string; alt: string; poster: string };

export const video = {
  mangoGrove: {
    src: cldVideo("mango-grove"),
    alt: "A walk through the mango grove at Kanaan Guest Farm.",
    poster: cldVideoPoster("mango-grove"),
  },
  lodgeWalk: {
    src: cldVideo("lodge-walk"),
    alt: "A walk-through of a renovated lodge unit at Kanaan.",
    poster: cldVideoPoster("lodge-walk"),
  },
  lodgeRoomWalk: {
    src: cldVideo("lodge-room-walk"),
    alt: "Inside a renovated lodge bedroom at Kanaan.",
    poster: cldVideoPoster("lodge-room-walk"),
  },
} as const;