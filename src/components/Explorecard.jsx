const exploreItems = [
  {
    number: "01 / EXPLORE",
    title: "Jelajahi peta",
    description: "Kenali 9 zona dan susun rute petualangan.",
    link: "/#peta-kawasan",
    highlight: true,
  },
  {
    number: "02 / EXPLORE",
    title: "Belajar dari alam",
    description: "Temui satwa, kebun, dan ide-ide baru.",
    link: "/#fasilitas",
    highlight: false,
  },
  {
    number: "03 / EXPLORE",
    title: "Rencanakan kunjungan",
    description: "Temukan fasilitas untuk hari yang seru.",
    link: "/#kunjungan",
    highlight: false,
  },
];

function ExploreCard() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-12 lg:px-16 lg:py-16">
      {/* JUDUL SECTION */}
      <div className="mb-7">
        <h2 className="text-2xl font-bold tracking-tight text-[#103F32] md:text-3xl">Pilih cara kamu menjelajah</h2>

        <p className="mt-2 text-sm text-[#718176]">
          Dari lapangan hijau hingga laboratorium alam. Selalu ada hal baru untuk ditemukan.
        </p>
      </div>

      {/* DAFTAR KARTU */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {exploreItems.map((item) => (
          <a
            key={item.number}
            href={item.link}
            className={`
              group flex min-h-[155px] flex-col justify-between rounded-xl p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              ${item.highlight ? "bg-[#D2F65C] text-[#103F32]" : "bg-white text-[#103F32]"}
            `}
          >
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-wide">{item.number}</p>

              <h3 className="flex items-center gap-2 text-lg font-bold">
                {item.title}
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </h3>

              <p className="mt-3 text-xs leading-relaxed opacity-70">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ExploreCard;
