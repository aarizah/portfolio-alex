"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";

export function Projects() {
  const [featuredProject, ...secondaryProjects] = projects;

  if (!featuredProject) {
    return null;
  }

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_32%),radial-gradient(circle_at_18%_45%,rgba(168,85,247,0.10),transparent_28%),radial-gradient(circle_at_86%_32%,rgba(236,72,153,0.07),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[0.82fr_1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent">
              Selected Projects
            </p>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-gray-400 md:text-lg">
              Selected AI and full-stack projects with demos, implementation details, architecture decisions, and measurable product outcomes.
            </p>
          </div>
        </motion.div>

        <ProjectCard project={featuredProject} index={0} variant="spotlight" />

        {secondaryProjects.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index + 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
