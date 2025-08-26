'use client';

import Image from 'next/image';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from '../context/LanguageContext';

interface CertificationItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function Certification() {
  const { t } = useLanguage();
           const certificationItems: CertificationItem[] = [
           {
             id: 1,
             image: '/assets/m_ic_1.png',
             title: t('certification.quality'),
             description: t('certification.descriptions.quality')
           },
           {
             id: 2,
             image: '/assets/m_ic_2.png',
             title: t('certification.innovation'),
             description: t('certification.descriptions.innovation')
           },
           {
             id: 3,
             image: '/assets/ikonica_3.png',
             title: t('certification.sustainability'),
             description: t('certification.descriptions.sustainability')
           }
         ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificationItems.map((item, index) => {
          // Određujemo animaciju na osnovu pozicije u grid-u
          let animation: 'slideLeft' | 'slideRight' | 'fadeUp';
          if (index % 3 === 0) animation = 'slideLeft';      // Leva kolona
          else if (index % 3 === 1) animation = 'fadeUp';   // Srednja kolona
          else animation = 'slideRight';                      // Desna kolona

          return (
            <FadeInWhenVisible key={item.id} animation={animation} delay={index * 0.2}>
              <div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="w-40 h-40 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#2e3455] font-[Nunito]">
                    {item.title}
                  </h3>
                  <p className="text-[#1f2239] font-[Nunito] text-base mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  );
} 