'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-[Inter]">
          Politika privatnosti
        </h1>
        <p className="text-lg text-gray-600 font-[Inter]">
          Markus Co d.o.o. Valjevo
        </p>
        <div className="mt-2 w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          1. Opšte informacije
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Markus Co d.o.o., sa sedištem na adresi Karađorđeva 123, Valjevo, posvećen je zaštiti privatnosti svojih korisnika. Ova politika objašnjava koje podatke prikupljamo, kako ih koristimo i na koji način čuvamo vašu privatnost.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          2. Vrste prikupljenih podataka
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Prikupljamo podatke koji su neophodni za pružanje naših usluga, kao što su ime, email adresa, telefonski broj i IP adresa. Takođe koristimo kolačiće kako bismo unapredili funkcionalnost sajta i vaše korisničko iskustvo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          3. Svrha obrade podataka
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Vaše podatke koristimo kako bismo obezbedili kvalitetnu komunikaciju, obradili vaše upite, realizovali uslugu uslužne proizvodnje privatnih robnih marki i unapredili našu ponudu vlažnih maramica i srodnih proizvoda.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          4. Deljenje podataka
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Vaši lični podaci neće biti prodavani ili deljeni trećim stranama, osim kada je to zakonski obavezno ili neophodno za izvršavanje naših usluga (npr. isporuka robe putem partnera).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          5. Sigurnost podataka
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Preduzimamo sve razumne tehničke i organizacione mere kako bismo zaštitili vaše podatke od neovlašćenog pristupa, gubitka ili zloupotrebe.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          6. Prava korisnika
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Imate pravo na pristup, ispravku ili brisanje svojih podataka, kao i pravo na ograničenje obrade ili prigovor. Za ostvarivanje ovih prava kontaktirajte nas putem email adrese{' '}
          <span className="text-[#d2b277] font-bold">office@markus.rs</span> ili telefonom na{' '}
          <span className="text-[#d2b277] font-bold">+381 63 222 333</span>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          7. Kolačići
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Naša stranica koristi kolačiće radi poboljšanja funkcionalnosti i analize posećenosti. Korišćenjem sajta pristajete na upotrebu kolačića u skladu sa ovom politikom privatnosti.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#d2b277] font-[Inter]">
          8. Izmene politike privatnosti
        </h2>
        <p className="mb-4 text-gray-700 font-[Inter]">
          Markus Co zadržava pravo da povremeno ažurira ovu politiku. Sve izmene će biti objavljene na ovoj stranici, a korišćenjem sajta nakon tih promena pristajete na nove uslove.
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
