import { ArrowUpRight } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] px-8 pb-10 pt-20 border-t border-white/15 lg:px-16">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
            END CREDITS
          </p>
          <h2
            className={`${bebas.className} text-4xl mt-3 leading-[1.05] tracking-wide text-white sm:text-5xl`}
          >
            THANK YOU
            <br />
            FOR WATCHING.
          </h2>
        </div>

        {/* Designed & developed by */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-white/40">
            DESIGNED &amp; DEVELOPED BY
          </p>
          <p className="mt-3 text-[13px] tracking-[0.2em] text-white/60">
            Roland Kenneth P
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-white/40">
            QUICK LINKS
          </p>

          <ul className="mt-3 space-y-2 text-[13px] tracking-[0.2em] text-white/60">
            <li>
              <a href="/projects" className="transition hover:text-white">
                Projects
              </a>
            </li>

            <li>
              <a href="/experience" className="transition hover:text-white">
                Experience
              </a>
            </li>

            <li>
              <a href="/skills" className="transition hover:text-white">
                Skills
              </a>
            </li>

            <li>
              <a href="/resume" className="transition hover:text-white">
                Resume
              </a>
            </li>
            <li>
              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Built with */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-white/40">
            BUILT WITH
          </p>
          <ul className="mt-3 space-y-2 tracking-[0.2em] text-[13px] text-white/60">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
          <a
            href="/contact"
            className="mt-4 inline-flex tracking-widest items-center gap-1 text-sm text-[#D4B03A] group hover:text-[#e9c25c]"
          >
            Start a conversation
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2025 ROLAND KENNETH P</span>
      </div>
    </footer>
  );
}
