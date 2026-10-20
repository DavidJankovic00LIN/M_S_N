'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const SECTION_IDS = ['o_nama', 'Proizvodi', 'usluzna_proizvodnja', 'kontakt'] as const;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        } else {
          setActiveSection((current) => (current === sectionId ? '' : current));
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    { id: 'o_nama', href: '/#o_nama', label: t('nav.about') },
    { id: 'Proizvodi', href: '/#Proizvodi', label: t('nav.products') },
    { id: 'usluzna_proizvodnja', href: '/#usluzna_proizvodnja', label: t('nav.services') },
    { id: 'kontakt', href: '/#kontakt', label: t('nav.contact') },
  ];

  const renderLink = (item: (typeof menuItems)[number]) => {
    const isActive = activeSection === item.id;
    return (
      <Link
        key={item.id}
        href={item.href}
        className={`relative text-[14px] leading-5 font-medium transition-all duration-300 font-[Nunito] group ${
          isActive ? 'text-[#c19d5f]' : 'text-[#1f2239] hover:text-[#c19d5f]'
        }`}
      >
        {item.label}
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <nav className="hidden min-[13.1in]:block fixed top-0 left-0 right-0 bg-white shadow-lg w-full z-50 border-b border-gray-100">
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-50">
          <LanguageSelector />
        </div>
        <div className="max-w-22xl mx-auto flex flex-row items-center justify-center space-x-12 py-4 px-4 min-[13.1in]:px-0 min-[13.1in]:pl-18">
          <div className="flex items-center space-x-12">
            {menuItems.slice(0, 2).map(renderLink)}
          </div>

          <Image
            src="/assets/markus_logo.png"
            alt="Markus Logo"
            width={135}
            height={36}
            className="h-12 w-auto"
            style={{ width: 'auto', height: 'auto' }}
          />

          <div className="flex items-center space-x-12">
            {menuItems.slice(2).map(renderLink)}
          </div>
        </div>
      </nav>

      <nav
        className={`min-[13.1in]:hidden fixed top-0 left-0 right-0 bg-white shadow-lg w-full z-50 border-b border-gray-100 transition-transform duration-300 relative ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute right-3 top-1/2 z-50 -translate-y-1/2">
          <LanguageSelector />
        </div>
        <div className="max-w-22xl mx-auto flex flex-col items-center justify-center space-y-1 py-4 px-4">
          <div className="flex flex-col items-center justify-center space-y-[4px]">
            <Image
              src="/assets/markus_logo.png"
              alt="Markus Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
            />

            <div ref={dropdownRef} className="relative">
              <button
                className="flex items-center justify-center cursor-pointer p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 text-black ${isMenuOpen ? 'rotate-180' : ''}`}
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

              {isMenuOpen && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg z-10 w-44 p-2 shadow-lg">
                  {menuItems.map((item) => (
                    <li key={item.id} className="list-none">
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[16px] leading-6 text-[#1f2239] px-3 py-2 rounded-md transition-all duration-200 block hover:bg-gray-100 hover:text-gray-800 font-[Nunito]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
