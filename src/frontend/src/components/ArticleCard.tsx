import { Link } from "@tanstack/react-router";
import type { Article } from "../backend.d";
import { useLanguage } from "../i18n/LanguageContext";
import { getArticleTranslation } from "../i18n/articlesTranslations";
import { t } from "../i18n/translations";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 1 }: ArticleCardProps) {
  const { lang } = useLanguage();
  const translation = getArticleTranslation(lang, Number(article.id));
  const dateLocale = t(lang, "article.date_locale");

  const displayTitle = translation?.title ?? article.title;
  const displayExcerpt = translation?.excerpt ?? article.excerpt;

  const formattedDate = article.publicationDate
    ? new Date(article.publicationDate).toLocaleDateString(dateLocale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article
      className="bg-card border border-border hover:border-gold/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-card-dark group flex flex-col"
      data-ocid={`article.item.${index}`}
    >
      {article.imageUrl && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={displayTitle}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {formattedDate && (
          <p className="text-xs text-gold/70 uppercase tracking-wider mb-2 font-body">
            {formattedDate}
          </p>
        )}
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-gold transition-colors">
          {displayTitle}
        </h3>
        {displayExcerpt && (
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1 font-body">
            {displayExcerpt}
          </p>
        )}
        <Link
          to="/articoli/$id"
          params={{ id: article.id.toString() }}
          className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors font-body tracking-wide mt-auto"
          data-ocid={`article.link.${index}`}
        >
          {t(lang, "article.read_more")}
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
    </article>
  );
}
