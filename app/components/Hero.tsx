import { Bebas_Neue } from "next/font/google";
import { ArrowUpRight, Download, ChevronDown } from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="relative w-full bg-[#000000] border-b-[0.5px] border-white/15 px-8 pb-20 pt-16 lg:px-16">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
        {/* Left column */}
        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-[#D4B03A]">
            ROLAND KENNETH <span className="text-white/30">/</span> FULL
            STACK DEVELOPER
          </p>

          <h1
            className={`${bebas.className} mt-4 text-6xl leading-[0.95] tracking-wide text-white sm:text-7xl lg:text-8xl`}
          >
            BUILDING
            <br />
            <span className="text-[#e7bb2b]">THE NEXT</span>
            <br />
            SCENE.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-white/75">
            I build modern, scalable web applications for teams who care
            about the details—from durable systems beneath the surface to
            focused, accessible interfaces in front.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              className="flex items-center gap-2 bg-[#D4B03A] px-6 py-3 text-[13px] tracking-wide text-black hover:shadow-xl hover:-translate-y-1 transition-all shadow-[yellow]/20"
            >
              EXPLORE PROJECTS
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/resume/cv.pdf"
              download
              className="flex items-center gap-2 border tracking-wider border-white/25 px-6 py-3 text-[13px] font-light  text-white transition-colors hover:border-white/50"
            >
              <Download size={16} />
              RESUME
            </a>
          </div>
        </div>

        {/* Right column - badge card */}
        <div className="relative flex items-center justify-center border border-white/10 px-8 py-16">
          <span className="absolute left-0 top-0 h-px w-8 -translate-y-1/2 translate-x-4 bg-white/40" />
          <span className="absolute bottom-0 right-8 h-px w-8 translate-y-1/2 bg-white/40" />

          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#D8B04A]/40">
            <div className="absolute h-56 w-56 rounded-full border border-[#D8B04A]/20" />
            <span className="absolute left-[-1.5rem] top-1/2 h-px w-6 -translate-y-1/2 bg-[#D4B03A]/60" />
            <span className="absolute right-[-1.5rem] top-1/2 h-px w-6 -translate-y-1/2 bg-[#D4B03A]/60" />

            <div className="flex flex-col items-center">
              <span
                className={`${bebas.className} text-6xl tracking-wide text-[#D8B04A]`}
              >
                RK
              </span>
              <span className="mt-3 text-[10px] tracking-[0.3em] text-white/50">
                FULL STACK
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 left-8 right-8 flex items-center justify-between text-[10px] tracking-[0.15em] text-white/40">
            <span>2026 &nbsp;•&nbsp; Bangalore, India</span>
            <span className="h-px w-8 bg-white/30" />
          </div>
        </div>
      </div>

      
    </section>
  );
}