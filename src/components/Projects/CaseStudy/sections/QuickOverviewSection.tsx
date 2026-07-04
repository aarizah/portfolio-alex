"use client";

import type { QuickOverviewData } from "@/content/case-studies/types";
import { Reveal } from "../primitives/Reveal";

interface QuickOverviewSectionProps {
  data: QuickOverviewData;
}

const highlights = [
  { key: "role" as const, label: "Role" },
  { key: "duration" as const, label: "Timeline" },
  { key: "status" as const, label: "State" },
  { key: "domain" as const, label: "Domain" },
];

const details = [
  { key: "users" as const, label: "Users" },
  { key: "country" as const, label: "Market" },
  { key: "cloud" as const, label: "Infra" },
  { key: "tech" as const, label: "Core stack" },
];

export function QuickOverviewSection({ data }: QuickOverviewSectionProps) {
  return (
    <section
      id="overview"
      className="relative isolate flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_72%_78%,rgba(14,165,233,0.10),transparent_30%),#050505] px-5 pb-8 pt-32 text-white sm:px-6 md:px-10 md:pb-10 md:pt-36"
    >
      <div className="mx-auto grid w-full max-w-[1180px] gap-5 md:gap-6">
        <Reveal>
          <header className="grid gap-4 text-left lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="cs-eyebrow mb-3">Overview</p>
              <h2 className="text-balance text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
                The whole project, in one glance.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-white/56 md:text-base lg:justify-self-end">
              Scope, context, constraints, and production posture before the deep dive. This section is intentionally compact so the narrative starts with clarity, not scrolling.
            </p>
          </header>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ key, label }, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.045] p-4 text-left backdrop-blur transition-all duration-300 hover:border-blue-300/25 hover:bg-white/[0.065] md:p-5">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {label}
                </p>
                <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {data[key]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.22}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] text-left sm:grid-cols-2 lg:grid-cols-4">
            {details.map(({ key, label }) => (
              <div key={key} className="bg-black/62 p-4 md:p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-white/62">{data[key]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
