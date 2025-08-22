'use client';

import FadeInWhenVisible from './FadeInWhenVisible'
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div id="o_nama">
      <div className="grid grid-cols-6 gap-8 py-20 px-4 bg-white">
        <div className="col-span-4 col-start-2">
          <div>
            <div className="text-center my-8">
              <FadeInWhenVisible animation="fadeUp" >
                <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
                  {t('about.title')}
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible animation="fadeIn" >
                <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible animation="fadeIn" >
              <p className="text-[#1f2239] font-[Nunito] text-lg">
                {t('about.description')}
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
} 