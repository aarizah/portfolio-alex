"use client";

import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import { whatIBuild } from "@/content/brand";
import { projects } from "@/components/Projects/projectsData";
import { ScrollReveal, ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight } from "@/lib/motion";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function WhatIBuild() {
  const moreSystems = whatIBuild.more.projects.map((item) => {
    const preview = projects.find((entry) => entry.slug === item.slug);
    return preview ? { ...item, preview } : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section
      id="build"
      className="relative w-full scroll-mt-24 bg-black py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(232,180,74,0.07),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <ScrollStagger className="mb-14 max-w-4xl md:mb-20">
          <StaggerChild variants={fadeInUpTight}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              {whatIBuild.eyebrow}
            </p>
          </StaggerChild>
          <StaggerChild variants={fadeInUpTight}>
            <h2
              className={`${instrumentSerif.className} text-[2.15rem] leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.85rem] md:text-[3.35rem]`}
            >
              {whatIBuild.title}
            </h2>
          </StaggerChild>
          <StaggerChild variants={fadeInUpTight}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#9a9a9a] md:text-lg">
              {whatIBuild.description}
            </p>
          </StaggerChild>
        </ScrollStagger>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {whatIBuild.capabilities.map((capability, index) => {
            const preview = projects.find((entry) => entry.slug === capability.project.slug);

            return (
              <ScrollReveal key={capability.id} variants={fadeInUpTight}>
                <article className="grid gap-8 py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 lg:py-16">
                  <div>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-brand/80">
                      0{index + 1}
                    </p>
                    <h3
                      className={`${instrumentSerif.className} text-[1.85rem] leading-tight text-white md:text-[2.35rem]`}
                    >
                      {capability.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#9a9a9a]">
                      {capability.summary}
                    </p>
                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {capability.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-white/85"
                        >
                          <span className="h-px w-5 shrink-0 bg-brand/70" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {preview ? (
                    <Link
                      href={`/projects/${capability.project.slug}`}
                      className="group relative isolate block min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-white/10 md:min-h-[22rem]"
                    >
                      <Image
                        src={preview.image}
                        alt={capability.project.title}
                        fill
                        sizes="(min-width: 1024px) 42vw, 92vw"
                        className="object-cover opacity-70 saturate-[0.75] transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03] group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                      <p className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md md:left-6 md:top-6">
                        {whatIBuild.proofLabel}
                      </p>
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                          {preview.status}
                        </p>
                        <h4
                          className={`${instrumentSerif.className} mt-2 text-[1.65rem] leading-tight text-white md:text-[1.9rem]`}
                        >
                          {capability.project.title}
                        </h4>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                          {capability.project.summary}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white">
                          View case study
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  ) : null}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {moreSystems.length > 0 ? (
          <div id="work" className="scroll-mt-24">
            <ScrollStagger className="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20">
              <StaggerChild variants={fadeInUpTight} className="mb-10 max-w-3xl md:mb-14">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                  {whatIBuild.more.eyebrow}
                </p>
                <h3
                  className={`${instrumentSerif.className} text-[1.85rem] leading-[1.12] tracking-[-0.02em] text-white md:text-[2.5rem]`}
                >
                  {whatIBuild.more.title}
                </h3>
              </StaggerChild>

              <div className="grid gap-5 md:grid-cols-3">
                {moreSystems.map((item) => (
                  <StaggerChild key={item.slug} variants={fadeInUpTight}>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="group relative flex min-h-[26rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 md:min-h-[28rem]"
                    >
                      <Image
                        src={item.preview.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, 92vw"
                        className="object-cover opacity-55 saturate-[0.75] transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04] group-hover:opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
                      <div className="relative z-10 flex h-full flex-col p-6 md:p-7">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                          {item.preview.status}
                        </p>
                        <div className="mt-auto">
                          <h4
                            className={`${instrumentSerif.className} text-[1.65rem] leading-tight text-white md:text-[1.85rem]`}
                          >
                            {item.title}
                          </h4>
                          <p className="mt-3 text-sm leading-6 text-white/70">
                            {item.summary}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                            View case study
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </StaggerChild>
                ))}
              </div>
            </ScrollStagger>
          </div>
        ) : null}
      </div>
    </section>
  );
}
