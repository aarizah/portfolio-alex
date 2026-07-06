import type { Transition, Variants } from "framer-motion";

/** Apple-style deceleration — smooth settle, no bounce */
export const appleEase: Transition["ease"] = [0.32, 0.72, 0, 1];

export const appleReveal: Transition = {
  type: "tween",
  duration: 0.95,
  ease: appleEase,
};

export const appleRevealFast: Transition = {
  type: "tween",
  duration: 0.8,
  ease: appleEase,
};

export const appleStagger = {
  staggerChildren: 0.07,
  delayChildren: 0.1,
};

export const viewportOnce = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -4% 0px" as const,
};

export const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

export const sectionRevealContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: appleStagger,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: "tween", duration: 1.15, ease: appleEase },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: appleReveal,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: appleReveal,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: appleReveal,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.988 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...appleReveal, duration: 1.05 },
  },
};

export const fadeInUpTight: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: appleRevealFast,
  },
};
