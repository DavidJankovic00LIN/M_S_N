'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from '../context/LanguageContext';

interface ProductCertificate {
  src: string;
  labelKey: string;
}

interface ProductDefinition {
  id: string;
  image: string;
  packSize: string;
  certificates: ProductCertificate[];
}

interface Product extends ProductDefinition {
  name: string;
  description: string;
  modalContent: string;
  labels: string[];
}

const PRODUCT_CATALOG: ProductDefinition[] = [
  {
    id: 'babyFit',
    image: '/assets/baby_fit.jpg',
    packSize: '72 i 64 Komada',
    certificates: [
      { src: '/assets/sunce.png', labelKey: 'products.modalLabels.babyFit.label1' },
      { src: '/assets/pero.png', labelKey: 'products.modalLabels.babyFit.label2' },
      { src: '/assets/beba_3.png', labelKey: 'products.modalLabels.babyFit.label3' },
    ],
  },
  {
    id: 'perfecto',
    image: '/assets/perfecto_fit.jpg',
    packSize: '50 Komada',
    certificates: [
      { src: '/assets/lako_ciscenje.png', labelKey: 'products.modalLabels.perfecto.label1' },
      { src: '/assets/sjaj.png', labelKey: 'products.modalLabels.perfecto.label2' },
      { src: '/assets/univerzal.png', labelKey: 'products.modalLabels.perfecto.label3' },
    ],
  },
  {
    id: 'universal',
    image: '/assets/universal.jpg',
    packSize: '80 Komada',
    certificates: [
      { src: '/assets/family.png', labelKey: 'products.modalLabels.universal.label1' },
      { src: '/assets/univerzal.png', labelKey: 'products.modalLabels.universal.label2' },
      { src: '/assets/m_ic_1.png', labelKey: 'products.modalLabels.universal.label3' },
    ],
  },
  {
    id: 'disinfect',
    image: '/assets/Disinfect.jpg',
    packSize: '15 Komada',
    certificates: [
      { src: '/assets/antibak.png', labelKey: 'products.modalLabels.disinfect.label1' },
      { src: '/assets/univerzal.png', labelKey: 'products.modalLabels.disinfect.label2' },
      { src: '/assets/dzepne.png', labelKey: 'products.modalLabels.disinfect.label3' },
    ],
  },
  {
    id: 'wet',
    image: '/assets/wet.jpg',
    packSize: '15 Komada',
    certificates: [
      { src: '/assets/m_ic_1.png', labelKey: 'products.modalLabels.wet.label1' },
      { src: '/assets/univerzal.png', labelKey: 'products.modalLabels.wet.label2' },
      { src: '/assets/dzepne.png', labelKey: 'products.modalLabels.wet.label3' },
    ],
  },
  {
    id: 'eko',
    image: '/assets/eko.jpg',
    packSize: '72 Komada',
    certificates: [
      { src: '/assets/prirodno.png', labelKey: 'products.modalLabels.eko.label1' },
      { src: '/assets/beba_3.png', labelKey: 'products.modalLabels.eko.label2' },
      { src: '/assets/pero.png', labelKey: 'products.modalLabels.eko.label3' },
    ],
  },
];

const GRID_ANIMATION = ['slideLeft', 'fadeUp', 'slideRight'] as const;

function ProductModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { t } = useLanguage();
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="modal-box bg-white rounded-lg p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-xl font-bold text-[#2e3455] mb-4 font-[Nunito]">{product.name}</h3>
            <p className="text-[#1f2239] leading-relaxed mb-6 font-[Nunito]">{product.modalContent}</p>

            <div className="flex justify-center space-x-8 mb-6">
              {product.certificates.map((certificate, index) => (
                <div key={certificate.src} className="text-center flex flex-col items-center">
                  <Image
                    src={certificate.src}
                    alt={`Sertifikat ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-16 h-16 mb-3"
                  />
                  <span className="text-xs text-[#2e3455] font-medium font-[Nunito] text-center leading-tight">
                    {product.labels[index]}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-600 font-semibold py-4 font-[Nunito]">
              {t('packaging')}: {product.packSize}
            </p>

            <button
              className="px-8 py-4 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]"
              onClick={onClose}
            >
              {t('buttons.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useLanguage();

  const products = useMemo<Product[]>(
    () =>
      PRODUCT_CATALOG.map((product) => ({
        ...product,
        name: t(`products.productNames.${product.id}`),
        description: t(`products.productDescriptions.${product.id}`),
        modalContent: t(`products.modalContent.${product.id}`),
        labels: product.certificates.map((certificate) => t(certificate.labelKey)),
      })),
    [t]
  );

  return (
    <div id="Proizvodi" className="bg-white py-20">
      <div>
        <div className="text-center my-8">
          <FadeInWhenVisible animation="fadeUp" delay={0.2}>
            <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
              {t('products.title')}
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible animation="fadeUp" delay={0.4}>
            <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible animation="fadeUp" delay={0.6}>
          <p className="text-center max-w-2xl mx-auto text-[#1f2239] text-lg mb-12 font-[Nunito]">
            {t('products.description')}
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {products.map((product, index) => (
          <FadeInWhenVisible
            key={product.id}
            animation={GRID_ANIMATION[index % 3]}
            delay={index * 0.1}
          >
            <div className="h-full">
              <div className="card w-full h-full bg-base-100 border border-gray-300 shadow-xl rounded-lg flex flex-col overflow-hidden mx-auto">
                <div className="flex items-center justify-center p-4 h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="card-body p-4 items-center text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="card-title text-lg font-semibold text-[#2e3455] font-[Nunito] mb-3">
                      {product.name}
                    </h2>
                    <p className="text-[#1f2239] text-base font-[Nunito] mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="card-actions justify-center mt-auto">
                    <button
                      className="px-8 py-3 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t('buttons.details')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
