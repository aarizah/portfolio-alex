"use client";

import Script from "next/script";
import { useState } from "react";

export function VantaLoader() {
  const [threeReady, setThreeReady] = useState(false);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="lazyOnload"
        onLoad={() => setThreeReady(true)}
      />
      {threeReady && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("vanta-loaded"));
            }
          }}
        />
      )}
    </>
  );
}
