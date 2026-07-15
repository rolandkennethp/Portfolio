import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0a0a0a] px-8 text-center lg:px-16">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
        404 <span className="mx-2 text-white/30">/</span> ERROR
      </p>

      <h1
        className={`${bebas.className} mt-4 text-6xl leading-[1.05] tracking-wide text-white sm:text-7xl`}
      >
        PAGE NOT FOUND.
      </h1>

      <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
        The scene you&apos;re looking for doesn&apos;t exist, or it may have
        been moved.
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
