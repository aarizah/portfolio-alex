"use client";

import { processSteps } from "@/content/brand";
import { SectionHeading } from "./brand/SectionHeading";
import { ScrollReveal } from "./motion/ScrollReveal";
import { fadeInUp } from "@/lib/motion";

export function Process() {
  return (
    <section
      id="process"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Process"
          title="How an engagement actually runs"
          description="Four stages. A named owner. Deliverables you can see. Typical calendar: 4–12 weeks to production after a Sprint or a direct Build."
        />

        <div className="space-y-6">
          {processSteps.map((step) => (
            <ScrollReveal key={step.number} variants={fadeInUp}>
              <div className="grid items-start gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-2">
                  <div className="text-sm tracking-[0.2em] text-brand">{step.number}</div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-400">{step.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
