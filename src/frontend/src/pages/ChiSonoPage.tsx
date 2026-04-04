import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { t } from "../i18n/translations";

export default function ChiSonoPage() {
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const topics = [
    t(lang, "about.topic_1"),
    t(lang, "about.topic_2"),
    t(lang, "about.topic_3"),
    t(lang, "about.topic_4"),
    t(lang, "about.topic_5"),
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <div
        className="relative py-24 sm:py-32 text-center"
        style={{
          backgroundImage:
            "url(/assets/sole-019d4fd8-9260-763a-a83a-4972d48d5444.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6">
          <p className="text-sm uppercase tracking-widest mb-4 font-body font-black text-black">
            {t(lang, "about.label")}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-black text-black mb-4">
            {t(lang, "about.name")}
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16 bg-black/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-black/70" />
            <div className="h-px w-16 bg-black/50" />
          </div>
          <p className="font-serif text-lg sm:text-xl font-black text-black">
            {t(lang, "about.subtitle")}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 md:hidden">
          <div className="rounded-lg overflow-hidden border border-gold/20 shadow-card-dark max-w-sm mx-auto">
            <img
              src="/assets/dall_e_2024-11-16_18.12.01_-_un_immagine_concettuale_che_rappresenta_l_unit_tra_mente_sensi_e_spirit-019d4f1a-3b0b-71bc-ae39-940b38606101.webp"
              alt="Marco Persico"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Sidebar */}
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden border border-gold/20 shadow-card-dark mb-6">
                <img
                  src="/assets/dall_e_2024-11-16_18.12.01_-_un_immagine_concettuale_che_rappresenta_l_unit_tra_mente_sensi_e_spirit-019d4f1a-3b0b-71bc-ae39-940b38606101.webp"
                  alt="Marco Persico"
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-serif text-sm text-gold uppercase tracking-wider mb-4">
                  {t(lang, "about.topics_heading")}
                </h3>
                <ul className="space-y-2">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-muted-foreground font-body"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            <div className="space-y-5 font-body text-foreground/80 leading-relaxed text-base">
              <p>
                {lang === "it" ? (
                  <>
                    Mi chiamo{" "}
                    <strong className="text-foreground font-semibold">
                      Marco Persico
                    </strong>{" "}
                    {t(lang, "about.bio_1").replace(
                      "Mi chiamo Marco Persico ",
                      "",
                    )}
                  </>
                ) : lang === "en" ? (
                  <>
                    My name is{" "}
                    <strong className="text-foreground font-semibold">
                      Marco Persico
                    </strong>{" "}
                    {t(lang, "about.bio_1").replace(
                      "My name is Marco Persico ",
                      "",
                    )}
                  </>
                ) : (
                  <>
                    Me llamo{" "}
                    <strong className="text-foreground font-semibold">
                      Marco Persico
                    </strong>{" "}
                    {t(lang, "about.bio_1").replace(
                      "Me llamo Marco Persico ",
                      "",
                    )}
                  </>
                )}
              </p>
              <p>{t(lang, "about.bio_2")}</p>
              <p>
                <em className="font-serif italic">Materia Prima</em>{" "}
                {lang === "it"
                  ? "è il nome che ho scelto per questo spazio. Gli scolastici si riferivano alla materia prima come sostanza indifferenziata da cui tutto emerge. Guénon collega giustamente questo concetto alla Prakriti della tradizione hindu."
                  : lang === "en"
                    ? "is the name I chose for this space. The scholastics referred to materia prima as the undifferentiated substance from which all things emerge. Guénon rightly connects this concept to the Prakriti of the Hindu tradition."
                    : "es el nombre que elegí para este espacio. Los escolásticos se referían a la materia prima como la sustancia indiferenciada de la que todo emerge. Guénon conecta acertadamente este concepto con la Prakriti de la tradición hindú."}
              </p>
              <p>{t(lang, "about.bio_4")}</p>
            </div>

            <blockquote className="border-l-2 border-gold pl-5 sm:pl-6 py-2">
              <p className="font-serif italic text-lg sm:text-xl text-foreground/90 leading-relaxed">
                {t(lang, "about.pullquote")}
              </p>
            </blockquote>

            <div className="space-y-5 font-body text-foreground/80 leading-relaxed">
              <p>{t(lang, "about.bio_5")}</p>
            </div>

            {/* Topics - mobile only */}
            <div className="md:hidden bg-card border border-border rounded-lg p-5">
              <h3 className="font-serif text-sm text-gold uppercase tracking-wider mb-4">
                {t(lang, "about.topics_heading")}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 text-sm text-muted-foreground font-body"
                  >
                    <div className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src="/assets/dio-019d4f1a-45aa-716f-90d9-8666862f85e5.png"
                  alt="Il Divino nella visione di Marco Persico"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-border">
                <img
                  src="/assets/intuizione-019d4f1a-343e-733c-a92d-cc5c6c7678de.jpg"
                  alt="L'Intuizione"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
