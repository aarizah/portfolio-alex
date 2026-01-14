"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect } from 'react';

// Type definitions for Vanta
interface VantaEffect {
  destroy: () => void;
}

interface WindowWithVanta extends Window {
  VANTA?: {
    BIRDS: (config: Record<string, unknown>) => VantaEffect;
  };
}

declare const window: WindowWithVanta;

export function Hero() {
  useEffect(() => {
    let vantaEffect: VantaEffect | null = null;

    const initVanta = () => {
      if (window.VANTA) {
        vantaEffect = window.VANTA.BIRDS({
          el: "#vanta-birds",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000000,
          separation: 71.00,
          birdSize: 1.40,
          quantity: 3.00
        });
      }
    };

    // If VANTA already loaded, initialize immediately
    if (window.VANTA) {
      initVanta();
    } else {
      // Otherwise, wait for the custom event
      window.addEventListener('vanta-loaded', initVanta);
    }

    // Cleanup
    return () => {
      window.removeEventListener('vanta-loaded', initVanta);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (

    <section id="vanta-birds" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="relative z-10 max-w-5xl mx-auto px-12 md:px-16 lg:px-20 text-center scale-110">

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
            <span className="text-blue-400">🤖 AI Product Engineer · Full-Stack · Remote-first</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            I build end-to-end apps with LLMs that move the business needle
          </h1>
            
          <p className="mb-8 text-gray max-w-2xl mx-auto text-lg ">
            I’m Alex Ariza, a Full-Stack Developer focused on integrating LLMs/RAG into real products: Next.js + Node/FastAPI + managed cloud delivery, with latency, cost, and accuracy metrics from day one.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See AI projects
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500/30 hover:bg-blue-500/10"
              asChild
            >
              <a href="/Alex_CV.pdf" download="Alex_Ariza_FullStack_AI.pdf">
                Download CV
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500/30 hover:bg-blue-500/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Schedule a call
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="https://github.com/aarizah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-colors"
              title="GitHub Profile"
            >
              <Github className="h-5 w-5 text-gray-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alex-ariza-herrera"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 text-gray-400" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom left-1/2 -translate-x-1/2"
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
