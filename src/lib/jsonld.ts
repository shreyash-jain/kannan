import { site } from "./site";
import { cldImage } from "./cloudinary";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${site.url}/#lodging`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phonePrimaryDisplay,
    email: site.contact.email,
    image: [cldImage("og-default")],
    logo: `${site.url}/brand/kanaan-logo.png`,
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    sameAs: [site.social.instagram, site.social.facebook],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Swimming pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self-catering kitchens", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hiking trails", value: true },
      { "@type": "LocationFeatureSpecification", name: "Mountain biking trails", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure fenced property", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "10:00",
    smokingAllowed: false,
    petsAllowed: false,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.tagline,
    inLanguage: "en-ZA",
    publisher: { "@id": `${site.url}/#lodging` },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function lodgingTypeLd(opts: {
  type: "Hotel" | "Hostel" | "Campground";
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type,
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    image: opts.image,
    parentOrganization: { "@id": `${site.url}/#lodging` },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    telephone: site.contact.phonePrimaryDisplay,
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function videoObjectLd(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 duration, e.g. "PT5M"
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    contentUrl: opts.contentUrl,
    embedUrl: opts.embedUrl,
    duration: opts.duration,
    publisher: { "@id": `${site.url}/#lodging` },
  };
}

export function eventVenueLd(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
  maximumAttendeeCapacity: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    image: opts.image,
    maximumAttendeeCapacity: opts.maximumAttendeeCapacity,
    parentOrganization: { "@id": `${site.url}/#lodging` },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "On-site accommodation",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Camping",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Marquee-ready outdoor space",
        value: true,
      },
    ],
  };
}

export function articleLd(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string; // ISO 8601
  dateModified?: string;
  authors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    url: `${site.url}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: (opts.authors ?? site.hosts).map((name) => ({
      "@type": "Person",
      name,
    })),
    publisher: { "@id": `${site.url}/#lodging` },
    mainEntityOfPage: `${site.url}${opts.path}`,
  };
}
