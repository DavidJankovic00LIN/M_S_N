import Image from 'next/image';
import Link from 'next/link';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Footer() {
  const quickLinks = [
    { href: '#o_nama', label: 'O nama' },
    { href: '#Proizvodi', label: 'Proizvodi' },
    { href: '#usluzna_proizvodnja', label: 'Uslužna proizvodnja' },
    { href: '#kontakt', label: 'Kontakt' },
    
  ];

  const contactInfo = [
    'Karađorđeva 123, Valjevo',
    '+381 63 222 333',
    'office@markus.rs',
  ];

  return (
    <footer className="bg-white  font-[Nunito]">
      <div className="border-t-1 border-black"></div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeInWhenVisible animation="fadeUp" delay={0.2}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/assets/markus-logo.png"
              alt="Markus CO"
              width={180}
              height={48}
              className="h-12 mb-4"
            />
            <p className="mb-4 max-w-xs font-[Nunito] text-[#1f2239]">
              Vaš pouzdan partner u proizvodnji kvalitetnih vlažnih maramica, posvećen sigurnosti, kvalitetu i pristupačnosti.
            </p>
          </div>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible animation="fadeUp" delay={0.4}>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 font-[Nunito] text-[#2e3455]">Brzi linkovi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="relative text-sm font-medium transition-all duration-300 font-[Nunito] group text-[#1f2239] hover:text-[#c19d5f]">
                      {link.label}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 w-0 group-hover:w-full"></div>
                    </a>
                  ) : (
                    <Link href={link.href} className="relative text-sm font-medium transition-all duration-300 font-[Nunito] group text-[#1f2239] hover:text-[#c19d5f]">
                      {link.label}
                      <div className="absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 w-0 group-hover:w-full"></div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible animation="fadeUp" delay={0.6}>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 font-[Nunito] text-[#2e3455]">Kontaktirajte nas</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span className="block font-[Nunito] text-[#1f2239]">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInWhenVisible>
      </div>
      
      <div className="border-t border-gray-700 mt-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm font-[Nunito]">
          <p className="mb-2 md:mb-0 text-[#1f2239] font-[Nunito]">&copy; 2025 Markus CO. Sva prava zadržana.</p>
          <div className="flex space-x-4">
            <Link href="/uslovi-koriscenja" className="relative text-sm font-medium transition-all duration-300 font-[Nunito] group text-[#1f2239] hover:text-[#c19d5f]">
              Uslovi korišćenja
              <div className="absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 w-0 group-hover:w-full"></div>
            </Link>
            <Link href="/politika-privatnosti" className="relative text-sm font-medium transition-all duration-300 font-[Nunito] group text-[#1f2239] hover:text-[#c19d5f]">
              Politika privatnosti
              <div className="absolute bottom-0 left-0 h-0.5 bg-[#c19d5f] transition-all duration-300 w-0 group-hover:w-full"></div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 