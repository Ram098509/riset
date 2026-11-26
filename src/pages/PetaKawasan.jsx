import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const zones = [
  {
    id: 1,
    name: "Sport Center & Rusun",
    category: "Olahraga dan Hunian",
    image: "images/kawasan/zona-01.jpg",
    description:
      "Zona sport center dan rumah susun merupakan area yang dirancang untuk mendukung aktivitas olahraga, kegiatan bersama, serta fasilitas hunian di lingkungan kawasan AL AMIN Science Techno Park.",
  },
  {
    id: 2,
    name: "Parkir & Progressing",
    category: "Area Parkir dan Pengembangan",
    image: "/images/kawasan/zona-02.jpg",
    description:
      "Area parkir dan progressing menjadi bagian dari fasilitas pendukung kawasan yang berfungsi menunjang akses, mobilitas pengunjung, serta pengembangan lingkungan kawasan.",
  },
  {
    id: 3,
    name: "Stable Kuda & Grazing Area",
    category: "Peternakan dan Edukasi",
    image: "/images/kawasan/zona-03.jpg",
    description:
      "Stable kuda dan grazing area merupakan area yang mendukung pemeliharaan kuda serta kegiatan penggembalaan. Kawasan ini dapat menjadi bagian dari pengalaman edukasi dan interaksi dengan lingkungan peternakan.",
  },
  {
    id: 4,
    name: "Peternakan Sapi, Ayam & Kambing",
    category: "Peternakan",
    image: "/images/kawasan/zona-04.jpg",
    description:
      "Zona peternakan menyediakan area untuk kegiatan pemeliharaan sapi, ayam, dan kambing. Pengunjung dapat mengenal lebih jauh aktivitas peternakan serta pengelolaan hewan ternak.",
  },
  {
    id: 5,
    name: "Pertanian & Agroteknopark",
    category: "Pertanian dan Teknologi",
    image: "/images/kawasan/zona-05.jpg",
    description:
      "Pertanian dan agroteknopark menjadi kawasan untuk mengenal kegiatan pertanian, pengembangan teknologi pertanian, serta potensi pembelajaran yang berkaitan dengan tanaman dan lingkungan.",
  },
  {
    id: 6,
    name: "Plaza Utama",
    category: "Pusat Kawasan",
    image: "/images/kawasan/zona-06.jpg",
    description:
      "Plaza utama merupakan area pusat kawasan yang dapat menjadi ruang berkumpul, titik orientasi pengunjung, serta tempat berlangsungnya berbagai aktivitas di AL AMIN Science Techno Park.",
  },
  {
    id: 7,
    name: "Utilitas & Pemeliharaan",
    category: "Infrastruktur Kawasan",
    image: "/images/kawasan/zona-07.jpg",
    description:
      "Zona utilitas dan pemeliharaan berperan dalam mendukung operasional kawasan melalui fasilitas pendukung, kebutuhan utilitas, serta kegiatan pemeliharaan lingkungan.",
  },
  {
    id: 8,
    name: "Camping Ground & Lodge",
    category: "Wisata dan Penginapan",
    image: "/images/kawasan/zona-08.jpg",
    description:
      "Camping ground dan lodge merupakan area yang mendukung kegiatan rekreasi, berkemah, dan penginapan. Kawasan ini memberikan kesempatan bagi pengunjung untuk menikmati pengalaman di lingkungan alam.",
  },
  {
    id: 9,
    name: "Konservasi",
    category: "Lingkungan",
    image: "/images/kawasan/zona-09.jpg",
    description:
      "Zona konservasi merupakan area yang mendukung pelestarian lingkungan, keberadaan vegetasi, serta upaya menjaga keseimbangan ekosistem di kawasan AL AMIN Science Techno Park.",
  },
];

function PetaKawasan() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeZone = zones[activeIndex];

  // Slider otomatis berpindah setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % zones.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F3F5EC]">
      <Navbar />

      {/* HERO SLIDER */}
      <section className="mx-auto max-w-[1440px] px-4 pt-3 lg:px-16 lg:pt-5">
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-[#103F32] md:h-[350px] lg:h-[400px]">
          {/* FOTO SLIDE */}
          <img
            key={activeZone.id}
            src={activeZone.image}
            alt={activeZone.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#103F32]/90 via-[#103F32]/50 to-transparent" />

          {/* HERO TEXT */}
          <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 md:px-10 lg:px-12">
            
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Area Kawasan
              <br />
              Science Techno
              <br />
              Park Al-Amin
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/80 md:text-base">
              Mari jelajahi setiap sudut area kami, sembilan zona dengan beragam pengalaman
              menarik.
            </p>


          </div>

          {/* SLIDE INDICATOR */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-2 md:left-12 md:right-12">
            {zones.map((zone, index) => (
              <button
                key={zone.id}
                type="button"
                aria-label={`Tampilkan slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "w-10 bg-[#C8F45A]" : "w-5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* SLIDE NUMBER */}
          <div className="absolute bottom-6 right-6 z-20 hidden text-sm font-bold text-white md:block">
            {String(activeIndex + 1).padStart(2, "0")} / 09
          </div>
        </div>
      </section>

      {/* ZONE EXPLORATION */}
      <section id="jelajahi-zona" className="mx-auto max-w-[1440px] px-4 py-16 lg:px-16 lg:py-20">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-[3px] text-[#91B53D]">EXPLORE OUR AREA</p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#103F32] md:text-4xl">Peta Kawasan</h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#536C60]">
            Pilih zona kawasan untuk mengenal fasilitas, aktivitas, serta berbagai pengalaman yang tersedia di AL AMIN
            Science Techno Park.
          </p>
        </div>

        {/* LEFT LIST & RIGHT DETAIL */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.5fr]">
          {/* LEFT: ZONE BUTTON LIST */}
          <div className="rounded-2xl border border-[#E0E7D8] bg-white p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#103F32]">Daftar Zona</h3>

              <span className="rounded-full bg-[#E5EED5] px-3 py-2 text-xs font-bold text-[#536C60]">09 ZONA</span>
            </div>

            <div className="flex flex-col gap-3">
              {zones.map((zone, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#103F32] bg-[#103F32] shadow-md"
                        : "border-[#E5EBDD] bg-[#F8FAF5] hover:border-[#91B53D] hover:bg-[#EDF3E5]"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                        isActive ? "bg-[#C8F45A] text-[#103F32]" : "bg-[#E5EED5] text-[#536C60]"
                      }`}
                    >
                      {String(zone.id).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-bold leading-5 ${isActive ? "text-white" : "text-[#103F32]"}`}
                      >
                        {zone.name}
                      </span>

                      <span className={`mt-1 block text-[10px] ${isActive ? "text-white/60" : "text-[#829184]"}`}>
                        {zone.category}
                      </span>
                    </span>

                    <span
                      className={`text-lg transition-transform ${
                        isActive ? "translate-x-1 text-[#C8F45A]" : "text-[#91B53D] group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: ZONE DETAIL */}
          <div key={activeZone.id} className="overflow-hidden rounded-2xl border border-[#E0E7D8] bg-white">
            {/* ZONE IMAGE */}
            <div className="relative h-[280px] overflow-hidden bg-[#DCE6D3] md:h-[400px]">
              <img src={activeZone.image} alt={activeZone.name} className="h-full w-full object-cover" />

              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-[#C8F45A] px-4 py-2 text-xs font-bold text-[#103F32]">
                  ZONA {String(activeZone.id).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* ZONE INFORMATION */}
            <div className="p-6 md:p-10">
              <p className="text-xs font-bold tracking-[2px] text-[#91B53D]">{activeZone.category}</p>

              <h3 className="mt-3 text-2xl font-extrabold text-[#103F32] md:text-3xl">{activeZone.name}</h3>

              <p className="mt-5 text-sm leading-8 text-[#536C60] md:text-base">{activeZone.description}</p>

              {/* DETAIL NAVIGATION */}
              <div className="mt-8 flex items-center justify-between border-t border-[#E5EBDD] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex - 1 + zones.length) % zones.length)}
                  className="rounded-full border border-[#DDE5D6] px-5 py-3 text-xs font-bold text-[#103F32] transition hover:bg-[#EDF3E5]"
                >
                  ← Sebelumnya
                </button>

                <span className="text-xs font-bold text-[#829184]">
                  {String(activeIndex + 1).padStart(2, "0")} / 09
                </span>

                <button
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + 1) % zones.length)}
                  className="rounded-full bg-[#103F32] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#24483B]"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default PetaKawasan;
