import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutPreview() {
  const highlights = [
    "Meisterbetrieb mit über 15 Jahren Erfahrung",
    "Ausgebildete Landschaftsgärtner & zertifizierte Baumpfleger",
    "Über 2.500 erfolgreich abgeschlossene Projekte",
    "Festpreisgarantie – keine versteckten Kosten",
    "Persönliche Beratung und fester Ansprechpartner",
    "Nachhaltig und umweltbewusst",
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                    <path d="M12 10V6" />
                    <path d="M9 8h6" />
                  </svg>
                </div>
                <p className="text-emerald-700 font-medium text-sm">
                  Galabau Meister – Seit 2009
                </p>
              </div>
            </div>
            {/* Stats badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-emerald-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-extrabold">15+</div>
              <div className="text-sm text-emerald-100">Jahre Erfahrung</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-emerald-600">
              Über uns
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ihr Meisterbetrieb für Garten & Landschaft
            </h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Galabau Meister steht seit über 15 Jahren für erstklassige
              Qualität im Garten- und Landschaftsbau. Als Meisterbetrieb
              vereinen wir handwerkliche Perfektion mit kreativer Gestaltung –
              für Außenanlagen, die begeistern.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/ueber-uns">
                Mehr über uns
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="ghost" to="/kontakt">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
