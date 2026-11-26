
import { Link, useParams } from "react-router-dom";
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

function DetailBerita() {
  const { id } = useParams();

  const berita = news.find((item) => item.id === id);

  if (!berita) {
    return (
      <main className="min-h-screen bg-[#F3F5EC]">
        <Navbar />

        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-[#103F32]">
            Berita Tidak Ditemukan
          </h1>

          <p className="mt-4 text-[#536C60]">
            Maaf, berita yang kamu cari tidak tersedia.
          </p>

          <Link
            to="/berita-kontak"
            className="mt-8 inline-flex rounded-full bg-[#103F32] px-7 py-3 font-bold text-white transition hover:bg-[#24483B]"
          >
            Kembali ke Berita
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3F5EC]">
      <Navbar />

      <section className="mx-auto w-full max-w-[1100px] px-6 pb-20 pt-8 lg:px-16 lg:pt-12">
        {/* TOMBOL KEMBALI */}
        <Link
          to="/berita-kontak"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#536C60] transition hover:text-[#8BAF37]"
        >
          <span>←</span>
          Kembali ke Berita
        </Link>

        {/* DETAIL BERITA */}
        <article>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E5EDCE] px-4 py-2 text-xs font-bold tracking-wider text-[#536C60]">
              {berita.category}
            </span>

            <span className="text-sm text-[#849187]">
              {berita.date}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#103F32] md:text-5xl">
            {berita.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#536C60]">
            {berita.description}
          </p>

          <img
            src={berita.image}
            alt={berita.title}
            className="mt-10 h-[260px] w-full rounded-2xl object-cover md:h-[480px]"
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="whitespace-pre-line text-base leading-8 text-[#24483B] md:text-lg">
              {berita.content.trim()}
            </div>
          </div>
        </article>

        {/* TOMBOL KEMBALI BAWAH */}
        <div className="mt-14 border-t border-[#DCE4D6] pt-8">
          <Link
            to="/berita-kontak"
            className="inline-flex items-center gap-2 rounded-full bg-[#103F32] px-7 py-3 font-bold text-white transition hover:bg-[#24483B]"
          >
            ← Lihat Berita Lainnya
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DetailBerita;
