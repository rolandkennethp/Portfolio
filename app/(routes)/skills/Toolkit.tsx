"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface SkillCategory {
  number: string;
  label: string;
  items: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    number: "01",
    label: "FRONTEND",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Accessibility",
    ],
  },
  {
    number: "02",
    label: "BACKEND",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Socket.IO",
      "API Design",
    ],
  },
  {
    number: "03",
    label: "DATABASE",
    items: ["PostgreSQL", "Prisma", "Supabase", "Data Modeling", "SQL"],
  },
  {
    number: "04",
    label: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Figma"],
  },
];

export default function Toolkit() {
  return (
    <section className="w-full bg-[#0a0a0a] px-8 py-20 md:px-39">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
            FULL CREDITS
          </p>
          <h2
            className={`${bebas.className} mt-4 text-4xl leading-[1.05] tracking-wide text-white sm:text-5xl lg:text-6xl`}
          >
            THE COMPLETE
            <br />
            TOOLKIT.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-white/50">
          A practical, production-focused stack chosen to help teams ship with
          confidence.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="mt-10 border-t border-white/10" />

      {/* Categories */}
      <div>
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="flex flex-col gap-4 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:gap-10"
          >
            {/* Number + label */}
            <div className="w-full shrink-0 sm:w-40">
              <span className="text-xs font-semibold text-[#D4B03A]">
                {category.number}
              </span>
              <h3
                className={`${bebas.className} mt-1 text-2xl tracking-wide text-white`}
              >
                {category.label}
              </h3>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {category.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Check size={14} className="text-[#D4B03A]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
