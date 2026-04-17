import SEO from "../components/SEO";
import {
  PageHeader,
  BenefitsSection,
  CTASection,
} from "../components/sections";
import Container from "../components/ui/Container";
import { OWNER } from "../data/team";
import { SITE } from "../data/site";
import { CheckCircle, Award, Users, TreePine } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="Über uns – Ihr Meisterbetrieb für Galabau"
        description="Lernen Sie Galabau Meister kennen – Ihr Meisterbetrieb für Garten- und Landschaftsbau in Berlin & Brandenburg. Über 15 Jahre Erfahrung, 2.500+ Projekte."
        path="ueber-uns"
      />

      <PageHeader
        title="Über Galabau Meister"
        subtitle="Ihr Meisterbetrieb für Garten- und Landschaftsbau in Berlin & Brandenburg – persönlich, zuverlässig, seit über 15 Jahren."
        breadcrumbs={[
          { label: "Startseite", path: "/" },
          { label: "Über uns" },
        ]}
      />

      {/* Story section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase text-emerald-600">
                Meine Geschichte
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Aus Leidenschaft für Gärten
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Galabau Meister wurde 2009 von mir – Gärtnermeister Norbert
                  Meister – in Berlin gegründet, mit der Vision, erstklassigen
                  Garten- und Landschaftsbau für Privat- und Gewerbekunden zu
                  bieten.
                </p>
                <p>
                  Als selbstständiger Meisterbetrieb ist mir persönliche
                  Betreuung besonders wichtig. Bei jedem Projekt bin ich selbst
                  vor Ort – ob kleiner Vorgarten oder große Gewerbefläche. Bei
                  Bedarf arbeite ich mit ausgewählten Fachkräften zusammen.
                </p>
                <p>
                  Meine Kunden schätzen besonders, dass sie immer direkt mit mir
                  zu tun haben – von der Planung bis zur Fertigstellung.
                  Transparente Preise, termingerechte Ausführung und
                  handwerkliche Perfektion sind mein Anspruch.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  value: `${SITE.stats.years}+`,
                  label: "Jahre Erfahrung",
                },
                {
                  icon: TreePine,
                  value: `${SITE.stats.projects}+`,
                  label: "Projekte",
                },
                {
                  icon: Users,
                  value: `${SITE.stats.customers}+`,
                  label: "Zufriedene Kunden",
                },
                {
                  icon: CheckCircle,
                  value: `${SITE.stats.rating}`,
                  label: "Google Bewertung",
                },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-stone-50 rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-3xl font-extrabold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Owner section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-bold tracking-widest uppercase text-emerald-600">
              Ihr Ansprechpartner
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Der Mensch hinter Galabau Meister
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100">
              {/* Avatar placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                <div className="w-28 h-28 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-emerald-700">
                    MG
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {OWNER.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  {OWNER.role}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {OWNER.description}
                </p>
                <h4 className="font-bold text-slate-900 mb-3">
                  Qualifikationen
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {OWNER.qualifications.map((q) => (
                    <li
                      key={q}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BenefitsSection />
      <CTASection />
    </>
  );
}
