'use client';

import FadeInWhenVisible from './FadeInWhenVisible'
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  return (
    <div id="usluzna_proizvodnja">
      <div className="grid grid-cols-6 gap-8 py-20 px-4 bg-white">
        <div className="col-span-4 col-start-2">
         
          <FadeInWhenVisible animation="fadeUp">
                     <div className="text-center my-8">
             <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
               {t('services.title')}
             </h2>
             <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
           </div>
           </FadeInWhenVisible>
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <FadeInWhenVisible animation="fadeIn">
              <p className="text-[#1f2239] font-[Nunito] text-lg">
                {t('services.description')}
              </p>
              </FadeInWhenVisible>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <FadeInWhenVisible animation="fadeIn">
              <Image
                src="/assets/rukovanje.png"
                alt="Rukovanje"
                width={400}
                height={300}
                className="w-[90%] h-auto max-w-sm shadow-xl rounded-lg"
              />
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 