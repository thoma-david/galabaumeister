import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../data/services";
import { SERVICE_IMAGES } from "../../data/images";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <Container>
        <SectionHeader
          label="Meine Leistungen"
          title="Alles für Ihren Traumgarten"
          subtitle="Von der kreativen Planung bis zur professionellen Umsetzung – das komplette Leistungsspektrum im Garten- und Landschaftsbau."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} to={`/leistungen/${service.slug}`}>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={SERVICE_IMAGES[service.slug]}
                      alt={service.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors shrink-0">
                        <Icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {service.shortTitle}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {service.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
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
