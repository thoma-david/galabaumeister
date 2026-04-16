import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO";
import {
  PageHeader,
  CTASection,
  TestimonialsSection,
  ServicesPreview,
} from "../components/sections";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { getLocationBySlug } from "../data/locations";
import { SERVICES } from "../data/services";
import { SITE } from "../data/site";

export default function LocationPage() {
  const { slug } = useParams();
  const location = getLocationBySlug(slug);

  if (!location) return <Navigate to="/" replace />;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: `${SITE.name} – ${location.city}`,
    description: location.metaDescription,
    url: `${SITE.url}/region/${location.slug}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: "Brandenburg",
      addressCountry: "DE",
    },
    areaServed: { "@type": "City", name: location.city },
  };

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        path={`region/${slug}`}
        schemaData={schemaData}
      />

      <PageHeader
        title={location.title}
        subtitle={location.heroText}
        breadcrumbs={[
          { label: "Startseite", path: "/" },
          { label: "Regionen" },
          { label: location.city },
        ]}
      />

      {/* Location description */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                Galabau Meister in {location.city}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {location.description}
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Unsere Leistungen in {location.city}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/leistungen/${s.slug}`}
                    className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl hover:bg-emerald-50 transition-colors group"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 group-hover:text-emerald-700 transition-colors">
                      {s.shortTitle}
                    </span>
                  </Link>
                ))}
              </div>

              {location.districts && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Wir kommen zu Ihnen – Stadtteile & Gebiete
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {location.districts.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        {d}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Jetzt Beratung in {location.city} anfordern
                </h3>
                <p className="text-slate-600 mb-4">
                  Kostenlose Vor-Ort-Beratung – wir kommen direkt zu Ihnen nach{" "}
                  {location.city}.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button to="/kontakt" size="sm">
                    Termin buchen
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" href={`tel:${SITE.phone}`}>
                    <Phone className="w-4 h-4" />
                    {SITE.phoneDisplay}
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Ihr Kontakt vor Ort</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Schnelle Anfahrt nach {location.city} von unserem Standort in
                  Berlin-Steglitz.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">
                  Weitere Regionen
                </h3>
                <ul className="space-y-2">
                  {["berlin", "potsdam", "teltow", "kleinmachnow", "falkensee"]
                    .filter((s) => s !== slug)
                    .map((s) => (
                      <li key={s}>
                        <Link
                          to={`/region/${s}`}
                          className="flex items-center justify-between py-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors capitalize group"
                        >
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {s === "kleinmachnow"
                              ? "Kleinmachnow"
                              : s.charAt(0).toUpperCase() + s.slice(1)}
                          </span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
