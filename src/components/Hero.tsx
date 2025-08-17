'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/M_S_slike_nove/Egipat 2012 BABY FIT photo.jpg',
    '/M_S_slike_nove/pexels-goda-morgan-121487563-18649629.jpg',
    '/M_S_slike_nove/pexels-goda-morgan-121487563-9896886.jpg',
    '/M_S_slike_nove/baby-6823431_1280.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="hero" className="relative hero min-h-screen w-full overflow-hidden pt-24">
      {/* Wrapper za pozadine */}
      <div
        id="hero-bg-wrapper"
        className="absolute inset-0 w-full h-full overflow-hidden z-[-1]"
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={`hero-slide absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          />
        ))}
      </div>

             {/* Sadržaj koji uvek ostaje vidljiv */}
         <div className="relative pt-24 z-20 flex flex-col items-center justify-center text-center h-full px-4 -mt-12">
                     <div className="bg-white/20 p-8 w-[450px] rounded-lg shadow-xl border border-white/20">
             <h1 className="mb-4 text-[30px] font-bold text-[#2e3455] font-[Nunito]">
               VLAŽNE MARAMICE
             </h1>
             <h1 className="mb-6 text-[24px] font-bold text-[#1f2239] font-[Nunito]">
               30 GODINA UZ VAS
             </h1>

            <a href="#o_nama">
              <button className="px-8 py-4 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]">
                Dobrodošli
              </button>
            </a>
          </div>
        </div>
      </div>
    );
} 