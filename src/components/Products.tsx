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
      description: 'Vlažne maramice za bebe',
      image: '/assets/baby fit.jpg',
      modalContent: 'Baby Fit vlažne maramice održavaju kožu vase bebe mekanom i svežom. Nežno čiste i neguju kod svakog menjanja pelena. Meke i pune, bezalkoholne, pH neutralne i obogaćene E vitaminom. Savršene za nežno čišćenje bebine kože bez vode. Može ih koristiti i cela porodica.',
      modalImage:'assets/baby fit.jpg',
      modalSertificate1:'assets/sunce.png',
      modalSertificate2:'assets/pero.png',
      modalSertificate3:'assets/beba_3.png',
      packSize:'72 i 64 Komada',
      modalLabel1:'Za svakodnevnu negu',
      modalLabel2:'Ultra nežne',
      modalLabel3:'Za osetljivu kožu bebe',
    
    },
    {
      id: 2,
      name: 'Perfecto Wet Wipes',
      description: 'Vlažne maramice za domaćinstvo',
      image: '/assets/perfecto fit.jpg',
      modalContent: 'Vlažne maramice Perfecto Fit Universal uklanjaju prljavštinu sa svih glatkih površina (nameštaja i laminiranih površina, pločica i laminata, keramike, zidnih pločica, plastike), dok se Perfecto Fit Wood Surface koriste za uklanjanje prljavštine sa nameštaja od drveta i materijala sličnih drvetu sa uljem za brigu o njima, dajući im sjaj.',
      modalImage:'assets/perfecto fit.jpg',
      modalSertificate1:'assets/lako_ciscenje.png',
      modalSertificate2:'assets/sjaj.png',
      modalSertificate3:'assets/univerzal.png',
      packSize:'50 Komada',
      modalLabel1:'Lako za čišćenje',
      modalLabel2:'Sjaj i zaštita',
      modalLabel3:'Univerzalne',
    },
    {
      id: 3,
      name: 'Universal Wet Wipes',
      description: 'Vlažne maramice za celu porodicu',
      image: '/assets/universal.jpg',
      modalContent: ' Universal Fit i Family Fit vlažne maramice u porodičnom pakovanju namenjene su higijeni ruku i lica. Meke, osvežavajuće, pH neutralne i nealergične. Idealne za čišćenje bez vode. ',
      modalImage:'assets/universal.jpg',
      modalSertificate1:'assets/family.png',
      modalSertificate2:'assets/univerzal.png',
      modalSertificate3:'assets/m_ic_1.png',
      packSize:'80 Komada',
      modalLabel1:'Porodične',
      modalLabel2:'Univerzalne',
      modalLabel3:'Za svaki dan',
    },
    {
      id: 4,
      name: 'Desinfect Wet Wipes',
      description: 'Vlažne maramice za dezinfekciju',
      image: '/assets/Disinfect.jpg',
      modalContent: 'Disinfect Fit Antibacterial vlažne maramice su namenjene za dezinfekciju kože i predmeta. Isključivo za spoljnu upotrebu. Džepno pakovanje omogućava da ih nosite svuda sa sobom.',
      modalImage:'assets/Disinfect.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'80 Komada',
      modalLabel1:'Dezinfekcija',
      modalLabel2:'Zaštita',
      modalLabel3:'Higijena',
    },
    {
      id: 5,
      name: 'Wet - Džepne higijenske vlažne maramice',
      description: 'Praktične maramice za celu porodicu, idealne za svakodnevnu upotrebu i održavanje higijene u svim životnim situacijama.',
      image: '/assets/wet.jpg',
      modalContent: 'Wet vlažne maramice bez alkohola posebno su dizajnirane da čiste, neguju i osvežavaju kožu. Džepno pakovanje omogućava da ih nosite svuda sa sobom. Idealno za celu porodicu.',
      modalImage:'assets/wet.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/ikonica_3.jpg',
      packSize:'15 Komada',
      modalLabel1:'Džepno',
      modalLabel2:'Praktično',
      modalLabel3:'Portabilno',
    },
    {
      id: 6,
      name: 'Eko vlažne maramice za bebe',
      description: 'Ekološki prijateljske maramice sa prirodnim sastojcima, za sve koji brinu o životnoj sredini i svojoj koži.',
      image: '/assets/eko.jpg',
      modalContent: 'Nežno čiste bebinu kožu na prirodan način. Sadrže biorazgradivu tkaninu i sastojke iz bioobnovljivih izvora. Meke i pune, bezalkoholne, održavaju prirodnu pH vrednost kože i nealergične. Može ih koristiti cela porodica.',
      modalImage:'assets/eko.jpg',
      modalSertificate1:'assets/m_ic_1.png',
      modalSertificate2:'assets/m_ic_2.png',
      modalSertificate3:'assets/m_ic_3.png',
      packSize:'72 Komada',
      modalLabel1:'Ekološki',
      modalLabel2:'Prirodno',
      modalLabel3:'Biorazgradivo',
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
        modalLabel1={selectedProduct?.modalLabel1 || ''}
        modalLabel2={selectedProduct?.modalLabel2 || ''}
        modalLabel3={selectedProduct?.modalLabel3 || ''}
      />
    </div>
  );
} 