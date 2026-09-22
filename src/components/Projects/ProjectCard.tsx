"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, LineChart, Play, Sparkles } from "lucide-react";
import { ProjectPreview } from "./types";
import { appleRevealFast, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectPreview;
  index: number;
  variant?: "spotlight" | "compact";
  staggered?: boolean;
}

function ProjectActions({ project, compact = false }: { project: ProjectPreview; compact?: boolean }) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "mt-5" : "mt-8"}`}>
      <Link
        href={`/projects/${project.slug}`}
        className={`${baseClass} ${
          compact
            ? "px-4 py-2 text-sm bg-white text-black hover:bg-white/90"
            : "px-5 py-3 text-sm bg-white text-black hover:bg-white/90"
        }`}
      >
        View case study
        <ArrowUpRight className="h-4 w-4" />
      </Link>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} px-4 py-2.5 text-sm border border-white/20 bg-white/[0.04] text-white hover:border-brand/40 hover:bg-brand/10`}
        >
          <Play className="h-4 w-4" />
          Demo
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClass} px-3 py-2 text-sm text-gray-400 hover:text-white`}
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      )}
    </div>
  );
}

function ProjectMetrics({ project, compact = false }: { project: ProjectPreview; compact?: boolean }) {
  const metrics = project.metrics.slice(0, compact ? 2 : 3);

  if (metrics.length === 0) {
    return null;
  }

  return (
    <div className={`mt-6 grid ${compact ? "grid-cols-1 gap-2" : "grid-cols-1 gap-3 sm:grid-cols-3"}`}>
      {metrics.map((metric) => (
        <div
          key={`${project.slug}-${metric.label}`}
          className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
        >
          <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-gray-500">
            <LineChart className="h-3.5 w-3.5 text-brand" />
            {metric.label}
          </div>
          <div className="mt-1 text-lg font-semibold tracking-tight text-white">{metric.value}</div>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  index,
  variant = "compact",
  staggered = false,
}: ProjectCardProps) {
  if (variant === "spotlight") {
    return (
      <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_36px_120px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,180,74,0.10),transparent_34%)] opacity-90" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

        <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:p-10">
          <div className="flex min-h-[420px] flex-col justify-between">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                <Sparkles className="h-4 w-4 text-brand" />
                Featured proof
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-brand/80">
                {project.status}
              </p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
                {project.description}
              </p>

              <ProjectMetrics project={project} />
            </div>

            <div>
              <ProjectActions project={project} />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30"
            aria-label={`Open ${project.title} case study`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover opacity-90 saturate-[0.92] transition-transform duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                In brief
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-200">
                {project.recruiterShortcut.summary}
              </p>
            </div>
          </Link>
        </div>
      </article>
    );
  }

  if (staggered) {
    return (
      <div className="h-full">
        <div className="group/card relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-[transform,border-color,background-color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-brand/30 hover:bg-white/[0.045]">
          {renderCompactBody(project)}
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...appleRevealFast, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="group/card relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-[transform,border-color,background-color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-brand/30 hover:bg-white/[0.045]">
        {renderCompactBody(project)}
      </div>
    </motion.article>
  );
}

function renderCompactBody(project: ProjectPreview) {
  return (
    <>
        <Link
          href={`/projects/${project.slug}`}
          className="relative h-52 overflow-hidden rounded-[1.15rem] border border-white/10 bg-black/30"
          aria-label={`Open ${project.title} case study`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover opacity-80 saturate-[0.88] transition-transform duration-[1s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            {project.status}
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-2 pt-5">
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">{project.description}</p>

          <ProjectMetrics project={project} compact />

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto">
            <ProjectActions project={project} compact />
          </div>
        </div>
    </>
  );
}
