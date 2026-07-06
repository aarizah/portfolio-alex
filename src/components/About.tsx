"use client";

import { Brain, Zap, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal, ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeIn, fadeInRight, fadeInUpTight, scaleIn } from "@/lib/motion";

const strengths = [
  {
    icon: Brain,
    iconClass: "from-blue-500/20 to-blue-500/10 border-blue-500/20 text-blue-400",
    title: "AI/ML Specialist",
    description:
      "LLMs, RAG systems, embeddings, and retrieval tuning (chunking, metadata) to keep answers grounded in your data.",
  },
  {
    icon: Zap,
    iconClass: "from-purple-500/20 to-purple-500/10 border-purple-500/20 text-purple-400",
    title: "Full-Stack Excellence",
    description:
      "Next.js + React frontends, Node/NestJS or FastAPI backends, PostgreSQL/Mongo, and managed cloud delivery (e.g., Vercel for frontends, Supabase or a preferred provider for data) so the AI feature ships with the app and performs well for users.",
  },
  {
    icon: Shield,
    iconClass: "from-green-500/20 to-green-500/10 border-green-500/20 text-green-400",
    title: "Measured Outcomes",
    description:
      "Obsessed with latency p95, token cost, and accuracy. I add logging, tracing, and evals so we know what's working.",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-12"
    >
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-12 md:px-16 lg:px-20">
        <ScrollStagger className="mb-16 text-center">
          <StaggerChild variants={fadeInUpTight}>
            <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl text-transparent md:text-4xl">
              Why Work With Me
            </h2>
          </StaggerChild>
          <StaggerChild variants={fadeInUpTight}>
            <p className="mx-auto max-w-2xl text-gray-400">
              Full-stack developer focused on LLM/RAG integration, measured performance, and
              production readiness.
            </p>
          </StaggerChild>
        </ScrollStagger>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />
            <Card className="relative border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_24px_80px_rgba(99,102,241,0.12)]">
              <ScrollReveal variants={fadeIn}>
                <div className="mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <ImageWithFallback
                    src="/profile2.jpg"
                    alt="AI Engineer Profile"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </ScrollReveal>

                <ScrollStagger className="grid grid-cols-2 gap-4">
                  <StaggerChild variants={scaleIn}>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl text-transparent">
                        3
                      </div>
                      <div className="text-xs text-gray-400">Shipped AI builds</div>
                    </div>
                  </StaggerChild>
                  <StaggerChild variants={scaleIn}>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <div className="mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl text-transparent">
                        E2E
                      </div>
                      <div className="text-xs text-gray-400">Frontend · Backend · Cloud</div>
                    </div>
                  </StaggerChild>
                </ScrollStagger>
            </Card>
          </div>

          <ScrollReveal variants={fadeInRight}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl text-white">
                  Full-Stack + AI builder who ships production-ready features
                </h3>
                <p className="leading-relaxed text-gray-300">
                  I translate business needs into measurable requirements (latency, cost, accuracy)
                  and build the stack to support them. From frontend UX to backend APIs, vector
                  search, and cloud delivery, I ship features that users can trust.
                </p>
                <p className="leading-relaxed text-gray-300">
                  My sweet spot: LLM/RAG integrations with guardrails, clear observability, and
                  deployment on managed platforms with CI/CD so teams can iterate safely and
                  maximize conversion (low latency, reliable rollouts).
                </p>
              </div>

              <ScrollStagger className="space-y-4 pt-4">
                {strengths.map((strength) => {
                  const Icon = strength.icon;

                  return (
                    <StaggerChild key={strength.title} variants={fadeInUpTight}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`rounded-lg border bg-gradient-to-br p-3 ${strength.iconClass}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-white">{strength.title}</h4>
                          <p className="text-sm text-gray-400">{strength.description}</p>
                        </div>
                      </div>
                    </StaggerChild>
                  );
                })}

                <StaggerChild variants={fadeInUpTight}>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300">
                      <span className="text-blue-400">💡 My approach:</span> rapid prototyping +
                      production discipline. Speed to value, with security, observability, and sensible
                      costs baked in.
                    </p>
                  </div>
                </StaggerChild>
              </ScrollStagger>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
