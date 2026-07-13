import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";

export default function BikeStorePage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <ProjectHero
        year="2025"
        category="E-commerce"
        title="BIKE STORE"
        tagline="Every ride begins with the right bike."
        description="A full-stack eCommerce application that enables users to explore motorcycles, read reviews, manage their cart, and complete purchases with ease."
      />
      <Footer />
    </main>
  );
}
