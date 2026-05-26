// Real photographs of Kanaan Guest Farm. Sources sit in /public/images/ and
// are served directly by Next.js — no remote image host needed.
//
// Photos curated from the owners' Drive (Old Mangos + Rooms IMG_488x batch +
// Camp Site + the waterfall on the property + Old dam) and converted from
// HEIC -> JPG by scripts/convert-photos.py. Every slot below maps to a
// distinct file — no shared images between slots.
//
// Slots still using placeholders (no finished photo yet, May 2026):
//   - kruger / panorama / sabieRiver (third-party regional context shots)
//   - hosts       (no real Anneli & Matthew portrait yet)
//   - groups      (no wedding photos yet — Gemini brief in conversation)

export type Img = { src: string; alt: string; width: number; height: number };

export const img = {
  // ---- Hero / mango grove ----------------------------------------------
  heroFarm: {
    src: "/images/hero-mango-grove.jpg",
    alt: "The forty-year-old mango grove at Kanaan Guest Farm, Hazyview — long rows of dappled shade where the camping ground sits in summer.",
    width: 1200,
    height: 1600,
  },
  pillows: {
    src: "/images/mango-detail.jpg",
    alt: "A closer view through the mango trees at Kanaan, framing the green Lowveld valley beyond.",
    width: 1200,
    height: 1600,
  },
  mangoRoad: {
    src: "/images/mango-road.jpg",
    alt: "The dirt road winding through the mango grove at Kanaan — the entrance lane travellers turn onto from the R40.",
    width: 1200,
    height: 1600,
  },

  // ---- Lodge interiors (post-renovation IMG_488x batch) ----------------
  lodgeRoom: {
    src: "/images/lodge-room.jpg",
    alt: "A double room in a renovated lodge unit at Kanaan — crisp white linen, wooden ceiling with exposed beams, ceiling fan and a wall-mounted TV.",
    width: 1200,
    height: 1600,
  },
  twinRoom: {
    src: "/images/twin-room.jpg",
    alt: "A twin room at Kanaan — two single beds with scalloped wooden headboards, neutral linen, a big window looking onto the trees.",
    width: 1200,
    height: 1600,
  },
  lodgeMultiBed: {
    src: "/images/lodge-multi-bed.jpg",
    alt: "A larger lodge unit at Kanaan — two beds, a small dining table and chairs, sliding pine-clad bathroom door, polished concrete floor.",
    width: 1200,
    height: 1600,
  },
  lodgeTwinSuite: {
    src: "/images/lodge-twin-suite.jpg",
    alt: "An open-plan lodge suite at Kanaan — two beds, a dining nook and a glimpse through to the en-suite bathroom.",
    width: 1200,
    height: 1600,
  },
  lodgeBedroomEnsuite: {
    src: "/images/lodge-bedroom-ensuite.jpg",
    alt: "A renovated lodge bedroom at Kanaan with the en-suite shower visible through the doorway — wooden ceiling, soft linen, a small rug at the foot of the bed.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchen: {
    src: "/images/lodge-kitchen.jpg",
    alt: "The self-catering kitchenette in a Kanaan lodge unit — tiled counters, two-plate hob, microwave, kettle, fridge and a small dining table beside a red-checked curtained window.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchenette: {
    src: "/images/lodge-kitchenette-18.jpg",
    alt: "The dining nook of a self-catering lodge unit at Kanaan, with two wall fans and the door to bedroom 18 just beyond.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchenWood: {
    src: "/images/lodge-kitchen-wood.jpg",
    alt: "A self-catering kitchenette at Kanaan, with a hand-built wooden sideboard under the window and a dining table opposite.",
    width: 1200,
    height: 1600,
  },
  lodgeDining: {
    src: "/images/lodge-dining-wood.jpg",
    alt: "The dining corner of a lodge unit at Kanaan — wooden-beamed ceiling, a microwave and two-plate hob on a wooden sideboard, soft linen curtains.",
    width: 1200,
    height: 1600,
  },
  lodgeBathroom: {
    src: "/images/lodge-bathroom.jpg",
    alt: "An en-suite bathroom in a renovated Kanaan lodge unit — concrete-finish walls, walk-in glass shower, vessel basin on a concrete vanity, wooden-framed mirror.",
    width: 1200,
    height: 1600,
  },
  lodgeBathroomPine: {
    src: "/images/lodge-bathroom-pine.jpg",
    alt: "A second style of bathroom in a Kanaan lodge unit — pine-clad sliding door onto a concrete walk-in shower, with a small pedestal sink beside it.",
    width: 1200,
    height: 1600,
  },
  veranda: {
    src: "/images/lodge-veranda.jpg",
    alt: "The front of a lodge unit at Kanaan — a brick-paved patio, a built-in braai under shade, and the bushveld just beyond.",
    width: 1600,
    height: 1200,
  },

  // ---- Camping --------------------------------------------------------
  campingMango: {
    src: "/images/camping-mango.jpg",
    alt: "The Kanaan camping ground — open grass under the shade of forty-year-old mango trees, with room for tents, rooftop tents and small campers.",
    width: 1600,
    height: 1200,
  },
  campfire: {
    src: "/images/campfire-terrace.jpg",
    alt: "Open grass at Kanaan's camp site, ringed by old mango trees — the gathering spot for evening braais under the stars.",
    width: 1600,
    height: 1200,
  },

  // ---- The land: waterfall, valley views, trails -----------------------
  // The smooth rock pool / waterfall shot is the place Matthew took
  // Anneli on his birthday — referenced directly in /blog/the-discovery.
  waterfall: {
    src: "/images/waterfall.jpg",
    alt: "The waterfall on Kanaan — smooth rock shelves and a clear pool spilling over the edge with the Lowveld valley stretching out below.",
    width: 1600,
    height: 1200,
  },
  hiking: {
    src: "/images/lowveld-view.jpg",
    alt: "The Lowveld around Kanaan — smooth rock outcrops giving way to valley forest and farmland rolling toward the escarpment, a natural place for slow walks.",
    width: 1600,
    height: 1200,
  },
  mtb: {
    src: "/images/trail-cabin.jpg",
    alt: "A rustic wooden cabin on a hillside above Kanaan — the kind of view that opens up on the farm's hiking and mountain-biking trails.",
    width: 1600,
    height: 1200,
  },
  trailView: {
    src: "/images/lowveld-path.jpg",
    alt: "A dirt path winding past a small wooden cabin at Kanaan, with the Lowveld escarpment opening out in the distance.",
    width: 1200,
    height: 1600,
  },

  // ---- Context shots (third-party / regional, unchanged) ---------------
  kruger: {
    src: "/images/kruger-elephant.jpg",
    alt: "An elephant by a waterhole near Kruger — the park's Phabeni and Numbi gates are 30–45 minutes from Kanaan.",
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

  // ---- Placeholders (awaiting real photos) ----------------------------
  // Pool: still mid-renovation in source shots. Using a distinct dining
  // detail until final pool photography lands.
  pool: {
    src: "/images/lodge-dining-wood.jpg",
    alt: "A quiet corner of a lodge unit at Kanaan — wooden-beamed ceiling, soft linen curtains, a sense of the slowness that runs through the farm. (Pool photography refreshes once the pool work completes.)",
    width: 1200,
    height: 1600,
  },
  // Backpackers: wooden-house dorm is still being finished. Using the
  // multi-bed lodge unit until the real dorm photo arrives.
  backpackers: {
    src: "/images/lodge-multi-bed.jpg",
    alt: "A larger room at Kanaan with multiple beds — the kind of layout we host groups in while the wooden-house dorm is being finished.",
    width: 1200,
    height: 1600,
  },
  backpackersBathroom: {
    src: "/images/lodge-bathroom-pine.jpg",
    alt: "A bathroom at Kanaan — concrete-finish walls, walk-in shower behind a pine sliding door. (Dedicated backpacker bathroom photography arrives with the wooden-house dorm opening.)",
    width: 1200,
    height: 1600,
  },
  // Wedding / gathering — the ceremony-under-mangos shot doubles as the
  // generic "groups" image; richer wedding-specific set sits under `wedding`
  // below.
  groups: {
    src: "/images/wedding-ceremony-mango.jpg",
    alt: "A wedding ceremony at Kanaan Guest Farm — rows of white chairs under the canopy of the forty-year-old mango grove, an arch of dried grass at the altar.",
    width: 1600,
    height: 900,
  },
  hosts: {
    src: "/images/hosts.jpg",
    alt: "Anneli and Matthew — owners of Kanaan Guest Farm since August 2025.",
    width: 1600,
    height: 1400,
  },

  // ---- Open Graph / share image ---------------------------------------
  ogDefault: {
    src: "/images/og-default.jpg",
    alt: "Kanaan Guest Farm — Hazyview, near Kruger National Park.",
    width: 1600,
    height: 1200,
  },
} as const;

// ---------------------------------------------------------------------
// Wedding photography — used on /weddings and home page Chapter 5.
// ---------------------------------------------------------------------
export const wedding = {
  ceremony: {
    src: "/images/wedding-ceremony-mango.jpg",
    alt: "A wedding ceremony at Kanaan Guest Farm — rows of white chairs under the canopy of the forty-year-old mango grove, an arch of dried grass at the altar.",
    width: 1600,
    height: 900,
  },
  reception: {
    src: "/images/wedding-reception-table.jpg",
    alt: "A long-table wedding reception at Kanaan, lit by strings of warm Edison bulbs strung between the mango trees, with the Lowveld escarpment visible in the twilight beyond.",
    width: 1600,
    height: 1200,
  },
  tableDetail: {
    src: "/images/wedding-table-detail.jpg",
    alt: "A close-up of a wedding table setting at Kanaan — a ceramic plate with jasmine and a dried protea, a handwritten place card, a beeswax taper candle in a clay holder.",
    width: 1200,
    height: 1500,
  },
  firstDance: {
    src: "/images/wedding-first-dance.jpg",
    alt: "First dance at a Kanaan wedding — the couple in soft silhouette under strings of warm Edison bulbs, the Milky Way overhead and the mango grove in dark profile behind them.",
    width: 1600,
    height: 900,
  },
  morningAfter: {
    src: "/images/wedding-morning-after.jpg",
    alt: "A long Sunday-morning breakfast table on Kanaan's wedding lawn, under the dappled shade of mango trees, set with South African breakfast plates and the Lowveld escarpment in the distance.",
    width: 1600,
    height: 900,
  },
} as const;

// ---------------------------------------------------------------------
// Property B-roll videos. H.264 MP4, 1280px max, silent, web-optimised.
// Use with <video autoPlay muted loop playsInline poster={...} />.
// Converted from raw Drive footage by scripts/convert-videos.py.
// ---------------------------------------------------------------------
export type Vid = {
  src: string;
  alt: string;
  poster: string; // path to a still that should already be in /images/
};

export const video = {
  mangoGrove: {
    src: "/videos/mango-grove.mp4",
    alt: "A walk through the mango grove at Kanaan Guest Farm.",
    poster: "/images/hero-mango-grove.jpg",
  },
  lodgeWalk: {
    src: "/videos/lodge-walk.mp4",
    alt: "A walk-through of a renovated lodge unit at Kanaan.",
    poster: "/images/lodge-room.jpg",
  },
  lodgeRoomWalk: {
    src: "/videos/lodge-room-walk.mp4",
    alt: "Inside a renovated lodge bedroom at Kanaan.",
    poster: "/images/lodge-bedroom-ensuite.jpg",
  },
} as const;