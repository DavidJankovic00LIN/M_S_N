'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
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

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          // Don't activate 'o_nama' if we're still in Hero section
          if (sectionId === 'o_nama') {
            const heroElement = document.querySelector('#hero');
            if (heroElement) {
              const heroRect = heroElement.getBoundingClientRect();
              // Only activate if Hero section is mostly out of view
              if (heroRect.bottom < window.innerHeight * 0.3) {
                setActiveSection(sectionId);
              } else {
                // If we're back in Hero section, deactivate 'o_nama'
                setActiveSection('');
              }
            }
          } else {
            setActiveSection(sectionId);
          }
                 } else {
           // When section is not intersecting, remove it as active
           if (activeSection === entry.target.id) {
             setActiveSection('');
           }
         }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['o_nama', 'Proizvodi', 'usluzna_proizvodnja', 'kontakt'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

         return () => observer.disconnect();
   }, []);

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
            <a href="#o_nama" className={`relative text-sm font-medium transition-all duration-300 font-[Nunito] group ${
              activeSection === 'o_nama' 
                ? 'text-[#c19d5f]' 
                : 'text-[#1f2239] hover:text-[#c19d5f]'
            }`}>
              O nama
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 ${
                activeSection === 'o_nama' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </a>
            <a href="#Proizvodi" className={`relative text-sm font-medium transition-all duration-300 font-[Nunito] group ${
              activeSection === 'Proizvodi' 
                ? 'text-[#c19d5f]' 
                : 'text-[#1f2239] hover:text-[#c19d5f]'
            }`}>
              Proizvodi
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 ${
                activeSection === 'Proizvodi' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
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
            <a href="#usluzna_proizvodnja" className={`relative text-sm font-medium transition-all duration-300 font-[Nunito] group ${
              activeSection === 'usluzna_proizvodnja' 
                ? 'text-[#c19d5f]' 
                : 'text-[#1f2239] hover:text-[#c19d5f]'
            }`}>
              Uslužna proizvodnja
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 ${
                activeSection === 'usluzna_proizvodnja' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </a>
            <a href="#kontakt" className={`relative text-sm font-medium transition-all duration-300 font-[Nunito] group ${
              activeSection === 'kontakt' 
                ? 'text-[#c19d5f]' 
                : 'text-[#1f2239] hover:text-[#c19d5f]'
            }`}>
              Kontakt
              <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 ${
                activeSection === 'kontakt' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
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