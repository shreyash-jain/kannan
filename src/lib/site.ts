export const site = {
  name: "Kanaan Guest Farm",
  shortName: "Kanaan",
  tagline:
    "A guest farm 48 minutes from Kruger, rebuilt by Anneli & Matthew since August 2025.",
  description:
    "Honest, affordable accommodation and a flexible wedding venue in Hazyview, Mpumalanga — 48 minutes from Kruger Mpumalanga International Airport. Self-catering rooms, an 8-bed backpackers, and shaded camping under mango trees on a fully fenced farm. From R350 a night with breakfast.",
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
  pricing: {
    fromZAR: 350, // From R350 per person per night, breakfast included
    currency: "ZAR",
    currencySymbol: "R",
    breakfastIncluded: true,
  },
  capacity: {
    sleepingTotal: 50, // ~40–50 person sleeping capacity across rooms
    backpackersBeds: 8,
    campsitePitches: 10,
    campingPeople: 120,
    wedding: {
      indoor: 100,
      withMarquee: 150,
      withCamping: 220,
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
  { href: "/weddings", label: "Weddings & Gatherings" },
  { href: "/the-land", label: "The Land" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

// Pre-filled WhatsApp messages per page — brief Section 8.
// Use whatsappLink(pageKey) to build the URL.
export const whatsappMessages = {
  home: "Hi Kanaan, I just visited your website and would like to know more.",
  stay: "Hi Kanaan, I would like to enquire about a stay.",
  weddings:
    "Hi Kanaan, we are planning our wedding and would like more information.",
  ourStory: "Hi Kanaan, I just read your story and would like to know more.",
  theLand:
    "Hi Kanaan, I'd like to know more about visiting Kruger from your farm.",
  blog: "Hi, I just read your blog and would like to know more.",
  contact: "Hi Kanaan, I'd like to make an enquiry.",
} as const;

export type WhatsAppKey = keyof typeof whatsappMessages;

export function whatsappLink(key: WhatsAppKey = "home"): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(whatsappMessages[key]);
  return `https://wa.me/${number}?text=${text}`;
}
