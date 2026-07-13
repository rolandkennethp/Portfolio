import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import Image from "next/image";
import { Download } from "lucide-react";
import PageHero from "@/app/components/PageHero";

export default function ResumePage() {
  return (
    <main className="min-h-screen w-full bg-black ">
      <Navbar />
      <PageHero
        act="ACT IV"
        synonym="DIRECTOR'S CUT"
        title="RESUME"
        description="A snapshot of my experience, technical skills, education, and the projects that have shaped my journey as a developer."
      />
      <div className="flex flex-col gap-8 justify-center items-center my-18">
        <Image
          src="/resume/cv.jpg"
          alt="Profile"
          width={600}
          height={400}
          className="rounded-lg shadow-lg shadow-[#D4B03A]/20"
        />
        <a
          href="/resume/cv.pdf"
          download
          className="flex items-center gap-2 tracking-wider px-6 py-3 text-[13px] font-light  text-black bg-[#D4B03A] hover:shadow-xl hover:-translate-y-1 transition-all shadow-[yellow]/20 hover:border-white/50"
        >
          <Download size={16} />
          DOWNLOAD RESUME
        </a>
      </div>
      <Footer />
    </main>
  );
}
