"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language } from "./i18n";

type TranslationSchema = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let nextLanguage: Language = "en";

    const saved = localStorage.getItem("site-language");

    if (saved === "en" || saved === "ru" || saved === "es") {
      nextLanguage = saved;
    } else {
      const browserLang = navigator.language.toLowerCase();

      if (browserLang.startsWith("ru")) {
        nextLanguage = "ru";
      } else if (browserLang.startsWith("es")) {
        nextLanguage = "es";
      }
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(nextLanguage);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}