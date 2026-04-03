import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            Home
          </Link>
          <Link
            to="/articoli"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            Articoli
          </Link>
          <Link
            to="/chi-sono"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase font-body"
            data-ocid="nav.link"
          >
            Chi Sono
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-gold p-3 -mr-1 rounded-md touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          data-ocid="nav.toggle"
        >
          {menuOpen ? (
            // X icon
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
            // Hamburger icon
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
      </nav>

      {/* Mobile menu - full screen overlay */}
      {menuOpen && (
        <div className="md:hidden bg-navy-deep/98 border-t border-gold/20 px-6 py-8 flex flex-col gap-2">
          <Link
            to="/"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 border-b border-border/30 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            Home
          </Link>
          <Link
            to="/articoli"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 border-b border-border/30 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            Articoli
          </Link>
          <Link
            to="/chi-sono"
            className="text-base tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase py-4 font-body active:text-gold"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            Chi Sono
          </Link>
        </div>
      )}
    </header>
  );
}
