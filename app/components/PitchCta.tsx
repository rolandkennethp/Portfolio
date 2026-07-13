import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function PitchCta() {
  return (
    <section className="relative w-fit mt-8 border-[0.5px] border-white/10 overflow-hidden bg-[#14130d] py-12 md:py-18 px-15 md:px-38 text-center ">
      <h2
        className={`${bebas.className} text-2xl tracking-wide text-white/90 sm:text-5xl`}
      >
        HAVE A SCRIPT IN MIND?
      </h2>

      <p className="mx-auto mt-6 max-w-lg text-sm md:text-[15px] leading-relaxed text-white/50">
        The idea is yours. The code is mine. Let&apos;s build a web experience
        that leaves a lasting impression.
      </p>

      <div className="relative mt-10 inline-block">
        <Link
          href="/contact"
          className="relative z-10 inline-block bg-[#D4B03A] hover:-translate-y-1 px-10 py-4 text-[10px] md:text-[13px] font-bold tracking-[0.15em] text-black transition-all hover:bg-[#e9c25c]"
        >
          BUILD A PROJECT
        </Link>
        <span
          className="pointer-events-none absolute inset-x-4 -bottom-2 h-6 blur-xl"
          style={{ backgroundColor: "rgba(212,176,58,0.35)" }}
        />
      </div>
    </section>
  );
}
