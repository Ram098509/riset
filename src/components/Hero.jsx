import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section id="beranda" className="max-w-[1440px] mx-auto px-4 lg:px-4">
      <div className="relative min-h-[480px] lg:min-h-[510px] bg-[#103F32] rounded-2xl overflow-hidden flex items-center">
        {/* KONTEN KIRI */}
        <div className="relative z-10 w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-16">
          <p className="text-[#C8F45A] text-[11px] font-bold tracking-wide mb-6">DUNIA BARU UNTUK DIJELAJAHI</p>

          <h1 className="text-white text-4xl md:text-5xl lg:text-[48px] leading-[1.3] font-bold max-w-[530px]">
            Petualangan besar.
            <br />
            Dimulai dari
            <br />
            rasa ingin tahu.
          </h1>

          <p className="text-[#D0DED6] text-sm mt-5 max-w-[400px] leading-relaxed">
            Jelajahi AL Amin Science Techno Park. Temukan sains, alam, dan pengalaman seru dalam satu kawasan.
          </p>

          <div className="flex items-center gap-5 mt-8 flex-wrap">
            <a
              href="#peta"
              className="bg-[#C8F45A] text-[#103F32] px-6 py-4 rounded-lg text-xs font-bold hover:bg-[#D8FF76] transition-colors"
            >
              Jelajahi kawasan ↗
            </a>

            <span className="text-white text-[10px]">09 zona · 01 petualangan</span>
          </div>
        </div>

        {/* GAMBAR KANAN */}
        <div className="hidden lg:flex absolute right-0 top-0 w-[55%] h-full items-center justify-center p-8">
          <img
            src={heroImage}
            alt="Ilustrasi kawasan AL AMIN Science Techno Park"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
