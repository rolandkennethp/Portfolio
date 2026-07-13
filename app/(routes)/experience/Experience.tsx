"use client";

import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface ExperienceItem {
  number: string;
  dateRange: string;
  role: string;
  company: string;
  stack: string[];
  summary: string;
  bullets: string[];
  quote: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    number: "01",
    dateRange: "Jul 2025 — Present",
    role: "FREELANCE FULL STACK DEVELOPER",
    company: "Independent",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    summary:
      "Partnered with early-stage startups to design, develop, and deploy modern web applications, delivering end-to-end solutions from concept to production.",
    bullets: [
      "Built full-stack web applications and internal tools for startup clients",
      "Developed responsive frontend interfaces and scalable backend APIs using Next.js and Node.js",
      "Collaborated directly with founders to transform ideas into production-ready products",
    ],
    quote:
      "Working with startups taught me to move quickly, adapt constantly, and focus on building what creates the most value.",
  },
  {
    number: "02",
    dateRange: "Oct 2025 — Jan 2026",
    role: "FULL STACK DEVELOPER INTERN",
    company: "Vorcas Tech Lab",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    summary:
      "Contributed to multiple client projects by building responsive web applications, admin panels, and portfolio websites across both frontend and backend.",
    bullets: [
      "Developed full-stack features using Next.js, Node.js, and Prisma",
      "Designed and implemented responsive admin panel interfaces from scratch",
      "Built backend APIs and database functionality while collaborating on multiple client websites",
    ],
    quote:
      "Every project was different, but the goal remained the same—build reliable software that clients could confidently use.",
  },
  {
    number: "03",
    dateRange: "May 2025 — Jul 2025",
    role: "FRONTEND DEVELOPER INTERN",
    company: "Breakthrough F1 LLP",
    stack: ["Next.js", "Tailwind CSS", "Github", "Figma"],
    summary:
      "Converted Figma designs into responsive, dynamic web pages while delivering frontend features for multiple client projects in a fast-paced development environment.",
    bullets: [
      "Translated pixel-perfect Figma designs into responsive Next.js applications",
      "Developed reusable UI components using Tailwind CSS",
      "Worked on multiple frontend projects with daily feature deliveries and design iterations",
    ],
    quote:
      "Great frontend development isn't just about matching the design—it's about creating experiences that feel effortless to use.",
  },
];

export default function Experience() {
  return (
    <section className="w-full overflow-hidden bg-black px-8 md:px-10 lg:px-45 py-20 ">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl leading-relaxed text-white/60"
      >
        I&apos;ve worked across product teams, studios, and{" "}
        <span className="text-white">independent collaborations</span>— always
        close to the people using the result.
      </motion.p>

      <div className="mt-12 space-y-6">
        {EXPERIENCE.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 gap-6 border border-white/10 bg-[#0d0c07] p-8 lg:grid-cols-[150px_350px_1fr] lg:gap-10"
          >
            {/* Number + date */}
            <div>
              <span className="text-sm font-semibold text-[#D4B03A]">
                {item.number}
              </span>
              <p className="mt-2 text-sm text-white/40">{item.dateRange}</p>
            </div>

            {/* Role + company + stack */}
            <div>
              <h3
                className={`${bebasNeue.className} text-3xl tracking-wide text-white`}
              >
                {item.role}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#D4B03A]">
                {item.company}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/40">
                {item.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Description + bullets + quote */}
            <div>
              <p className="text-[16px] leading-relaxed text-white/90">
                {item.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="text-white/30">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 border-l-2 border-[#D4B03A] pl-4 text-sm  leading-relaxed text-white/90 font-light ">
                {item.quote}
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
