"use client";
import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const disciplines = [
  {
    number: "01",
    title: "Interfaces",
    statement:
      "Clear, responsive product surfaces that make complex work feel natural.",
    detail:
      "From responsive systems to keyboard-ready interactions, I build interfaces that are equal parts precise, accessible, and alive.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    number: "02",
    title: "Systems",
    statement:
      "Reliable application logic built for the moments when a product has to hold up.",
    detail:
      "I design APIs, authentication flows, and backend logic that power fast and scalable web applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.IO",
      "Authentication",
    ],
  },
  {
    number: "03",
    title: "Data",
    statement:
      "Structured foundations that give useful products a durable memory.",
    detail:
      "I design efficient database structures and connect them seamlessly with modern backend applications.",
    skills: ["PostgreSQL", "Prisma", "SQL", "Supabase", "MongoDB", "Git"],
  },
];

export function Skills() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = disciplines[activeDiscipline];
  return (
    <>
      <section className="bg-[#0a0a0a] py-10 border-b border-white/12 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className="text-[#D4B03A]">Three disciplines</p>
              <h2
                className={`${bebas.className} mt-4 text-4xl leading-[1.05] tracking-wide text-white sm:text-5xl lg:text-6xl`}
              >
                THE WORK
                <br />
                BEHIND THE WORK
              </h2>
              <p className="sm:mt-6 mt-4 max-w-sm text-sm sm:leading-7 leading-6 text-[#8f8f8f]">
                A useful stack is not a list of badges. It is a set of choices
                that lets an idea move from an early sketch to a dependable
                product.
              </p>
            </motion.div>

            <div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border-t border-white/12"
              >
                {disciplines.map((discipline, index) => {
                  const isActive = activeDiscipline === index;
                  return (
                    <button
                      key={discipline.title}
                      type="button"
                      onClick={() => setActiveDiscipline(index)}
                      onMouseEnter={() => setActiveDiscipline(index)}
                      className={`group ${bebas.className} grid w-full grid-cols-[2.8rem_1fr_auto] items-center ssgap-3 border-b border-white/12 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-inset sm:grid-cols-[4rem_1fr_auto] sm:py-7 ${isActive ? "text-[#f5f5f5]" : "text-[#777]"}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`text-[10px] font-bold tracking-[0.2em] ${isActive ? "text-[#d4af37]" : "text-[#666]"}`}
                      >
                        {discipline.number}
                      </span>
                      <span className="font-display text-3xl uppercase leading-none sm:text-4xl">
                        {discipline.title}
                      </span>
                      <ArrowUpRightIcon
                        className={`transition-transform duration-200 ${isActive ? "translate-x-0 translate-y-0 text-[#d4af37]" : "-translate-x-1 translate-y-1 text-[#555]"}`}
                        size={20}
                      />
                    </button>
                  );
                })}
              </motion.div>

              <motion.article
                key={active.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mt-8 overflow-hidden border border-white/10 bg-[#0e0e0e] p-6 sm:p-9"
              >
                <div className="absolute right-0 top-0 h-10 w-10 border-b border-l border-[#d4af37]/35" />
                <p
                  className={`${bebas.className} max-w-2xl font-display text-2xl uppercase sm:leading-[0.95] leading-[0.97] text-[#f5f5f5] sm:text-3xl`}
                >
                  {active.statement}
                </p>
                <div className="sm:mt-8 mt-4 grid gap-7 border-t border-white/8 sm:pt-6 pt-4 sm:grid-cols-[1fr_1fr]">
                  <p className="text-sm sm:leading-7 leading-6 text-[#b8b8b8]">
                    {active.detail}
                  </p>
                  <div className="flex flex-wrap content-start sm:gap-2">
                    {active.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#d4af37]/35 px-3 py-1.5 text-xs font-medium text-[#e6cf85]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
