"use client";

import { motion } from "framer-motion";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface ActDividerProps {
  eyebrow?: string;
  title?: string;
}

export default function ActDivider({
  eyebrow = "THE NARRATIVE ARC",
  title = "ACT III: THE JOURNEY",
}: ActDividerProps) {
  return (
    <motion.div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#141414]"
    initial={{ opacity: 1 }}

      animate={
           {
              opacity: [1,  0],
              scale: [1, 1],
            }
      }

      transition={{
        duration: 1.3,
        times: [0, 1],
      }}
      >
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 50% 45%, rgba(255,255,255,0.05), transparent 65%), radial-gradient(900px 900px at 90% 50%, rgba(0,0,0,0.6), transparent 60%)",
        }}
      />

      {/* Grain texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[0.35em] text-[#D4B03A]">
          {eyebrow}
        </p>

        <h1
          className={`${anton.className} mt-5 text-5xl tracking-wide text-[#F1E9D8] sm:text-6xl lg:text-7xl`}
        >
          {title}
        </h1>

        <span className="mt-10 h-20 w-px bg-[#D4B03A]" />
      </div>
    </motion.div>
  );
}