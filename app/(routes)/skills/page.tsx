import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import SkillsHero from "./SkillsHero";

export default function SkillsPage() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar/>
            <SkillsHero/>
            <Footer/>
        </main>
    );
}