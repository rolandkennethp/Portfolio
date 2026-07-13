"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { Grid3x3 } from "lucide-react";

type OpeningCreditsProps = {
  visible: boolean;
  finished: boolean;
};

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function OpeningCredits({ visible }: OpeningCreditsProps) {
  return (
    <motion.div
      className=" absolute inset-0 z-40 h-screen w-screen overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={
        visible
          ? {
              opacity: [1, 1, 1, 0],
              scale: [1, 1, 1, 0.98],
            }
          : {}
      }
      transition={{
        duration: 3,
        times: [0, 0.2, 0.7, 1],
      }}
    >
      {/* Center content */}
      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* Title */}
        <h1
          className={`${bebas.className} text-center text-5xl tracking-wider text-white sm:text-6xl`}
        >
          ROLAND STUDIOS
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xs font-medium tracking-[0.3em] text-[#D8B04A] sm:text-sm">
          A FULL STACK DEVELOPER PORTFOLIO
        </p>

        {/* Loading row */}
        <div className="mt-10 flex items-center gap-3">
          <span className="text-[11px] tracking-[0.2em] text-white/80">
            LOADING REEL 1 OF 6
          </span>

          {/* Progress bars */}
          <div className="flex items-center gap-0.75">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className={`h-3 w-1 ${i < 7 ? "bg-[#D8B04A]" : "bg-white/20"}`}
              />
            ))}
          </div>

          {/* Dot grid icon */}
          <Grid3x3 size={14} className="text-white/40" />
        </div>
      </div>
    </motion.div>
  );
}
