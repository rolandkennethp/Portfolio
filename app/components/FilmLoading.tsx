"use client";

import { Anton } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function FilmLoading() {
  return (
    <div className="absolute inset-0 z-50 h-screen w-screen overflow-hidden bg-black">
      
        {/* Top Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#2B1416]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: "easeInOut",
        }}
      />
         {/* Bottom Curtain */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#2B1416]"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Center content */}
      <motion.div className=" flex h-full absolute inset-0 w-full flex-col items-center justify-center px-4"
      initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.3,
        }}
        >
        {/* Eyebrow */}
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-[#D8B04A] sm:text-sm">
          ROLAND STUDIOS
        </p>

        {/* Title */}
        <h1
          className={`${anton.className} text-center text-5xl leading-tight tracking-wide text-[#F5EFE9] sm:text-6xl`}
        >
          PLEASE SILENCE
          <br />
          YOUR PHONE.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base text-white/50">
          The feature presentation is about to begin.
        </p>
      </motion.div>
    </div>
  );
}