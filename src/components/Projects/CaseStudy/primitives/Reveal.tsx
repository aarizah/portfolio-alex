"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/components/ui/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 40 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealText({ children, className }: RevealTextProps) {
  return (
    <Reveal y={24} className={className}>
      {children}
    </Reveal>
  );
}

interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScaleReveal({ children, className }: ScaleRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
