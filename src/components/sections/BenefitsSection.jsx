import { BENEFITS } from "../../data/benefits";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          label="Warum Galabau Meister?"
          title="6 gute Gründe für uns"
          subtitle="Qualität, Zuverlässigkeit und Fairness – das zeichnet unsere Arbeit aus."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
