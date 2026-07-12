import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutIntro() {
  return (
    <section className="w-full bg-[#0e0d09] px-8 py-20 flex items-center justify-center">
      <div className="grid grid-cols-1 gap-10 h-fit lg:grid-cols-[380px_1fr] w-fit lg:gap-16">
        {/* Left column */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#D4B03A]">
            THE INTRODUCTION
          </p>
          <h2
            className={`${bebas.className} mt-4 text-5xl leading-[1.05] tracking-wide text-white sm:text-6xl`}
          >
            CRAFT WITH
            <br />
            CONVICTION.
          </h2>
        </div>

        {/* Right column */}
        <div className="max-w-2xl space-y-5 md:space-y-9">
          <p className="text-lg leading-7 tracking-wide text-white/90">
            I&apos;m Roland Kenneth, a full-stack developer who builds
            considered digital products for teams with ambitious problems
            and very little time to waste.
          </p>

          <p className="text-base leading-relaxed text-white/50">
            My path into software began with a fascination for how
            thoughtful tools make difficult work feel inevitable. What
            started with small interfaces became a practice of translating
            messy operational needs into systems that are calm, useful, and
            built to last.
          </p>

          <p className="text-base leading-relaxed text-white/50">
            I work comfortably across the stack, but I am especially drawn
            to the seams: where product strategy meets interface behavior,
            where a data model meets a human decision, and where a detail
            becomes the reason someone trusts a tool.
          </p>
        </div>
      </div>
    </section>
  );
}