'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#o_nama', label: 'O nama' },
    { href: '#Proizvodi', label: 'Proizvodi' },
    { href: '#usluzna_proizvodnja', label: 'Uslužna proizvodnja' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-22xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-12 py-4 px-4 sm:px-0 sm:pl-18">
        {/* Levi linkovi (desktop) */}
        <div className="hidden sm:flex items-center space-x-12">
          <a href="#o_nama" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
            O nama
          </a>
          <a href="#Proizvodi" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
            Proizvodi
          </a>
        </div>

                                   {/* Logo + dropdown meni (mobilni) */}
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
           <details className="dropdown sm:hidden relative flex justify-center">
             <summary
               className="m-0 p-0 flex items-center justify-center cursor-pointer peer"
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
             </summary>
                                                       <ul className="menu dropdown-content bg-white border border-gray-200 rounded-lg z-10 w-44 p-2 shadow-lg absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
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
           </details>
         </div>

        {/* Desni linkovi (desktop) */}
        <div className="hidden sm:flex items-center space-x-12">
          <a href="#usluzna_proizvodnja" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
            Uslužna proizvodnja
          </a>
          <a href="#kontakt" className="text-sm text-[#1f2239] font-medium hover:text-gray-600 transition-colors font-[Nunito]">
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
} 