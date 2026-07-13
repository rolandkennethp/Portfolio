import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";

export default function AvarthaPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <ProjectHero
        year="2026"
        category="Portfolio"
        title="AVARTHAA"
        tagline="Helping businesses make a lasting impact."
        description="A modern company website designed to showcase services, products, and company values through a fast, responsive, and engaging user experience."
      />
      <Footer />
    </main>
  );
}
