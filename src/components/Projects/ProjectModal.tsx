"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Project } from './types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (project?.markdownFile) {
      setIsLoading(true);
      fetch(`/content/case-studies/${project.markdownFile}`)
        .then(response => response.text())
        .then(content => {
          setMarkdownContent(content);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error loading markdown:', error);
          setMarkdownContent('# Error loading content\n\nPlease try again later.');
          setIsLoading(false);
        });
    }
  }, [project]);

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
          className="fixed inset-0 bg-gray-950 z-50"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto pointer-events-none"
        >
          <div className="min-h-screen bg-gray-950 pointer-events-auto">
            {/* Header with close button */}
            <div className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
              <div className="max-w-4xl mx-auto px-6 py-4 flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-200" />
                </button>
              </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Hero Image */}
                <div className="rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Hero Content */}
                <div className="flex flex-col justify-start">
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-8">
                    <span className="uppercase tracking-widest font-semibold text-gray-400">Case Study</span>
                    <span className="text-gray-700">•</span>
                    <span>5 min read</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed mb-10">
                    {project.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-950 text-sm font-semibold rounded-lg transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-800/50"></div>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-6 py-20">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold text-white mb-8 pb-4 border-b border-gray-800/50">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold text-white mb-6 mt-16">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold text-white mb-4 mt-12">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-6 text-gray-300">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-6 text-gray-300">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="mb-2 text-lg leading-relaxed">
                          {children}
                        </li>
                      ),
                      code: ({ children, className }) => {
                        const isInline = !className;
                        return isInline ? (
                          <code className="bg-gray-800/50 px-2 py-1 rounded text-blue-400 text-base">
                            {children}
                          </code>
                        ) : (
                          <code className={className}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="bg-gray-900 border border-gray-800/50 rounded-xl p-6 overflow-x-auto mb-8 text-gray-200">
                          {children}
                        </pre>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-6 py-2 mb-6 bg-gray-900/30 rounded-r-lg">
                          <div className="text-gray-300 italic">
                            {children}
                          </div>
                        </blockquote>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-white">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="text-blue-400 italic">
                          {children}
                        </em>
                      ),
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
                </div>
              )}

              <div className="border-t border-gray-800/50 pt-16 mt-16">
                {/* Technologies */}
                <div className="mb-16">
                  <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-900/50 text-gray-300 text-sm rounded-lg border border-gray-800/50 hover:border-gray-700/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom spacing */}
                <div className="h-12"></div>
              </div>
            </article>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
