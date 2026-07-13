"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export interface Project {
  year: string;
  category: string;
  title: string;
  description: string;
  src: string;
  href: string;
}

interface ProjectCardProps {
  project: Project;
}

const SPRING_CONFIG = { stiffness: 300, damping: 25, mass: 0.5 };
const TILT_RANGE = 10; // degrees

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Raw pointer position, normalized to -0.5 .. 0.5 within the card
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // Smooth, spring-eased tilt derived from pointer position
  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]),
    SPRING_CONFIG,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]),
    SPRING_CONFIG,
  );

  // Scale target changes with hover/press state; useSpring animates to it
  const scaleTarget = isPressed ? 0.98 : isHovered ? 1.03 : 1;
  const scale = useSpring(scaleTarget, SPRING_CONFIG);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <Link href={project.href} style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        className="flex flex-col group border border-white/15 rounded bg-black p-6 transition-colors hover:border-[#ffffff]/25 will-change-transform"
      >
        <div className="flex items-center mb-7 justify-between text-[11px] tracking-[0.15em] text-white/40">
          <span>{project.year}</span>
        </div>

        <div className="mt-4 z-30 border bottom-10 right-10 border-white/30 p-3 rounded bg-black absolute inline-flex tracking-widest items-center gap-1 text-sm text-white opacity-0  group-hover:opacity-100 transition-all">
          <ArrowUpRight size={20} />
        </div>
        <div>
          <Image
            src={project.src}
            alt={project.title}
            width={500}
            height={100}
            className="object-fill rounded-lg"
          />
        </div>

        <span className="my-10 h-px w-8 bg-[#D4B03A]" />

        <p className="text-[11px] mb-0 tracking-[0.15em] text-[#D4B03A]">
          {project.category}
        </p>
        <h3
          className={`${bebas.className} mt-2 mb-3 text-4xl tracking-wide text-white`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/50">{project.description}</p>
      </motion.div>
    </Link>
  );
}
