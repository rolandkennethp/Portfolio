import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import Project from "./Project";
import PageHero from "@/app/components/PageHero";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <PageHero
        act="ACT I"
        synonym="DEVELOPMENT FEATURE"
        title="PROJECTS"
        description="A collection of products that showcase problem-solving, technical growth, and a passion for building modern web applications."
      />
      <Project />
      <Footer />
    </main>
  );
}
