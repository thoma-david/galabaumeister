import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../data/services";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <Container>
        <SectionHeader
          label="Unsere Leistungen"
          title="Alles für Ihren Traumgarten"
          subtitle="Von der kreativen Planung bis zur professionellen Umsetzung – wir bieten Ihnen das komplette Leistungsspektrum im Garten- und Landschaftsbau."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} to={`/leistungen/${service.slug}`}>
                <Card className="h-full group">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {service.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all"
          >
            Alle Leistungen ansehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
