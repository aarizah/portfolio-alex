"use client";

import { whoItsFor } from "@/content/brand";
import { SectionHeading } from "./SectionHeading";

export function WhoItsFor() {
  return (
    <section id="fit" className="relative w-full scroll-mt-24 bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Fit"
          title="I am expensive in the wrong room. Here is the right one."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brand/30 bg-brand/[0.08] p-8">
            <h3 className="text-lg text-white">This is for you if</h3>
            <ul className="mt-6 space-y-4">
              {whoItsFor.yes.map((item) => (
                <li key={item} className="text-sm leading-6 text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-lg text-white">This is not for you if</h3>
            <ul className="mt-6 space-y-4">
              {whoItsFor.no.map((item) => (
                <li key={item} className="text-sm leading-6 text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
