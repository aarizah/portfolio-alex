"use client";

import { motion } from "framer-motion";
import { StatsBar } from "./StatsBar";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";

export function Projects() {
  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <StatsBar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured AI Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end AI solutions with shipped MVPs, prototypes, and real product integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
