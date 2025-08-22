'use client';

import Image from 'next/image';
import { useState } from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { useLanguage } from '../context/LanguageContext';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  modalImage: string;
  modalSertificate1: string;
  modalSertificate2: string;
  modalSertificate3: string;
  packSize: string;
  modalContent: string;
  modalLabel1: string;
  modalLabel2: string;
  modalLabel3: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  modalImage: string;
  modalSertificate1: string;
  modalSertificate2: string;
  modalSertificate3: string;
  packSize: string;
  modalLabel1: string;
  modalLabel2: string;
  modalLabel3: string;
}

function ProductModal({ isOpen, onClose, title, content, modalImage, modalSertificate1, modalSertificate2, modalSertificate3, packSize, modalLabel1, modalLabel2, modalLabel3 }: ProductModalProps) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="modal-box bg-white rounded-lg p-6 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                 <div className="flex flex-col md:flex-row gap-6">
           {/* Leva strana - samo slika */}
           <div className="w-full md:w-1/2">
             <Image
               src={`/${modalImage}`}
               alt={title}
               width={400}
               height={400}
               className="w-full h-auto rounded-lg shadow-md"
             />
           </div>
           
           {/* Desna strana - sadržaj, sertifikati i pakovanje */}
           <div className="w-full md:w-1/2 flex flex-col">
                           <h3 className="text-xl font-bold text-[#2e3455] mb-4 font-[Nunito]">{title}</h3>
              <p className="text-[#1f2239] leading-relaxed mb-6 font-[Nunito]">{content}</p>
             
                                                       <div className="flex justify-center space-x-4 mb-4">
                 <div className="text-center">
                   <Image
                     src={`/${modalSertificate1}`}
                     alt="Sertifikat 1"
                     width={80}
                     height={80}
                     className="w-16 h-16 mb-2"
                   />
                                       <span className="text-xs text-[#2e3455] font-medium font-[Nunito] block">{modalLabel1}</span>
                 </div>
                 
                 <div className="text-center">
                   <Image
                     src={`/${modalSertificate2}`}
                     alt="Sertifikat 2"
                     width={80}
                     height={80}
                     className="w-16 h-16 mb-2"
                   />
                                       <span className="text-xs text-[#2e3455] font-medium font-[Nunito] block">{modalLabel2}</span>
                 </div>
                 
                 <div className="text-center">
                   <Image
                     src={`/${modalSertificate3}`}
                     alt="Sertifikat 3"
                     width={80}
                     height={80}
                     className="w-16 h-16 mb-2"
                   />
                                       <span className="text-xs text-[#2e3455] font-medium font-[Nunito] block">{modalLabel3}</span>
                 </div>
               </div>
             
             <p className="text-center text-sm text-gray-600 font-semibold py-4 font-[Nunito]">
               {t('packaging')}: {packSize}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const products: Product[] = [
    {
      id: 1,
      name: t('products.productNames.babyFit'),
      description: t('products.productDescriptions.babyFit'),
      image: '/assets/baby fit.jpg',
      modalContent: t('products.modalContent.babyFit'),
      modalImage:'assets/baby fit.jpg',
      modalSertificate1:'assets/sunce.png',
      modalSertificate2:'assets/pero.png',
      modalSertificate3:'assets/beba_3.png',
      packSize:'72 i 64 Komada',
      modalLabel1:t('products.modalLabels.babyFit.label1'),
      modalLabel2:t('products.modalLabels.babyFit.label2'),
      modalLabel3:t('products.modalLabels.babyFit.label3'),
     
    },
    {
      id: 2,
      name: t('products.productNames.perfecto'),
      description: t('products.productDescriptions.perfecto'),
      image: '/assets/perfecto fit.jpg',
      modalContent: t('products.modalContent.perfecto'),
      modalImage:'assets/perfecto fit.jpg',
      modalSertificate1:'assets/lako_ciscenje.png',
      modalSertificate2:'assets/sjaj.png',
      modalSertificate3:'assets/univerzal.png',
      packSize:'50 Komada',
      modalLabel1:t('products.modalLabels.perfecto.label1'),
      modalLabel2:t('products.modalLabels.perfecto.label2'),
      modalLabel3:t('products.modalLabels.perfecto.label3'),
    },
    {
      id: 3,
      name: t('products.productNames.universal'),
      description: t('products.productDescriptions.universal'),
      image: '/assets/universal.jpg',
      modalContent: t('products.modalContent.universal'),
      modalImage:'assets/universal.jpg',
      modalSertificate1:'assets/family.png',
      modalSertificate2:'assets/univerzal.png',
      modalSertificate3:'assets/m_ic_1.png',
      packSize:'80 Komada',
      modalLabel1:t('products.modalLabels.universal.label1'),
      modalLabel2:t('products.modalLabels.universal.label2'),
      modalLabel3:t('products.modalLabels.universal.label3'),
    },
    {
      id: 4,
      name: t('products.productNames.disinfect'),
      description: t('products.productDescriptions.disinfect'),
      image: '/assets/Disinfect.jpg',
      modalContent: t('products.modalContent.disinfect'),
      modalImage:'assets/Disinfect.jpg',
      modalSertificate1:'assets/antibak.png',
      modalSertificate2:'assets/univerzal.png',
      modalSertificate3:'assets/dzepne.png',
      packSize:'15 Komada',
      modalLabel1:t('products.modalLabels.disinfect.label1'),
      modalLabel2:t('products.modalLabels.disinfect.label2'),
      modalLabel3:t('products.modalLabels.disinfect.label3'),
    },
    {
      id: 5,
      name: t('products.productNames.wet'),
      description: t('products.productDescriptions.wet'),
      image: '/assets/wet.jpg',
      modalContent: t('products.modalContent.wet'),
      modalImage:'assets/wet.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/univerzal.png',
      modalSertificate3:'assets/dzepne.png',
      packSize:'15 Komada',
      modalLabel1:t('products.modalLabels.wet.label1'),
      modalLabel2:t('products.modalLabels.wet.label2'),
      modalLabel3:t('products.modalLabels.wet.label3'),
    },
    {
      id: 6,
      name: t('products.productNames.eko'),
      description: t('products.productDescriptions.eko'),
      image: '/assets/eko.jpg',
      modalContent: t('products.modalContent.eko'),
      modalImage:'assets/eko.jpg',
      modalSertificate1:'assets/prirodno.png',
      modalSertificate2:'assets/beba_3.png',
      modalSertificate3:'assets/pero.png',
      packSize:'72 Komada',
      modalLabel1:t('products.modalLabels.eko.label1'),
      modalLabel2:t('products.modalLabels.eko.label2'),
      modalLabel3:t('products.modalLabels.eko.label3'),
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

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
        {products.map((product, index) => {
          // Određujemo animaciju na osnovu pozicije u grid-u
          let animation: 'slideLeft' | 'slideRight' | 'fadeUp';
          if (index % 3 === 0) animation = 'slideLeft';      // Leva kolona
          else if (index % 3 === 1) animation = 'fadeUp';   // Srednja kolona
          else animation = 'slideRight';                      // Desna kolona

          return (
            <FadeInWhenVisible key={product.id} animation={animation} delay={index * 0.1}>
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
                        onClick={() => handleProductClick(product)}
                      >
                        {t('buttons.details')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProduct?.name || ''}
        content={selectedProduct?.modalContent || ''}
        modalImage={selectedProduct?.modalImage || ''}
        modalSertificate1={selectedProduct?.modalSertificate1 || ''}
        modalSertificate2={selectedProduct?.modalSertificate2 || ''}
        modalSertificate3={selectedProduct?.modalSertificate3 || ''}
        packSize={selectedProduct?.packSize || ''}
        modalLabel1={selectedProduct?.modalLabel1 || ''}
        modalLabel2={selectedProduct?.modalLabel2 || ''}
        modalLabel3={selectedProduct?.modalLabel3 || ''}
      />
    </div>
  );
} 