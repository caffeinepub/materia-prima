import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { type Language, useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const LANGS: { code: Language; label: string }[] = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-navy-deep/98 backdrop-blur-md shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-lg sm:text-xl font-semibold tracking-widest text-gold uppercase"
          data-ocid="nav.link"
          onClick={() => setMenuOpen(false)}
        >
          Materia Prima
        </Link>

        {/* Desktop links + language switcher */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            {t(lang, "nav.home")}
          </Link>
          <Link
            to="/articoli"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            {t(lang, "nav.articles")}
          </Link>
          <Link
            to="/chi-sono"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            {t(lang, "nav.about")}
          </Link>

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2 border border-gold/30 rounded px-1 py-0.5">
            {LANGS.map((l, i) => (
              <span key={l.code} className="flex items-center">
                <button
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`text-xs font-body font-semibold px-1.5 py-0.5 rounded transition-colors ${
                    lang === l.code
                      ? "text-navy-deep bg-gold"
                      : "text-gold/70 hover:text-gold"
                  }`}
                  aria-pressed={lang === l.code}
                  aria-label={`Switch to ${l.label}`}
                >
                  {l.label}
                </button>
                {i < LANGS.length - 1 && (
                  <span className="text-gold/30 text-xs select-none">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: language switcher + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          {/* Compact language switcher for mobile */}
          <div className="flex items-center gap-0.5 border border-gold/30 rounded px-1 py-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`text-xs font-body font-semibold px-1.5 py-0.5 rounded transition-colors ${
                  lang === l.code
                    ? "text-navy-deep bg-gold"
                    : "text-gold/70 hover:text-gold"
                }`}
                aria-pressed={lang === l.code}
                aria-label={`Switch to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="text-gold p-3 -mr-1 rounded-md touch-manipulation"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? t(lang, "nav.close_menu") : t(lang, "nav.open_menu")
            }
            aria-expanded={menuOpen}
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-deep/98 border-t border-gold/20 px-6 py-8 flex flex-col gap-2">
          <Link
            to="/"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 border-b border-border/30 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            {t(lang, "nav.home")}
          </Link>
          <Link
            to="/articoli"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 border-b border-border/30 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            {t(lang, "nav.articles")}
          </Link>
          <Link
            to="/chi-sono"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            {t(lang, "nav.about")}
          </Link>
        </div>
      )}
    </header>
  );
}
