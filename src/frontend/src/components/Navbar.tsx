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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-widest text-gold uppercase"
          data-ocid="nav.link"
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
          className="md:hidden text-gold p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Apri menu"
          data-ocid="nav.toggle"
        >
          <span className="block w-5 h-0.5 bg-gold mb-1" />
          <span className="block w-5 h-0.5 bg-gold mb-1" />
          <span className="block w-5 h-0.5 bg-gold" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-deep/98 border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            Home
          </Link>
          <Link
            to="/articoli"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase"
            onClick={() => setMenuOpen(false)}
            data-ocid="nav.link"
          >
            Articoli
          </Link>
          <Link
            to="/chi-sono"
            className="text-sm tracking-wider text-foreground/80 hover:text-gold transition-colors uppercase"
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
