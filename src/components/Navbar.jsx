import { useState } from "react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Beranda", to: "/", type: "page" },
  { name: "Tentang Kami", to: "/tentang-kami", type: "page" },
  { name: "Peta Kawasan", to: "/peta-kawasan", type: "page" },
  { name: "Fasilitas", to: "/#fasilitas", type: "section" },
  { name: "Berita & Kontak", to: "/#berita", type: "section" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function renderMenu(menu) {
    const className = "text-[11px] font-medium text-[#24483B] transition-colors hover:text-[#8BAF37]";

    if (menu.type === "section") {
      return (
        <a key={menu.name} href={menu.to} onClick={() => setMenuOpen(false)} className={className}>
          {menu.name}
        </a>
      );
    }

    return (
      <Link key={menu.name} to={menu.to} onClick={() => setMenuOpen(false)} className={className}>
        {menu.name}
      </Link>
    );
  }

  return (
    <header className="relative z-50 w-full bg-[#F3F5EC]">
      <nav className="mx-auto flex min-h-[80px] max-w-[1440px] items-center justify-between px-6 lg:px-16">
        <Link to="/" className="shrink-0">
          <h1 className="text-xl font-extrabold leading-none text-[#103F32]">AL AMIN</h1>
          <p className="mt-1 text-[8px] tracking-[1.5px] text-[#536C60]">SCIENCE TECHNO PARK</p>
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">{menus.map(renderMenu)}</div>

        <a
          href="/#kunjungan"
          className="hidden items-center gap-2 rounded-full bg-[#103F32] px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-[#24483B] sm:inline-flex"
        >
          Rencanakan Kunjungan ↗
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#103F32] text-2xl text-[#103F32] lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-[#DDE3D5] bg-[#F3F5EC] px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {menus.map(renderMenu)}

            <a
              href="/#kunjungan"
              onClick={() => setMenuOpen(false)}
              className="w-fit rounded-full bg-[#103F32] px-5 py-3 text-sm font-semibold text-white"
            >
              Rencanakan Kunjungan ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
