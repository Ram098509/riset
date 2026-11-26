
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const facilities = [
  {
    number: "01",
    name: "Sport Center & Rusun",
    category: "OLAHRAGA & HUNIAN",
    image: "/images/kawasan/zona-01.jpg",
    description:
      "Area olahraga dan hunian yang dirancang untuk mendukung aktivitas, kenyamanan, serta kebutuhan pengunjung dan pengelola.",
  },
  {
    number: "02",
    name: "Area Parkir",
    category: "FASILITAS PENDUKUNG",
    image: "/images/kawasan/zona-02.jpg",
    description:
      "Area parkir yang disediakan untuk menunjang aksesibilitas dan kenyamanan pengunjung saat berada di kawasan.",
  },
  {
    number: "03",
    name: "Stable Kuda & Grazing Area",
    category: "PETERNAKAN",
    image: "/images/kawasan/zona-03.jpg",
    description:
      "Area kandang kuda dan padang penggembalaan untuk mengenal lingkungan peternakan serta aktivitas pemeliharaan kuda.",
  },
  {
    number: "04",
    name: "Peternakan Sapi, Ayam & Kambing",
    category: "EDUKASI PETERNAKAN",
    image: "/images/kawasan/zona-04.jpg",
    description:
      "Kawasan peternakan untuk mengenal pemeliharaan dan pengelolaan berbagai jenis hewan ternak.",
  },
  {
    number: "05",
    name: "Pertanian & Agroteknopark",
    category: "PERTANIAN",
    image: "/images/kawasan/zona-05.jpg",
    description:
      "Area pertanian dan agroteknopark sebagai ruang edukasi untuk mengenal tanaman, proses pertanian, serta inovasi agrikultur.",
  },
  {
    number: "06",
    name: "Plaza Utama",
    category: "RUANG PUBLIK",
    image: "/images/kawasan/zona-06.jpg",
    description:
      "Ruang terbuka utama yang menjadi titik berkumpul, bersantai, dan beraktivitas bersama di kawasan Science Techno Park.",
  },
  {
    number: "07",
    name: "Utilitas & Pemeliharaan",
    category: "INFRASTRUKTUR",
    image: "/images/kawasan/zona-07.jpg",
    description:
      "Area pendukung operasional kawasan yang berperan dalam menjaga fungsi, pemeliharaan, dan keberlangsungan fasilitas.",
  },
  {
    number: "08",
    name: "Camping Ground & Lodge",
    category: "WISATA & AKOMODASI",
    image: "/images/kawasan/zona-08.jpg",
    description:
      "Area camping dan lodge yang menawarkan pengalaman menikmati alam serta kegiatan rekreasi dan penginapan.",
  },
  {
    number: "09",
    name: "Konservasi",
    category: "LINGKUNGAN",
    image: "/images/kawasan/zona-09.jpg",
    description:
      "Area konservasi yang mendukung pelestarian lingkungan, keanekaragaman hayati, dan pembelajaran mengenai alam.",
  },
]

function Fasilitas() {
  return (
    <main className="min-h-screen bg-[#F3F5EC]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-12 pt-3 lg:px-16 lg:pt-5">
        <div className="overflow-hidden rounded-2xl bg-[#103F32] p-6 md:p-10 lg:p-12">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-[#D2F65C]">
            AL AMIN SCIENCE TECHNO PARK
          </p>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Fasilitas untuk menjelajahi, belajar, dan bertumbuh.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#D0DED6] md:text-base">
            Kenali berbagai fasilitas yang tersedia di AL AMIN Science
            Techno Park. Setiap area dirancang untuk menghadirkan
            pengalaman eksplorasi, edukasi, rekreasi, dan interaksi
            dengan alam.
          </p>

          <Link
            to="/peta-kawasan"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D2F65C] px-6 py-3 text-sm font-bold text-[#103F32] transition hover:bg-white"
          >
            Jelajahi Peta Kawasan
            <span>↗</span>
          </Link>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-16">
        {/* SECTION HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8BAF37]">
              DISCOVER OUR FACILITIES
            </p>

            <h2 className="text-3xl font-bold text-[#103F32] md:text-4xl">
              Jelajahi Fasilitas
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#536C60]">
            Temukan berbagai area dan fasilitas yang dapat menjadi
            bagian dari pengalaman petualangan Anda.
          </p>
        </div>

        {/* FACILITIES GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility) => (
            <article
              key={facility.number}
              className="group overflow-hidden rounded-2xl border border-[#E1E7DB] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* FACILITY IMAGE */}
              <div className="relative h-56 overflow-hidden bg-[#DDE5D8]">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* CATEGORY */}
                <div className="absolute left-4 top-4 rounded-full bg-[#D2F65C] px-4 py-2 text-xs font-bold text-[#103F32]">
                  {facility.category}
                </div>

                {/* NUMBER */}
                <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#103F32] text-sm font-bold text-white">
                  {facility.number}
                </div>
              </div>

              {/* FACILITY CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#103F32]">
                  {facility.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#536C60]">
                  {facility.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Fasilitas
