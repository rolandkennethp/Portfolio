"use client";

import { motion } from "framer-motion";

export default function Bikedetails() {
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
          Bike Store is a full-stack e-commerce platform built with the MERN
          stack, allowing users to browse, search, and purchase bikes while
          providing administrators with tools to manage products, users, and
          customer reviews.
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
            Building an e-commerce platform involves more than displaying
            products. Users need a smooth shopping experience with
            authentication, search, cart management, and secure checkout, while
            administrators require efficient tools to manage inventory and
            customer activity.
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
            I built a full-stack messaging platform powered by Socket.IO,
            delivering real-time messaging, friend management, live
            notifications, and secure authentication in a responsive user
            experience.
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
              "User authentication",
              "Browse all available bikes",
              "Shopping cart management",
              "Customer review system",
              "Admin product management",
              "User management dashboard",
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
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "Tailwind CSS",
              "UIVerse",
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

      {/* Divider */}
      <div className="mt-13 border-t border-white/10" />
    </section>
  );
}
