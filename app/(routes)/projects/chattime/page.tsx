import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";

export default function ChattimePage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <Navbar />
      <ProjectHero
        year="2025"
        category="Chat Platform"
        title="CHAT-TIME"
        tagline="Conversations that never miss a beat."
        description="A real-time messaging platform built for seamless communication with secure authentication, instant messaging, and an intuitive user experience."
      />
      <Footer />
    </main>
  );
}
