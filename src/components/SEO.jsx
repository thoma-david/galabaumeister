import { Helmet } from "react-helmet-async";
import { SITE } from "../data/site";

const BASE_URL = SITE.url;
const DEFAULT_TITLE =
  "Galabau Meister – Garten- und Landschaftsbau Berlin | Meisterbetrieb";
const DEFAULT_DESCRIPTION = SITE.description;
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  noindex = false,
  schemaData,
}) {
  const fullTitle = title || DEFAULT_TITLE;
  const canonical = `${BASE_URL}${path ? `/${path}` : ""}`;

  const schemas = schemaData
    ? Array.isArray(schemaData)
      ? schemaData
      : [schemaData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
