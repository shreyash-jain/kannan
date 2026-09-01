// The room catalogue — one entry per way to stay, with real photographs.
//
// This is the single source of truth for /stay, /stay/[slug] and the
// "Rooms" menu in the header. Add a room here and it appears in all three.
//
// Copy is Anneli's, carried over from /stay so the two pages never drift.
// Photography: the twin rooms, the wooden house and the entertainment room
// were shot professionally in August 2026; the rest are the farm's own.

import { img, type Img } from "@/lib/images";
import { site } from "@/lib/site";

export type Room = {
  slug: string;
  /** Name as Anneli would say it to a guest. */
  name: string;
  /** Small ochre label above the name. */
  eyebrow: string;
  /** Who fits — the first question every guest asks. */
  occupancy: string;
  /** One or two sentences for the card. */
  summary: string;
  /** The opening line on the room's own page. */
  lede: string;
  /** Body paragraphs on the room's own page. */
  body: string[];
  /** At-a-glance facts, shown on both the card and the page. */
  facts: string[];
  hero: Img;
  gallery: Img[];
  /** Schema.org type — omitted for spaces that are not somewhere to sleep. */
  ldType?: "Hotel" | "Hostel" | "Campground";
  ldDescription: string;
};

export const rooms: Room[] = [
  {
    slug: "lodge",
    name: "The Lodge Rooms",
    eyebrow: "Lodge · Self-catering",
    occupancy: "Sleeps 2–4",
    summary:
      "Free-standing rooms with a private en-suite and a kitchenette of your own — wonderfully quiet, and beautifully comfortable after a long day in Kruger.",
    lede:
      "Each room stands on its own, with a private en-suite bathroom and a kitchenette that has everything you need.",
    body: [
      "Each room stands on its own, with a private en-suite bathroom and a kitchenette that has everything you need — a kettle, a two-plate hob, a fridge, plates and mugs. Wonderfully quiet and beautifully comfortable, perfect for unwinding after a long day exploring Kruger or the Lowveld.",
      "The bedding setup is different from one room to the next, so tell us who is coming and we will lovingly pick the right one for your family or group.",
    ],
    facts: [
      "Private en-suite bathroom",
      "Kitchenette (kettle, hob, fridge)",
      "TV + free WiFi",
      "Linen and towels provided",
    ],
    hero: img.lodgeRoom,
    gallery: [
      img.lodgeDoubleDecorated,
      img.lodgeBedroomEnsuite,
      img.lodgeFamilyTwin,
      img.lodgeKitchenClassic,
      img.lodgeBathroom,
      img.lodgeModestDouble,
      img.lodgeCourtyardPatio,
      img.veranda,
    ],
    ldType: "Hotel",
    ldDescription:
      "Self-catering lodge units with en-suite bathrooms and kitchenettes on a working farm in Hazyview, Mpumalanga.",
  },
  {
    slug: "twin-room",
    name: "The Twin Rooms",
    eyebrow: "Twin Rooms · Two single beds",
    occupancy: "Sleeps 2",
    summary:
      "Two comfortable single beds with scalloped wooden headboards, a private en-suite and a big window onto the trees. Beautifully simple, and fairly priced.",
    lede:
      "Two comfortable single beds, a private en-suite, a wall fan and a small table for a slow morning coffee.",
    body: [
      "Two comfortable single beds, a private en-suite, a wall fan and a small table for a slow morning coffee. Beautifully simple, with everything you need to feel at home.",
      "A lovely choice for friends sharing, or for a parent and child on a Kruger adventure — somewhere genuinely affordable and welcoming to rest after a full day on safari.",
    ],
    facts: [
      "Two single beds",
      "Private en-suite bathroom",
      "Wall fan",
      "Linen and towels provided",
    ],
    hero: img.twinRoomPair,
    // Anneli, reviewing the preview: the suite, its red-check kitchen and its
    // pine-door bathroom are a twin unit, not a lodge one. Moved across.
    gallery: [
      img.twinRoomBeds,
      img.twinRoomHeadboard,
      img.twinRoom,
      img.lodgeTwinSuite,
      img.lodgeKitchen,
      img.lodgeBathroomPine,
    ],
    ldType: "Hotel",
    ldDescription:
      "Simple twin rooms with two single beds and an en-suite bathroom, on a family-run farm in Hazyview, Mpumalanga.",
  },
  {
    slug: "wooden-house",
    name: "The Backpackers Room",
    eyebrow: `Wooden house · ${site.capacity.backpackersBeds} beds`,
    occupancy: `${site.capacity.backpackersBeds} beds`,
    summary:
      "Pine-clad walls, slatted wooden floors and sturdy timber bunks, with a shared kitchen and a lounge where someone is always making coffee.",
    lede:
      "A sociable wooden-house dorm for adventurers and slow travellers, with a shared kitchen and a lounge to gather in.",
    body: [
      `Pine-clad walls, slatted wooden floors and a soft cabin light through the curtained windows. ${site.capacity.backpackersBeds} beds in total, spread across a few small rooms — a mix of single beds and sturdy wooden bunks, dressed with fresh linen and a folded towel waiting on each mattress.`,
      "A shared bathroom, a communal kitchen and a relaxed lounge where you will usually find someone reading, making coffee or swapping safari stories. Wonderfully suited to hikers, overlanders and slow travellers moving through the Lowveld at their own pace.",
      "Pick up groceries in Hazyview on your way in — the closest big supermarkets are just a short drive into town.",
    ],
    facts: [
      `${site.capacity.backpackersBeds} beds — singles + bunks`,
      "Pine-clad cabin character",
      "Shared bathroom & kitchen + lounge",
      "Free WiFi · secure parking",
    ],
    hero: img.backpackersTwin,
    gallery: [
      img.woodenHouseBunkRoom,
      img.woodenHouseExterior,
      img.woodenHouseBunkLadder,
      img.woodenHouseSingleBed,
      img.woodenHouseKitchen,
      img.woodenHouseDining,
      img.woodenHouseLoungeCorner,
      img.backpackers,
      img.backpackersBeds,
      img.backpackersWide,
    ],
    ldType: "Hostel",
    ldDescription: `${site.capacity.backpackersBeds}-bed backpackers hostel with shared facilities, near the Kruger National Park.`,
  },
  {
    slug: "camping",
    name: "Camping under the mango trees",
    eyebrow: `Camping · ${site.capacity.campsitePitches} peaceful pitches`,
    occupancy: `Up to ${site.capacity.campingPeople} guests`,
    summary:
      "Shaded pitches beneath forty-year-old mango trees, with power and water at every single one. Tents, rooftop campers and big overlanders all find a happy home here.",
    lede:
      "Peaceful camping under forty-year-old mango trees, with power and water at every pitch.",
    body: [
      `${site.capacity.campsitePitches} beautifully shaded pitches beneath mango trees that have been standing for forty years, with power and water at every single one. Tents, rooftop campers, big overlanders — they all find a happy home here. Unpack your bags, put your feet up, and relax beneath the African sky as the evening sounds drift through the air.`,
      `When the camping ground opens for a wedding, a school group or a family reunion, we can welcome up to ${site.capacity.campingPeople} happy guests.`,
    ],
    facts: [
      `${site.capacity.campsitePitches} pitches, power + water`,
      "Shared ablution block",
      "Communal fire pit",
      "Fenced + gated property",
    ],
    hero: img.campingGround,
    gallery: [
      img.campingAvenue,
      img.campingPowerWater,
      img.campingAblutions,
      img.campingAblutionsExterior,
      img.campingWaterTank,
      img.campingTents,
      img.campfire,
    ],
    ldType: "Campground",
    ldDescription: `${site.capacity.campsitePitches} shaded campsites under mango trees, with power and water at every pitch.`,
  },
];

// Spaces that are not somewhere to sleep, but belong to every stay. They
// get the same card and the same page treatment — they simply do not
// advertise a bed count or carry lodging structured data.
export const spaces: Room[] = [
  {
    slug: "entertainment-room",
    name: "The Entertainment Room",
    eyebrow: "Shared space · Included",
    occupancy: "Open to every guest",
    summary:
      "A pool table, foosball and a television under a wooden-beamed ceiling — where the evening usually carries on once the braai has burned down.",
    lede:
      "A pool table, foosball and a television under a wooden-beamed ceiling — free to every guest, with nothing to book.",
    body: [
      "A pool table in the middle of the room, foosball along the wall, a television for a rained-off afternoon and a fridge to keep something cold. It sits under a wooden-beamed ceiling, with the doors open to the evening air.",
      "There is nothing to book and nothing to pay — it belongs to whoever is staying. Most nights it is where the evening carries on once the coals have burned down, and where the children disappear to while the grown-ups sit outside a little longer.",
    ],
    facts: ["Pool table", "Foosball", "TV + fridge", "Open to every guest"],
    hero: img.entertainmentPoolTable,
    gallery: [img.entertainmentRoomWide],
    ldDescription:
      "A shared entertainment room with a pool table, foosball and television, free to every guest at Kanaan Guest Farm in Hazyview.",
  },
];

/** Everything with a page of its own under /rooms. */
export const roomPages: Room[] = [...rooms, ...spaces];

export function roomBySlug(slug: string): Room | undefined {
  return roomPages.find((r) => r.slug === slug);
}

/** Every photograph of a room, hero first — used for the "N photos" badge. */
export function roomPhotos(room: Room): Img[] {
  return [room.hero, ...room.gallery];
}

// Meals are not a room, and the full dining copy already lives on /stay.
// This card links there rather than duplicating it.
export const diningCard = {
  name: "Home-cooked meals",
  eyebrow: "Dining · On request",
  summary: `A warm continental breakfast at R${site.meals.breakfast.pricePerPersonZAR} a person, and a traditional South African braai for dinner — both cooked to order, just let us know the day before.`,
  href: "/stay#dining",
  image: img.farmBraaiMixedGroup,
  facts: [
    `Breakfast · R${site.meals.breakfast.pricePerPersonZAR} pp`,
    "Dinner · on order",
    "Set menus, cooked to order",
    "Order the day before",
  ],
};
