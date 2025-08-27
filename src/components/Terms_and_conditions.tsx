'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function TermsAndConditions() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white pb-20" style={{ paddingTop: '200px' }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-[Inter]">
          {t('terms.title')}
        </h1>
        <p className="text-lg text-gray-600 font-[Inter]">
          {t('terms.subtitle')}
        </p>
        <div className="mt-2 w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.1.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.1.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.2.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.2.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.3.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.3.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.4.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.4.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.5.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.5.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.6.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.6.body')}
          <Link href="/politika-privatnosti" className="text-[#d2b277] underline font-[Inter] hover:text-[#c19a5d] transition-colors">
            {t('terms.sections.6.link')}
          </Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.7.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.7.body')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          {t('terms.sections.8.title')}
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.8.body1')}
        </p>
        <p className="mb-4 text-gray-700 font-[Inter]">
          {t('terms.sections.8.body2')}
        </p>
      </section>

      <div className="text-center mt-12">
        <Link 
          href="/" 
          className="inline-block bg-[#d2b277] text-white px-6 py-2 rounded font-[Inter] hover:bg-[#c19a5d] transition-colors"
        >
          {t('terms.back')}
        </Link>
      </div>
    </div>
  );
}
