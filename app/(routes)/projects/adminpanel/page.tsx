import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";
import AdminDetails from "./AdminDetails";

export default function AdminPanelPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <ProjectHero
        year="2026"
        category="Admin Dashboard"
        title="Farm2Store"
        tagline="Built to keep businesses moving."
        description="A scalable B2B admin dashboard that streamlines products, orders, analytics, and business operations through a modern and intuitive interface."
      />

      <div className="p-0 py-10 md:py-16 md:px-20">
        <AdminDetails />
      </div>
      <Footer />
    </main>
  );
}
