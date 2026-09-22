"use client";

import { Instrument_Serif, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { VantaLoader } from "./VantaLoader";
import { heroChips, heroCopy } from "@/content/brand";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
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

export function Hero() {
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
        color1: 0xfdb521,
        color2: 0xfdb521,
        colorMode: "lerp",
        birdSize: 2.0,
        quantity: 2.0,
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
    <section className="relative isolate flex min-h-svh w-full items-start justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
      </div>
      <div
        id="vanta-birds"
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.28]"
        aria-hidden
      />
      <VantaLoader />

      <div
        className={`${manrope.className} relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-40 pt-32 text-center md:px-10 md:pt-36`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`${instrumentSerif.className} text-[2.35rem] leading-[1.12] tracking-[-0.02em] text-white sm:text-[3.15rem] md:text-[3.7rem] lg:text-[4.15rem]`}
        >
          {heroCopy.headlineLine1}
          <br />
          <span className="text-[#9a9a9a]">{heroCopy.headlineLine2}</span>
        </motion.h1>

        <motion.a
          href="#build"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex h-11 items-center rounded-full bg-white px-7 text-[14px] font-medium text-black"
        >
          {heroCopy.primaryCta}
        </motion.a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:hidden">
          {heroChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-md"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: chip.color }}
                aria-hidden
              />
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      {heroChips.map((chip, index) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.4 + index * 0.12 },
            y: {
              duration: 4.2 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6 + index * 0.2,
            },
          }}
          className={`pointer-events-none absolute z-10 hidden sm:flex ${chip.className}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: chip.color }}
              aria-hidden
            />
            {chip.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
