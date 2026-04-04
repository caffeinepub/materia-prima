import { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { ARTICLES } from "../data/articles";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

const sortedArticles = [...ARTICLES].sort(
  (a, b) =>
    new Date(b.publicationDate).getTime() -
    new Date(a.publicationDate).getTime(),
);

export default function ArticoliPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-navy-mid border-b border-gold/10 py-14 sm:py-20 text-center">
        <p className="text-xs text-gold uppercase tracking-widest mb-4 font-body">
          {t(lang, "articles.label")}
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
          {t(lang, "articles.title")}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="h-px w-16 bg-gold/30" />
        </div>
        <p className="font-body text-muted-foreground mt-4 max-w-sm sm:max-w-lg mx-auto px-4 sm:px-0">
          {t(lang, "articles.subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          data-ocid="articles.list"
        >
          {sortedArticles.map((article, i) => (
            <ArticleCard
              key={article.id.toString()}
              article={article}
              index={i + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
