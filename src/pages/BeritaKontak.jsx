
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const news = [
  {
    id: "aktivitas-dan-kegiatan",
    category: "KEGIATAN",
    date: "Berita terbaru",
    title: "Aktivitas dan Kegiatan AL AMIN Science Techno Park",
    description:
      "Berbagai aktivitas dan kegiatan menarik yang berlangsung di kawasan AL AMIN Science Techno Park.",
    content: `
AL AMIN Science Techno Park merupakan kawasan yang dikembangkan sebagai tempat edukasi, penelitian, dan pengembangan teknologi.

Melalui berbagai kegiatan, pengunjung dapat mengenal lebih dekat potensi kawasan serta berbagai aktivitas yang tersedia.
    `,
    image: "/images/berita/berita-01.jpg",
  },
  {
    id: "belajar-dan-mengenal-lingkungan",
    category: "EDUKASI",
    date: "Informasi edukasi",
    title: "Belajar dan Mengenal Lingkungan Sekitar",
    description:
      "Mengenal ilmu pengetahuan, pertanian, peternakan, dan lingkungan.",
    content: `
Kawasan ini menjadi salah satu tempat untuk belajar mengenai lingkungan, pertanian, peternakan, dan ilmu pengetahuan.

Pengunjung dapat memperoleh pengalaman edukasi melalui pengenalan berbagai fasilitas dan aktivitas yang tersedia.
    `,
    image: "/images/berita/berita-02.jpg",
  },
  {
    id: "mengenal-fasilitas-kawasan",
    category: "INFORMASI",
    date: "Informasi kawasan",
    title: "Mengenal Lebih Dekat Fasilitas Kawasan",
    description:
      "Informasi mengenai fasilitas dan potensi yang tersedia di kawasan.",
    content: `
AL AMIN Science Techno Park memiliki berbagai fasilitas yang mendukung kegiatan edukasi, rekreasi, pertanian, peternakan, dan pengembangan kawasan.

Setiap zona memiliki fungsi dan daya tarik tersendiri yang dapat dijelajahi oleh pengunjung.
    `,
    image: "/images/berita/berita-03.jpg",
  },
];

function BeritaKontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Halo AL AMIN Science Techno Park,

Nama: ${form.nama}
Email: ${form.email}
Subjek: ${form.subjek}

Pesan:
${form.pesan}
    `;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#F3F5EC]">
      <Navbar />

      {/* HERO BERITA */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pt-3 lg:px-16 lg:pt-5">
        <div className="relative overflow-hidden rounded-2xl bg-[#103F32] px-7 py-14 md:px-12 md:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#D2F65C]">
              BERITA & INFORMASI
            </p>

            <h1 className="text-3xl font-bold leading-tight text-[#F3F5EC] md:text-5xl">
              Berita, informasi, dan cerita dari kawasan kami.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D5E2D8] md:text-base">
              Temukan berbagai informasi, kegiatan, dan perkembangan
              AL AMIN Science Techno Park.
            </p>
          </div>

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-[#24483B] opacity-50" />
          <div className="absolute -bottom-32 right-32 h-64 w-64 rounded-full bg-[#24483B] opacity-40" />
        </div>
      </section>

      {/* DAFTAR BERITA */}
      <section className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-16 lg:py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#8BAF37]">
            INFORMASI TERBARU
          </p>

          <h2 className="text-3xl font-bold text-[#103F32] md:text-4xl">
            Berita dan Kegiatan
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#536C60] md:text-base">
            Ikuti informasi terbaru mengenai kegiatan dan berbagai
            perkembangan di AL AMIN Science Techno Park.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-[#E1E7D9] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#EDF4D9] px-3 py-1 text-xs font-bold text-[#536C60]">
                    {item.category}
                  </span>

                  <span className="text-xs text-[#849187]">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#103F32]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#536C60]">
                  {item.description}
                </p>

                <Link
                  to={`/berita/${item.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-[#103F32] transition hover:text-[#8BAF37]"
                >
                  Baca Selengkapnya
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section
        id="kontak"
        className="mx-auto w-full max-w-[1440px] px-6 pb-20 lg:px-16"
      >
        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-[#103F32] p-7 md:p-10 lg:grid-cols-2 lg:p-14">
          <div className="text-[#F3F5EC]">
            <p className="mb-3 text-sm font-bold tracking-widest text-[#D2F65C]">
              HUBUNGI KAMI
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Punya pertanyaan atau ingin mengenal kawasan kami lebih dekat?
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#D5E2D8]">
              Silakan hubungi kami melalui informasi kontak atau
              kirimkan pesan melalui formulir yang tersedia.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-bold text-[#D2F65C]">
                  ALAMAT
                </p>
                <p className="mt-2 text-sm text-[#F3F5EC]">
                  Informasi alamat AL AMIN Science Techno Park
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#D2F65C]">
                  EMAIL
                </p>
                <p className="mt-2 text-sm text-[#F3F5EC]">
                  Email resmi AL AMIN Science Techno Park
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-[#D2F65C]">
                  TELEPON
                </p>
                <p className="mt-2 text-sm text-[#F3F5EC]">
                  Nomor kontak resmi AL AMIN Science Techno Park
                </p>
              </div>
            </div>
          </div>

          {/* FORM KONTAK */}
          <div className="rounded-2xl bg-[#F3F5EC] p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#103F32]">
              Kirim Pesan
            </h3>

            <p className="mt-2 text-sm text-[#536C60]">
              Isi formulir berikut untuk mengirimkan pesan kepada kami.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#24483B]">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-xl border border-[#DCE4D6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#536C60]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#24483B]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan alamat email"
                  className="w-full rounded-xl border border-[#DCE4D6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#536C60]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#24483B]">
                  Subjek
                </label>
                <input
                  type="text"
                  name="subjek"
                  value={form.subjek}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan subjek pesan"
                  className="w-full rounded-xl border border-[#DCE4D6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#536C60]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#24483B]">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tuliskan pesan kamu..."
                  className="w-full resize-none rounded-xl border border-[#DCE4D6] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#536C60]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#103F32] px-6 py-3 font-bold text-white transition hover:bg-[#24483B]"
              >
                Kirim Pesan →
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default BeritaKontak;
