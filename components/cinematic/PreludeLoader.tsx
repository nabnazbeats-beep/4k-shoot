"use client";

import { useEffect, useState } from "react";

interface PreludeLoaderProps {
  onComplete: () => void;
}

export default function PreludeLoader({ onComplete }: PreludeLoaderProps) {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [phase, setPhase] = useState<"black" | "logo" | "tagline" | "exit">("black");

  useEffect(() => {
    // Reduced motion shortcut
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    // Timecode simulation
    let frames = 0;
    const interval = setInterval(() => {
      frames += 1;
      const ff = String(frames % 24).padStart(2, "0");
      const ss = String(Math.floor(frames / 24) % 60).padStart(2, "0");
      setTimecode(`00:00:${ss}:${ff}`);
    }, 41); // ~24 FPS

    // Cinematic sequencing
    const t1 = setTimeout(() => setPhase("logo"), 350);
    const t2 = setTimeout(() => setPhase("tagline"), 1100);
    const t3 = setTimeout(() => setPhase("exit"), 2000);
    const t4 = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#050505] p-8 md:p-12 text-[#F5F5F2] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        phase === "exit" ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      {/* Top Bar: Camera reel data */}
      <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-[#606060] uppercase">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          REC // SCENE 01
        </span>
        <span>ROLL 04 // 24.00 FPS</span>
      </div>

      {/* Center: Brand & Tagline */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div
          className={`transition-all duration-700 ease-out transform ${
            phase !== "black" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div className="text-[10px] font-mono tracking-[0.35em] text-[#A0A0A0] uppercase mb-2">
            STUDIO CINÉMATOGRAPHIQUE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.25em] text-[#F5F5F2] font-serif">
            4K SHOOT
          </h1>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ease-out ${
            phase === "tagline" || phase === "exit"
              ? "max-h-12 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#A0A0A0] uppercase">
            DIRECTING // CINEMATOGRAPHY // 35MM COLOR
          </p>
        </div>
      </div>

      {/* Bottom Bar: Timecode counter & Skip */}
      <div className="w-full flex items-center justify-between text-xs font-mono tracking-widest text-[#A0A0A0]">
        <div className="flex items-center gap-3">
          <span className="text-[#606060]">TC</span>
          <span className="text-[#F5F5F2] tabular-nums font-mono">{timecode}</span>
        </div>
        <button
          onClick={onComplete}
          className="text-[11px] uppercase tracking-widest text-[#606060] hover:text-[#F5F5F2] transition-colors py-1 px-3 border border-white/10 rounded-full"
        >
          Passer [ESC]
        </button>
      </div>
    </div>
  );
}
