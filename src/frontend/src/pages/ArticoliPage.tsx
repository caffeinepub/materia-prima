import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { useGetArticles } from "../hooks/useQueries";

const articleImages = [
  "/assets/galileo-019d4f1a-3400-72db-a6ff-73b0de927ee3.jpg",
  "/assets/krishnamurti-019d4f1a-342a-74ac-8069-fd67be86f05b.jpg",
  "/assets/david_bohm-019d4f1a-35fa-733a-ac8c-1a6590c2feb6.jpg",
  "/assets/platone_e_aristotele-019d4f1a-35fd-728d-82ea-4f3a9d2b7cb5.jpg",
  "/assets/aristotele-019d4f1a-3610-77dd-b9d1-1b4c1353ec03.jpg",
  "/assets/cristo_in_croce-019d4f1a-38f1-76cf-bf15-2d6af937e66b.jpg",
];

export default function ArticoliPage() {
  const { data: articles, isLoading } = useGetArticles();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Enrich articles with a local fallback image if imageUrl is missing
  const enrichedArticles = (articles || []).map((article, i) => ({
    ...article,
    imageUrl: article.imageUrl || articleImages[i % articleImages.length],
  }));

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="bg-navy-mid border-b border-gold/10 py-20 text-center">
        <p className="text-xs text-gold uppercase tracking-widest mb-4 font-body">
          Il Blog
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Articoli
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="h-px w-16 bg-gold/30" />
        </div>
        <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
          Esplorazioni all&#39;incrocio tra fisica quantistica, filosofia e
          coscienza spirituale
        </p>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="articles.loading_state"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-card rounded-lg overflow-hidden border border-border"
              >
                <Skeleton className="aspect-[16/9] w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/3 mt-4" />
                </div>
              </div>
            ))}
          </div>
        ) : enrichedArticles.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="articles.list"
          >
            {enrichedArticles.map((article, i) => (
              <ArticleCard
                key={article.id.toString()}
                article={article}
                index={i + 1}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24" data-ocid="articles.empty_state">
            <div className="mb-6">
              <svg
                aria-hidden="true"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="mx-auto text-gold/30"
                stroke="currentColor"
              >
                <path
                  d="M8 6h32a2 2 0 012 2v32a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 16h16M16 24h16M16 32h8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="font-serif text-2xl text-muted-foreground mb-3">
              Nessun articolo ancora
            </p>
            <p className="font-body text-sm text-muted-foreground/70">
              Gli articoli saranno pubblicati presto. Torna a trovarci!
            </p>
          </div>
        )}
      </div>

      {/* Placeholder articles section for article images */}
      {(!articles || articles.length === 0) && !isLoading && (
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="border-t border-gold/10 pt-12">
            <p className="text-xs text-gold uppercase tracking-widest mb-8 font-body text-center">
              In Preparazione
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {articleImages.map((src, i) => (
                <div
                  key={src}
                  className="aspect-[4/3] overflow-hidden rounded-lg bg-card border border-border"
                >
                  <img
                    src={src}
                    alt={`Articolo in preparazione ${i + 1}`}
                    className="w-full h-full object-cover opacity-60"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6 font-body">
              Nuovi articoli in arrivo su fisica, filosofia e spiritualit\u00e0.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
