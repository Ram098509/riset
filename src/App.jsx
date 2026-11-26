import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import PetaKawasan from "./pages/PetaKawasan"
import Fasilitas from "./pages/Fasilitas"
import BeritaKontak from "./pages/BeritaKontak"
import DetailBerita from "./pages/DetailBerita";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/peta-kawasan" element={<PetaKawasan />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/berita-kontak" element={<BeritaKontak />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App