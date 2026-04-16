import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "../../data/locations";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function LocationsPreview() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <Container>
        <SectionHeader
          label="Service-Regionen"
          title="In Ihrer Nähe"
          subtitle="Wir sind in Berlin und dem gesamten Umland für Sie vor Ort."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              to={`/region/${loc.slug}`}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{loc.city}</h3>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                {loc.heroText}
              </p>
              <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all">
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
