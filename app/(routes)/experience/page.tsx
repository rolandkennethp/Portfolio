import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import Experience from "./Experience";
import PageHero from "@/app/components/PageHero";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <PageHero
        act="ACT II"
        synonym="THE JOURNEY"
        title="EXPERIENCE"
        description="Hands-on experience building real-world applications, collaborating in startup environments, and growing through every challenge."
      />
      <Experience />
      <Footer />
    </main>
  );
}
