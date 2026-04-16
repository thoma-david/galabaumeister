import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import { SITE } from "../../data/site";
import Container from "../ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location]);

  const navClass = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-lg"
    : "bg-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      {/* Top bar */}
      <div className="bg-emerald-700 text-white text-sm hidden md:block">
        <Container className="flex justify-between items-center py-1.5">
          <span>
            {SITE.hours.weekdays} | {SITE.hours.saturday}
          </span>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-1 hover:text-emerald-200 transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5" />
            {SITE.phoneDisplay}
          </a>
        </Container>
      </div>

      {/* Main nav */}
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
                <path d="M12 10V6" />
                <path d="M9 8h6" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-extrabold text-slate-900 tracking-tight">
                Galabau
              </span>
              <span className="block text-xs font-semibold text-emerald-600 -mt-0.5 tracking-wide">
                MEISTER
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-emerald-700 bg-emerald-50" : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"}`
                    }
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </NavLink>

                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 text-sm transition-colors ${isActive ? "text-emerald-700 bg-emerald-50 font-medium" : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-emerald-700 bg-emerald-50" : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"}`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
            >
              <Phone className="w-4 h-4" />
              Jetzt anrufen
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Menü öffnen"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <Container className="py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? "text-emerald-700 bg-emerald-50" : "text-slate-700 hover:bg-slate-50"}`
                  }
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg text-sm transition-colors ${isActive ? "text-emerald-700 bg-emerald-50" : "text-slate-500 hover:text-emerald-700 hover:bg-slate-50"}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 mt-4 bg-emerald-600 text-white px-5 py-3 rounded-xl text-base font-semibold"
            >
              <Phone className="w-5 h-5" />
              {SITE.phoneDisplay}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
