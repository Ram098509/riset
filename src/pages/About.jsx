import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <main className="min-h-screen bg-[#F3F5EC] flex flex-col">
      <Navbar />

      {/* HERO TENTANG KAMI */}
      <section className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 pt-16 pb-20">
        <div className="bg-[#103F32] rounded-2xl p-8 md:p-14 lg:p-20">
          <p className="text-[#D2F65C] text-xs font-bold tracking-[0.2em] mb-6">MENGENAL AL AMIN</p>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Mengenal lebih dekat dunia sains dan alam.
          </h1>

          <p className="text-[#D0DED6] text-sm md:text-base leading-relaxed max-w-2xl mt-7">
            AL AMIN Science Techno Park merupakan ruang untuk mengenal sains, menjelajahi alam, dan mendapatkan
            pengalaman belajar yang menarik.
          </p>
        </div>
      </section>

      {/* TENTANG AL AMIN */}
      <section className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#789047] text-xs font-bold tracking-widest mb-4">TENTANG KAMI</p>

            <h2 className="text-[#103F32] text-3xl md:text-4xl font-bold leading-tight">
              Belajar, bermain, dan terhubung dengan alam.
            </h2>

            <p className="text-[#718176] text-sm leading-7 mt-6">
              Halaman ini menjadi tempat untuk mengenal lebih jauh AL AMIN Science Techno Park, konsep kawasan, serta
              pengalaman yang dapat ditemukan oleh pengunjung.
            </p>
          </div>

          <div className="bg-[#D2F65C] rounded-2xl min-h-[280px] md:min-h-[350px] flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-[#103F32] text-3xl md:text-4xl font-bold">AL AMIN</h3>
              <p className="text-[#103F32] text-xs tracking-[0.3em] mt-3">SCIENCE TECHNO PARK</p>
            </div>
          </div>
        </div>
      </section>

      {/* NILAI UTAMA */}
      <section className="max-w-[1440px] w-full mx-auto px-6 lg:px-16 pb-20">
        <div className="mb-8">
          <p className="text-[#789047] text-xs font-bold tracking-widest mb-3">NILAI KAMI</p>

          <h2 className="text-[#103F32] text-3xl font-bold">Apa yang ingin kami hadirkan?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              number: "01",
              title: "Eksplorasi",
              description: "Mendorong rasa ingin tahu melalui pengalaman menjelajahi lingkungan.",
            },
            {
              number: "02",
              title: "Edukasi",
              description: "Menghadirkan pengalaman belajar sains dan alam secara menarik.",
            },
            {
              number: "03",
              title: "Konservasi",
              description: "Mengenalkan pentingnya menjaga alam dan lingkungan.",
            },
          ].map((item) => (
            <div key={item.number} className="bg-white rounded-xl p-7 hover:-translate-y-1 transition-all duration-300">
              <p className="text-[#9AB44B] text-sm font-bold">{item.number}</p>

              <h3 className="text-[#103F32] text-xl font-bold mt-5">{item.title}</h3>

              <p className="text-[#718176] text-sm leading-6 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
