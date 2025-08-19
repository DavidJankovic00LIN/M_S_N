import Image from 'next/image';

export default function Services() {
  return (
    <div id="usluzna_proizvodnja">
      <div className="grid grid-cols-6 gap-8 py-20 px-4 bg-white">
        <div className="col-span-4 col-start-2">
                     <div className="text-center my-8">
             <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
               Uslužna proizvodnja
             </h2>
             <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
           </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-[#1f2239] font-[Nunito] text-lg">
                Specijalizovani smo za proizvodnju privatnih robnih marki vlažnih maramica, sarađujući sa vodećim trgovinskim lancima i partnerima širom zemlje i regiona. Pružamo potpunu i pouzdanu uslugu – od razvoja formule do isporuke gotovog proizvoda – uz poštovanje najviših standarda kvaliteta i fleksibilnost prilagođenu vašim potrebama.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/rukovanje.png"
                alt="Rukovanje"
                width={400}
                height={300}
                className="w-[90%] h-auto max-w-sm shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 