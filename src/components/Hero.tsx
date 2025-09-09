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
          <FadeInWhenVisible animation="fadeUp" delay={0.3}>
            <h1 className="mb-4 text-[30px] font-black text-[#2e3455] font-[Nunito]" style={{ fontWeight: 700 }}>
              {t('hero.title')}
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible animation="fadeUp" delay={0.6}>
            <h1 className="mb-6 text-[24px] font-black text-[#1f2239] font-[Nunito]" style={{ fontWeight: 700 }}>
              {t('hero.subtitle')}
            </h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible animation="fadeUp" delay={0.9}>
            <a href="#o_nama">
              <button className="px-8 py-4 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]">
                {t('hero.button')}
              </button>
            </a>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
} 