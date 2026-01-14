"use client";

import Script from "next/script";

export function VantaLoader() {
  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // Dispatch custom event when VANTA is ready
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('vanta-loaded'));
          }
        }}
      />
    </>
  );
}
