import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "../../data/site";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <Container className="relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Starten Sie jetzt Ihr Gartenprojekt
        </h2>
        <p className="mt-5 text-lg text-emerald-100 max-w-2xl mx-auto">
          Vereinbaren Sie eine kostenlose Beratung vor Ort. Wir kommen zu Ihnen,
          besprechen Ihre Wünsche und erstellen ein unverbindliches Angebot.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="dark" size="lg" to="/kontakt">
            Termin vereinbaren
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            href={`tel:${SITE.phone}`}
            className="!bg-white !text-emerald-700 hover:!bg-emerald-50 !shadow-lg"
          >
            <Phone className="w-5 h-5" />
            {SITE.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
