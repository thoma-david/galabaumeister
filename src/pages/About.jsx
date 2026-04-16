import SEO from "../components/SEO";
import {
  PageHeader,
  BenefitsSection,
  CTASection,
} from "../components/sections";
import Container from "../components/ui/Container";
import { TEAM } from "../data/team";
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
        subtitle="Ihr Meisterbetrieb für Garten- und Landschaftsbau in Berlin & Brandenburg – seit über 15 Jahren."
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
                Unsere Geschichte
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Aus Leidenschaft für Gärten
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Galabau Meister wurde 2009 von Gärtnermeister Markus Grünberg
                  in Berlin gegründet – mit der Vision, erstklassigen Garten-
                  und Landschaftsbau für Privat- und Gewerbekunden zu bieten.
                </p>
                <p>
                  Was als Ein-Mann-Betrieb begann, ist heute ein Team von über
                  20 engagierten Fachkräften. Unser Anspruch ist geblieben:
                  Jedes Projekt, ob kleiner Vorgarten oder große Gewerbefläche,
                  wird mit der gleichen Sorgfalt und Leidenschaft umgesetzt.
                </p>
                <p>
                  Als Meisterbetrieb stehen wir für geprüfte Qualität,
                  termingerechte Ausführung und transparente Preise. Unsere
                  Kunden schätzen besonders die persönliche Beratung und die
                  Tatsache, dass sie von der Planung bis zur Fertigstellung
                  einen festen Ansprechpartner haben.
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

      {/* Team section */}
      <section className="py-20 md:py-28 bg-stone-50">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-bold tracking-widest uppercase text-emerald-600">
              Unser Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Die Menschen hinter Galabau Meister
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Engagierte Fachkräfte mit Herz und Verstand – für Ihr perfektes
              Gartenprojekt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100"
              >
                {/* Avatar placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-emerald-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {member.description}
                  </p>
                  <ul className="space-y-1">
                    {member.qualifications.map((q) => (
                      <li
                        key={q}
                        className="flex items-center gap-2 text-xs text-slate-500"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BenefitsSection />
      <CTASection />
    </>
  );
}
