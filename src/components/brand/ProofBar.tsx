"use client";

import { proofStats } from "@/content/brand";
import { ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight } from "@/lib/motion";

export function ProofBar() {
  return (
    <section aria-label="Proof metrics" className="relative w-full bg-black py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <ScrollStagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <StaggerChild key={stat.label} variants={fadeInUpTight}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-2xl text-white md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
                <div className="mt-2 text-xs leading-5 text-gray-500">{stat.hint}</div>
              </div>
            </StaggerChild>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
