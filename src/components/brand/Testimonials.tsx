"use client";

import { testimonials } from "@/content/brand";
import { SectionHeading } from "./SectionHeading";
import { ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="voices" className="relative w-full scroll-mt-24 bg-black py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Trust"
          title="What it feels like when the system is in the building."
          description="Operators and owners after a system is in production. Example quotes are marked until the real ones are cleared."
        />
        <ScrollStagger className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerChild key={item.name} variants={fadeInUpTight}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                {item.example ? (
                  <figcaption className="mb-4 text-[10px] uppercase tracking-[0.2em] text-brand">
                    Example quote — replace
                  </figcaption>
                ) : null}
                <blockquote className="flex-1 text-sm leading-7 text-gray-200">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="text-sm text-white">{item.name}</div>
                  <div className="text-xs text-gray-500">
                    {item.role}, {item.company}
                  </div>
                </figcaption>
              </figure>
            </StaggerChild>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
