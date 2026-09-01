export const site = {
  name: "Kanaan Guest Farm",
  shortName: "Kanaan",
  tagline:
    "A family-run guest farm in the beautiful heart of Hazyview, 48 minutes from Kruger.",
  description:
    "Family-managed accommodation and a wedding and gatherings venue in the beautiful heart of Hazyview, Mpumalanga. Self-catering lodge rooms, twin rooms, backpacker beds and peaceful campsites under forty-year-old mango trees, with the world-famous Kruger National Park just 48 minutes from Kruger Mpumalanga International Airport. Genuine South African hospitality, from R250 per person sharing.",
  url: "https://kanaanguestfarm.com",
  locale: "en_ZA",
  region: "Mpumalanga, South Africa",
  address: {
    street: "R40",
    city: "Hazyview",
    region: "Mpumalanga",
    postalCode: "1242",
    country: "South Africa",
    countryCode: "ZA",
  },
  // Approximate Hazyview coordinates — refine with exact farm GPS when Anneli confirms.
  geo: { lat: -25.0461, lng: 31.1264 },
  contact: {
    phonePrimary: "+27637943880",
    phonePrimaryDisplay: "+27 63 794 3880",
    phoneSecondary: "+27829302211",
    phoneSecondaryDisplay: "+27 82 930 2211",
    whatsapp: "+27637943880",
    whatsappDisplay: "+27 63 794 3880",
    email: "bookings@kanaanguestfarm.com",
  },
  social: {
    instagram: "https://www.instagram.com/kanaan_guest_farm/",
    instagramHandle: "@kanaan_guest_farm",
    facebook: "https://www.facebook.com/p/Kanaan-Guest-Farm-61577922861160/",
    bookingDotCom: "",
  },
  policies: {
    checkIn: "14:00 – 22:00",
    checkOut: "05:00 – 10:00",
    quietHours: "After 23:00",
  },
  hosts: ["Anneli", "Matthew"],
  ownedSince: "August 2025",
  // Travel distances anchor trust — brief: "Numbers anchor trust"
  distances: {
    kmiaMinutes: 48, // Kruger Mpumalanga International Airport
    krugerGateMinutesMin: 30,
    krugerGateMinutesMax: 45,
  },
  // Owner confirmed 2026-05-11 (Anneli):
  //   - R250 per person SHARING per night (pps) — well below regional avg
  //   - Breakfast & dinner are SET MENUS, on request
  //   - No halaal option
  pricing: {
    fromZAR: 250, // From R250 per person sharing per night (pps)
    currency: "ZAR",
    currencySymbol: "R",
    unit: "per person sharing, per night",
    unitShort: "pps/night",
    breakfastIncluded: false,
    positioningNote: "well below the regional average",
  },
  meals: {
    breakfast: {
      pricePerPersonZAR: 60,
      type: "continental",
      style: "Set menu",
      onRequest: true,
    },
    dinner: {
      onRequest: true,
      style: "Set menu — local Lowveld dishes and braai",
    },
    halaal: false,
  },
  capacity: {
    sleepingTotal: 50, // ~40–50 person sleeping capacity across rooms
    backpackersBeds: 8,
    campsitePitches: 10,
    campingPeople: 80, // Anneli, 2026-09-01: "Camping up to 80" (was 120)
    wedding: {
      indoor: 60,
      withMarquee: 100,
      withCamping: 150,
    },
  },
  keywords: [
    "lodges near Kruger National Park",
    "accommodation near Kruger Mpumalanga airport",
    "Hazyview accommodation",
    "affordable Kruger lodges",
    "Kruger budget accommodation",
    "backpackers Lowveld",
    "Hazyview camping",
    "Lowveld wedding venues",
    "affordable wedding venues Mpumalanga",
    "Kruger wedding venue",
    "family-run guesthouse Mpumalanga",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/stay", label: "Stay" },
  { href: "/packages", label: "Packages" },
  { href: "/weddings", label: "Wedding & Events" },
  { href: "/the-land", label: "The Land" },
  { href: "/blog", label: "Journal & Guides" },
  { href: "/contact", label: "Contact" },
] as const;

// Pre-filled WhatsApp messages per page — brief Section 8.
// Use whatsappLink(pageKey) to build the URL.
export const whatsappMessages = {
  home: "Hi Anneli and Matthew, I just visited your website and would love to know more about Kanaan.",
  stay: "Hi Anneli and Matthew, I'd love to enquire about a stay at Kanaan.",
  packages:
    "Hi Anneli and Matthew, I would like to enquire about a multi-day package at Kanaan.",
  weddings:
    "Hi Anneli and Matthew, we're planning our wedding and would love to know more about Kanaan.",
  ourStory: "Hi Anneli and Matthew, I just read your story — I'd love to know more about Kanaan.",
  theLand:
    "Hi Anneli and Matthew, I'd love to know more about visiting Kruger and the Lowveld from your farm.",
  blog: "Hi Anneli and Matthew, I just read your journal — I'd love to come and see Kanaan for myself.",
  contact: "Hi Anneli and Matthew, I'd love to make an enquiry about Kanaan.",
} as const;

export type WhatsAppKey = keyof typeof whatsappMessages;

export function whatsappLink(key: WhatsAppKey = "home"): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(whatsappMessages[key]);
  return `https://wa.me/${number}?text=${text}`;
}

// A WhatsApp link with a message we compose on the spot — used by /rooms so
// each room asks about itself by name ("...about the Twin Rooms").
export function whatsappAbout(subject: string): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(
    `Hi Anneli and Matthew, I'd love to enquire about ${subject} at Kanaan.`,
  );
  return `https://wa.me/${number}?text=${text}`;
}
