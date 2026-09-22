"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mistBrand, mistNavItems } from "./content";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export function MistNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [firstName, lastName] = mistBrand.name.split(" ");

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-5">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`${manrope.className} pointer-events-auto w-full max-w-[calc(100%-0.5rem)] border border-[rgba(20,30,28,0.08)] bg-[rgba(245,248,247,0.65)] shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-[16px] md:w-auto ${
          isMobileMenuOpen ? "rounded-[1.35rem]" : "rounded-full"
        }`}
      >
        <div className="flex items-center gap-3 px-2 py-1.5 pl-4 sm:gap-4 sm:pr-1.5">
          <a
            href="/#home"
            className="shrink-0 text-[13px] font-medium tracking-tight text-neutral-900"
          >
            {firstName} <span className="text-[var(--mist-brand)]">{lastName}</span>
          </a>

          <span className="hidden h-3.5 w-px bg-neutral-300/80 md:block" aria-hidden />

          <div className="hidden items-center gap-5 md:flex">
            {mistNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={mistBrand.ctaHref}
            className="ml-auto hidden h-8 shrink-0 items-center rounded-full border border-[var(--mist-brand)]/80 px-3.5 text-[12px] font-medium text-[var(--mist-brand)] transition-colors hover:bg-[var(--mist-brand)] hover:text-white md:inline-flex"
          >
            {mistBrand.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-auto mr-1 rounded-full p-2 text-neutral-700 transition-colors hover:bg-black/5 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-neutral-900/[0.08] px-4 pb-3 pt-2 md:hidden">
            <div className="flex flex-col">
              {mistNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-[13px] font-medium text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={mistBrand.ctaHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex h-9 items-center justify-center rounded-full border border-[var(--mist-brand)]/80 text-[13px] font-medium text-[var(--mist-brand)] transition-colors hover:bg-[var(--mist-brand)] hover:text-white"
              >
                {mistBrand.ctaLabel}
              </a>
            </div>
          </div>
        ) : null}
      </motion.nav>
    </div>
  );
}
