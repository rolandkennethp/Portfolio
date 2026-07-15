import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function UnderDevelopment() {
  return (
    <section className="flex py-20 md:py-0 min-h-[80vh] w-full flex-col items-center justify-center bg-[#0a0a0a] px-8 text-center lg:px-16">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
        COMING SOON <span className="mx-2 text-white/30">/</span> IN PROGRESS
      </p>

      <h1
        className={`${bebas.className} mt-4 text-4xl leading-[1.05] tracking-wide text-white sm:text-6xl`}
      >
        THIS PAGE IS UNDER DEVELOPMENT.
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
        This scene is still being written. Check back soon for the finished cut.
      </p>

      <Link
        href="/"
        className="mt-10 flex items-center gap-2 bg-[#D4B03A] px-6 py-3 text-sm font-semibold tracking-wide text-[#0a0a0a] transition-colors hover:bg-[#e9c25c]"
      >
        GO TO HOME
        <ArrowUpRight size={16} />
      </Link>
    </section>
  );
}
