"use client";

import { guarantee, positioning } from "@/content/brand";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { fadeInUp } from "@/lib/motion";

export function Guarantee() {
  return (
    <section id="mechanism" className="relative w-full scroll-mt-24 bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <ScrollReveal variants={fadeInUp}>
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                Mechanism
              </p>
              <h2 className="text-2xl text-white md:text-3xl">
                Why this works when &apos;an AI project&apos; does not
              </h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">{positioning.mechanism}</p>
              <p className="mt-4 text-sm leading-7 text-gray-400">{positioning.likelihood}</p>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                {guarantee.title}
              </p>
              <p className="text-sm leading-7 text-gray-300">{guarantee.body}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
