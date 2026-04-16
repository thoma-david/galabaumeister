import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { PageHeader, CTASection, FAQSection } from "../components/sections";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Leistungen – Garten- und Landschaftsbau Berlin"
        description="Alle Leistungen von Galabau Meister: Gartengestaltung, Gartenpflege, Pflasterarbeiten, Terrassenbau, Zaunbau, Baumpflege & mehr in Berlin & Brandenburg."
        path="leistungen"
      />

      <PageHeader
        title="Unsere Leistungen"
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
                  <Card className="h-full group">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                        <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h2>
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
                  </Card>
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
