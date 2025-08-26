'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipovi za jezike
type Language = 'sr' | 'en';

// Interface za prevode
interface Translations {
  [key: string]: string | Translations;
}

// Interface za Context
interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

// Kreiranje Context-a
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider komponenta
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('sr');
  const [translations, setTranslations] = useState<Translations>({});

  // Učitavanje prevoda
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langTranslations = await import(`../translations/${currentLanguage}.json`);
        setTranslations(langTranslations.default);
      } catch (error) {
        console.error(`Error loading translations for ${currentLanguage}:`, error);
        // Fallback na srpski
        const fallback = await import('../translations/sr.json');
        setTranslations(fallback.default);
      }
    };

    loadTranslations();
  }, [currentLanguage]);

  // Funkcija za promenu jezika
  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    // Čuvanje u localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  // Funkcija za prevod
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: string | Translations = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Vraća ključ ako prevod nije pronađen
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Učitavanje jezika iz localStorage-a na mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
             if (savedLanguage && ['sr', 'en'].includes(savedLanguage)) {
         setCurrentLanguage(savedLanguage);
       }
    }
  }, []);

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook za korišćenje Context-a
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
