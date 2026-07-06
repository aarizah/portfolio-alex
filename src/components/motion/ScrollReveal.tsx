"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import {
  appleStagger,
  fadeInUp,
  reducedVariants,
  sectionRevealContainer,
  viewportOnce,
} from "@/lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variants = fadeInUp,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(ref, viewportOnce);

  return (
    <motion.div
      ref={ref}
      variants={reducedMotion ? reducedVariants : variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function ScrollStagger({
  children,
  className,
  stagger = appleStagger.staggerChildren,
  delayChildren = appleStagger.delayChildren,
}: ScrollStaggerProps) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(ref, viewportOnce);

  const containerVariants: Variants = reducedMotion
    ? reducedVariants
    : {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren },
        },
      };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export function StaggerChild({
  children,
  className,
  variants = fadeInUp,
}: StaggerChildProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={reducedMotion ? reducedVariants : variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { sectionRevealContainer, fadeInUp };
