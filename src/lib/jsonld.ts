import { site } from "./site";

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
    image: [`${site.url}/og.jpg`],
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
