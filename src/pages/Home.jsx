import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExploreCard from "../components/Explorecard";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-[#F3F5EC">
      <Navbar />
      <Hero />
      <ExploreCard />
      <Footer />
    </main>
  );
}

export default Home;
