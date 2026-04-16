import SEO from "../components/SEO";
import { PageHeader } from "../components/sections";
import Container from "../components/ui/Container";
import { SITE } from "../data/site";

export default function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung"
        description={`Datenschutzerklärung von ${SITE.name} – Informationen zum Umgang mit Ihren Daten.`}
        path="datenschutz"
        noindex
      />

      <PageHeader title="Datenschutzerklärung" />

      <section className="py-16 md:py-20">
        <Container narrow>
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber: {SITE.legalName}, {SITE.address.street},{" "}
              {SITE.address.zip} {SITE.address.city}, Telefon:{" "}
              {SITE.phoneDisplay}, E-Mail: {SITE.email}.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei Netlify (Netlify Inc., 2325 3rd Street,
              Suite 296, San Francisco, CA 94107, USA) gehostet. Details
              entnehmen Sie der Datenschutzerklärung von Netlify.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p>
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}
              <br />
              Telefon: {SITE.phoneDisplay}
              <br />
              E-Mail: {SITE.email}
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>

            <h3>Google Maps</h3>
            <p>
              Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Zur Nutzung der Funktionen von Google Maps ist es
              notwendig, Ihre IP-Adresse zu speichern.
            </p>

            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
