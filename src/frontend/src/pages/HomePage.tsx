import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import ArticleCard from "../components/ArticleCard";
import { ARTICLES } from "../data/articles";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const HERO_BG = "/assets/sufism-019d5205-2f09-7529-9b6b-01e94766a6fc.jpg";

const latestArticles = [...ARTICLES]
  .sort(
    (a, b) =>
      new Date(b.publicationDate).getTime() -
      new Date(a.publicationDate).getTime(),
  )
  .slice(0, 3);

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        }
      },
      { threshold: 0.1 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref]);
}

function FadeSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref as React.RefObject<HTMLElement>);
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const { lang } = useLanguage();

  const featureImages = [
    {
      src: "/assets/intuizione-019d4f1a-343e-733c-a92d-cc5c6c7678de.jpg",
      alt: "Intuizione",
      caption: t(lang, "feature.intuizione.caption"),
      description: t(lang, "feature.intuizione.desc"),
      link: "/articoli/6",
      articleId: "6",
    },
    {
      src: "/assets/dall_e_2024-11-16_18.12.01_-_un_immagine_concettuale_che_rappresenta_l_unit_tra_mente_sensi_e_spirit-019d4f1a-3b0b-71bc-ae39-940b38606101.webp",
      alt: "Unità mente corpo",
      caption: t(lang, "feature.unita.caption"),
      description: t(lang, "feature.unita.desc"),
      link: "/articoli/4",
      articleId: "4",
    },
    {
      src: "/assets/sun-019d5264-ad10-73fe-8fd1-16387c4f0486.jpeg",
      alt: "Il Divino",
      caption: t(lang, "feature.divino.caption"),
      description: t(lang, "feature.divino.desc"),
      link: "/articoli/5",
      articleId: "5",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-between text-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.section"
      >
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(11,18,32,0.7) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pt-24 sm:pt-28">
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/70" />
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
          </div>

          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide leading-tight text-gold"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            {t(lang, "hero.headline")}
          </h1>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pb-16 sm:pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/articoli"
              className="w-full sm:w-auto inline-block px-8 py-4 sm:py-3 bg-gold text-navy-deep font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 hover:bg-gold-light hover:shadow-gold active:scale-95"
              data-ocid="home.primary_button"
            >
              {t(lang, "hero.cta_articles")}
            </Link>
            <Link
              to="/chi-sono"
              className="w-full sm:w-auto inline-block px-8 py-4 sm:py-3 border border-gold/60 text-gold font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 hover:bg-gold/10 active:scale-95"
              data-ocid="home.secondary_button"
            >
              {t(lang, "hero.cta_about")}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGES SECTION */}
      <section
        className="py-14 sm:py-20 bg-background"
        data-ocid="home.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeSection>
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs text-gold uppercase tracking-widest mb-3 font-body">
                {t(lang, "home.themes_label")}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                {t(lang, "home.themes_title")}
              </h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px w-16 bg-gold/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                <div className="h-px w-16 bg-gold/30" />
              </div>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featureImages.map((img) => {
              const cardContent = (
                <div
                  className={`group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-card-dark ${img.link ? "hover:border-gold/60 cursor-pointer" : "hover:border-gold/40"}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3
                      className={`font-serif text-xl mb-1 ${img.link ? "text-gold group-hover:text-gold-light transition-colors" : "text-gold"}`}
                    >
                      {img.caption}
                      {img.link && (
                        <span className="ml-2 text-sm opacity-60">→</span>
                      )}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {img.description}
                    </p>
                  </div>
                </div>
              );

              return (
                <FadeSection key={img.alt}>
                  {img.link && img.articleId ? (
                    <Link
                      to={img.link as "/articoli/$id"}
                      params={{ id: img.articleId }}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </FadeSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-border" />
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold/40"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="3" />
            <path
              d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              strokeWidth="1"
            />
          </svg>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* LATEST ARTICLES */}
      <section
        className="py-14 sm:py-20 bg-background"
        data-ocid="articles.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeSection>
            <div className="flex items-end justify-between mb-10 sm:mb-12">
              <div>
                <p className="text-xs text-gold uppercase tracking-widest mb-3 font-body">
                  {t(lang, "home.blog_label")}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                  {t(lang, "home.latest_title")}
                </h2>
              </div>
              <Link
                to="/articoli"
                className="hidden md:inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body tracking-wide"
                data-ocid="articles.link"
              >
                {t(lang, "home.see_all")}
                <svg
                  aria-hidden="true"
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {latestArticles.map((article, i) => (
              <FadeSection key={article.id.toString()}>
                <ArticleCard article={article} index={i + 1} />
              </FadeSection>
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link
              to="/articoli"
              className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body"
              data-ocid="articles.link"
            >
              {t(lang, "home.see_all_mobile")}
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        className="py-14 sm:py-20 bg-navy-mid border-y border-gold/10"
        data-ocid="home.section"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <FadeSection>
            <svg
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mx-auto mb-6 text-gold/40"
              stroke="currentColor"
            >
              <path
                d="M10 8C6.686 8 4 10.686 4 14v10h8V14H8c0-1.105.895-2 2-2V8zm14 0c-3.314 0-6 2.686-6 6v10h8V14h-4c0-1.105.895-2 2-2V8z"
                strokeWidth="1"
                fill="currentColor"
              />
            </svg>
            <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
              &ldquo;{t(lang, "home.quote")}&rdquo;
            </blockquote>
            <cite className="font-body text-sm text-gold/70 uppercase tracking-widest not-italic">
              {t(lang, "home.quote_author")}
            </cite>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
