"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { VantaLoader } from './VantaLoader';
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Skip the birds animation on mobile: battery/CPU cost outweighs the effect
    if (window.innerWidth < 768) return;

    let vantaEffect: VantaEffect | null = null;
    let heroVisible = true;

    const initVanta = () => {
      if (vantaEffect || !window.VANTA || !heroVisible) return;
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
    };

    const destroyVanta = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
      }
    };

    const handleVantaLoaded = () => initVanta();

    // If VANTA already loaded, initialize immediately
    if (window.VANTA) {
      initVanta();
    } else {
      // Otherwise, wait for the custom event
      window.addEventListener('vanta-loaded', handleVantaLoaded);
    }

    // Pause the animation while the hero is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        if (heroVisible) initVanta();
        else destroyVanta();
      },
      { threshold: 0 }
    );
    const heroEl = document.getElementById('vanta-birds');
    if (heroEl) observer.observe(heroEl);

    // Cleanup
    return () => {
      window.removeEventListener('vanta-loaded', handleVantaLoaded);
      observer.disconnect();
      destroyVanta();
    };
  }, []);

  return (

    <section id="vanta-birds" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <VantaLoader />
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
            <span className="text-blue-400">Full-Stack + AI Engineer · Remote-first</span>
          </motion.div>

          <h1 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-4xl leading-[1.08] md:text-5xl lg:text-6xl">
            I ship production-ready web apps, APIs, and AI features
          </h1>

          <p className="mb-8 text-gray max-w-2xl mx-auto text-lg ">
            I’m Alex Ariza. I build websites and full-stack applications, solve backend and database problems, and integrate LLMs/RAG with measurable latency, cost, and accuracy.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See case studies
            </Button>
            {/* <Button
              variant="outline"
              className="border-blue-500/30"
              asChild
            >
              <a href="/Alex_CV.pdf" download="Alex_Ariza_FullStack_AI.pdf">
                Download CV
              </a>
            </Button> */}
            <Button
              variant="outline"
              className="border-blue-500/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Start your project
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
          transition={{ delay: 0.45, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
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
