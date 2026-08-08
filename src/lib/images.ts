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
  // ---- HOME HERO / FARM LANDSCAPE ----------------------------------------
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

  // ---- UNDER THE MANGO TREES — dedicated story hero (Blog 6) --------------
  // Signature hero for /blog/under-the-mango-trees. The dedicated frame was
  // generated 1:1 (square), so generative-fill extends it outward to a true
  // 16:9 hero (keeps the full canopy arch + the chair) instead of centre-
  // cropping the composition away. Swap to c_fill if a native 16:9 source lands.
  underMangoTreesHero: {
    src: cldImage(
      "under-mango-trees-hero",
      // Source render is square (1:1). Generative-fill extends it outward to a
      // true 16:9 hero (keeps the full canopy arch + the chair) instead of
      // centre-cropping the composition away. Swap back to c_fill if a native
      // 16:9 source is ever generated.
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "The forty-year-old mango grove at Kanaan in golden afternoon light — the oldest thing on the farm, and the reason there is a farm at all.",
    width: 1920,
    height: 1080,
  },

  // ---- THE-LAND SECTION ---------------------------------------------------
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

  // ---- WEDDINGS / EVENTS --------------------------------------------------
  venueCovered: {
    src: cldImage("venue-covered"),
    alt: "The covered entertainment area at Kanaan — long tables, chairs and an open view across the Lowveld valley.",
    width: 1500,
    height: 1000,
  },
  venueTables: {
    src: cldImage("venue-tables"),
    alt: "The Kanaan venue from the other side — bar tables, picnic seating and a games area, all under the covered roof.",
    width: 1500,
    height: 1000,
  },
  viewpointGazebo: {
    src: cldImage("viewpoint-gazebo"),
    alt: "The picnic gazebo at the viewpoint above Kanaan — a thatch roof, two picnic tables and the Lowveld valley opening out beyond.",
    width: 1500,
    height: 1000,
  },

  // ---- ACCOMMODATION / LODGE EXTERIORS ------------------------------------
  campingTents: {
    src: cldImage("camping-tents"),
    alt: "Tents pitched at Kanaan under the forty-year-old mango grove — a vehicle, a motorbike and the open lawn beyond.",
    width: 1500,
    height: 1000,
  },
  // ---- Lodge unit with bougainvillea (a charming exterior) ----------
  lodgeBougainvillea: {
    src: cldImage("lodge-bougainvillea"),
    alt: "A lodge unit at Kanaan with cascading pink bougainvillea — door number 4, white walls, a small patio with garden chairs.",
    width: 1200,
    height: 1600,
  },

  // ---- LODGE INTERIORS (post-renovation) ----------------------------------
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
  lodgeModestDouble: {
    src: cldImage("lodge-modest-double"),
    alt: "A lodge unit at Kanaan with a double bed, ceiling fan and wooden-beamed ceiling — fresh white linen, polished concrete floor, a window onto the trees.",
    width: 1200,
    height: 1600,
  },
  lodgeFamilyTwin: {
    src: cldImage("lodge-family-twin"),
    alt: "A larger family room at Kanaan with two single beds, a ceiling fan, tiled floor and a wooden-beamed ceiling — the layout we put a family or a group in.",
    width: 1200,
    height: 1600,
  },
  lodgeDoubleDecorated: {
    src: cldImage("lodge-double-decorated"),
    alt: "A double room at Kanaan with patterned bedding, a wardrobe, ceiling fan and two windows onto the bush — folded towels arranged on the bed for arrival.",
    width: 1200,
    height: 1600,
  },
  lodgeKitchenClassic: {
    src: cldImage("lodge-kitchen-classic"),
    alt: "A self-catering kitchenette in a Kanaan lodge unit — wooden cabinets, microwave, kettle, dining table and chairs alongside, tile floor.",
    width: 1200,
    height: 1600,
  },
  lodgeCourtyardPatio: {
    src: cldImage("lodge-courtyard-patio"),
    alt: "The courtyard outside a Kanaan lodge unit — brick-paved patio, white wrought-iron chairs and a small round table under dappled tree shade.",
    width: 1500,
    height: 2000,
  },

  // ---- CAMPING ----------------------------------------------------------------
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
  // ---- Camping — real photos, July 2026 (from Anneli) ---------------
  campingGround: {
    src: cldImage("camping-ground-tent"),
    alt: "The camping ground at Kanaan — open grass in the dappled shade of the forty-year-old mango grove, a tent pitched among the trees.",
    width: 1200,
    height: 1600,
  },
  campingAvenue: {
    src: cldImage("camping-mango-avenue"),
    alt: "An avenue of forty-year-old mango trees over the grassy camping ground at Kanaan, cabins and shade structures glimpsed beyond.",
    width: 1200,
    height: 1600,
  },
  campingAblutions: {
    src: cldImage("camping-ablutions"),
    alt: "Inside the campers' ablution block at Kanaan — a timber washroom with a row of basins and mirrors, and private toilet and shower cubicles behind corrugated-and-wood doors.",
    width: 1600,
    height: 1200,
  },
  campingAblutionsExterior: {
    src: cldImage("camping-ablutions-exterior"),
    alt: "The campers' ablution block at Kanaan seen from outside — a long, low timber building tucked under the mango trees.",
    width: 1600,
    height: 1200,
  },
  campingPowerWater: {
    src: cldImage("camping-power-water"),
    alt: "A campsite at Kanaan with a tap and a power point right at the pitch, in the shade of the old mango trees.",
    width: 1600,
    height: 1200,
  },
  campingWaterTank: {
    src: cldImage("camping-water-tank"),
    alt: "The Kanaan camping ground under the mango grove — mown grass, a water point and tank, with the lodge buildings beyond the trees.",
    width: 1600,
    height: 1200,
  },

  // ---- REAL LOWVELD VIEWS / TRAILS (July 2026, from Anneli) -----------
  hilltopViewpoint: {
    src: cldImage("land-hilltop-viewpoint"),
    alt: "A shady hilltop lookout on the trails above Kanaan — a fire grate on the rocks and the green Lowveld hills rolling away under a soft sky.",
    width: 1600,
    height: 1200,
  },
  rockCascade: {
    src: cldImage("land-rock-cascade"),
    alt: "Water sliding over smooth rock shelves on the high ground above Kanaan, the orchards and hills of the Lowveld opening out beyond in clear morning light.",
    width: 1200,
    height: 1600,
  },
  lowveldViewReal: {
    src: cldImage("land-lowveld-view-real"),
    alt: "The wide Lowveld view from above Kanaan — rolling green bush, banana and macadamia orchards in the valley and hazy blue hills running to the horizon.",
    width: 1600,
    height: 1200,
  },

  // ---- BACKPACKERS / WOODEN-HOUSE DORM (real photos, June 2026) -------
  backpackers: {
    src: cldImage("backpackers-lounge"),
    alt: "The common room of the wooden-house backpacker dorm at Kanaan — vaulted pine ceiling and beams, two long red couches around a polished concrete floor, a dining table with chairs in the middle, a small self-catering kitchenette with sink and microwave along the back wall, and a bed glimpsed through a doorway on the left.",
    width: 2000,
    height: 1500,
  },
  backpackersBeds: {
    src: cldImage("backpackers-three-bed"),
    alt: "Inside one of the wooden-house dorm rooms at Kanaan — three single beds in a row, fresh white linen, towels folded on each bed, pine-clad walls and ceiling, curtained windows looking out into the trees.",
    width: 1500,
    height: 2000,
  },
  backpackersTwin: {
    src: cldImage("backpackers-twin-blue"),
    alt: "A second wooden-house room at Kanaan — two single beds dressed in patterned blue-and-white blankets, towels rolled at the foot of each bed, pine walls and curtained windows.",
    width: 1500,
    height: 1200,
  },
  backpackersBunk: {
    src: cldImage("backpackers-bunk-bed"),
    alt: "A bunk-bed room in the wooden-house dorm at Kanaan — a sturdy wooden bunk with a ladder up to the top mattress, a single bed alongside, a wall fan and a curtained window onto the bush.",
    width: 1500,
    height: 1200,
  },
  backpackersWide: {
    src: cldImage("backpackers-wide"),
    alt: "A wider view inside the wooden-house backpacker dorm at Kanaan — slatted wooden floors, two single beds in the foreground, a bunk-and-twin room beyond, a glimpse of the lounge through an open door.",
    width: 1500,
    height: 1200,
  },
  backpackersBathroom: {
    src: cldImage("lodge-bathroom-pine"),
    alt: "A bathroom at Kanaan — concrete-finish walls, walk-in shower behind a pine sliding door. (Dedicated backpacker bathroom photography arrives shortly.)",
    width: 1200,
    height: 1600,
  },

  // ---- POOL ---------------------------------------------------------------
  pool: {
    src: cldImage("pool-real"),
    alt: "The pool at Kanaan, fringed by palms and a brick-paved deck.",
    width: 1200,
    height: 1600,
  },
  poolSecond: {
    src: cldImage("pool-second"),
    alt: "The pool at Kanaan from the other side — brick edge, palms, the kids' play structure beyond.",
    width: 1200,
    height: 1500,
  },
  poolSunset: {
    src: cldImage("pool-sunset"),
    alt: "The pool at Kanaan at sunset — brick-paved edge, palms in silhouette, a soft pink and blue sky over the Lowveld beyond.",
    width: 1200,
    height: 1800,
  },

  // ---- ARRIVAL / LANDSCAPE ------------------------------------------------
  gateSign: {
    src: cldImage("gate-sign"),
    alt: "The Kanaan Guest Farm signboard at the front gate — black ironwork, the Hazyview lettering, a flame tree in flower behind it.",
    width: 1200,
    height: 1800,
  },
  lowveldPanorama: {
    src: cldImage("lowveld-panorama"),
    alt: "The wider Lowveld from above Kanaan — rolling green hills, an orchard valley and the escarpment running away to the horizon.",
    width: 1600,
    height: 1200,
  },

  // ---- BLOG CONTEXT SHOTS (third-party / AI-generated) ------------------
  // Used on /blog/africa and /blog/the-discovery to give each section a
  // literal scene shot. Every other page leans on real Kanaan photography.
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
  // --- Panorama Route guide — dedicated Gemini-generated scene shots ---
  // One literal frame per Panorama Route attraction, so the guide never
  // reuses a Kanaan landscape that appears on another page. Generate from
  // the prompts in docs/panorama-image-prompts.md, save each as
  // public/images/<public_id>.jpg, then run scripts/upload-to-cloudinary.py.
  panoramaGodsWindow: {
    src: cldImage(
      "panorama-gods-window",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "The view from God's Window on the Panorama Route — the Drakensberg escarpment dropping nearly a kilometre to the green Lowveld, forested ridges fading into blue haze toward the horizon in clear winter light.",
    width: 1920,
    height: 1080,
  },
  wonderView: {
    src: cldImage("wonder-view"),
    alt: "Wonder View, a quieter viewpoint a minute up the road from God's Window — a lone traveller at a simple cliff-edge railing, looking out over the vast hazy Lowveld with no crowd in sight.",
    width: 1600,
    height: 900,
  },
  macMacFalls: {
    src: cldImage("panorama-mac-mac-falls"),
    alt: "A tall waterfall near Sabie on the Panorama Route — a white cascade dropping down a dark rock face into a deep, lush green forested amphitheatre, fine mist rising at the base.",
    width: 1600,
    height: 900,
  },
  graskopGorgeLift: {
    src: cldImage("graskop-gorge-lift"),
    alt: "The Graskop Gorge — suspended timber-and-steel boardwalks and a swing bridge threading through dense indigenous rainforest on the gorge floor, dappled green light through the canopy, the glass viewing lift on the cliff beyond.",
    width: 1600,
    height: 900,
  },
  bourkesLuck: {
    src: cldImage("bourkes-luck-potholes"),
    alt: "Bourke's Luck Potholes on the Panorama Route — deep, smooth honey-coloured rock cylinders carved by the swirling Treur and Blyde rivers, turquoise pools in the hollows and a small footbridge arcing over the gorge.",
    width: 1600,
    height: 900,
  },
  sabieRiver: {
    src: cldImage("sabie-waterfall"),
    alt: "A waterfall in the Sabie waterfall cluster near Hazyview — clear pools and a short forest walk in.",
    width: 1200,
    height: 1600,
  },
  // --- Seasonal Almanac guide (Blog 3) — dedicated Gemini-generated shots ---
  // One literal frame per season/month beat, so the month-by-month guide
  // never reuses a landscape that appears on another page. Generate from the
  // prompts in docs/blog-3-image-prompts.md, save each as
  // public/images/<public_id>.jpg, then run scripts/upload-to-cloudinary.py.
  // The "comes home to the farm" beat reuses the real img.poolSunset.
  lowveldGreenSeason: {
    src: cldImage(
      "lowveld-green-season",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "The green-summer Lowveld near Hazyview on a mid-afternoon — emerald bushveld and tall grass running to low blue hills, a towering thunderhead building with shafts of light and a full river catching the sun.",
    width: 1920,
    height: 1080,
  },
  krugerWinterWaterhole: {
    src: cldImage("kruger-winter-waterhole"),
    alt: "A dry-winter morning in southern Kruger — elephants and a few zebra drinking at a shrinking waterhole in open, bare, dusty bushveld, leafless trees and golden grass, ground mist in the crisp early light.",
    width: 1600,
    height: 1067,
  },
  panoramaClearWinterView: {
    src: cldImage("panorama-clear-winter-view"),
    alt: "God's Window on a crisp, clear winter morning — sheer forested cliffs dropping nearly a kilometre to the hazy green Lowveld, layered blue ridges receding to the horizon under a clean deep-blue sky.",
    width: 1600,
    height: 900,
  },
  sabieWaterfallFullFlow: {
    src: cldImage("sabie-waterfall-full-flow"),
    alt: "A tall Panorama Route waterfall at full summer flow — a powerful white ribbon dropping down a dark cliff into a green rainforest amphitheatre, mist rising off the plunge pool, dripping ferns and moss.",
    width: 1600,
    height: 1067,
  },
  impalaLambingSummer: {
    src: cldImage("impala-lambing-summer"),
    alt: "Kruger in November — an impala ewe watching over several wobbly newborn lambs in fresh green grass dotted with wildflowers after the first rains, soft side light and a blurred green background.",
    width: 1600,
    height: 1067,
  },
  // --- Family & Kids guide (Blog 4) — dedicated generated shots ----------
  // Only the Hazyview-specific kid scenes with no existing asset are new.
  // Generate from docs/blog-4-image-prompts.md, save public/images/<id>.jpg,
  // then run scripts/upload-to-cloudinary.py. The farm beats reuse real
  // Kanaan photos (poolSecond, campingMango, waterfall, lodgeFamilyTwin,
  // poolSunset) and the Kruger/Panorama beats reuse the Blog 2/3 scene shots
  // (graskopGorgeLift, macMacFalls, krugerWinterWaterhole, impalaLambingSummer).
  familyKrugerKidsHero: {
    src: cldImage(
      "family-kruger-kids-hero",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "A child seen from behind at an open car window on a first Kruger safari, pointing at elephants crossing the road in warm early-morning Lowveld light.",
    width: 1920,
    height: 1080,
  },
  hazyviewZiplines: {
    src: cldImage("hazyview-ziplines-canopy"),
    alt: "A zip-line canopy tour through indigenous forest near Hazyview — a harnessed adventurer gliding between treetop platforms above a green gorge, seen small and from behind.",
    width: 1600,
    height: 1067,
  },
  kidsSafariBinoculars: {
    src: cldImage("kids-safari-binoculars"),
    alt: "A child looking through binoculars from a car window into the golden bushveld on a self-drive Kruger safari, an impala and a giraffe softly blurred in the distance.",
    width: 1600,
    height: 1067,
  },
  // --- Cost / booking-closer guide (Blog 5) — dedicated generated shots ----
  // Four off-farm scene beats with no existing asset. Generate from
  // docs/blog-5-image-prompts.md, save public/images/<id>.jpg, run
  // scripts/upload-to-cloudinary.py. The value/closing beats stay REAL farm
  // photos (lodgeFamilyTwin, lodgeKitchen, poolSunset) — never AI — because the
  // blog's whole argument is "here are the honest numbers and the real R250 bed".
  lowveldWeekCostHero: {
    src: cldImage(
      "lowveld-week-cost-hero",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "A couple stand close together, seen from behind, on a guest-farm veranda at golden hour, looking out over the vast green Lowveld rolling toward the blue Drakensberg escarpment.",
    width: 1920,
    height: 1080,
  },
  n4RoadtripArrival: {
    src: cldImage("n4-roadtrip-arrival"),
    alt: "A dusty family car packed for a week away — luggage in the boot and a loaded roof rack — slowing on an open scenic Mpumalanga highway to turn off onto a red dirt farm road, rolling green hills and the blue Drakensberg in the distance.",
    width: 1600,
    height: 900,
  },
  krugerEntranceGate: {
    src: cldImage("kruger-entrance-gate"),
    alt: "A car waits at the raised red-and-white boom of a thatch-roofed Kruger-style park entrance gate in soft morning light, the tar road curving off into golden bushveld beyond — the point where you pay the conservation fee.",
    width: 1600,
    height: 1067,
  },
  panoramaPinnacleRock: {
    src: cldImage("panorama-pinnacle-rock"),
    alt: "The Pinnacle Rock on the Panorama Route near Graskop — a tall free-standing quartzite spire rising from a deep forested gorge, with green escarpment ridges fading into blue haze behind it in clear winter light.",
    width: 1600,
    height: 900,
  },
  // Gemini-generated context shots — uploaded to the same kanaan/ folder
  // on Cloudinary by scripts/upload-to-cloudinary.py.
  hazyviewEvening: {
    src: cldImage("hazyview-evening"),
    alt: "A warm Lowveld evening near Hazyview — firelight, hand-woven crafts laid out under string lights between mango trees, an elephant browsing peacefully at a respectful distance in the soft middle ground.",
    width: 1600,
    height: 1200,
  },
  argentinaVineyard: {
    src: cldImage("argentina-vineyard"),
    alt: "A Mendoza vineyard at golden hour — rows of mature vines stretching toward the snow-capped Andes, a small adobe finca half-hidden by poplars in the far background.",
    width: 1600,
    height: 900,
  },
  lowveldSunriseRoad: {
    src: cldImage("lowveld-sunrise-road"),
    alt: "A South African Lowveld sunrise on the road toward the Kruger Phabeni gate — a tarred road bending gently through bushveld, mist sitting low in the valley, soft pink-orange sky and the Drakensberg escarpment silhouetted in the far distance.",
    width: 1600,
    height: 1600,
  },
  krugerPicnicCoffee: {
    src: cldImage("kruger-picnic-coffee"),
    alt: "A weathered wooden picnic table in dappled shade in Kruger National Park — a stainless thermos and an enamel cup of coffee on the table beside a folded paper map, the bushveld and a river bend opening out beyond.",
    width: 1500,
    height: 1500,
  },

  // --- First Light dawn-drive guide (Blog 7) — AI dawn scenes -------------
  // Off-farm pre-dawn / in-park scenes no on-site camera can capture, so this
  // guide is AI imagery throughout (the body also reuses lowveldSunriseRoad,
  // krugerEntranceGate, krugerWinterWaterhole, krugerPicnicCoffee). These two
  // slots are PLACEHOLDERS pointing at the closest existing asset so the page
  // renders complete now; generate the dedicated frames from
  // docs/blog-7-image-prompts.md, save as public/images/<public_id>.jpg, run
  // scripts/upload-to-cloudinary.py, then swap each public_id below.
  krugerDawnDriveHero: {
    src: cldImage(
      "kruger-dawn-drive-hero",
      // Source render is square (1:1) and vertically composed — dawn sky on top,
      // misty road through the middle, car interior at the bottom giving the POV.
      // A 16:9 centre-crop would cut both the sky and the car, so generative-fill
      // extends it sideways instead. Swap to c_fill if a native 16:9 source lands.
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "First light on the road into Kruger from Hazyview — headlights on a misty bushveld road as the charcoal pre-dawn sky warms to apricot over the treeline.",
    width: 1920,
    height: 1080,
  },
  krugerDawnElephant: {
    // Square (1:1) source rendered into a 16:9 figure — generative-fill widens it
    // so the road he is crossing survives instead of being cropped away.
    src: cldImage(
      "kruger-dawn-elephant",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A big elephant bull emerging from the dawn mist on a Kruger roadside, backlit by the first apricot light — the grey boulder that lifts its trunk.",
    width: 1600,
    height: 900,
  },

  // --- "7 best things to do in Hazyview" guide — REAL farm hero ------------
  // The argument of this shortlist is "every one of these is reachable from one
  // bed", so the hero is the view FROM the farm rather than a stock attraction
  // shot — and it stays a REAL Kanaan photograph, the same honesty logic as the
  // cost guide. The attractions get their own dedicated frames in the body.
  // Source is 4:3; a centre 16:9 crop keeps the orchard valley and the
  // escarpment running to the horizon.
  hazyviewThingsToDoHero: {
    src: cldImage(
      "land-lowveld-view-real",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "The wide Lowveld view from above Kanaan Guest Farm outside Hazyview — rolling green bush, banana and macadamia orchards in the valley and hazy blue hills running to the horizon, with Kruger, the Panorama Route and the Sabie waterfalls all within an easy drive.",
    width: 1920,
    height: 1080,
  },
  // --- "Where to stay near Kruger" guide (Blog 10) ------------------------
  // Five dedicated frames generated from docs/blog-10-image-prompts.md (July
  // 2026) and uploaded to the kanaan/ folder. Every source render is square
  // (1:1), so each is generative-filled outward to a true 16:9 rather than
  // centre-cropped — same treatment as underMangoTreesHero / krugerDawnDriveHero.
  //
  // These AI frames cover only scenes no on-site camera can reach (an arrival
  // at golden hour, inside a park rest camp, the valley from the air, a 4:45am
  // kitchen, an evening braai). The guide deliberately keeps REAL Kanaan
  // photography for the rooms, the kitchenette, the camping ground and the
  // pool — the same honesty logic as the cost and dawn-drive guides: whatever
  // the guest actually books is carried by a real photograph.
  stayNearKrugerArrival: {
    src: cldImage(
      "stay-near-kruger-arrival",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "Golden-hour arrival at a Lowveld guest farm near Hazyview — a dusty bakkie parked on a brick-paved patio beside a whitewashed cottage with a veranda, built-in braai and bougainvillea, a suitcase and cooler box set down, with green bushveld and the blue escarpment behind.",
    width: 1920,
    height: 1080,
  },
  krugerRestCampDusk: {
    src: cldImage(
      "kruger-rest-camp-dusk",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "Dusk inside a Kruger-style national park rest camp — stone-and-thatch rondavels with one window lit warm, a camp chair and braai stand on the grass, and the perimeter game fence with open golden bushveld stretching away beyond it.",
    width: 1600,
    height: 900,
  },
  hazyviewBaseAerial: {
    src: cldImage(
      "hazyview-base-aerial",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "An aerial view over the Hazyview valley in Mpumalanga — green orchards, farmsteads and a tarred road threading through the hills, with the forested Drakensberg escarpment rising on the left and flat golden bushveld opening out toward Kruger on the right.",
    width: 1600,
    height: 900,
  },
  predawnKitchenetteCoffee: {
    src: cldImage(
      "predawn-kitchenette-coffee",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A self-catering kitchenette before dawn, lit by a single lamp — a kettle steaming on a two-plate hob, coffee being poured into a travel thermos, binoculars, car keys and a folded park map on the counter, and the first cold light behind the window.",
    width: 1600,
    height: 900,
  },
  farmBraaiMixedGroup: {
    src: cldImage(
      "farm-braai-mixed-group",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "An evening braai on a Lowveld farm lawn under big old trees — coals glowing, a long table with mismatched chairs, guests gathered as soft shapes in the firelight, a lit unit doorway on one side and tents and an overland vehicle on the other.",
    width: 1600,
    height: 900,
  },

  // ---- HOSTS / GENERAL BRAND -----------------------------------------------
  hosts: {
    src: cldImage("hosts"),
    alt: "Anneli and Matthew — owners of Kanaan Guest Farm since August 2025 — on the dam, laughing, the Lowveld behind them.",
    width: 1600,
    height: 1400,
  },
  groups: {
    src: cldImage("campfire-terrace"),
    alt: "Open grass at Kanaan ringed by the forty-year-old mango grove — the kind of space that takes a wedding lawn, a long reception table or a school camp equally well.",
    width: 1600,
    height: 1200,
  },

  // ---- OPEN GRAPH / SOCIAL SHARE ------------------------------------------
  ogDefault: {
    src: cldImage("og-default"),
    alt: "Kanaan Guest Farm — Hazyview, near Kruger National Park.",
    width: 1600,
    height: 1200,
  },
  familySafariHero: {
    src: cldImage(
      "family-kruger-selfdrive-hero",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "A family's own car stopped on a quiet southern Kruger road at golden hour, children leaning from the back windows as a breeding herd of elephants crosses ahead.",
    width: 1920,
    height: 1080,
  },
  hazyviewFoodHero: {
    src: cldImage(
      "hazyview-evening",
      "f_auto,q_auto,c_fill,g_center,ar_16:9,w_1920",
    ),
    alt: "A warm Lowveld evening near Hazyview — string lights strung between old trees over a gathering place, the unhurried end of a day in the bush.",
    width: 1920,
    height: 1080,
  },
  kidsCarSafariKit: {
    src: cldImage(
      "kids-car-safari-kit",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "The back seat of a family car on a game drive — a half-ticked animal spotting checklist, small binoculars, rusks, a soft toy giraffe and a folded park map, with golden bushveld sliding past the window.",
    width: 1600,
    height: 900,
  },
  krugerBigFiveLion: {
    src: cldImage(
      "kruger-big-five-lion",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A big male lion with a full dark mane lying in long golden Kruger grass in low early light, head up and rim-lit by the sun behind him.",
    width: 1600,
    height: 900,
  },
  krugerGuideHero: {
    src: cldImage(
      "kruger-ultimate-guide-hero",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "The wide southern Kruger bushveld from high ground — elephants, zebra, impala and a giraffe gathered at a waterhole, with layer after layer of bush running back to a hazy escarpment.",
    width: 1920,
    height: 1080,
  },
  krugerMorningWalk: {
    src: cldImage(
      "kruger-picnic-coffee", // TODO: swap to "kruger-guided-morning-walk"
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A guided walking safari in Kruger at first light — a small line of walkers following an armed guide single-file through dewy golden grass.",
    width: 1600,
    height: 900,
  },
  krugerPicnicSiteFamily: {
    src: cldImage(
      "kruger-picnic-site-family",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A designated Kruger picnic site in dappled mid-morning shade — a kettle and cooler box on a wooden table, children running off an hour of sitting still on the grass beyond.",
    width: 1600,
    height: 900,
  },
  krugerSelfDriveRoad: {
    src: cldImage(
      "kruger-selfdrive-road",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "An ordinary dusty hatchback pulled over on the gravel verge of a quiet Kruger tar road, two giraffes browsing in the bush alongside and the road curving away to a hazy blue horizon.",
    width: 1600,
    height: 900,
  },
  krugerSunsetDrive: {
    src: cldImage("impala-lambing-summer"), // TODO: swap to "kruger-sunset-open-vehicle"
    alt: "An open-sided Kruger safari vehicle on a bush road at golden hour, guests seated high under a blazing orange Lowveld sky.",
    width: 1600,
    height: 1067,
  },
  panoramaFamilyViewpoint: {
    src: cldImage(
      "panorama-family-viewpoint",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A family of four seen from behind at a railing on a short paved Panorama Route viewpoint, the forested gorge and blue escarpment ridges falling away in clear winter light.",
    width: 1600,
    height: 900,
  },
  sabieWaterfallFamilyWalk: {
    src: cldImage(
      "sabie-waterfall-family-walk",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "Two adults and two children on a timber boardwalk through dripping green rainforest near Sabie, walking toward a waterfall that drops into a dark pool between mossy rocks and tree ferns.",
    width: 1600,
    height: 900,
  },
} as const;

// ---------------------------------------------------------------------
// Wedding photography
// `ceremony`, `bridesmaids` and `reception` are now REAL Kanaan wedding
// photographs (June 2026 — Anneli sent them across). The remaining
// slots (tableDetail, firstDance, morningAfter) are still the earlier
// AI-generated set; they can be replaced one at a time as real
// April-wedding photos land in the same Cloudinary public_ids.
// ---------------------------------------------------------------------
export const wedding = {
  ceremony: {
    // The source frame has a lot of concrete floor at the bottom and
    // the actual subject (the draped arch + the gazebo + the Lowveld
    // view) sits in the upper third. A top-gravity 21:9 cinematic crop
    // keeps the trees, the arch, the gazebo, the people and the valley
    // in shot and drops most of the floor.
    src: cldImage(
      "wedding-arch",
      "f_auto,q_auto,c_crop,g_north,h_0.55/c_fill,ar_21:9,w_1920",
    ),
    alt: "A real wedding at Kanaan — the ceremony arch on the viewpoint with green and white draping, framed by old trees and the Lowveld valley falling away behind.",
    width: 1920,
    height: 823,
  },
  bridesmaids: {
    src: cldImage("wedding-bridesmaids"),
    alt: "A bride and her bridesmaids playing peek-a-boo from behind the forty-year-old mango trees at Kanaan, white dress against the dappled green light.",
    width: 1200,
    height: 1400,
  },
  ceremonyAlt: {
    src: cldImage("wedding-ceremony-mango"),
    alt: "A wedding ceremony at Kanaan Guest Farm — rows of white chairs under the canopy of the forty-year-old mango grove, an arch of dried grass at the altar.",
    width: 1600,
    height: 900,
  },
  reception: {
    // A REAL Kanaan wedding reception under the covered venue — long
    // table, candles, fairy lights, guests gathered. Replaced the earlier
    // AI long-table render in June 2026.
    src: cldImage("wedding-reception-table"),
    alt: "A real wedding reception at Kanaan under the covered venue — a long table set with candles and wildflowers, strings of fairy lights overhead, guests gathered in soft evening light.",
    width: 1500,
    height: 1800,
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
  firstDanceNight: {
    src: cldImage(
      "wedding-first-dance-night",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "An evening wedding celebration at Kanaan — a couple dancing in soft silhouette under warm Edison-bulb string lights, the mango grove dark behind them and stars scattered overhead.",
    width: 1600,
    height: 900,
  },
  krugerHero: {
    src: cldImage(
      "wedding-kruger-hero",
      // Source render is square (1:1). Generative-fill extends it outward to a
      // true 16:9 hero instead of centre-cropping the arch and the valley away
      // — the same treatment as underMangoTreesHero / krugerDawnDriveHero.
      // Swap to c_fill only if a native 16:9 source is ever generated.
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1920",
    ),
    alt: "A wedding ceremony arch on the viewpoint at Kanaan Guest Farm near Hazyview, draped in greenery and soft white fabric, with the green Lowveld valley and the blue Drakensberg escarpment falling away behind in golden-hour light.",
    width: 1920,
    height: 1080,
  },
  marqueeLawn: {
    src: cldImage(
      "wedding-marquee-lawn",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "An open-sided marquee pitched on the wedding lawn at Kanaan at dusk — a long table set with candles and proteas, fairy lights strung through the mango branches overhead, and the Lowveld valley and hills fading into a pink evening sky.",
    width: 1600,
    height: 900,
  },
  sundayBreakfast: {
    src: cldImage(
      "wedding-sunday-breakfast",
      "f_auto,q_auto,c_pad,ar_16:9,b_gen_fill,w_1600",
    ),
    alt: "A long Sunday-morning breakfast table on the wedding lawn at Kanaan, in the dappled shade of the forty-year-old mango trees — coffee, fresh bread and the last of the cake, with the Lowveld valley beyond.",
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