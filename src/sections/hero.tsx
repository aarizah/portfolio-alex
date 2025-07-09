"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Prueba from "./prueba";


export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { resolvedTheme } = useTheme(); // accedemos al tema activo

  // efecto secundario para inicializar o reinicializar Vanta
  useEffect(() => {
    if (!vantaRef.current || typeof window === "undefined" || !window.VANTA || !window.THREE) return;

    // si ya hay un efecto, lo destruimos antes de crear uno nuevo
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const newEffect = window.VANTA.BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: resolvedTheme === "dark" ? 0x000000 : 0xffffff,
      separation: 71.00,
    });

    // ajustar el canvas para evitar conflictos
    const canvas = newEffect?.el?.querySelector("canvas");
    if (canvas) {
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.zIndex = "0";
      canvas.style.pointerEvents = "none";
    }

    setVantaEffect(newEffect);

    return () => {
      newEffect?.destroy();
    };
  }, [resolvedTheme]); // vuelve a correr cada vez que cambia el tema

  return (
    
      <div ref={vantaRef} className="relative w-full h-screen overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-foreground text-center px-4">
          <h1 className="text-4xl font-bold">Reimagining the Future</h1>
          <p className="mt-4 text-lg">With Artificial Intelligence</p>
          <Button className="mt-6">Explore my work</Button>
        </div>
        
      </div>  
  );
}
