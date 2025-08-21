import FadeInWhenVisible from './FadeInWhenVisible'

export default function About() {
  return (
    <div id="o_nama">
      <div className="grid grid-cols-6 gap-8 py-20 px-4 bg-white">
        <div className="col-span-4 col-start-2">
          <div>
            <div className="text-center my-8">
              <FadeInWhenVisible animation="fadeUp" >
                <h2 className="text-4xl font-bold text-[#2e3455] font-[Nunito] mb-2">
                  O nama
                </h2>
              </FadeInWhenVisible>
              <FadeInWhenVisible animation="fadeIn" >
                <div className="w-24 h-1 mx-auto bg-[#d2b277] rounded"></div>
              </FadeInWhenVisible>
            </div>
            <FadeInWhenVisible animation="fadeIn" >
              <p className="text-[#1f2239] font-[Nunito] text-lg">
                Markus Co je porodična firma iz Valjeva, osnovana 1994. godine, sa jasnom misijom da potrošačima obezbedi kvalitetne i pristupačne proizvode za ličnu higijenu. Sa savremenom opremom i posvećenim timom, razvijamo sopstvene brendove i uspešno sarađujemo sa domaćim i inostranim partnerima, gradeći poverenje kroz kvalitet, odgovornost i inovacije.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
} 