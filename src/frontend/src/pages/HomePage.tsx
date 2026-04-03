import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import ArticleCard from "../components/ArticleCard";
import { ARTICLES } from "../data/articles";

const HERO_BG = "/assets/sufism-019d5205-2f09-7529-9b6b-01e94766a6fc.jpg";

const featureImages = [
  {
    src: "/assets/intuizione-019d4f1a-343e-733c-a92d-cc5c6c7678de.jpg",
    alt: "Intuizione",
    caption: "L'Intuizione",
    description: "La scintilla che precede le forze formative del pensiero",
    link: null,
  },
  {
    src: "/assets/dall_e_2024-11-16_18.12.01_-_un_immagine_concettuale_che_rappresenta_l_unit_tra_mente_sensi_e_spirit-019d4f1a-3b0b-71bc-ae39-940b38606101.webp",
    alt: "Unità mente corpo",
    caption: "L'Unità",
    description: "Mente e corpo come un unico tutto",
    link: "/articoli/4",
  },
  {
    src: "/assets/dio-019d4f1a-45aa-716f-90d9-8666862f85e5.png",
    alt: "Il Divino",
    caption: "Il Divino",
    description: "L'archetipo o Idea che permea la realtà",
    link: null,
  },
];

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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-navy-deep/60" />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(11,18,32,0.7) 100%)",
          }}
        />

        {/* Top content: title */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pt-24 sm:pt-28">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold/70" />
            <div className="h-px w-12 sm:w-16 bg-gold/50" />
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wide leading-tight text-gold"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.4)",
            }}
          >
            Dove la scienza incontra il trascendente
          </h1>
        </div>

        {/* Bottom content: buttons + scroll indicator */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pb-16 sm:pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Link
              to="/articoli"
              className="w-full sm:w-auto inline-block px-8 py-4 sm:py-3 bg-gold text-navy-deep font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 hover:bg-gold-light hover:shadow-gold active:scale-95"
              data-ocid="home.primary_button"
            >
              Esplora gli Articoli
            </Link>
            <Link
              to="/chi-sono"
              className="w-full sm:w-auto inline-block px-8 py-4 sm:py-3 border border-gold/60 text-gold font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-300 hover:bg-gold/10 active:scale-95"
              data-ocid="home.secondary_button"
            >
              Chi Sono
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs text-gold uppercase tracking-widest font-body">
              Scorri
            </span>
            <div className="w-px h-8 sm:h-10 bg-gold/40 animate-pulse" />
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
                Temi Fondamentali
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                Tre Porte della Conoscenza
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
                  {img.link ? (
                    <Link to={img.link as "/articoli/$id"} params={{ id: "4" }}>
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

      {/* ULTIMI ARTICOLI */}
      <section
        className="py-14 sm:py-20 bg-background"
        data-ocid="articles.section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeSection>
            <div className="flex items-end justify-between mb-10 sm:mb-12">
              <div>
                <p className="text-xs text-gold uppercase tracking-widest mb-3 font-body">
                  Dal Blog
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                  Ultimi Articoli
                </h2>
              </div>
              <Link
                to="/articoli"
                className="hidden md:inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body tracking-wide"
                data-ocid="articles.link"
              >
                Vedi tutti
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
              Vedi tutti gli articoli →
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
              &ldquo;Il pensiero non descrive passivamente e dunque
              riflessivamente la realtà ma partecipa attivamente alla sua
              strutturazione.&rdquo;
            </blockquote>
            <cite className="font-body text-sm text-gold/70 uppercase tracking-widest not-italic">
              — Marco Persico
            </cite>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
