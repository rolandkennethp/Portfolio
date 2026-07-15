"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full backdrop-blur-3xl bg-[#0a0a0a]/67 border-b-[0.5px] top-0 sticky z-40 border-white/14">
      <nav className="flex h-fit py-3 w-full items-center justify-between px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4B03A] text-sm font-bold text-[#D8B04A]">
            RK
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[13px] transition-colors ${
                    isActive
                      ? "border-b border-[#D4B03A] pb-1 text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Sound toggle */}
        <button
          type="button"
          aria-label="Toggle sound"
          className="flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white"
        ></button>
      </nav>
    </header>
  );
}
