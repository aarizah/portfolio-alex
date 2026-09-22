"use client";

import { useState } from "react";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { StartProjectButton } from "@/components/StartProjectModal";
import { ScrollReveal, ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeIn, fadeInRight, fadeInUpTight } from "@/lib/motion";
import { aboutCopy, brand } from "@/content/brand";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function About() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-16 text-white md:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal variants={fadeIn} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <div className="relative aspect-[4/5]">
                {photoFailed ? (
                  <div className="flex h-full w-full items-center justify-center bg-white/5 text-5xl tracking-[0.2em] text-white/40">
                    AA
                  </div>
                ) : (
                  <Image
                    src="/ima.png"
                    alt={`${brand.name}, founder`}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    unoptimized
                    className="object-cover object-center"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              {aboutCopy.facts.map((fact, index) => (
                <span key={fact}>
                  {index > 0 ? <span className="mx-3 text-white/20">·</span> : null}
                  <span className={index === 0 ? "text-brand" : undefined}>{fact}</span>
                </span>
              ))}
            </p>
          </ScrollReveal>

          <ScrollReveal variants={fadeInRight} className="lg:col-span-7 lg:pt-4">
            <ScrollStagger>
              <StaggerChild variants={fadeInUpTight}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                  {aboutCopy.eyebrow}
                </p>
              </StaggerChild>
              <StaggerChild variants={fadeInUpTight}>
                <h2
                  className={`${instrumentSerif.className} max-w-xl text-[2rem] leading-[1.12] tracking-[-0.02em] text-white md:text-[2.55rem]`}
                >
                  {aboutCopy.heading}
                </h2>
              </StaggerChild>
              <StaggerChild variants={fadeInUpTight}>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#9a9a9a]">
                  {aboutCopy.body}
                </p>
              </StaggerChild>
            </ScrollStagger>

            <ul className="mt-10 space-y-6 border-t border-white/10 pt-8">
              {aboutCopy.principles.map((principle) => (
                <li key={principle.title}>
                  <p className="text-[15px] text-white">{principle.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#9a9a9a]">{principle.line}</p>
                </li>
              ))}
            </ul>

            <StartProjectButton className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white">
              {aboutCopy.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </StartProjectButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
