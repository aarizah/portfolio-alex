"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Maximize, Play } from "lucide-react";
import type { VideoDemoData } from "@/content/case-studies/types";
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

export function VideoDemoSection({ data }: VideoDemoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

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
        <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] shadow-[0_32px_100px_rgba(59,130,246,0.10)] lg:grid-cols-[1fr_320px]">
          <div className="relative bg-black">
            {data.src ? (
              <video
                ref={videoRef}
                src={data.src}
                poster={data.poster}
                controls
                preload="metadata"
                className="aspect-video w-full bg-black object-cover"
              />
            ) : (
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-black">
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

          <aside className="flex flex-col justify-between border-t border-white/[0.08] bg-black/55 p-5 text-left lg:border-l lg:border-t-0">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                Demo beats
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible scrollbar-hide">
                {data.chapters.map((chapter, i) => (
                  <button
                    key={chapter.label}
                    type="button"
                    onClick={() => seekTo(chapter.time, i)}
                    className={cn(
                      "group min-w-[170px] rounded-2xl border p-4 text-left transition-all lg:min-w-0",
                      activeChapter === i
                        ? "border-white/25 bg-white text-black"
                        : "border-white/[0.08] bg-white/[0.035] text-white/65 hover:border-white/16 hover:bg-white/[0.065] hover:text-white"
                    )}
                    aria-pressed={activeChapter === i}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-45">
                      {formatTime(chapter.time)}
                    </span>
                    <span className="mt-1 block text-sm font-semibold">{chapter.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {data.src && (
              <button
                type="button"
                onClick={handleFullscreen}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <Maximize className="size-4" />
                Fullscreen
              </button>
            )}
          </aside>
        </div>
      </ScaleReveal>
    </ProductSection>
  );
}
