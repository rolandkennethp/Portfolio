import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import PageHero from "@/app/components/PageHero";
import Toolkit from "./Toolkit";
import { Skills } from "./Skills";

export default function SkillsPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <PageHero
        act="ACT III"
        synonym="THE CRAFT"
        title="SKILLS"
        description="The selected toolkit of technologies I use to build scalable, performant, and user-focused web applications"
      />
      <Skills />

      <Toolkit />
      <Footer />
    </main>
  );
}
