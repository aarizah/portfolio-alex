"use client";

import Image from "next/image";
import { clientLogos, logoCloudCopy } from "@/content/brand";

export function LogoCloud() {
  return (
    <section
      id="proof"
      aria-label="Trusted by"
      className="relative w-full scroll-mt-24 bg-black"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-12 md:px-10 md:py-16 lg:px-12">
        <p className="mb-9 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand">
          {logoCloudCopy.eyebrow}
        </p>
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-10 md:gap-x-14 lg:gap-x-16">
          {clientLogos.map((logo) => (
            <li
              key={logo.id}
              className="flex h-12 w-[8.5rem] items-center justify-center sm:h-14 sm:w-36"
            >
              <Image
                src={logo.logoSrc}
                alt={`${logo.name} logo`}
                width={220}
                height={80}
                sizes="144px"
                className="max-h-12 w-auto max-w-full object-contain opacity-75 grayscale invert mix-blend-lighten transition-opacity duration-300 hover:opacity-100 sm:max-h-14"
                style={{ transform: `scale(${logo.scale})` }}
                unoptimized={logo.logoSrc.endsWith(".svg")}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
    </section>
  );
}
