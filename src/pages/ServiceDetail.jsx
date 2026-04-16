import { useParams, Navigate, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import SEO from "../components/SEO";
import {
  PageHeader,
  CTASection,
  FAQSection,
  TestimonialsSection,
} from "../components/sections";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { getServiceBySlug, SERVICES } from "../data/services";
import { SITE } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/leistungen" replace />;

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LandscapingBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: { "@type": "City", name: "Berlin" },
  };

  const schemaFaq =
    service.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`leistungen/${slug}`}
        schemaData={[schemaService, schemaFaq].filter(Boolean)}
      />

      <PageHeader
        title={service.title}
        subtitle={service.heroSubtitle}
        breadcrumbs={[
          { label: "Startseite", path: "/" },
          { label: "Leistungen", path: "/leistungen" },
          { label: service.shortTitle },
        ]}
      />

      {/* Service description + features */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                {service.title} in Berlin &amp; Brandenburg
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Features */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Unsere Leistungen im Überblick
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Benefits */}
              {service.benefits && (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">
                    Ihre Vorteile mit Galabau Meister
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6 mb-10">
                    {service.benefits.map((b) => (
                      <div key={b.title} className="bg-stone-50 rounded-xl p-5">
                        <h4 className="font-bold text-slate-900 mb-2">
                          {b.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {b.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* CTA inline */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Kostenlose Beratung anfordern
                  </h3>
                  <p className="text-slate-600 mt-1">
                    Wir kommen zu Ihnen und erstellen ein unverbindliches
                    Angebot für Ihr Projekt.
                  </p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Button to="/kontakt" size="sm">
                    Termin buchen
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" href={`tel:${SITE.phone}`}>
                    <Phone className="w-4 h-4" />
                    Anrufen
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  {(() => {
                    const Icon = service.icon;
                    return (
                      <Icon className="w-16 h-16 text-emerald-300 mx-auto mb-3" />
                    );
                  })()}
                  <p className="text-emerald-600 font-medium text-sm">
                    {service.shortTitle}
                  </p>
                </div>
              </div>

              {/* Quick contact card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-lg mb-2">Schnellkontakt</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Rufen Sie uns direkt an oder schreiben Sie uns.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-emerald-400 font-semibold mb-2 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
                <p className="text-slate-400 text-sm">{SITE.hours.weekdays}</p>
              </div>

              {/* Other services */}
              <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Weitere Leistungen
                </h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/leistungen/${s.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors group"
                      >
                        <span>{s.shortTitle}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/leistungen"
                      className="inline-flex items-center gap-1 text-sm text-emerald-600 font-semibold mt-2 hover:gap-2 transition-all"
                    >
                      Alle Leistungen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ for this service */}
      {service.faq?.length > 0 && (
        <FAQSection
          items={service.faq.map((f) => ({
            question: f.q,
            answer: f.a,
          }))}
          title={`Häufige Fragen zu ${service.shortTitle}`}
          label={service.shortTitle}
        />
      )}

      <TestimonialsSection />
      <CTASection />
    </>
  );
}
