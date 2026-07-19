"use client";

import { motion } from "framer-motion";

export default function AdminDetails() {
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
          A modern B2B admin dashboard built to centralize business operations
          through a clean, scalable interface. It enables administrators to
          monitor analytics, manage products and orders, oversee customers and
          deliveries, and streamline day-to-day business workflows.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="mt-13 hidden sm:grid grid-cols-1">
        <div className="border-t border-white/10" />
      </div>

      {/* Problem statement + Solution */}
      <div className="mt-13 hidden sm:grid grid-cols-1 gap-10 lg:grid-cols-2">
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
            Managing a growing B2B platform requires multiple operational tools
            working together. Administrators need a centralized system to track
            sales, manage inventory, process orders, verify businesses, and
            monitor customer activity without switching between disconnected
            interfaces.
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
            I built a scalable admin dashboard using Next.js and Prisma,
            providing secure authentication, real-time business insights,
            product and order management, customer administration, interactive
            analytics, and a responsive interface designed for efficient
            business operations.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-13 hidden  sm:grid grid-cols-1 gap-10 lg:grid-cols-2">
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
              "Dashboard analytics",
              "Product management",
              "Order management",
              "Sales tracking",
              "Customer management",
              "Business verification",
              "Delivery management",
              "Secure authentication",
              "Interactive data visualization",
              "Inventory management",
              "CSV report export",
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
          <p className="text-xs mt-3 sm:mt-0 font-semibold tracking-[0.2em] text-[#D4B03A]">
            TECH STACK
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "PostgreSQL",
              "Prisma",
              "Auth.js",
              "Supabase",
              "Tailwind CSS",
            ].map((tech) => (
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
