import { createContext, useContext, useEffect, useState } from "react";

export type Language = "it" | "en" | "es";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "it",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("mp_lang");
    if (stored === "en" || stored === "es" || stored === "it") return stored;
    return "it";
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("mp_lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
