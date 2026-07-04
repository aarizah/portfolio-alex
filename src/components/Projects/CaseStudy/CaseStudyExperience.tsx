"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { cn } from "@/components/ui/utils";
import {
  CASE_STUDY_NAV_SECTIONS,
  type CaseStudySectionConfig,
} from "./sections.config";

interface CaseStudyExperienceProps {
  projectName: string;
  children: React.ReactNode;
  sections?: CaseStudySectionConfig[];
}

export function CaseStudyExperience({
  projectName,
  children,
  sections = CASE_STUDY_NAV_SECTIONS,
}: CaseStudyExperienceProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navVisible, setNavVisible] = useState(false);
  const [availableIds, setAvailableIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const sectionEls = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    setAvailableIds(new Set(sectionEls.map((section) => section.id)));

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.45, 0.7, 1] }
    );

    sectionEls.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        setNavVisible(scrollTop > window.innerHeight * 0.38);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const visibleSections = useMemo(
    () => sections.filter((section) => availableIds.has(section.id)),
    [availableIds, sections]
  );

  const activeIndex = Math.max(
    0,
    visibleSections.findIndex((section) => section.id === activeId)
  );

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, []);

  return (
    <div className="case-study-root min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to case study content
      </a>

      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 transition-[width] duration-150"
          style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-400/15 bg-black/72 shadow-[0_10px_42px_rgba(37,99,235,0.16)] backdrop-blur-2xl transition-all duration-300">
        <div className="flex h-[4.25rem] items-center justify-between px-6 sm:px-8 md:px-[5.25rem]">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2.5 rounded-full px-3 py-1.5 text-sm font-semibold text-white/64 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
            aria-label="Back to all projects"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Projects
          </Link>

          <div className="min-w-0 text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">Case Study</p>
            <p className="max-w-[50vw] truncate bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-sm font-semibold text-transparent sm:max-w-none md:text-[15px]">
              {projectName}
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 transition-colors hover:border-blue-300/45 hover:bg-blue-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <Mail className="hidden size-4 sm:block" />
            Contact
          </Link>
        </div>

        <nav
          aria-label="Case study chapter navigation"
          className="hidden border-t border-blue-400/10 px-6 py-2.5 md:px-[5.25rem] md:block"
        >
          <div className="mx-auto flex max-w-[1590px] gap-2 overflow-x-auto scrollbar-hide">
            {visibleSections.map((section, index) => {
              const active = activeId === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70",
                    active
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.28)]"
                      : "text-white/48 hover:bg-blue-400/[0.08] hover:text-white"
                  )}
                  aria-current={active ? "location" : undefined}
                >
                  <span className="mr-1.5 text-xs opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      <nav
        aria-label="Case study reading progress"
        className={cn(
          "fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 transition-opacity duration-300 2xl:flex",
          navVisible ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
          {String(activeIndex + 1).padStart(2, "0")} / {String(visibleSections.length).padStart(2, "0")}
        </div>
        {visibleSections.map((section, index) => {
          const active = activeId === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3 py-1.5 text-left"
              aria-current={active ? "location" : undefined}
            >
              <span
                className={cn(
                  "block h-px transition-all duration-200",
                  active
                    ? "w-10 bg-white"
                    : "w-4 bg-white/20 group-hover:w-7 group-hover:bg-white/55"
                )}
              />
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.16em] transition-colors duration-200",
                  active ? "text-white" : "text-white/30 group-hover:text-white/65"
                )}
              >
                {section.shortLabel ?? String(index + 1).padStart(2, "0")} - {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div
        className={cn(
          "fixed bottom-4 left-1/2 z-40 w-[calc(100vw-2rem)] max-w-[720px] -translate-x-1/2 transition-all duration-300 md:hidden",
          navVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <div className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/82 px-2 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl scrollbar-hide">
          {visibleSections.map((section) => {
            const active = activeId === section.id;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors",
                  active ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "text-white/55 hover:text-white"
                )}
                aria-current={active ? "location" : undefined}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>

      <main className="case-study-main">{children}</main>
    </div>
  );
}
