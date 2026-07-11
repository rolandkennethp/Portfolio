import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectsHero from "./Projectshero";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar/>
            <ProjectsHero/>
            <Footer/>
        </main>
    );
}