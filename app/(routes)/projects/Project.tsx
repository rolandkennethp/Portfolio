"use client";

import { motion } from "framer-motion";
import PitchCta from "@/app/components/PitchCta";
import ProjectCard from "@/app/components/ProjectCard";

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
    year: "2026",
    category: "B2B ADMIN DASHBOARD",
    title: "FARM2STORE",
    description: "Every visit, accounted for.",
    src: "/images/admin-01.png",
    href: "/projects/adminpanel",
  },
  {
    year: "2025",
    category: "CHAT PLATFORM",
    title: "CHAT-TIME",
    description: "The story never sleeps.",
    src: "/images/chat-01.png",
    href: "/projects/chattime",
  },
  {
    year: "2025",
    category: "E-COMMERCE PLATFORM",
    title: "BIKE STORE",
    description: "Clarity for every moving part.",
    src: "/images/bike-01.png",
    href: "/projects/bikestore",
  },
  {
    year: "2026",
    category: "PORTFOLIO WEBSITE",
    title: "AVARTHA",
    description: "Every visit, accounted for.",
    src: "/images/avartha-01.png",
    href: "/projects/avartha",
  },
];

export default function Project() {
  return (
    <section className="w-full bg-[#0a0a0a] px-8 md:px-10 lg:px-45 py-20 ">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl leading-relaxed text-[#D4B03A]"
      >
        Selected Case Studies
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="max-w-2xl mt-8 leading-relaxed text-white/60"
      >
        A collection of products built around real workflows, durable systems,
        and a belief that utility can be beautiful.
      </motion.p>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <PitchCta />
      </div>
    </section>
  );
}
