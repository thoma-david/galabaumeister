import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Seite nicht gefunden" noindex />

      <section className="pt-32 pb-20 md:pt-44 md:pb-32 min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900">
        <Container className="text-center">
          <div className="text-8xl md:text-9xl font-extrabold text-emerald-500/30 mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
            Die gewünschte Seite existiert leider nicht. Möglicherweise wurde
            sie verschoben oder entfernt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="primary" size="lg">
              <Home className="w-5 h-5" />
              Zur Startseite
            </Button>
            <Button to="/kontakt" variant="secondary" size="lg">
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
