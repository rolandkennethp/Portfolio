"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full backdrop-blur-3xl bg-[#0a0a0a]/67 border-b-[0.5px] top-0 sticky z-40 border-white/14">
      <nav className="flex h-fit py-3 w-full items-center justify-between px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4B03A] text-sm font-bold text-[#D8B04A]">
            RK
          </span>
        </Link>

        {/* Links - desktop */}
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

        {/* Sound toggle - desktop */}
        <button
          type="button"
          aria-label="Toggle sound"
          className="hidden h-9 w-9 items-center justify-center text-white/70 transition-colors hover:text-white md:flex"
        ></button>

        {/* Hamburger - mobile */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white md:hidden"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a] md:hidden"
          >
            <div className="flex h-fit items-center justify-between px-8 py-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4B03A] text-sm font-bold text-[#D8B04A]">
                  RK
                </span>
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col py-5 bg-[#0a0a0a] items-center justify-center gap-10">
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-4xl ${bebas.className}  tracking-wide transition-colors ${
                        isActive
                          ? "text-[#D4B03A]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
