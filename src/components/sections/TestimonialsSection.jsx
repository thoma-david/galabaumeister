import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../data/testimonials";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <Container>
        <SectionHeader
          label="Kundenstimmen"
          title="Was unsere Kunden sagen"
          subtitle="Über 180 Google-Bewertungen mit durchschnittlich 4,9 Sternen – darauf sind wir stolz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-100" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-5 relative">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">
                  {t.location} · {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
