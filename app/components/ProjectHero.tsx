"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface ProjectHeroProps {
  year: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
}

export default function ProjectHero({
  year,
  category,
  title,
  tagline,
  description,
}: ProjectHeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/15 lg:pr-70 bg-[#0a0a0a] px-8 py-24 lg:px-36">
      {/* Grain / TV static texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]">
        <filter id="project-hero-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#project-hero-noise)" />
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          All projects
        </Link>
      </motion.div>

      <div className="relative mt-16 gap-10 ">
        {/* Left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]"
          >
            {year} <span className="mx-2 text-white/30">/</span>{" "}
            {category.toUpperCase()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`${bebas.className} mt-4 text-8xl leading-none tracking-wide text-white sm:text-9xl`}
          >
            {title}
          </motion.h1>

          <div className="flex flex-col mt-6 md:flex-row md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className=" text-[16px] text-[#D4B03A]"
            >
              {tagline}
            </motion.p>
            {/* Right column */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="max-w-lg text-[15px] leading-relaxed text-white/60"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
