import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import PageHero from "@/app/components/PageHero";
import ContactSection from "./ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <PageHero
        act="FINAL ACT"
        synonym="PITCH SCRIPT"
        title="CONTACT"
        description="Get in touch with me to discuss potential opportunities, collaborate on projects, or just say hello!"
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
