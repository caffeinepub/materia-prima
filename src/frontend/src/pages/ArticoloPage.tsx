import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { useGetArticle } from "../hooks/useQueries";

const articleImages = [
  "/assets/galileo-019d4f1a-3400-72db-a6ff-73b0de927ee3.jpg",
  "/assets/krishnamurti-019d4f1a-342a-74ac-8069-fd67be86f05b.jpg",
  "/assets/david_bohm-019d4f1a-35fa-733a-ac8c-1a6590c2feb6.jpg",
  "/assets/platone_e_aristotele-019d4f1a-35fd-728d-82ea-4f3a9d2b7cb5.jpg",
  "/assets/aristotele-019d4f1a-3610-77dd-b9d1-1b4c1353ec03.jpg",
  "/assets/cristo_in_croce-019d4f1a-38f1-76cf-bf15-2d6af937e66b.jpg",
];

export default function ArticoloPage() {
  const { id } = useParams({ from: "/articoli/$id" });
  const articleId = BigInt(id);
  const { data: article, isLoading, isError } = useGetArticle(articleId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const imgIndex = Number(articleId) % articleImages.length;
  const fallbackImage = articleImages[imgIndex];

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16" data-ocid="article.loading_state">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Skeleton className="h-8 w-48 mb-8" />
          <Skeleton className="aspect-[16/9] w-full rounded-lg mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/3 mb-8" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div
        className="min-h-screen pt-16 flex items-center justify-center"
        data-ocid="article.error_state"
      >
        <div className="text-center max-w-md mx-auto px-6">
          <p className="font-serif text-2xl text-muted-foreground mb-4">
            Articolo non trovato
          </p>
          <p className="font-body text-sm text-muted-foreground/70 mb-8">
            L&#39;articolo che cerchi non esiste o non è più disponibile.
          </p>
          <Link
            to="/articoli"
            className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-body text-sm"
            data-ocid="article.link"
          >
            &#x2190; Torna agli Articoli
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = article.title.toLowerCase().includes("castaneda")
    ? "/assets/vedere_castaneda-019d4f4a-882e-714b-8a2a-3edfde0ef19f.jpg"
    : article.imageUrl || fallbackImage;

  const formattedDate = article.publicationDate
    ? new Date(article.publicationDate).toLocaleDateString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen pt-16">
      {/* Article Hero */}
      {imageUrl && (
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/articoli"
          className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body mb-8"
          data-ocid="article.link"
        >
          <svg
            aria-hidden="true"
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Torna agli Articoli
        </Link>

        {formattedDate && (
          <p className="text-xs text-gold/70 uppercase tracking-wider mb-4 font-body">
            {formattedDate}
          </p>
        )}

        <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
          <div className="h-px flex-1 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span>Marco Persico</span>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {article.excerpt && (
          <p className="font-serif italic text-lg text-foreground/80 leading-relaxed mb-8 border-l-2 border-gold pl-5">
            {article.excerpt}
          </p>
        )}

        {/* Article body */}
        <div
          className="prose prose-invert prose-lg max-w-none font-body
          prose-headings:font-serif prose-headings:text-foreground
          prose-p:text-foreground/80 prose-p:leading-relaxed
          prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-light
          prose-strong:text-foreground prose-em:font-serif
          prose-blockquote:border-gold prose-blockquote:text-foreground/70"
        >
          {article.content ? (
            /* biome-ignore lint/security/noDangerouslySetInnerHtml: article content is admin-controlled */
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <p className="text-muted-foreground">
              Il contenuto di questo articolo sarà presto disponibile.
            </p>
          )}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/articoli"
            className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body"
            data-ocid="article.link"
          >
            &#x2190; Torna agli Articoli
          </Link>
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors font-body"
            data-ocid="article.link"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
