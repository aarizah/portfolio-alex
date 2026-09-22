"use client";

import { useState } from "react";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { brand, navCta, navLeft, navRight } from "@/content/brand";
import { StartProjectButton } from "@/components/StartProjectModal";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const linkClass =
  "text-[13px] font-medium text-white/80 transition-colors hover:text-white";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileLinks = [...navLeft, ...navRight];

  return (
    <div className={`${manrope.className} pointer-events-none fixed inset-x-0 top-0 z-50`}>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto mx-auto w-full max-w-[1280px] px-5 pt-5 md:px-10"
      >
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="hidden items-center gap-8 md:flex">
            {navLeft.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </div>

          <Link
            href="/#home"
            className="flex items-center gap-2 justify-self-start md:justify-self-center"
          >
            <Sparkles className="h-4 w-4 text-brand" aria-hidden />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              {brand.name}
            </span>
          </Link>

          <div className="hidden items-center justify-end gap-8 md:flex">
            {navRight.map((item) => (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
            <StartProjectButton className="inline-flex h-9 items-center rounded-full border border-white/80 px-4 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-black">
              {navCta.label}
            </StartProjectButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="justify-self-end rounded-full p-2 text-white md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col">
              {mobileLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-[14px] font-medium text-white/80 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <StartProjectButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex h-10 items-center justify-center rounded-full border border-white/80 text-[13px] font-medium text-white"
              >
                {navCta.label}
              </StartProjectButton>
            </div>
          </div>
        ) : null}
      </motion.nav>
    </div>
  );
}
