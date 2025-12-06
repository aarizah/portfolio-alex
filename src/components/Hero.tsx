"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Glowing orbs - adjusted to prevent overflow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-blue-400">🤖 Currently Accepting New Projects</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Engineer & Full Stack Developer
          </h1>
          
          <p className="mb-8 text-gray-400 max-w-2xl mx-auto text-lg">
            I transform complex AI concepts into production-ready applications that drive real business value. 
            Specializing in LLM integration, intelligent automation, and full-stack AI solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500/30 hover:bg-blue-500/10"
              asChild
            >
              <a href="/resume.pdf" download="YourName_Resume.pdf">
                Download Resume
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-500/30 hover:bg-purple-500/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-colors"
              title="GitHub Profile"
            >
              <Github className="h-5 w-5 text-gray-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-gray-400" />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-colors"
              title="Send Email"
            >
              <Mail className="h-5 w-5 text-gray-400" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-6 w-6 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
