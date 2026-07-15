"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
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
    year: "2026",
    category: "B2B ADMIN DASHBOARD",
    title: "FARM2STORE",
    description: "Every visit, accounted for.",
    src: "/images/admin-01.png",
    href: "/projects/adminpanel",
  },
  {
    year: "2025",
    category: "E-COMMERCE PLATFORM",
    title: "BIKE STORE",
    description: "Clarity for every moving part.",
    src: "/images/bike-01.png",
    href: "/projects/bikestore",
  },
];

export default function FeaturedStories() {
  return (
    <section className="w-full  bg-[#0e0d09] px-8 py-20 border-t border-white/15 lg:px-51">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
            SELECTED WORK
          </p>
          <h2
            className={`${bebas.className} mt-4 text-5xl leading-[1.05] tracking-wide text-white sm:text-6xl`}
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
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
