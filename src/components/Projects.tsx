"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  problem: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Legal Copilot & Internal Knowledge Assistants",
    description: "Citation-grounded answers from legal and internal documents with a RAG pipeline tuned for relevance.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    problem: "Legal and operations teams needed fast, source-linked answers from private corp/legal docs without manual search.",
    solution: "Shipped an end-to-end MVP (Next.js + Node/NestJS + PostgreSQL/Prisma) in 3 weeks. Built ingestion with structured metadata and adaptive chunking, plus a RAG workflow to ground LLM outputs with citations.",
    result: "Delivered citation-grounded responses, reduced hallucinations via metadata + chunking strategy, and set up auth + environments for iterative releases.",
    metrics: [
      { label: "MVP Delivery", value: "3 weeks" },
      { label: "Retrieval Quality", value: "Structured metadata + adaptive chunking" },
      { label: "Answering", value: "Source-cited responses" }
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Prisma", "LangChain", "OpenAI", "Cloud (serverless & managed databases)"],
    github: "https://github.com/aarizah/AI-Enterprise-Knowledge-Assistant"
  },
  {
    title: "AI Caloric Estimator — CV + Embedded Prototype",
    description: "Hardware + CV system that fuses image and weight data to estimate calories with far lower error than manual tracking.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    problem: "Manual calorie tracking was highly inaccurate (often >100% error) and impractical for everyday meals.",
    solution: "Built an ESP32-S3 device with camera + load cell, FreeRTOS/C++ client, and OpenAI API + Node/Express backend to fuse image + weight signals for calorie estimation.",
    result: "Reduced estimation error from >100% to ~10% on non-complex meals by combining CV and weight data.",
    metrics: [
      { label: "Error After Fusion", value: "~10% (down from >100%)" },
      { label: "Signals Used", value: "Image + weight" },
      { label: "Stack", value: "ESP32-S3 + OpenAI API" }
    ],
    technologies: ["ESP32-S3", "C++/FreeRTOS", "OpenAI API", "Node.js", "Express", "TypeScript"],
    github: "https://github.com/aarizah/FoodTracking"
  },
  {
    title: "ChatterBox — Real-Time Team Chat",
    description: "Slack/Discord-style web app with authentication, channels, and real-time messaging.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    problem: "Teams needed persistent, authenticated channels with real-time delivery and message history.",
    solution: "Built React + TypeScript front end with Node/Express + MongoDB backend, WebSockets for live messaging, and JWT + bcrypt/Argon2 for auth.",
    result: "Delivered reliable, real-time messaging with persisted history and secure auth flows.",
    metrics: [
      { label: "Delivery", value: "Real-time via WebSockets" },
      { label: "Auth", value: "JWT + bcrypt/Argon2" },
      { label: "Persistence", value: "Channel history stored" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "bcrypt", "Argon2"],
    github: "https://github.com/aarizah/chatterApp"
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="pt-8 pb-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-4 backdrop-blur-sm text-center">
            <div className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
              3
            </div>
            <div className="text-xs md:text-sm text-gray-400">End-to-end AI builds</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 backdrop-blur-sm text-center">
            <div className="text-xl md:text-2xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              LLM/RAG
            </div>
            <div className="text-xs md:text-sm text-gray-400">Focus area</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm text-center">
            <div className="text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
              Full stack
            </div>
            <div className="text-xs md:text-sm text-gray-400">Front + backend + cloud</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-4 backdrop-blur-sm text-center">
            <div className="text-xl md:text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">
              HW + CV
            </div>
            <div className="text-xs md:text-sm text-gray-400">Embedded prototype</div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured AI Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end AI solutions with shipped MVPs, prototypes, and real product integrations.
          </p>
        </motion.div>

        {/* Grid 2x2 - All Projects Visible */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="relative rounded-xl overflow-hidden cursor-pointer group/card transition-all duration-300 hover:scale-[1.02] h-full"
              >
                {/* Project Card */}
                <div className="relative h-full min-h-[400px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
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
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Key Metrics - VISIBLE */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="bg-white/5 rounded-lg p-2 text-center">
                          <div className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies - VISIBLE */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-500/10 border border-gray-500/30 rounded-md text-xs text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center text-blue-400 text-sm group-hover/card:text-blue-300 transition-colors">
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal - REDESIGNED FOR IMPACT */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                {/* Close Button - Fixed Top Right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all duration-300 border border-white/10"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                  {/* HERO SECTION - Full Width Image + Metrics Overlay */}
                  <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                    
                    {/* Title + Description Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs text-white">
                          <span>🤖</span>
                          <span>AI-Powered Solution</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl text-white mb-3">
                          {selectedProject.title}
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
                          {selectedProject.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* KEY METRICS - BIG & PROMINENT */}
                  <div className="px-6 md:px-10 -mt-8 relative z-10">
                    <div className="grid grid-cols-3 gap-4 md:gap-6">
                      {selectedProject.metrics.map((metric, idx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 md:p-6 text-center backdrop-blur-xl"
                        >
                          <div className="text-3xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            {metric.value}
                          </div>
                          <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs - Visible Immediately */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="px-6 md:px-10 pt-8 flex flex-wrap gap-4 justify-center"
                  >
                    {selectedProject.demo && (
                      <Button
                        className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20"
                        asChild
                      >
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button
                        variant="outline"
                        className="px-8 py-6 border-white/20 hover:bg-white/10 hover:text-white text-black"
                        asChild
                      >
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </motion.div>

                  {/* TIMELINE SECTION - Visual Story Flow */}
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
                      {/* Timeline Line - Desktop Only */}
                      <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                        {/* PROBLEM */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="relative"
                        >
                          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 mx-auto md:mx-0">
                              <span className="text-3xl">🎯</span>
                            </div>
                            
                            {/* Step Number */}
                            <div className="text-blue-400 text-sm uppercase tracking-wider mb-2">Step 1</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Problem</h4>
                            <p className="text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                          </div>
                        </motion.div>

                        {/* SOLUTION */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="relative"
                        >
                          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 mx-auto md:mx-0">
                              <span className="text-3xl">💡</span>
                            </div>
                            
                            {/* Step Number */}
                            <div className="text-purple-400 text-sm uppercase tracking-wider mb-2">Step 2</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Solution</h4>
                            <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                          </div>
                        </motion.div>

                        {/* RESULT */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="relative"
                        >
                          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm h-full">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 mx-auto md:mx-0">
                              <span className="text-3xl">🚀</span>
                            </div>
                            
                            {/* Step Number */}
                            <div className="text-green-400 text-sm uppercase tracking-wider mb-2">Step 3</div>
                            <h4 className="text-xl md:text-2xl text-white mb-4">The Impact</h4>
                            <p className="text-gray-300 leading-relaxed">{selectedProject.result}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* TECH STACK */}
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
                        {selectedProject.technologies.map((tech, idx) => (
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
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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
