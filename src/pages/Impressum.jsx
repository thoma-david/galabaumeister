import SEO from "../components/SEO";
import { PageHeader } from "../components/sections";
import Container from "../components/ui/Container";
import { SITE } from "../data/site";

export default function Impressum() {
  return (
    <>
      <SEO
        title="Impressum"
        description={`Impressum von ${SITE.name} – Angaben gemäß § 5 TMG.`}
        path="impressum"
        noindex
      />

      <PageHeader title="Impressum" />

      <section className="py-16 md:py-20">
        <Container narrow>
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: {SITE.phoneDisplay}
              <br />
              E-Mail: {SITE.email}
            </p>

            <h2>Vertreten durch</h2>
            <p>Norbert Meister, Inhaber</p>

            <h2>Handelsregister</h2>
            <p>
              Registergericht: Amtsgericht Charlottenburg
              <br />
              Registernummer: HRB 123456 B
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              DE 123456789
            </p>

            <h2>Berufsbezeichnung</h2>
            <p>
              Gärtnermeister (verliehen in der Bundesrepublik Deutschland)
              <br />
              Zuständige Kammer: Handwerkskammer Berlin
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung und jede Art der Verwertung bedürfen
              der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
