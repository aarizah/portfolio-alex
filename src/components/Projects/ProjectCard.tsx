"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
      <div
        onClick={onClick}
        className="relative rounded-xl overflow-hidden cursor-pointer group/card transition-all duration-300 hover:scale-[1.02] h-full"
      >
        <div className="relative h-full min-h-[320px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
          {/* Image Section */}
          <div className="relative h-36 overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
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
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-white mb-2 text-lg">{project.title}</h3>
            <p className="text-gray-400 text-xs mb-3 line-clamp-2">{project.description}</p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-white/5 rounded-lg p-2 text-center">
                  <div className="text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 rounded-md text-[10px] text-blue-400"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 bg-gray-500/10 border border-gray-500/30 rounded-md text-[10px] text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="mt-auto flex items-center text-blue-400 text-xs group-hover/card:text-blue-300 transition-colors">
              <span>View Full Case Study</span>
              <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
