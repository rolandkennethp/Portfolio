import { Anton } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface Project {
  year: string;
  category: string;
  title: string;
  description: string;
  src: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    year: "2025",
    category: "CHAT PLATFORM",
    title: "CHAT-TIME",
    description: "The story never sleeps.",
    src: "/images/chat-01.png",
    href: "/projects/chattime",
  },
  {
    year: "2024",
    category: "B2B ADMIN DASHBOARD",
    title: "FARM2STORE",
    description: "Every visit, accounted for.",
    src: "/images/admin-01.png",
    href: "/projects/adminpanel",
  },
  {
    year: "2024",
    category: "E-COMMERCE PLATFORM",
    title: "BIKE STORE",
    description: "Clarity for every moving part.",
    src: "/images/bike-01.png",
    href: "/projects/bikestore",
  },
  
];

export default function FeaturedStories() {
  return (
    <section className="w-full border-b-[0.5px] border-white/15 bg-black px-8 py-20 lg:px-16">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-[#D4B03A]">
            SELECTED WORK
          </p>
          <h2
            className={`${anton.className} mt-4 text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl`}
          >
            FEATURED
            <br />
            STORIES.
          </h2>
        </div>

        <a
          href="/projects"
          className="flex items-center gap-2 text-sm text-[#D4B03A] hover:text-white"
        >
          View all case studies
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
            <Link key={project.title} href={project.href}>  
          <div
            key={project.title}
            className="flex flex-col border border-white/10 bg-white/7 p-6 transition-colors hover:border-[#ffffff]/25"
          >
            <div className="flex items-center mb-7 justify-between text-[11px] tracking-[0.15em] text-white/40">
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>

            <div>
                <Image
                    src={project.src}
                    alt={project.title}
                    width={500}
                    height={100}
                    className="object-fill rounded-lg"
                />
            </div>

            <span className=" my-10 h-px w-8 bg-[#D4B03A]" />

            <p className="text-[11px] mb-3 tracking-[0.15em] text-[#D4B03A]">
              A ROLAND KENNETH PROJECT
            </p>
            <h3
              className={`${anton.className} mt-2 mb-3 text-4xl tracking-wide text-white`}
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-white/50">
              {project.description}
            </p>
          </div>
        </Link>
        ))}
      </div>
    </section>
  );
}