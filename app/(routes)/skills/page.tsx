import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import PageHero from "@/app/components/PageHero";

export default function SkillsPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <PageHero
        act="ACT III"
        synonym="THE CRAFT"
        title="SKILLS"
        description="The selected toolkit of technologies I use to build scalable, performant, and user-focused web applications"
      />
      <Footer />
    </main>
  );
}
