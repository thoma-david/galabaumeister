import { PROCESS } from "../../data/process";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-emerald-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-800/40 rounded-full blur-3xl" />

      <Container className="relative">
        <SectionHeader
          label="So arbeite ich"
          title="In 4 Schritten zum Traumgarten"
          subtitle="Mein bewährter Ablauf sorgt dafür, dass Ihr Projekt reibungslos und termingerecht umgesetzt wird."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((p) => (
            <div key={p.step} className="relative">
              <div className="text-6xl font-extrabold text-emerald-700/30 mb-3">
                {String(p.step).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
