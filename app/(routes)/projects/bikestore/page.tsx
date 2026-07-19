import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";
import ProjectHero from "@/app/components/ProjectHero";
import Bikedetails from "./BikeDetails";
import BikeScreenshots from "./BikeScreenshots";

// lucide-react removed brand icons (Github, Linkedin, Twitter, etc.) — inline SVGs instead
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A10.53 10.53 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

export default function BikeStorePage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a]">
      <Navbar />
      <ProjectHero
        year="2025"
        category="E-commerce"
        title="BIKE STORE"
        tagline="Every ride begins with the right bike."
        description="A full-stack eCommerce application that enables users to explore motorcycles, read reviews, manage their cart, and complete purchases with ease."
      />
      <div className="p-0 py-10 md:py-16 md:px-20">
        <Bikedetails />
        <BikeScreenshots />
        <a
          href="https://github.com/rolandkennethp/Bike-Store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mx-8 mt-6 sm:mt-2 lg:mx-16 items-center gap-3 p-3 border border-white/20  hover:border-white/80 w-fit text-sm text-white transition-colors hover:text-white"
        >
          <GithubIcon size={16} />
          Repository
        </a>
      </div>

      <Footer />
    </main>
  );
}
