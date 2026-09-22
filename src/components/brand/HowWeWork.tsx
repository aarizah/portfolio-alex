"use client";

import { StartProjectButton } from "@/components/StartProjectModal";
import { Instrument_Serif } from "next/font/google";
import { engagement, howWeWork } from "@/content/brand";
import { ScrollReveal, ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight } from "@/lib/motion";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function HowWeWork() {
  return (
    <section
      id="process"
      className="relative w-full scroll-mt-24 bg-black py-12 text-white md:py-14"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <ScrollStagger className="max-w-3xl">
          <StaggerChild variants={fadeInUpTight}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              {howWeWork.eyebrow}
            </p>
          </StaggerChild>
          <StaggerChild variants={fadeInUpTight}>
            <h2
              className={`${instrumentSerif.className} text-[2rem] leading-[1.12] tracking-[-0.02em] text-white md:text-[2.55rem]`}
            >
              {howWeWork.title}
            </h2>
          </StaggerChild>
          <StaggerChild variants={fadeInUpTight}>
            <p className="mt-3 text-base leading-7 text-[#9a9a9a]">{howWeWork.lede}</p>
          </StaggerChild>
        </ScrollStagger>

        <ol className="mt-6 grid gap-4 md:mt-7 md:grid-cols-3 md:gap-0">
          {howWeWork.steps.map((step, index) => (
            <li
              key={step.number}
              className="relative flex items-start gap-2.5 md:px-8 first:md:pl-0 last:md:pr-0"
            >
              {index < howWeWork.steps.length - 1 ? (
                <span
                  className="pointer-events-none absolute left-[1.65rem] right-2 top-[0.7rem] hidden h-px bg-white/12 md:block"
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand/60 bg-black text-[10px] text-brand">
                {String(index + 1)}
              </span>
              <div className="relative z-10 bg-black pr-4">
                <p className="text-sm leading-5 text-white">{step.title}</p>
                <p className="mt-0.5 text-[12px] leading-5 text-[#9a9a9a]">{step.line}</p>
              </div>
            </li>
          ))}
        </ol>

        <div
          id="engage"
          className="mt-7 grid gap-8 border-t border-white/12 pt-7 md:mt-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/12 md:pt-8"
        >
          {engagement.models.map((model) => (
            <ScrollReveal key={model.id} variants={fadeInUpTight}>
              <article className="relative flex h-full flex-col items-center px-6 text-center md:px-10 lg:px-12">
                {model.featured ? (
                  <span className="mb-3 block h-px w-8 bg-brand" aria-hidden />
                ) : (
                  <span className="mb-3 hidden h-px w-8 md:block" aria-hidden />
                )}
                {model.featured ? (
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    Typical engagement
                  </p>
                ) : null}
                <h3
                  className={`${instrumentSerif.className} leading-tight text-white ${
                    model.featured
                      ? "text-[1.7rem] md:text-[1.9rem]"
                      : "text-[1.5rem] md:text-[1.65rem]"
                  }`}
                >
                  {model.name}
                </h3>
                <p className="mt-3 max-w-[16.5rem] text-[15px] leading-6 text-white/80">
                  {model.summary}
                </p>
                <p className="mt-2 max-w-[16.5rem] text-sm leading-6 text-[#9a9a9a]">
                  {model.description}
                </p>
                <p
                  className={`mt-5 text-[13px] tracking-wide ${
                    model.featured ? "text-white" : "text-white/55"
                  }`}
                >
                  {model.price}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:mt-8 md:flex-row md:items-center">
          <div>
            <p className="text-[15px] text-white">{engagement.unsureTitle}</p>
            <p className="mt-1 text-sm leading-6 text-[#9a9a9a]">{engagement.unsureBody}</p>
          </div>
          <StartProjectButton className="inline-flex h-10 shrink-0 items-center rounded-full bg-white px-5 text-[13px] font-medium text-black transition-transform hover:scale-[1.03]">
            {engagement.ctaLabel}
          </StartProjectButton>
        </div>
      </div>
    </section>
  );
}
