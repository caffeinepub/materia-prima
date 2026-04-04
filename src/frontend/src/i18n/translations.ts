import type { Language } from "./LanguageContext";

const translations = {
  it: {
    // Navbar
    "nav.home": "Home",
    "nav.articles": "Articoli",
    "nav.about": "Chi Sono",
    "nav.open_menu": "Apri menu",
    "nav.close_menu": "Chiudi menu",

    // Hero
    "hero.headline": "Dove la scienza incontra il trascendente",
    "hero.cta_articles": "Esplora gli Articoli",
    "hero.cta_about": "Chi Sono",
    "hero.scroll": "Scorri",

    // Home sections
    "home.themes_label": "Temi Fondamentali",
    "home.themes_title": "Tre Porte della Conoscenza",
    "home.blog_label": "Dal Blog",
    "home.latest_title": "Ultimi Articoli",
    "home.see_all": "Vedi tutti",
    "home.see_all_mobile": "Vedi tutti gli articoli →",
    "home.quote":
      "Il pensiero non descrive passivamente e dunque riflessivamente la realtà ma partecipa attivamente alla sua strutturazione.",
    "home.quote_author": "— Marco Persico",

    // Feature cards
    "feature.intuizione.caption": "L'Intuizione",
    "feature.intuizione.desc":
      "La scintilla che precede le forze formative del pensiero",
    "feature.unita.caption": "L'Unità",
    "feature.unita.desc": "Mente e corpo come un unico tutto",
    "feature.divino.caption": "Il Divino",
    "feature.divino.desc": "L'archetipo o Idea che permea la realtà",

    // Articles page
    "articles.label": "Il Blog",
    "articles.title": "Articoli",
    "articles.subtitle":
      "Esplorazioni all'incrocio tra fisica quantistica, filosofia e coscienza spirituale",

    // Article card
    "article.read_more": "Leggi di più",
    "article.date_locale": "it-IT",

    // Article page
    "article.back": "Torna agli Articoli",
    "article.not_found": "Articolo non trovato",
    "article.not_found_desc":
      "L'articolo che cerchi non esiste o non è più disponibile.",
    "article.no_content":
      "Il contenuto di questo articolo sarà presto disponibile.",
    "article.home": "Home",
    "article.author": "Marco Persico",

    // Chi Sono page
    "about.label": "L'Autore",
    "about.name": "Marco Persico",
    "about.subtitle":
      "Esploratore all'incrocio tra fisica, filosofia e coscienza",
    "about.topics_heading": "Argomenti",
    "about.topic_1": "Fisica Quantistica",
    "about.topic_2": "Filosofia della mente",
    "about.topic_3": "Spiritualità comparata",
    "about.topic_4": "Coscienza e materia",
    "about.topic_5": "Metafisica occidentale",
    "about.bio_1":
      "Mi chiamo Marco Persico e da oltre 5 anni esploro la zona di confine tra scienze fisiche e ricerca spirituale. Nato con una profonda curiosità per i meccanismi nascosti della realtà, mi sono laureato in ingegneria meccanica nel 2017 alla TU Delft in Olanda per poi sentire la necessità di andare oltre queste materie che sono utili solamente per fini pratici.",
    "about.bio_2":
      "Il mio percorso ha attraversato la psicologia del profondo e la teoria quantistica — con la sua dissoluzione del concetto di oggetto separato — le tradizioni filosofiche orientali e occidentali, e la grande corrente del pensiero mistico europeo. David Bohm, Krishnamurti per giungere a Guénon che è uno dei pochi autori moderni che riprende con fedeltà e autenticità la metafisica aristotelica che oramai viene considerata superata e dunque scartata.",
    "about.bio_3":
      "Materia Prima è il nome che ho scelto per questo spazio. Gli scolastici si riferivano alla materia prima come sostanza indifferenziata da cui tutto emerge. Guénon collega giustamente questo concetto alla Prakriti della tradizione hindu.",
    "about.bio_4":
      "In questo blog condivido riflessioni, analisi e intuizioni per chi, come me, è del parere che la scienza moderna è incompleta.",
    "about.pullquote":
      "«La scienza moderna ci insegna il come, le scienze filosofiche e l'esoterismo invece il perché.»",
    "about.bio_5":
      "Sono convinto che la crisi della modernità — dovuta all'alienazione, al nichilismo, alla perdita di senso — derivi in parte dall'aver separato artificialmente il sapere scientifico dall'esperienza interiore. I grandi fisici del Novecento — Bohr, Heisenberg, Schrödinger, Bohm — avvertivano questa tensione e cercavano ponti. Il mio lavoro vuole continuare quella ricerca.",

    // Footer
    "footer.tagline": "Dove la fisica incontra lo spirito",
    "footer.made_with": "Realizzato con ♥ su caffeine.ai",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.articles": "Articles",
    "nav.about": "About",
    "nav.open_menu": "Open menu",
    "nav.close_menu": "Close menu",

    // Hero
    "hero.headline": "Where science meets the transcendent",
    "hero.cta_articles": "Explore Articles",
    "hero.cta_about": "About Me",
    "hero.scroll": "Scroll",

    // Home sections
    "home.themes_label": "Fundamental Themes",
    "home.themes_title": "Three Gates of Knowledge",
    "home.blog_label": "From the Blog",
    "home.latest_title": "Latest Articles",
    "home.see_all": "See all",
    "home.see_all_mobile": "See all articles →",
    "home.quote":
      "Thought does not passively and thus reflectively describe reality — it actively participates in its structuring.",
    "home.quote_author": "— Marco Persico",

    // Feature cards
    "feature.intuizione.caption": "Intuition",
    "feature.intuizione.desc":
      "The spark that precedes the formative forces of thought",
    "feature.unita.caption": "Unity",
    "feature.unita.desc": "Mind and body as a single whole",
    "feature.divino.caption": "The Divine",
    "feature.divino.desc": "The archetype or Idea that permeates reality",

    // Articles page
    "articles.label": "The Blog",
    "articles.title": "Articles",
    "articles.subtitle":
      "Explorations at the intersection of quantum physics, philosophy and spiritual consciousness",

    // Article card
    "article.read_more": "Read more",
    "article.date_locale": "en-US",

    // Article page
    "article.back": "Back to Articles",
    "article.not_found": "Article not found",
    "article.not_found_desc":
      "The article you are looking for does not exist or is no longer available.",
    "article.no_content": "The content of this article will be available soon.",
    "article.home": "Home",
    "article.author": "Marco Persico",

    // Chi Sono page
    "about.label": "The Author",
    "about.name": "Marco Persico",
    "about.subtitle":
      "Explorer at the crossroads of physics, philosophy and consciousness",
    "about.topics_heading": "Topics",
    "about.topic_1": "Quantum Physics",
    "about.topic_2": "Philosophy of mind",
    "about.topic_3": "Comparative spirituality",
    "about.topic_4": "Consciousness and matter",
    "about.topic_5": "Western metaphysics",
    "about.bio_1":
      "My name is Marco Persico and for over 5 years I have been exploring the borderland between the physical sciences and spiritual inquiry. Born with a deep curiosity for the hidden mechanisms of reality, I graduated in mechanical engineering in 2017 from TU Delft in the Netherlands, only to feel the need to go beyond disciplines that serve merely practical ends.",
    "about.bio_2":
      "My path has crossed depth psychology and quantum theory — with its dissolution of the concept of the separate object — Eastern and Western philosophical traditions, and the great current of European mystical thought. David Bohm, Krishnamurti, and ultimately Guénon, one of the few modern authors who faithfully and authentically retrieves Aristotelian metaphysics, now considered obsolete and discarded.",
    "about.bio_3":
      "Materia Prima is the name I chose for this space. The scholastics referred to materia prima as the undifferentiated substance from which all things emerge. Guénon rightly connects this concept to the Prakriti of the Hindu tradition.",
    "about.bio_4":
      "In this blog I share reflections, analyses and intuitions for those who, like me, believe that modern science is incomplete.",
    "about.pullquote":
      "\u201cModern science teaches us the how; philosophical sciences and esotericism teach us the why.\u201d",
    "about.bio_5":
      "I am convinced that the crisis of modernity — caused by alienation, nihilism, and the loss of meaning — stems in part from the artificial separation of scientific knowledge from inner experience. The great physicists of the twentieth century — Bohr, Heisenberg, Schrödinger, Bohm — felt this tension and sought bridges. My work wants to continue that search.",

    // Footer
    "footer.tagline": "Where physics meets the spirit",
    "footer.made_with": "Made with ♥ on caffeine.ai",
  },

  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.articles": "Artículos",
    "nav.about": "Quién Soy",
    "nav.open_menu": "Abrir menú",
    "nav.close_menu": "Cerrar menú",

    // Hero
    "hero.headline": "Donde la ciencia encuentra lo trascendente",
    "hero.cta_articles": "Explorar Artículos",
    "hero.cta_about": "Quién Soy",
    "hero.scroll": "Desplazar",

    // Home sections
    "home.themes_label": "Temas Fundamentales",
    "home.themes_title": "Tres Puertas del Conocimiento",
    "home.blog_label": "Del Blog",
    "home.latest_title": "Últimos Artículos",
    "home.see_all": "Ver todos",
    "home.see_all_mobile": "Ver todos los artículos →",
    "home.quote":
      "El pensamiento no describe pasiva y reflexivamente la realidad, sino que participa activamente en su estructuración.",
    "home.quote_author": "— Marco Persico",

    // Feature cards
    "feature.intuizione.caption": "La Intuición",
    "feature.intuizione.desc":
      "La chispa que precede a las fuerzas formativas del pensamiento",
    "feature.unita.caption": "La Unidad",
    "feature.unita.desc": "Mente y cuerpo como un todo único",
    "feature.divino.caption": "Lo Divino",
    "feature.divino.desc": "El arquetipo o Idea que impregna la realidad",

    // Articles page
    "articles.label": "El Blog",
    "articles.title": "Artículos",
    "articles.subtitle":
      "Exploraciones en la intersección entre física cuántica, filosofía y conciencia espiritual",

    // Article card
    "article.read_more": "Leer más",
    "article.date_locale": "es-ES",

    // Article page
    "article.back": "Volver a Artículos",
    "article.not_found": "Artículo no encontrado",
    "article.not_found_desc":
      "El artículo que buscas no existe o ya no está disponible.",
    "article.no_content":
      "El contenido de este artículo estará disponible próximamente.",
    "article.home": "Inicio",
    "article.author": "Marco Persico",

    // Chi Sono page
    "about.label": "El Autor",
    "about.name": "Marco Persico",
    "about.subtitle":
      "Explorador en la encrucijada entre física, filosofía y conciencia",
    "about.topics_heading": "Temas",
    "about.topic_1": "Física Cuántica",
    "about.topic_2": "Filosofía de la mente",
    "about.topic_3": "Espiritualidad comparada",
    "about.topic_4": "Conciencia y materia",
    "about.topic_5": "Metafísica occidental",
    "about.bio_1":
      "Me llamo Marco Persico y desde hace más de 5 años exploro la zona fronteriza entre las ciencias físicas y la búsqueda espiritual. Nacido con una profunda curiosidad por los mecanismos ocultos de la realidad, me licencié en ingeniería mecánica en 2017 en la TU Delft de Países Bajos, para luego sentir la necesidad de ir más allá de estas materias que solo sirven para fines prácticos.",
    "about.bio_2":
      "Mi camino ha atravesado la psicología profunda y la teoría cuántica — con su disolución del concepto de objeto separado — las tradiciones filosóficas orientales y occidentales, y la gran corriente del pensamiento místico europeo. David Bohm, Krishnamurti, hasta llegar a Guénon, uno de los pocos autores modernos que retoma con fidelidad y autenticidad la metafísica aristotélica, hoy considerada superada y desechada.",
    "about.bio_3":
      "Materia Prima es el nombre que elegí para este espacio. Los escolásticos se referían a la materia prima como la sustancia indiferenciada de la que todo emerge. Guénon conecta acertadamente este concepto con la Prakriti de la tradición hindú.",
    "about.bio_4":
      "En este blog comparto reflexiones, análisis e intuiciones para quienes, como yo, consideran que la ciencia moderna es incompleta.",
    "about.pullquote":
      "\u201cLa ciencia moderna nos enseña el cómo; las ciencias filosóficas y el esoterismo, el porqué.\u201d",
    "about.bio_5":
      "Estoy convencido de que la crisis de la modernidad — causada por la alienación, el nihilismo, la pérdida de sentido — deriva en parte de haber separado artificialmente el saber científico de la experiencia interior. Los grandes físicos del siglo XX — Bohr, Heisenberg, Schrödinger, Bohm — sentían esta tensión y buscaban puentes. Mi trabajo quiere continuar esa búsqueda.",

    // Footer
    "footer.tagline": "Donde la física encuentra el espíritu",
    "footer.made_with": "Hecho con ♥ en caffeine.ai",
  },
} satisfies Record<Language, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["it"];

export function getTranslations(lang: Language) {
  return translations[lang];
}

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key] ?? translations.it[key] ?? key;
}
