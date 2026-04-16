import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import { PageHeader, FAQSection } from "../components/sections";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { SITE } from "../data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Kontakt – Kostenlose Beratung anfordern"
        description="Kontaktieren Sie Galabau Meister für eine kostenlose Beratung. Telefon, E-Mail oder Kontaktformular – wir sind für Sie da. Berlin & Brandenburg."
        path="kontakt"
      />

      <PageHeader
        title="Kontakt aufnehmen"
        subtitle="Wir freuen uns auf Ihre Anfrage – kostenlos und unverbindlich."
        breadcrumbs={[{ label: "Startseite", path: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Kostenlose Beratung anfordern
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p className="text-slate-600">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Gewünschte Leistung
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Gartengestaltung</option>
                      <option>Gartenpflege</option>
                      <option>Pflasterarbeiten</option>
                      <option>Terrassenbau</option>
                      <option>Zaunbau & Sichtschutz</option>
                      <option>Baumpflege / Baumfällung</option>
                      <option>Bewässerungssysteme</option>
                      <option>Winterdienst</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-y"
                      placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..."
                    />
                  </div>

                  <p className="text-xs text-slate-500">
                    * Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
                    <a
                      href="/datenschutz"
                      className="text-emerald-600 underline"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    verarbeitet.
                  </p>

                  <Button type="submit" size="lg">
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-emerald-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">Direktkontakt</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="flex items-center gap-3 hover:text-emerald-200 transition-colors"
                    >
                      <Phone className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="font-semibold">{SITE.phoneDisplay}</div>
                        <div className="text-emerald-200 text-sm">
                          Mo–Fr 7–18 Uhr
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-center gap-3 hover:text-emerald-200 transition-colors"
                    >
                      <Mail className="w-5 h-5 shrink-0" />
                      <div>
                        <div className="font-semibold">{SITE.email}</div>
                        <div className="text-emerald-200 text-sm">
                          Antwort in 24h
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Adresse</h3>
                <div className="flex items-start gap-3 text-slate-600 mb-3">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">
                      {SITE.name}
                    </div>
                    <div>{SITE.address.street}</div>
                    <div>
                      {SITE.address.zip} {SITE.address.city}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <div>{SITE.hours.weekdays}</div>
                    <div>{SITE.hours.saturday}</div>
                    <div>{SITE.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title="Galabau Meister Standort"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5!2d13.3017!3d52.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBerlin!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQSection />
    </>
  );
}
