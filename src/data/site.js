// NAP-Daten & Unternehmensinformationen
export const SITE = {
  name: "Galabau Meister",
  legalName: "Galabau Meister – Norbert Meister",
  tagline: "Ihr Experte für Garten- und Landschaftsbau",
  description:
    "Professioneller Garten- und Landschaftsbau in Berlin & Brandenburg. Gartengestaltung, Pflasterarbeiten, Terrassenbau, Baumpflege und mehr – seit über 15 Jahren. Persönlich, zuverlässig, in Meisterqualität.",
  url: "https://galabau-meister.de",
  phone: "+49 30 1234567",
  phoneDisplay: "030 / 123 45 67",
  email: "info@galabau-meister.de",
  address: {
    street: "Musterstraße 42",
    zip: "12209",
    city: "Berlin",
    district: "Steglitz-Zehlendorf",
    state: "Berlin",
    country: "DE",
  },
  hours: {
    weekdays: "Mo – Fr: 07:00 – 18:00 Uhr",
    saturday: "Sa: 08:00 – 14:00 Uhr",
    sunday: "So: Geschlossen",
  },
  social: {
    facebook: "https://facebook.com/galabaumeister",
    instagram: "https://instagram.com/galabaumeister",
    google: "https://g.page/galabaumeister",
  },
  stats: {
    years: 15,
    projects: 2500,
    customers: 1800,
    rating: 4.9,
  },
};

// Structured Data für Local Business (schema.org)
export const SCHEMA_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: SITE.name,
  legalName: "Galabau Meister – Norbert Meister",
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4345,
    longitude: 13.3017,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.stats.rating,
    reviewCount: 187,
    bestRating: 5,
  },
  areaServed: [
    { "@type": "City", name: "Berlin" },
    { "@type": "City", name: "Potsdam" },
    { "@type": "City", name: "Teltow" },
    { "@type": "City", name: "Kleinmachnow" },
    { "@type": "City", name: "Falkensee" },
  ],
  priceRange: "€€–€€€",
  image: "https://galabau-meister.de/og-image.jpg",
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.google],
};
