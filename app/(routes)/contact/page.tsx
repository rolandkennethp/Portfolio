import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import CONTACTHERO from "./Contacthero";

export default function ContactPage() {
    return (
        <main className="min-h-screen w-full bg-black">
            <Navbar/>
            <CONTACTHERO/>
            <Footer/>
        </main>
    );
}