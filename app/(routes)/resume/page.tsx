import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ResumeHero from "./ResumeHero";

export default function ResumePage() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar/>
            <ResumeHero/>
            <Footer/>
        </main>
    );
}