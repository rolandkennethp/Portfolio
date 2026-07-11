
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import AboutHero from "./Abouthero";


export default function AboutPage() {

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <AboutHero />
      <Footer />
    </main>
  );
}