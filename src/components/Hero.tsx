
'use client';

import { useEffect, useState } from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/baby_hero_1.jpg',
    '/assets/baby_hero_2.jpg',
    '/assets/baby_hero_3.jpg',
    '/assets/baby_hero_4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden pt-24 bg-gradient-to-br from-[#F6F1EA] via-[#D7E0EA] to-[#b08d4f]">
      <div className="mx-auto max-w-7xl h-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Leva kolona: tekst */}
          <div className="order-2 sm:order-1 flex flex-col justify-center text-center sm:text-center sm:pl-14">
            <FadeInWhenVisible animation="fadeUp" delay={0.2}>
              <h1 className="mb-4 text-[34px] sm:text-[42px] leading-tight font-black text-[#2e3455] font-[Nunito]" style={{ fontWeight: 700 }}>
                {t('hero.title')}
              </h1>
            </FadeInWhenVisible>
            <FadeInWhenVisible animation="fadeUp" delay={0.4}>
              <h2 className="mb-8 text-[22px] sm:text-[26px] font-black text-[#1f2239] font-[Nunito]" style={{ fontWeight: 700 }}>
                {t('hero.subtitle')}
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible animation="fadeUp" delay={0.6}>
              <div>
                <a href="#o_nama">
                  <button className="px-8 py-4 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]">
                    {t('hero.button')}
                  </button>
                </a>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Desna kolona: slider sa slikama */}
          <div className="order-1 sm:order-2 relative w-full h-[40vh] sm:h-[70vh] rounded-xl overflow-hidden shadow-xl"
               style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)', maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)' }}>
            {images.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url('${image}')` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
