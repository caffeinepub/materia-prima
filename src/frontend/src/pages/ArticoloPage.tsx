import { Link, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { ARTICLES } from "../data/articles";
import { useLanguage } from "../i18n/LanguageContext";
import { getArticleTranslation } from "../i18n/articlesTranslations";
import { t } from "../i18n/translations";

export default function ArticoloPage() {
  const { id } = useParams({ from: "/articoli/$id" });
  const { lang } = useLanguage();
  const article = ARTICLES.find((a) => a.id === BigInt(id));
  const translation = article
    ? getArticleTranslation(lang, Number(article.id))
    : null;

  const displayTitle = translation?.title ?? article?.title ?? "";
  const displayExcerpt = translation?.excerpt ?? article?.excerpt ?? "";
  const displayContent = translation?.content ?? article?.content ?? "";
  const dateLocale = t(lang, "article.date_locale");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!article) return;
    // Update page title
    document.title = `${displayTitle} — prima materia`;
    // Update Open Graph meta tags for sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute("content", displayTitle);
    if (ogImage && article.imageUrl)
      ogImage.setAttribute("content", article.imageUrl);
    if (ogDesc) ogDesc.setAttribute("content", displayExcerpt);
    // Restore defaults on unmount
    return () => {
      document.title = "prima materia";
      if (ogTitle) ogTitle.setAttribute("content", "prima materia");
      if (ogImage)
        ogImage.setAttribute(
          "content",
          "/assets/sufism-019d5205-2f09-7529-9b6b-01e94766a6fc.jpg",
        );
      if (ogDesc)
        ogDesc.setAttribute(
          "content",
          "Dove la scienza incontra il trascendente.",
        );
    };
  }, [article, displayTitle, displayExcerpt]);

  if (!article) {
    return (
      <div
        className="min-h-screen pt-16 flex items-center justify-center"
        data-ocid="article.error_state"
      >
        <div className="text-center max-w-md mx-auto px-5">
          <p className="font-serif text-2xl text-muted-foreground mb-4">
            {t(lang, "article.not_found")}
          </p>
          <p className="font-body text-sm text-muted-foreground/70 mb-8">
            {t(lang, "article.not_found_desc")}
          </p>
          <Link
            to="/articoli"
            className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-body text-sm"
            data-ocid="article.link"
          >
            ← {t(lang, "article.back")}
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = article.publicationDate
    ? new Date(article.publicationDate).toLocaleDateString(dateLocale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen pt-16">
      {article.imageUrl && (
        <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
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
          {t(lang, "article.back")}
        </Link>

        {formattedDate && (
          <p className="text-xs text-gold/70 uppercase tracking-wider mb-4 font-body">
            {formattedDate}
          </p>
        )}

        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground mb-5 sm:mb-6 leading-tight">
          {displayTitle}
        </h1>

        <div className="flex items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
          <div className="h-px flex-1 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span>{t(lang, "article.author")}</span>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {displayExcerpt && (
          <p className="font-serif italic text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 border-l-2 border-gold pl-4 sm:pl-5">
            {displayExcerpt}
          </p>
        )}

        <div
          className="prose prose-invert prose-base sm:prose-lg max-w-none font-body
          prose-headings:font-serif prose-headings:text-foreground
          prose-p:text-foreground/80 prose-p:leading-relaxed
          prose-a:text-gold prose-a:no-underline hover:prose-a:text-gold-light
          prose-strong:text-foreground prose-em:font-serif
          prose-blockquote:border-gold prose-blockquote:text-foreground/70"
        >
          {displayContent ? (
            /* biome-ignore lint/security/noDangerouslySetInnerHtml: article content is admin-controlled */
            <div dangerouslySetInnerHTML={{ __html: displayContent }} />
          ) : (
            <p className="text-muted-foreground">
              {t(lang, "article.no_content")}
            </p>
          )}
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex justify-between items-center">
          <Link
            to="/articoli"
            className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body"
            data-ocid="article.link"
          >
            ← {t(lang, "article.back")}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors font-body"
            data-ocid="article.link"
          >
            {t(lang, "article.home")}
          </Link>
        </div>
      </div>
    </div>
  );
}
