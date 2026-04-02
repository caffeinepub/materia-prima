export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer className="bg-navy-deep border-t border-gold/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-serif text-gold text-lg tracking-widest uppercase">
            Materia Prima
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Dove la fisica incontra lo spirito
          </p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            © {currentYear}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Realizzato con ♥ su caffeine.ai
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-muted-foreground text-sm">Marco Persico</p>
        </div>
      </div>
    </footer>
  );
}
