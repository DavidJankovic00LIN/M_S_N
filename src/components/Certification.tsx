import Image from 'next/image';

interface CertificationItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function Certification() {
  const certificationItems: CertificationItem[] = [
    {
      id: 1,
      image: '/assets/m_ic_1.png',
      title: 'Tradicija duga 30 godina',
      description: 'Više od dve decenije iskustva i posvećenosti kvalitetu potvrđuju naše mesto na tržištu.'
    },
    {
      id: 2,
      image: '/assets/m_ic_2.png',
      title: 'Sertifikovana proizvodnja',
      description: 'Naši proizvodi nastaju u kontrolisanim uslovima, uz poštovanje najviših standarda kvaliteta i bezbednosti.'
    },
    {
      id: 3,
      image: '/assets/ikonica_3.jpg',
      title: 'Posvećenost kupcima',
      description: 'Naša filozofija temelji se na slušanju vaših potreba i neprekidnom unapređenju naših proizvoda i usluga.'
    }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificationItems.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={160}
                className="w-40 h-40 mb-4"
              />
              <h3 className="text-lg font-semibold text-[#2e3455] font-[Nunito]">
                {item.title}
              </h3>
              <p className="text-[#1f2239] font-[Nunito] text-base mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 