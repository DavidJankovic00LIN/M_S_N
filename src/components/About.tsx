export default function About() {
  return (
    <div id="o_nama">
      <div className="grid grid-cols-6 gap-8 py-20 px-4 bg-white">
        <div className="col-span-4 col-start-2">
          <div>
            <div className="flex items-center justify-center w-[70%] mx-auto my-8">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-600"></div>
              <span className="px-4 text-4xl font-bold text-[#2e3455] whitespace-nowrap font-[Nunito]">
                O nama
              </span>
              <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-600"></div>
            </div>
            <p className="text-[#1f2239] font-[Nunito] text-lg">
              Markus Co je porodična firma iz Valjeva, osnovana 1994. godine, sa jasnom misijom da potrošačima obezbedi kvalitetne i pristupačne proizvode za ličnu higijenu. Sa savremenom opremom i posvećenim timom, razvijamo sopstvene brendove i uspešno sarađujemo sa domaćim i inostranim partnerima, gradeći poverenje kroz kvalitet, odgovornost i inovacije.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 