"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface PageHeroProps {
  act: string;
  synonym: string;
  title: string;
  description: string;
}

export default function PageHero({
  act,
  synonym,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/15 bg-[#0d0c07] px-8 pb-0 pt-52 lg:px-26">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 500px at 52% 10%, rgba(212,176,58,.50), transparent 65%)",
        }}
      />

      <div className="relative mt-30">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-medium tracking-[0.25em] text-[#D4B03A]"
        >
          {act} <span className="mx-2 text-white/30">/</span> {synonym}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`${bebas.className} mt-4 text-9xl leading-none tracking-wide text-white sm:text-[170px]`}
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.15), 2px 2px 0 rgba(0,0,0,0.6)",
          }}
        >
          {title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="relative mt-1 border-t-[1.5px] border-white/12"
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="relative flex flex-col gap-3 py-8 sm:flex-row sm:gap-24"
        >
          <p className="w-fit shrink-0 text-xs font-medium tracking-[0.2em] text-[#D4B03A] sm:w-56">
            SYNOPSIS
          </p>
          <p className="max-w-xl text-sm md:text-[16px] font-light leading-relaxed text-white/60">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
