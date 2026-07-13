import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";

export default function AdminPanelPage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <ProjectHero
        year="2026"
        category="Admin Dashboard"
        title="Farm2Store"
        tagline="Built to keep businesses moving."
        description="A scalable B2B admin dashboard that streamlines products, orders, analytics, and business operations through a modern and intuitive interface."
      />
      <Footer />
    </main>
  );
}
