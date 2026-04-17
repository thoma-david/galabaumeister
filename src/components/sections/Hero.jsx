import { Phone, ArrowRight, Star, Shield, Award } from "lucide-react";
import { SITE } from "../../data/site";
import { bgHero } from "../../data/images";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-emerald-900/80 to-emerald-900/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="max-w-4xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-emerald-200 px-3 py-1.5 rounded-full text-xs font-medium">
              <Award className="w-3.5 h-3.5" />
              Meisterbetrieb
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-emerald-200 px-3 py-1.5 rounded-full text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-current" />
              {SITE.stats.rating} / 5 Sterne
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-emerald-200 px-3 py-1.5 rounded-full text-xs font-medium">
              <Shield className="w-3.5 h-3.5" />
              {SITE.stats.years}+ Jahre Erfahrung
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Ihr Garten in
            <span className="text-emerald-400"> Meisterhand</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Professioneller Garten- und Landschaftsbau in Berlin &amp;
            Brandenburg. Von der Gartengestaltung über Pflasterarbeiten bis zur
            Baumpflege – ich mache Ihren Außenbereich zum Traumgarten.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" to="/kontakt">
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" href={`tel:${SITE.phone}`}>
              <Phone className="w-5 h-5" />
              {SITE.phoneDisplay}
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap gap-8 md:gap-12">
            {[
              { value: `${SITE.stats.projects}+`, label: "Projekte" },
              { value: `${SITE.stats.years}+`, label: "Jahre Erfahrung" },
              { value: `${SITE.stats.rating}`, label: "Google Bewertung" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
