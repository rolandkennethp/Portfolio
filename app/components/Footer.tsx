import { Anton } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <footer className="w-full bg-black px-8 pb-10 pt-20 border-t border-white/15 lg:px-16">
      

     

      <div className=" grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4">
         <div>
            <p className="text-xs font-medium tracking-[0.3em] text-[#D4B03A]">
        END CREDITS
      </p>
            <h2 className={`${anton.className} text-4xl mt-3 leading-[1.05] tracking-wide text-white sm:text-5xl`} >
        THANK YOU
        <br />
        FOR WATCHING.
      </h2>
         </div>
        {/* Directed by */}
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/40">
            DIRECTED BY
          </p>
          <p className="mt-3 text-sm tracking-[0.2em] text-white/60">Roland Kenneth P</p>
        </div>

        {/* Designed & developed by */}
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/40">
            DESIGNED &amp; DEVELOPED BY
          </p>
          <p className="mt-3 text-sm tracking-[0.2em] text-white/60">Roland Kenneth P</p>
        </div>

        {/* Built with */}
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-white/40">
            BUILT WITH
          </p>
          <ul className="mt-3 space-y-2 tracking-[0.2em] text-sm text-white/60">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
          <a
            href="#contact"
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