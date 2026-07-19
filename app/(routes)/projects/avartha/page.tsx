import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";
import AvarthaDetails from "./AvarthaDetails";

export default function AvarthaPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <ProjectHero
        year="2026"
        category="Portfolio"
        title="AVARTHAA"
        tagline="Helping businesses make a lasting impact."
        description="A modern company website designed to showcase services, products, and company values through a fast, responsive, and engaging user experience."
      />
      <div className="p-0 py-10 md:py-16 md:px-20">
        <AvarthaDetails />
      </div>
      <Footer />
    </main>
  );
}
