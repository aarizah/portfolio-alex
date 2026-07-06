"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Github, LineChart, Play, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ProjectPreview } from "./types";

interface ProjectCardProps {
  project: ProjectPreview;
  index: number;
  variant?: "spotlight" | "compact";
}

function ProjectActions({ project, compact = false }: { project: ProjectPreview; compact?: boolean }) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? "mt-5" : "mt-8"}`}>
      <Link
        href={`/projects/${project.slug}`}
        className={`${baseClass} ${
          compact
            ? "px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
            : "px-5 py-3 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.20)]"
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
          className={`${baseClass} px-4 py-2.5 text-sm border border-purple-400/20 bg-purple-500/[0.06] text-purple-100 hover:border-pink-300/40 hover:bg-pink-400/10`}
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
          className={`${baseClass} px-4 py-2.5 text-sm border border-blue-400/20 bg-blue-500/[0.05] text-blue-100 hover:border-purple-300/40 hover:bg-purple-400/10`}
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
          className="rounded-2xl border border-purple-300/10 bg-black/25 px-4 py-3"
        >
          <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-gray-500">
            <LineChart className="h-3.5 w-3.5 text-purple-300" />
            {metric.label}
          </div>
          <div className="mt-1 text-lg font-semibold tracking-tight text-white">{metric.value}</div>
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ project, index, variant = "compact" }: ProjectCardProps) {
  if (variant === "spotlight") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, delay: index * 0.08 }}
        className="group relative overflow-hidden rounded-[2rem] border border-purple-300/10 bg-white/[0.035] shadow-[0_30px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(96,165,250,0.13),transparent_31%),radial-gradient(circle_at_72%_10%,rgba(168,85,247,0.13),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(236,72,153,0.08),transparent_24%)] opacity-90" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/35 to-pink-300/20" />

        <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[0.94fr_1.06fr] lg:p-10">
          <div className="flex min-h-[420px] flex-col justify-between">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-100">
                <Sparkles className="h-4 w-4 text-pink-300" />
                Featured proof
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.26em] text-purple-300/55">
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
                    className="rounded-full border border-purple-300/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-purple-300/10 bg-black/30"
            aria-label={`Open ${project.title} case study`}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="h-full min-h-[320px] w-full object-cover opacity-90 saturate-[0.92] transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-purple-300/10 bg-black/45 p-4 backdrop-blur-md">
              <p className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-xs font-semibold uppercase tracking-[0.22em] text-transparent">
                Recruiter shortcut
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-200">
                Two-minute read: product problem, business impact, architecture, decisions, and lessons.
              </p>
            </div>
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="h-full"
    >
      <div className="group/card relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-purple-300/10 bg-white/[0.03] p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300/25 hover:bg-white/[0.05]">
        <Link
          href={`/projects/${project.slug}`}
          className="relative h-52 overflow-hidden rounded-[1.15rem] border border-purple-300/10 bg-black/30"
          aria-label={`Open ${project.title} case study`}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-80 saturate-[0.88] transition-transform duration-500 group-hover/card:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-purple-950/20 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-purple-300/15 bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-100 backdrop-blur-md">
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
                className="rounded-full border border-purple-300/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-purple-300/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto">
            <ProjectActions project={project} compact />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
