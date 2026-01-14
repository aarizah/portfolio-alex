"use client";

import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative rounded-xl overflow-hidden group/card h-full bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          
          {/* Featured Badge */}
          {index === 0 && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-xs text-white flex items-center gap-1 shadow-lg">
              <span>⭐</span>
              <span>Featured</span>
            </div>
          )}
          
          {/* AI Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs text-white flex items-center gap-1 shadow-lg">
            <span>🤖</span>
            <span>AI-Powered</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-white mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs text-blue-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 bg-gray-500/10 border border-gray-500/30 rounded-md text-xs text-gray-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col gap-2">
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </a>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium transition-all duration-200"
            >
              <FileText className="h-4 w-4" />
              <span>View Case Study</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
