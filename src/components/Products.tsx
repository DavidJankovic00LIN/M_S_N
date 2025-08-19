'use client';

import Image from 'next/image';
import { useState } from 'react';

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
}

function ProductModal({ isOpen, onClose, title, content, modalImage, modalSertificate1, modalSertificate2, modalSertificate3, packSize }: ProductModalProps) {
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
                <Image
                  src={`/${modalSertificate1}`}
                  alt="Sertifikat 1"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
                <Image
                  src={`/${modalSertificate2}`}
                  alt="Sertifikat 2"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
                <Image
                  src={`/${modalSertificate3}`}
                  alt="Sertifikat 3"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
              </div>
             
             <p className="text-center text-sm text-gray-600 font-semibold py-4 font-[Nunito]">
               Pakovanje: {packSize}
             </p>

             <button 
            className="px-8 py-4 bg-[#c19d5f] text-white font-semibold rounded-lg hover:bg-[#b08d4f] transition-all duration-300 transform hover:scale-105 shadow-lg font-[Nunito]"
            onClick={onClose} 
          >
            Zatvori
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

  const products: Product[] = [
    {
      id: 1,
      name: 'Baby Fit Wet Wipes',
      description: 'Nežna i sigurna zaštita za najosetljiviju kožu vaše bebe, uz pažljivo odabrane sastojke i bezbednost na prvom mestu.',
      image: '/assets/baby fit.jpg',
      modalContent: 'Vlažne maramice posebno formulirane za nežnu i sigurnu negu bebine osetljive kože. Bez alkohola i parabena, uz dodatak umirujućih sastojaka koji pružaju osećaj svežine i čistoće.',
      modalImage:'assets/baby fit.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/ikonica_3.jpg',
      packSize:'80 Komada',
    
    },
    {
      id: 2,
      name: 'Perfecto Wet Wipes',
      description: 'Idealne za osvežavanje i čišćenje nameštaja i površina, praktične za svako domaćinstvo i profesionalnu upotrebu.',
      image: '/assets/perfecto fit.jpg',
      modalContent: 'Vlažne maramice namenjene čišćenju i osvežavanju nameštaja i različitih površina. Praktično rešenje za lako održavanje čistoće i urednosti u svakom domu ili radnom prostoru.',
      modalImage:'assets/perfecto fit.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'80 Komada',
    },
    {
      id: 3,
      name: 'Universal Wet Wipes',
      description: 'Svestrane maramice za brzo i lako čišćenje raznih površina, uvek spremne da pruže svežinu i higijenu kada je najpotrebnije.',
      image: '/assets/universal.jpg',
      modalContent: 'Univerzalne maramice koje omogućavaju brzo i jednostavno čišćenje raznih površina. Savršene za svakodnevnu upotrebu, pružaju osećaj higijene i svežine u svakom trenutku.',
      modalImage:'assets/universal.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'80 Komada',
    },
    {
      id: 4,
      name: 'Desinfect Wet Wipes',
      description: 'Specijalizovane maramice sa dezinfekcionim dejstvom, za dodatnu sigurnost i higijenu u vašem domu i radnom prostoru.',
      image: '/assets/Disinfect.jpg',
      modalContent: 'Vlažne maramice sa dezinfekcionim efektom za dodatnu sigurnost i higijenu. Idealne za čišćenje ruku i površina kada je potrebna pouzdana zaštita od bakterija i nečistoća.',
      modalImage:'assets/Disinfect.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'80 Komada',
    },
    {
      id: 5,
      name: 'Wet',
      description: 'Praktične maramice za celu porodicu, idealne za svakodnevnu upotrebu i održavanje higijene u svim životnim situacijama.',
      image: '/assets/wet.jpg',
      modalContent: 'Vlažne maramice namenjene celoj porodici, pružaju praktičnost i higijenu za svakodnevnu upotrebu. Savršene za brzo osvežavanje i čišćenje kada je potrebno.',
      modalImage:'assets/wet.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/ikonica_3.jpg',
      packSize:'100 Komada',
    },
    {
      id: 6,
      name: 'Eco Nature Wet Wipes',
      description: 'Ekološki prijateljske maramice sa prirodnim sastojcima, za sve koji brinu o životnoj sredini i svojoj koži.',
      image: '/assets/eko.jpg',
      modalContent: 'Ekološki održive vlažne maramice sa prirodnim sastojcima, namenjene svima koji brinu o životnoj sredini. Bezbedne za kožu i prirodu, pružaju istu efikasnost kao i standardne maramice.',
      modalImage:'assets/eko.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'72 Komada',
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
           <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
             Naši proizvodi
           </h2>
           <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
         </div>

        <p className="text-center max-w-2xl mx-auto text-[#1f2239] text-lg mb-12 font-[Nunito]">
          Naša linija vlažnih maramica osmišljena je da zadovolji najrazličitije potrebe – od nežne nege beba, preko univerzalnog čišćenja, do specijalizovanih dezinfekcionih rešenja. Kvalitet, praktičnost i pouzdanost u svakom pakovanju.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {products.map((product) => (
          <div key={product.id} className="h-full">
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
                    Detalji
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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
      />
    </div>
  );
} 