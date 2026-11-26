function Footer() {
  return (
    <footer className="w-full bg-[#103F32] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* IDENTITAS */}
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold tracking-wide">AL AMIN / SCIENCE TECHNO PARK</h2>
          </div>

          {/* TAGLINE */}
          <div>
            <p className="text-[#D0DED6] text-[10px] text-center">Belajar. Bermain. Terhubung dengan alam.</p>
          </div>

          {/* COPYRIGHT */}
          <div>
            <p className="text-[#D0DED6] text-[9px] tracking-wide">KONSEP EKSPLORASI DIGITAL · 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
