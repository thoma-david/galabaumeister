import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { PageHeader, CTASection, FAQSection } from "../components/sections";
import Container from "../components/ui/Container";
import { SERVICES } from "../data/services";
import { SERVICE_IMAGES } from "../data/images";

export default function Services() {
  return (
    <>
      <SEO
        title="Leistungen – Garten- und Landschaftsbau Berlin"
        description="Alle Leistungen von Galabau Meister: Gartengestaltung, Gartenpflege, Pflasterarbeiten, Terrassenbau, Zaunbau, Baumpflege & mehr in Berlin & Brandenburg."
        path="leistungen"
      />

      <PageHeader
        title="Meine Leistungen"
        subtitle="Das komplette Leistungsspektrum im Garten- und Landschaftsbau – alles aus einer Hand, alles in Meisterqualität."
        breadcrumbs={[
          { label: "Startseite", path: "/" },
          { label: "Leistungen" },
        ]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} to={`/leistungen/${service.slug}`}>
                  <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={SERVICE_IMAGES[service.slug]}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                          <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-slate-600 mb-4">{service.excerpt}</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-4">
                        {service.features.slice(0, 4).map((f) => (
                          <li
                            key={f}
                            className="text-sm text-slate-500 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                        Details & Beratung
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
