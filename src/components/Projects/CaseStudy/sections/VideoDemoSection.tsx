"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize, Play } from "lucide-react";
import type { VideoDemoData } from "@/content/projects/types";
import { ProductSection } from "../primitives/ProductSection";
import { ScaleReveal } from "../primitives/Reveal";
import { cn } from "@/components/ui/utils";

interface VideoDemoSectionProps {
  data: VideoDemoData;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function getChapterIndexForTime(
  currentTime: number,
  chapters: VideoDemoData["chapters"]
): number {
  for (let i = chapters.length - 1; i >= 0; i--) {
    if (currentTime >= chapters[i].time) return i;
  }
  return 0;
}

export function VideoDemoSection({ data }: VideoDemoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const chapterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeChapter, setActiveChapter] = useState(0);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const index = getChapterIndexForTime(video.currentTime, data.chapters);
    setActiveChapter((prev) => (prev === index ? prev : index));
  }, [data.chapters]);

  useEffect(() => {
    chapterRefs.current[activeChapter]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeChapter]);

  const seekTo = useCallback((time: number, index: number) => {
    setActiveChapter(index);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
    void video.play();
  }, []);

  const handleFullscreen = useCallback(() => {
    void videoRef.current?.requestFullscreen();
  }, []);

  return (
    <ProductSection
      id="demo"
      variant="dark"
      eyebrow="Product demo"
      align="center"
    >
      <ScaleReveal className="w-full">
        <div className="overflow-hidden rounded-[2rem] border border-purple-300/[0.10] bg-white/[0.035] shadow-[0_32px_100px_rgba(168,85,247,0.10)]">
          <div className="relative lg:pr-64">
            <div className="relative bg-black">
              {data.src ? (
                <video
                  ref={videoRef}
                  src={data.src}
                  poster={data.poster}
                  controls
                  preload="metadata"
                  onTimeUpdate={handleTimeUpdate}
                  className="block w-full h-auto bg-black"
                />
              ) : (
                <div className="relative flex aspect-[1324/613] items-center justify-center overflow-hidden bg-black">
                  <Image
                    src={data.poster}
                    alt="Demo preview"
                    fill
                    sizes="(min-width: 1024px) 860px, 100vw"
                    className="object-cover opacity-45 blur-[1px]"
                  />
                  <div className="absolute inset-0 bg-radial-vignette" />
                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <div className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                      <Play className="ml-1 size-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Interactive demo placeholder</p>
                      <p className="mt-1 text-xs text-white/45">Use the beats to understand the intended flow.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="flex max-h-[min(360px,45vh)] flex-col border-t border-purple-300/[0.08] bg-[radial-gradient(circle_at_0%_0%,rgba(96,165,250,0.08),transparent_42%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.10),transparent_40%),rgba(8,8,12,0.72)] p-3.5 text-left backdrop-blur-sm lg:absolute lg:inset-y-0 lg:right-0 lg:max-h-none lg:w-64 lg:border-l lg:border-t-0 lg:overflow-hidden">
              <p className="mb-3 shrink-0 text-[9px] font-medium uppercase tracking-[0.2em] text-purple-200/40">
                Demo beats
              </p>
              <div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden pb-1 scrollbar-hide lg:overflow-x-hidden lg:overflow-y-auto lg:pr-0.5">
                <div className="flex gap-1.5 lg:flex-col">
                  {data.chapters.map((chapter, i) => (
                    <button
                      key={chapter.label}
                      ref={(el) => {
                        chapterRefs.current[i] = el;
                      }}
                      type="button"
                      onClick={() => seekTo(chapter.time, i)}
                      className={cn(
                        "group min-w-[132px] shrink-0 rounded-lg border border-transparent border-l-2 px-2.5 py-2 text-left transition-colors lg:min-w-0",
                        activeChapter === i
                          ? "border-l-purple-300/80 border-purple-300/15 bg-gradient-to-r from-blue-500/12 via-purple-500/14 to-pink-500/10 text-white/90"
                          : "border-l-transparent text-white/45 hover:border-purple-300/10 hover:bg-purple-400/[0.06] hover:text-white/70"
                      )}
                      aria-pressed={activeChapter === i}
                    >
                      <span
                        className={cn(
                          "text-[9px] font-medium uppercase tracking-[0.16em]",
                          activeChapter === i ? "text-purple-200/55" : "text-white/35"
                        )}
                      >
                        {formatTime(chapter.time)}
                      </span>
                      <span className="mt-0.5 block text-xs font-medium leading-snug">{chapter.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {data.src && (
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="mt-3 inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-purple-300/15 bg-gradient-to-r from-blue-500/8 via-purple-500/10 to-pink-500/8 px-3 py-1.5 text-[11px] font-medium text-purple-100/65 transition-colors hover:border-purple-300/25 hover:from-blue-500/12 hover:via-purple-500/14 hover:to-pink-500/10 hover:text-white/85"
                >
                  <Maximize className="size-3.5" />
                  Fullscreen
                </button>
              )}
            </aside>
          </div>
        </div>
      </ScaleReveal>
    </ProductSection>
  );
}

