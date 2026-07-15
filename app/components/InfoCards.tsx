"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface InfoCard {
  number: string;
  title: string;
  description: string;
}

const CARDS: InfoCard[] = [
  {
    number: "01",
    title: "EDUCATION",
    description:
      "BCA from Kristu Jayanti College, Bangalore, with a CGPA of 8.65.",
  },
  {
    number: "02",
    title: "OUTSIDE WORK",
    description:
      "Long walks, editorial design, well-made coffee, and the kind of films that earn their quiet moments.",
  },
  {
    number: "03",
    title: "NEXT CHAPTER",
    description:
      "Joining a thoughtful product team where strong engineering and human-centered design are equally non-negotiable.",
  },
];

export default function InfoCards() {
  return (
    <section className="w-full bg-[#0a0a0a] px-8 py-24 border-t border-white/15 lg:px-51">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, index) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="border border-white/15 bg-[#0e0d09] p-8 transition-colors hover:border-white/30"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
              {card.number}
            </span>

            <h3
              className={`${bebas.className} mt-6 text-2xl tracking-wide text-white`}
            >
              {card.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
