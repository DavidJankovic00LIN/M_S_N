'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

type Language = 'sr' | 'en';

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function readSavedLanguage(): Language {
  if (typeof window === 'undefined') return 'sr';
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage === 'sr' || savedLanguage === 'en') return savedLanguage;
  return 'sr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(readSavedLanguage);
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    let cancelled = false;

    const loadTranslations = async () => {
      try {
        const langTranslations = await import(`../translations/${currentLanguage}.json`);
        if (!cancelled) setTranslations(langTranslations.default);
      } catch (error) {
        console.error(`Error loading translations for ${currentLanguage}:`, error);
        const fallback = await import('../translations/sr.json');
        if (!cancelled) setTranslations(fallback.default);
      }
    };

    loadTranslations();
    return () => {
      cancelled = true;
    };
  }, [currentLanguage]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: string | Translations = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }, [translations]);

  const value = useMemo<LanguageContextType>(
    () => ({ currentLanguage, changeLanguage, t, translations }),
    [currentLanguage, changeLanguage, t, translations]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
