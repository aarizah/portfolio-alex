"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StatsBar } from './StatsBar';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects } from './projectsData';
import { Project } from './types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="max-w-6xl mx-auto px-12 md:px-16 lg:px-20 relative z-10">
        <StatsBar />

        {/* Header */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </section>
  );
}
