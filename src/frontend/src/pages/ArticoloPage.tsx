import { Link, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { ARTICLES } from "../data/articles";

export default function ArticoloPage() {
  const { id } = useParams({ from: "/articoli/$id" });
  const article = ARTICLES.find((a) => a.id === BigInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!article) {
    return (
      <div
        className="min-h-screen pt-16 flex items-center justify-center"
        data-ocid="article.error_state"
      >
        <div className="text-center max-w-md mx-auto px-5">
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
            ← Torna agli Articoli
          </Link>
        </div>
      </div>
    );
  }

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
      {article.imageUrl && (
        <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          to="/articoli"
          className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body mb-6 sm:mb-8"
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

        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground mb-5 sm:mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
          <div className="h-px flex-1 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span>Marco Persico</span>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {article.excerpt && (
          <p className="font-serif italic text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 border-l-2 border-gold pl-4 sm:pl-5">
            {article.excerpt}
          </p>
        )}

        {/* Article body */}
        <div
          className="prose prose-invert prose-base sm:prose-lg max-w-none font-body
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
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/articoli"
            className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body"
            data-ocid="article.link"
          >
            ← Torna agli Articoli
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
