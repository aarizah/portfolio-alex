"use client";

import { Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { VantaLoader } from "./VantaLoader";
import { mistHeroCopy } from "./content";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

interface VantaEffect {
  destroy: () => void;
  renderer?: { setClearColor: (color: number, alpha: number) => void };
}

interface WindowWithVanta extends Window {
  VANTA?: {
    BIRDS: (config: Record<string, unknown>) => VantaEffect;
  };
}

declare const window: WindowWithVanta;

export function MistHero() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let vantaEffect: VantaEffect | null = null;
    let heroVisible = true;

    const initVanta = () => {
      if (vantaEffect || !window.VANTA || !heroVisible) return;
      vantaEffect = window.VANTA.BIRDS({
        el: "#vanta-birds",
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x000000,
        backgroundAlpha: 0,
        color1: 0x699c8a,
        color2: 0x21ac7d,
        colorMode: "lerp",
        birdSize: 4.0,
        quantity: 3.0,
        separation: 90.0,
      });
      vantaEffect.renderer?.setClearColor(0x000000, 0);
    };

    const destroyVanta = () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
      }
    };

    const handleVantaLoaded = () => initVanta();

    if (window.VANTA) {
      initVanta();
    } else {
      window.addEventListener("vanta-loaded", handleVantaLoaded);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        if (heroVisible) initVanta();
        else destroyVanta();
      },
      { threshold: 0 },
    );
    const heroEl = document.getElementById("vanta-birds");
    if (heroEl) observer.observe(heroEl);

    return () => {
      window.removeEventListener("vanta-loaded", handleVantaLoaded);
      observer.disconnect();
      destroyVanta();
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] [filter:brightness(0.91)_contrast(1.1)_saturate(1.12)]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,30,28,0.18)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(242,246,245,0.26)_0%,rgba(242,246,245,0.1)_48%,rgba(242,246,245,0.2)_100%)]"
        aria-hidden
      />
      <div
        id="vanta-birds"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.28]"
        aria-hidden
      />
      <VantaLoader />

      <div className="relative z-10 mx-auto w-full max-w-4xl translate-y-12 px-6 pb-10 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`${manrope.className} relative isolate px-8 pb-16 pt-8 sm:px-12 sm:pb-20 sm:pt-10 md:px-16 md:pb-24 md:pt-12`}
        >
          <div
            className="pointer-events-none absolute -inset-x-[26%] -bottom-[32%] -top-[8%] z-0 bg-[rgb(222_232_230/0.28)] backdrop-blur-xl [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_78%)]"
            aria-hidden
          />
          <div className="relative z-[1]">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--mist-eyebrow)] sm:text-[11px]">
              {mistHeroCopy.eyebrow}
            </p>

            <h1 className="mx-auto mb-5 text-[1.65rem] font-semibold leading-[1.22] tracking-[-0.03em] text-[var(--mist-ink)] sm:text-[1.9rem] md:text-[2.15rem] lg:text-[2.35rem]">
              {mistHeroCopy.headlineBefore}
              <span className="text-[var(--mist-brand)]">{mistHeroCopy.headlineAccent}</span>,
              <br />
              {mistHeroCopy.headlineAfter}
            </h1>

            <p className="mx-auto mb-8 max-w-lg text-pretty text-sm leading-6 text-[var(--mist-muted)] md:text-[0.95rem] md:leading-7">
              {mistHeroCopy.subhead}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-5">
              <button
                type="button"
                className="inline-flex h-10 items-center rounded-full bg-[var(--mist-brand)] px-6 text-sm font-medium text-white hover:opacity-90"
                onClick={() =>
                  document
                    .getElementById(mistHeroCopy.primaryHref)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {mistHeroCopy.primaryCta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
              <button
                type="button"
                className="text-sm font-medium text-neutral-800 underline decoration-neutral-400 underline-offset-[6px] transition-colors hover:text-[var(--mist-brand)] hover:decoration-[var(--mist-brand)]"
                onClick={() =>
                  document
                    .getElementById(mistHeroCopy.secondaryHref)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {mistHeroCopy.secondaryCta}
              </button>
            </div>

            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--mist-muted)]">
              {mistHeroCopy.microProof}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-neutral-500/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
