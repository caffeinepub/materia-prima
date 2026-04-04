import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname = window.location.hostname;
  const { lang } = useLanguage();

  return (
    <footer className="bg-navy-deep border-t border-gold/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-serif text-gold text-lg tracking-widest">
            prima materia
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            {t(lang, "footer.tagline")}
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
              {t(lang, "footer.made_with")}
            </a>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-muted-foreground text-sm">Marco Persico</p>
          <a
            href="mailto:9ocram@proton.me"
            className="text-muted-foreground text-sm hover:text-gold transition-colors"
          >
            9ocram@proton.me
          </a>
        </div>
      </div>
    </footer>
  );
}
