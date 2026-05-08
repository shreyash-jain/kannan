export const site = {
  name: "Kanaan Guest Farm",
  shortName: "Kanaan",
  tagline: "A peaceful farm retreat in Hazyview, gateway to the Kruger.",
  description:
    "Self-catering lodge units, an 8-bed backpackers and shaded camping under mango trees on a working farm in Hazyview, Mpumalanga — minutes from the Kruger National Park, the Panorama Route and the Sabie River.",
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
  // Approximate Hazyview coordinates — refine with exact farm GPS when available.
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
  },
  policies: {
    checkIn: "14:00 – 22:00",
    checkOut: "05:00 – 10:00",
    quietHours: "After 23:00",
  },
  hosts: ["Anneli", "Matt"],
  keywords: [
    "Hazyview accommodation",
    "Kruger National Park accommodation",
    "guest farm Hazyview",
    "self-catering Hazyview",
    "backpackers Hazyview",
    "camping Hazyview",
    "Mpumalanga farm stay",
    "Panorama Route accommodation",
    "Sabie River lodging",
    "Lowveld retreat",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/lodge", label: "Lodge" },
  { href: "/backpackers", label: "Backpackers" },
  { href: "/camping", label: "Camping" },
  { href: "/amenities", label: "Amenities" },
  { href: "/groups", label: "Groups" },
  { href: "/attractions", label: "Attractions" },
  { href: "/contact", label: "Contact" },
] as const;
