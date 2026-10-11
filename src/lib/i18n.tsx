"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { DEFAULT_DICTIONARY, TranslationMap } from "./dictionary";

export interface LanguageMeta {
  code: string;
  name: string;
  nativeName?: string | null;
  flag?: string | null;
  isDefault?: boolean;
}

interface I18nContextType {
  locale: string;
  setLocale: (lang: string) => void;
  languages: LanguageMeta[];
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const DEFAULT_LANGUAGES: LanguageMeta[] = [
  { code: "en", name: "English", flag: "🇬🇧", isDefault: true },
  { code: "fr", name: "Français", flag: "🇫🇷", isDefault: false },
];

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<string>("en");
  const [languages, setLanguages] = useState<LanguageMeta[]>(DEFAULT_LANGUAGES);
  const [translations, setTranslations] = useState<TranslationMap>(DEFAULT_DICTIONARY["en"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize from localStorage or navigator
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mboa_locale");
      if (saved) {
        setLocaleState(saved);
        setTranslations(DEFAULT_DICTIONARY[saved] || DEFAULT_DICTIONARY["en"]);
      } else if (typeof navigator !== "undefined" && navigator.language?.startsWith("fr")) {
        setLocaleState("fr");
        setTranslations(DEFAULT_DICTIONARY["fr"]);
      }
    } catch {
      // ignore
    }
  }, []);

  // Fetch dynamic translations & languages from PostgreSQL
  const fetchLanguageData = useCallback(async (targetLocale: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/translations?locale=${targetLocale}`);
      if (res.ok) {
        const data = await res.json();
        if (data.languages && data.languages.length > 0) {
          setLanguages(data.languages);
        }
        if (data.translations) {
          setTranslations(data.translations);
        }
      }
    } catch (e) {
      console.warn("Failed fetching translations from DB, using fallback", e);
      setTranslations(DEFAULT_DICTIONARY[targetLocale] || DEFAULT_DICTIONARY["en"]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLanguageData(locale);
  }, [locale, fetchLanguageData]);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("mboa_locale", newLocale);
      document.cookie = `mboa_locale=${newLocale}; path=/; max-age=31536000`;
    } catch {
      // ignore
    }
    // Optimistically update dictionary with local fallback first
    if (DEFAULT_DICTIONARY[newLocale]) {
      setTranslations(DEFAULT_DICTIONARY[newLocale]);
    }
  };

  const t = (key: string, fallback?: string): string => {
    if (translations && translations[key]) {
      return translations[key];
    }
    // Check fallback in current default
    if (DEFAULT_DICTIONARY[locale] && DEFAULT_DICTIONARY[locale][key]) {
      return DEFAULT_DICTIONARY[locale][key];
    }
    // Check English fallback
    if (DEFAULT_DICTIONARY["en"] && DEFAULT_DICTIONARY["en"][key]) {
      return DEFAULT_DICTIONARY["en"][key];
    }
    return fallback || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, languages, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
