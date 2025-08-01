import Image from 'next/image';

interface ContactItem {
  id: number;
  icon: React.ReactNode;
  text: string;
}

export default function Contact() {
  const contactItems: ContactItem[] = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 5 5 5 9c0 4.5 7 13 7 13s7-8.5 7-13c0-4-3-7-7-7z"/>
        </svg>
      ),
      text: 'Karadjordjeva 123 Valjevo'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
          <polyline points="3 7 12 13 21 7"/>
        </svg>
      ),
      text: 'office@markus.rs'
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.14 1.22.5 2.39 1.07 3.45a2 2 0 0 1-.45 2.18L8.09 10.91a16 16 0 0 0 6 6l1.56-1.56a2 2 0 0 1 2.18-.45c1.06.57 2.23.93 3.45 1.07A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      text: '+381 63 222 333'
    }
  ];

  return (
    <div id="kontakt">
      <div className="flex w-full flex-col bg-white">
        <div>
          <div className="flex items-center justify-center w-[70%] mx-auto my-8">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-600"></div>
            <span className="px-4 text-4xl font-bold text-[#2e3455] whitespace-nowrap font-[Nunito]">
              Kontakt
            </span>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-600"></div>
          </div>
        </div>
        
        <section className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div>
              <h2 className="text-xl text-center mb-10 font-[Nunito] text-[#1f2239]">
                Za sva pitanja kontaktirajte nas putem elektronske pošte, telefona ili na našoj adresi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {contactItems.map((item) => (
                <div key={item.id}>
                  <div>
                    <div className="rounded-full bg-[#d2b277] p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-[#1f2239] font-[Nunito]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SLIKA ISPOD IKONICA */}
            <div className="mt-12 flex justify-center">
              <Image
                src="/M_S_slike_nove/Baby_bolji_logo-removebg-preview.png"
                alt="Kontakt slika"
                width={600}
                height={300}
                className="max-w-full md:max-w-2xl rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 