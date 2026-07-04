"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github, PlayCircle, Sparkles } from "lucide-react";
import type { HeroData, QuickOverviewData, VideoDemoData } from "@/content/case-studies/types";
import { Reveal } from "../primitives/Reveal";

interface HeroSectionProps {
  title: string;
  data: HeroData;
  overview: QuickOverviewData;
  videoDemo?: VideoDemoData;
}

function splitTitle(title: string) {
  const normalizedTitle = title.replace(/â€”/g, "—");
  const [name, descriptor] = normalizedTitle.split(/\s+(?:—|–|-)\s+/, 2);

  return {
    name: name || normalizedTitle,
    descriptor: descriptor ?? null,
  };
}

const facts = [
  { key: "role" as const, label: "Role" },
  { key: "domain" as const, label: "Domain" },
];

const context = [
  { key: "users" as const, label: "Users" },
  { key: "country" as const, label: "Market" },
  { key: "tech" as const, label: "Stack" },
];

const brandParticles = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 37) % 86)}%`,
  top: `${14 + ((index * 29) % 72)}%`,
  delay: `${(index % 7) * 0.42}s`,
  duration: `${7 + (index % 5)}s`,
  scale: 0.65 + (index % 4) * 0.18,
}));

export function HeroSection({ title, data, overview, videoDemo }: HeroSectionProps) {
  const { name, descriptor } = splitTitle(title);
  const [loaded, setLoaded] = useState(false);
  const hasLiveDemo = Boolean(data.demo);
  const hasVideoDemo = Boolean(videoDemo?.src);
  const githubIsPrimary = Boolean(data.github) && !hasLiveDemo && !hasVideoDemo;

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="overview"
      className="relative isolate flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-black px-6 pb-10 pt-[8.25rem] text-white sm:px-8 md:px-[5.25rem] md:pt-[8.6rem]"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_12%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(180deg,#020204_0%,#000_62%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-14 [mask-image:radial-gradient(circle_at_center,black,transparent_74%)]" />
        <div className="absolute left-1/2 top-1/2 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        {brandParticles.map((particle) => (
          <span
            key={particle.id}
            className="case-study-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              transform: `scale(${particle.scale}) rotate(${particle.id * 17}deg)`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-[1590px] gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-12">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100/76 backdrop-blur"
          >
            <Sparkles className="size-3.5 text-blue-300" />
            {data.status} case study
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-balance text-[2.35rem] font-bold leading-[1.03] tracking-[-0.033em] text-white sm:text-[3rem] lg:text-[3.08rem] xl:text-[3.38rem]"
          >
            {name}
          </motion.h1>

          {descriptor && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200/70 md:text-[15px]"
            >
              {descriptor}
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/64 md:text-[15px]"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.44 }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            {hasLiveDemo && data.demo && (
              <a
                href={data.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-[1.125rem] py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_34px_rgba(99,102,241,0.28)] transition-transform hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Live demo <ExternalLink className="size-4" />
              </a>
            )}
            {hasVideoDemo && (
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-[1.125rem] py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_34px_rgba(99,102,241,0.28)] transition-transform hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Video demo <PlayCircle className="size-4" />
              </a>
            )}
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  githubIsPrimary
                    ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-[1.125rem] py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_34px_rgba(99,102,241,0.28)] transition-transform hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    : "inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/[0.08] px-[1.125rem] py-2.5 text-[13px] font-semibold text-blue-100 transition-colors hover:border-purple-300/35 hover:bg-purple-400/[0.12] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                }
              >
                GitHub <Github className="size-4" />
              </a>
            )}
          </motion.div>

          {data.stack.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.54 }}
              className="mt-4 flex flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {data.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-medium text-white/52"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        <Reveal delay={0.18} className="grid gap-3">
          <div className="grid items-start gap-3 lg:grid-cols-[1fr_0.42fr]">
            <div className="relative self-start overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-2 shadow-[0_22px_80px_rgba(59,130,246,0.12)] backdrop-blur">
              <div className="relative aspect-video overflow-hidden rounded-[1rem] bg-black">
                <Image
                  src={data.backgroundImage}
                  alt={`${name} product preview`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover opacity-90"
                />
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {facts.map(({ key, label }) => (
                <div key={key} className="rounded-xl border border-white/[0.08] bg-white/[0.045] p-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/32">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-tight text-white">
                    {overview[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] text-left shadow-[0_16px_60px_rgba(0,0,0,0.18)] sm:grid-cols-3">
            {context.map(({ key, label }) => (
              <div key={key} className="bg-black/54 p-3 backdrop-blur">
                <dt className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  {label}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/58 md:text-sm">{overview[key]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <motion.a
          href="#demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-blue-300/20 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/55 backdrop-blur transition-colors hover:text-white"
        >
          Continue reading <ArrowDown className="size-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
