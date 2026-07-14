"use client";

import { useEffect, useState } from "react";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { X } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface Screenshot {
  number: string;
  category: string;
  title: string;
  description: string;
  src: string;
  secondarySrc?: string;
}

const SCREENSHOTS: Screenshot[] = [
  {
    number: "01",
    category: "PLANNING",
    title: "A portfolio in focus",
    description:
      "Capacity and delivery signals read in one clear planning view.",
    src: "/images/chat-01.png",
    secondarySrc: "/images/chat-01.png",
  },
  {
    number: "02",
    category: "TEAM",
    title: "Workload without the noise",
    description: "A grounded view of people, priorities, and availability.",
    src: "/images/chat-01.png",
  },
  {
    number: "03",
    category: "REPORTS",
    title: "The week, summarized",
    description:
      "Client-ready progress made legible without spreadsheet friction.",
    src: "/images/chat-01.png",
  },
];

interface ScreenshotImageProps {
  src: string;
  alt: string;
  onExpand: (src: string) => void;
}

function ScreenshotImage({ src, alt, onExpand }: ScreenshotImageProps) {
  return (
    <button
      type="button"
      onClick={() => onExpand(src)}
      className="relative block aspect-16/10 w-full cursor-zoom-in"
      aria-label={`View full screenshot: ${alt}`}
    >
      <Image src={src} alt={alt} fill className="object-contain" />
    </button>
  );
}

export default function Screenshots() {
  const [first, second, third] = SCREENSHOTS;
  const [expandedSrc, setExpandedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!expandedSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedSrc(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [expandedSrc]);

  return (
    <section className="w-full bg-black px-8 mt-13 lg:px-16">
      <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-13 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D4B03A]">
            SCREENSHOTS
          </p>
          <h2
            className={`${bebas.className} mt-3 text-4xl tracking-wide text-white`}
          >
            INSIDE CHAT-TIME.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-white/50">
          Key product moments, captured from the workflows that shaped the
          experience.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 justify-center items-center lg:grid-cols-[1fr_480px]">
        {/* Large left card */}
        <div className="flex flex-col border-white">
          <ScreenshotImage
            src={first.src}
            alt={first.title}
            onExpand={setExpandedSrc}
          />

          <div className="px-6 py-2">
            <p className="text-xs font-semibold tracking-[0.15em] text-[#D4B03A]">
              {first.number} / {first.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {first.title}
            </h3>
            <p className="mt-2 text-sm text-white/50">{first.description}</p>
          </div>

          {first.secondarySrc && (
            <div className="border-t border-white/10">
              <ScreenshotImage
                src={first.secondarySrc}
                alt={`${first.title} detail`}
                onExpand={setExpandedSrc}
              />
            </div>
          )}
        </div>

        {/* Right column - two stacked cards */}
        <div className="flex flex-col gap-6">
          {[second, third].map((shot) => (
            <div key={shot.number} className="border border-white/10">
              <ScreenshotImage
                src={shot.src}
                alt={shot.title}
                onExpand={setExpandedSrc}
              />

              <div className="px-6 py-2">
                <p className="text-xs font-semibold tracking-[0.15em] text-[#D4B03A]">
                  {shot.number} / {shot.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {shot.title}
                </h3>
                <p className="mt-2 text-sm text-white/50">{shot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {expandedSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setExpandedSrc(null)}
        >
          <button
            type="button"
            onClick={() => setExpandedSrc(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:text-white"
          >
            <X size={20} />
          </button>

          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={expandedSrc}
              alt="Expanded screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
