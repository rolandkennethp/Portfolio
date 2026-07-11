import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ExperienceHero from "./Experiencehero";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar/>
            <ExperienceHero/>
            <Footer/>
        </main>
    );
}