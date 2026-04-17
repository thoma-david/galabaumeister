import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { SITE } from "../../data/site";
import { FOOTER_LINKS } from "../../data/navigation";
import { logoImg } from "../../data/images";
import Container from "../ui/Container";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-emerald-700">
        <Container className="py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Bereit für Ihren Traumgarten?
            </h2>
            <p className="mt-2 text-emerald-100 text-lg">
              Kostenlose Beratung vor Ort – unverbindlich und persönlich.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Kontakt aufnehmen
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info / NAP */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logoImg}
                alt="Galabau Meister Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-5">
              Ihr Meisterbetrieb für Garten- und Landschaftsbau in Berlin &
              Brandenburg. Seit über 15 Jahren. Persönlich & zuverlässig.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div>{SITE.hours.weekdays}</div>
                  <div>{SITE.hours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-white font-bold mb-4">Leistungen</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.leistungen.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-white font-bold mb-4">Unternehmen</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.unternehmen.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regionen */}
          <div>
            <h3 className="text-white font-bold mb-4">Service-Regionen</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.regionen.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/impressum"
              className="hover:text-slate-300 transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="hover:text-slate-300 transition-colors"
            >
              Datenschutz
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
