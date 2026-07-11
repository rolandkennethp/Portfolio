import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export default function SkillsHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/15 bg-[#0d0c07] px-8 pb-0 pt-24 lg:px-16">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 500px at 52% 10%, rgba(212,176,58,.50), transparent 65%)",
        }}
      />

      <div className="relative mt-30">
        <p className="text-xs font-medium tracking-[0.25em] text-[#D4B03A]">
          ACT IV <span className="mx-2 text-white/30">/</span> THE CRAFT
        </p>

        <h1
          className={`${anton.className} mt-4 text-9xl leading-none tracking-wide text-white sm:text-[150px]`}
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.15), 2px 2px 0 rgba(0,0,0,0.6)",
          }}
        >
          SKILLS
        </h1>
        {/* Divider */}
      <div className="relative mt-14 border-t-[1.5px] border-white/12" />

      {/* Bottom row */}
      <div className="relative flex flex-col gap-3 py-8 sm:flex-row sm:gap-24">
        <p className="w-fit shrink-0 text-xs font-medium tracking-[0.2em] text-[#D4B03A] sm:w-56">
          ROLAND KENNETH P
        </p>
        <p className="max-w-xl text-[18px] font-light leading-relaxed text-white/60">
          A carefully selected toolkit of technologies I use to build scalable, performant, and user-focused web applications.
        </p>
      </div>
      </div>

      
    </section>
  );
}