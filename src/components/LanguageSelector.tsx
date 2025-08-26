'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'sr',  flag: 'RS' },
    { code: 'en',  flag: 'ENG' }
  ];

  const currentLanguageData = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (newLang: 'sr' | 'en') => {
    changeLanguage(newLang);
    setIsOpen(false);
  };

  // Zatvaranje dropdown-a kada se klikne van njega
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:bg-gray-50"
      >
        <span className="text-lg">{currentLanguageData?.flag}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as 'sr' | 'en')}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                lang.code === currentLanguage
                  ? 'bg-gray-50 text-[#c19d5f]'
                  : 'text-[#1f2239]'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              {lang.code === currentLanguage && (
                <svg
                  className="w-4 h-4 ml-auto text-[#c19d5f]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
