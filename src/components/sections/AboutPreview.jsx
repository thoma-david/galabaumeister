import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICE_IMAGES } from "../../data/images";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutPreview() {
  const highlights = [
    "Meisterbetrieb mit über 15 Jahren Erfahrung",
    "Gärtnermeister & zertifizierter Baumpfleger",
    "Über 2.500 erfolgreich abgeschlossene Projekte",
    "Festpreisgarantie – keine versteckten Kosten",
    "Persönliche Beratung – immer direkt mit mir",
    "Nachhaltig und umweltbewusst",
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={SERVICE_IMAGES.gartengestaltung}
                alt="Professionelle Gartengestaltung von Galabau Meister"
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
              verbinde ich handwerkliche Perfektion mit kreativer Gestaltung –
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
              <Button to="/kontakt">
                Jetzt Beratung anfragen
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
