"use client";

import { motion } from "framer-motion";

export default function AvarthaDetails() {
  return (
    <section className="w-full bg-[#0a0a0a] px-8 lg:px-16">
      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
          OVERVIEW
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          A modern company portfolio website built to establish a strong digital
          presence for Avartha Eco Solutions. The website showcases the
          company&apos;s services, mission, and brand through a clean,
          responsive, and performance-focused interface.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="mt-13 grid grid-cols-1">
        <div className="border-t border-white/10" />
      </div>

      {/* Problem statement + Solution */}
      <div className="mt-13 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
            PROBLEM STATEMENT
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            Businesses need a professional online presence that clearly
            communicates their brand, services, and values. The challenge was
            creating a fast, responsive website that delivers a polished user
            experience while remaining easy to maintain and scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
            SOLUTION
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            I developed a modern corporate website using Next.js, focusing on
            responsive layouts, reusable components, and performance
            optimization to provide a seamless browsing experience across all
            devices.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-13 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="border-t border-white/10" />
        <div className="border-t border-white/10" />
      </div>

      {/* Features + Tech stack */}
      <div className="mt-13 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
            FEATURES
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Responsive design",
              "Clean and modern interface",
              "Performance optimized",
              "Component-based architecture",
              "Mobile-friendly layout",
              "Reusable UI components",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base text-white/60"
              >
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#D4B03A]" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
            TECH STACK
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Next.js", "React", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
