"use client";

import { MistHero } from "./MistHero";
import { MistNav } from "./MistNav";

export function MistScene() {
  return (
    <div id="home" className="relative min-h-svh overflow-x-hidden">
      <MistNav />
      <MistHero />
    </div>
  );
}
