"use client";

import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";
import { ScrollReveal, ScrollStagger, StaggerChild } from "@/components/motion/ScrollReveal";
import { fadeInUpTight, scaleIn } from "@/lib/motion";

export function Projects() {
  const [featuredProject, ...secondaryProjects] = projects;

  if (!featuredProject) {
    return null;
  }

  return (
    <section
      id="work"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,180,74,0.08),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <ScrollStagger className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <StaggerChild variants={fadeInUpTight}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              Proof, not a portfolio
            </p>
            <h2 className="text-3xl text-white md:text-4xl">Work that already survived production constraints</h2>
          </StaggerChild>

          <StaggerChild variants={fadeInUpTight}>
            <p className="max-w-xl text-base leading-8 text-gray-400 md:text-lg lg:justify-self-end">
              Case studies of systems with owners, constraints, and numbers. This is the evidence
              behind the offer — evidence a buyer can inspect.
            </p>
          </StaggerChild>
        </ScrollStagger>

        <ScrollReveal variants={scaleIn}>
          <ProjectCard project={featuredProject} index={0} variant="spotlight" />
        </ScrollReveal>

        {secondaryProjects.length > 0 && (
          <ScrollStagger className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <StaggerChild key={project.slug} variants={fadeInUpTight}>
                <ProjectCard project={project} index={index + 1} variant="compact" staggered />
              </StaggerChild>
            ))}
          </ScrollStagger>
        )}
      </div>
    </section>
  );
}
