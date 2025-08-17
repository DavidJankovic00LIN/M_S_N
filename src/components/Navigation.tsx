'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for mobile navbar show/hide
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide navbar on mobile
      setIsVisible(false);
    } else {
      // Scrolling up - show navbar
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdown when clicking outside
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
    { href: '#o_nama', label: 'O nama' },
    { href: '#Proizvodi', label: 'Proizvodi' },
    { href: '#usluzna_proizvodnja', label: 'Uslužna proizvodnja' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Desktop navbar - sticky */}
      <nav className="hidden sm:block fixed top-0 left-0 right-0 bg-white shadow-lg w-full z-50 border-b border-gray-100">
        <div className="max-w-22xl mx-auto flex flex-row items-center justify-center space-x-12 py-4 px-4 sm:px-0 sm:pl-18">
          {/* Levi linkovi */}
          <div className="flex items-center space-x-12">
            <a href="#o_nama" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
              O nama
            </a>
            <a href="#Proizvodi" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
              Proizvodi
            </a>
          </div>

          {/* Logo */}
          <Image
            src="/assets/markus_logo.png"
            alt="Markus Logo"
            width={180}
            height={48}
            className="h-12 w-auto"
          />

          {/* Desni linkovi */}
          <div className="flex items-center space-x-12">
            <a href="#usluzna_proizvodnja" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
              Uslužna proizvodnja
            </a>
            <a href="#kontakt" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile navbar - hidden/show on scroll */}
      <nav className={`sm:hidden fixed top-0 left-0 right-0 bg-white shadow-lg w-full z-50 border-b border-gray-100 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-22xl mx-auto flex flex-col items-center justify-center space-y-1 py-4 px-4">
          {/* Logo + dropdown meni */}
          <div className="flex flex-col items-center justify-center space-y-[4px]">
            {/* Logo */}
            <Image
              src="/assets/markus_logo.png"
              alt="Markus Logo"
              width={180}
              height={48}
              className="h-12 w-auto"
            />

            {/* Dropdown meni */}
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
                    <li key={item.href} className="list-none">
                      <a 
                        href={item.href} 
                        onClick={() => setIsMenuOpen(false)} 
                        className="text-[#1f2239] px-3 py-2 rounded-md transition-all duration-200 block hover:bg-gray-100 hover:text-gray-800 font-[Nunito]"
                        style={{ display: 'block', textDecoration: 'none' }}
                      >
                        {item.label}
                      </a>
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