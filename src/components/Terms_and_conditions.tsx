'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-[Inter]">
          Uslovi korišćenja
        </h1>
        <p className="text-lg text-gray-600 font-[Inter]">
          Markus Co d.o.o. Valjevo
        </p>
        <div className="mt-2 w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          1. Opšte odredbe
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Ovi Uslovi korišćenja definišu pravila upotrebe sajta{' '}
          <span className="text-[#d2b277] font-bold">www.markus.rs</span>. Vlasnik sajta je Markus Co d.o.o. Valjevo, Karađorđeva 123. Kontakt:{' '}
          <span className="text-[#d2b277] font-bold">office@markus.rs</span>, telefon{' '}
          <span className="text-[#d2b277] font-bold">+381 63 222 333</span>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          2. Opis usluge
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Sajt omogućava korisnicima informacije o našim proizvodima i uslugama, uključujući uslužnu proizvodnju privatnih robnih marki i asortiman vlažnih maramica. Markus Co zadržava pravo izmene ili ukidanja delova sajta bez prethodne najave.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          3. Prava intelektualne svojine
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Svi sadržaji na sajtu (tekstovi, slike, grafike, logo) su vlasništvo Markus Co d.o.o. ili se koriste uz dozvolu. Zabranjeno je kopiranje, distribucija ili bilo kakva upotreba bez prethodne saglasnosti.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          4. Korišćenje sajta
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Korisnici se obavezuju da sajt neće koristiti za nezakonite radnje ili aktivnosti suprotne ovim uslovima. Zabranjeno je postavljanje uvredljivog ili nezakonitog sadržaja, pokušaj neovlašćenog pristupa, lažno predstavljanje ili slanje neželjenih poruka.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          5. Ograničenje odgovornosti
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Markus Co ne garantuje potpunu dostupnost i ispravnost sajta u svakom trenutku. Ne preuzimamo odgovornost za eventualne štete nastale korišćenjem informacija sa sajta ili prekidom dostupnosti.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          6. Politika privatnosti
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Više informacija o načinu prikupljanja i obrade podataka možete pročitati u našoj{' '}
          <Link href="/politika-privatnosti" className="text-[#d2b277] underline font-[Inter] hover:text-[#c19a5d] transition-colors">
            Politici privatnosti
          </Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          7. Izmene uslova
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Markus Co zadržava pravo izmene ovih uslova korišćenja u bilo kom trenutku. Izmene stupaju na snagu objavljivanjem na sajtu. Korišćenjem sajta nakon promena, korisnik prihvata nove uslove.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          8. Važeće pravo i nadležnost
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Ovi uslovi se tumače u skladu sa zakonima Republike Srbije. Za sve sporove nadležan je sud prema sedištu Markus Co d.o.o.
        </p>
      </section>

      <div className="text-center mt-12">
        <Link 
          href="/" 
          className="inline-block bg-[#d2b277] text-white px-6 py-2 rounded font-[Inter] hover:bg-[#c19a5d] transition-colors"
        >
          Nazad na sajt
        </Link>
      </div>
    </div>
  );
}
