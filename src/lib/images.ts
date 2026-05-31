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
  // The sun setting through the forty-year-old mango grove. The original
  // is portrait — sun sits mid-frame — so a center-gravity 16:9 crop
  // gives the cinematic hero band: tree canopy framing the sun and the
  // Lowveld hills behind.
  heroFarm: {
    src: cldImage(
      "mango-sunset",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "Sunset through the forty-year-old mango grove at Kanaan, the sun dropping behind the Lowveld hills.",
    width: 1920,
    height: 1080,
  },
  pillows: {
    src: cldImage("mango-detail"),
    alt: "A closer view through the mango trees at Kanaan, framing the green Lowveld valley beyond.",
    width: 1200,
    height: 1600,
  },
  // ---- Wider farm: macadamia grove, wildflowers, the further land ----
  macGrove: {
    src: cldImage("mac-grove"),
    alt: "The macadamia grove on Kanaan — rows of newly-planted young trees stretching toward the Lowveld escarpment.",
    width: 1200,
    height: 1600,
  },
  macGroveFramed: {
    src: cldImage("mac-grove-framed"),
    alt: "Looking out over Kanaan's macadamia grove, framed by the branches of an old tree on the boundary.",
    width: 1200,
    height: 1600,
  },
  lowveldWildflowers: {
    src: cldImage("lowveld-wildflowers"),
    alt: "Wildflowers and tall grass on the wider Kanaan farm, with the rolling hills of the Lowveld opening out beyond.",
    width: 1200,
    height: 1600,
  },
  goldenShed: {
    src: cldImage("golden-shed"),
    alt: "Golden-hour light over an outpost shed on Kanaan, with the macadamia rows and Lowveld valley stretching away below.",
    width: 1200,
    height: 1600,
  },
  goldenVista: {
    src: cldImage("golden-vista"),
    alt: "Golden hour on the rocky outcrop above Kanaan, with the Lowveld valley and farms running all the way to the escarpment.",
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
  // Currently UNUSED on the live site. Kept as Cloudinary pointers so we
  // can drop them back in if we ever need a literal Kruger / Panorama /
  // Sabie shot, but every page now uses real Kanaan photography instead.
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

  // ---- Pool — now a real on-property shot --------------------------
  // The original portrait has surface debris and a worker on the right
  // edge, so the delivery URL takes a top-heavy 4:3 crop: keeps the
  // palms, the brick-paved edge and the morning light, drops most of
  // the water surface.
  pool: {
    src: cldImage(
      "pool-palms",
      "f_auto,q_auto,c_fill,g_north,ar_4:3,w_1600",
    ),
    alt: "The pool at Kanaan in the morning — palm trees overhead, the brick-paved edge below.",
    width: 1600,
    height: 1200,
  },

  // ---- Placeholders (awaiting real photos) ----------------------------
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
    src: cldImage("campfire-terrace"),
    alt: "Open grass at Kanaan ringed by the forty-year-old mango grove — the kind of space that takes a wedding lawn, a long reception table or a school camp equally well.",
    width: 1600,
    height: 1200,
  },
  hosts: {
    // The real Anneli & Matthew portrait — a candid couple shot on the
    // dam with the Lowveld behind them. Stays as the canonical "hosts"
    // slot across the site.
    src: cldImage("hosts"),
    alt: "Anneli and Matthew — owners of Kanaan Guest Farm since August 2025 — on the dam, laughing, the Lowveld behind them.",
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
// Currently UNUSED on the live site — the AI-generated wedding set was
// pulled from /weddings, the home page Chapter 5 and the groups slot in
// favour of real Kanaan venue photography. These exports remain so we
// can wire real wedding photos straight into the same slots once Anneli
// sends through the April-wedding shoot.
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
  propertyTour: {
    src: cldVideo("property-tour"),
    alt: "A wider look around Kanaan Guest Farm — the mango grove, the lodge units and the Lowveld around them.",
    poster: cldVideoPoster("property-tour"),
  },
  poolTour: {
    src: cldVideo("pool-tour"),
    alt: "A walk past the pool area at Kanaan — the next big project on the list after the lodge rooms.",
    poster: cldVideoPoster("pool-tour"),
  },
  // ---- Tour segments cut from the long Matthew-narrated walk-through ----
  tourMacGrove: {
    src: cldVideo("tour-mac-grove"),
    alt: "Matthew in the macadamia grove at Kanaan, the Lowveld valley behind him in golden hour.",
    poster: cldVideoPoster("tour-mac-grove"),
  },
  tourVenue: {
    src: cldVideo("tour-venue"),
    alt: "Matthew walking through the covered wedding-lawn area at Kanaan — the indoor venue, big enough for a marquee evening.",
    poster: cldVideoPoster("tour-venue"),
  },
  tourCamping: {
    src: cldVideo("tour-camping"),
    alt: "A walk through the camping ground at Kanaan, under the forty-year-old mango grove.",
    poster: cldVideoPoster("tour-camping"),
  },
  tourLodgeUnit: {
    src: cldVideo("tour-lodge-unit"),
    alt: "Matthew walking past one of the renovated lodge units at Kanaan, talking through what is new about it.",
    poster: cldVideoPoster("tour-lodge-unit"),
  },
} as const;