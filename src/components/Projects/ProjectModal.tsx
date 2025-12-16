"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Project } from './types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
        >
          <div className="bg-slate-950/95 border border-white/20 rounded-3xl w-full max-w-[1200px] max-h-[90vh] overflow-hidden shadow-2xl backdrop-blur-xl pointer-events-auto">
                {/* Close Button */}
                <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 border border-white/10"
                >
                <X className="h-5 w-5 text-white" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {/* Hero Section */}
                <div className="relative h-[35vh] md:h-[40vh] overflow-hidden">
                    <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs text-white">
                        <span>🤖</span>
                        <span>AI-Powered Solution</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl text-white mb-3">
                        {project.title}
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
                        {project.description}
                        </p>
                    </motion.div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="px-6 py-8 md:py-10 md:px-10 -mt-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5">
                    {project.metrics.map((metric, idx) => (
                        <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-3 md:p-4 text-center backdrop-blur-xl"
                        >
                        <div className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                            {metric.value}
                        </div>
                        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">{metric.label}</div>
                        </motion.div>
                    ))}
                    </div>
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="px-6 md:px-10 pt-6 pb-12 flex flex-wrap gap-3 justify-center"
                >
                    {project.demo && (
                    <Button
                        className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20 text-sm"
                        asChild
                    >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Demo
                        </a>
                    </Button>
                    )}
                    {project.github && (
                    <Button
                        variant="outline"
                        className="px-6 py-4 border-white/20 hover:bg-white/10 hover:text-white text-sm"
                        asChild
                    >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        View Source Code
                        </a>
                    </Button>
                    )}
                </motion.div>

                {/* Timeline Section */}
                <div className="px-6 md:px-10 py-12">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-12"
                    >
                    <h3 className="text-2xl md:text-3xl text-white mb-2">The Journey</h3>
                    <p className="text-gray-400">From challenge to solution to measurable impact</p>
                    </motion.div>

                    <div className="relative">
                    <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                        {/* Problem */}
                        <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                        >
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 mx-auto md:mx-0">
                            <span className="text-3xl">🎯</span>
                            </div>
                            <div className="text-blue-400 text-sm uppercase tracking-wider mb-2">Step 1</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Problem</h4>
                            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                        </div>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="relative"
                        >
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 mx-auto md:mx-0">
                            <span className="text-3xl">💡</span>
                            </div>
                            <div className="text-purple-400 text-sm uppercase tracking-wider mb-2">Step 2</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Solution</h4>
                            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>
                        </motion.div>

                        {/* Result */}
                        <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="relative"
                        >
                        <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 mx-auto md:mx-0">
                            <span className="text-3xl">🚀</span>
                            </div>
                            <div className="text-green-400 text-sm uppercase tracking-wider mb-2">Step 3</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Impact</h4>
                            <p className="text-gray-300 leading-relaxed">{project.result}</p>
                        </div>
                        </motion.div>
                    </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="px-6 md:px-10 pb-12"
                >
                    <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <h4 className="text-lg text-white mb-4 flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + idx * 0.05 }}
                        >
                            <Badge
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/40 text-blue-300 text-sm"
                            >
                            {tech}
                            </Badge>
                        </motion.div>
                        ))}
                    </div>
                    </div>
                </motion.div>
                </div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
