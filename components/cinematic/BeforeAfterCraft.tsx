"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterCraft() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Container with widescreen cinema aspect ratio */}
      <div
        ref={containerRef}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Comparaison Avant et Après étalonnage couleur"
        onKeyDown={handleKeyDown}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        data-cursor="DRAG"
        className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden rounded-sm border border-white/10 select-none bg-[#050505] cursor-ew-resize focus:outline-hidden focus:ring-1 focus:ring-white/30"
      >
        {/* Under layer: Master Graded image (Full width) */}
        <div className="absolute inset-0">
          <Image
            src="/images/craft_graded.jpg"
            alt="Étalonnage Finalisé 35mm Master Grade"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Graded Label Badge */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-none z-10 flex flex-col items-end text-right">
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#F5F5F2] uppercase bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
              GRADE FINAL // 35MM EMULATION
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#A0A0A0] mt-1 hidden sm:block">
              ACEScc · DCI-P3 · KODAK 5219 PRINT
            </span>
          </div>
        </div>

        {/* Top clipped layer: Raw S-Log3 image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
            <Image
              src="/images/craft_raw.jpg"
              alt="Capteur Brut S-Log3 non étalonné"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          {/* Raw Label Badge */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-none z-10 flex flex-col items-start text-left">
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-[#A0A0A0] uppercase bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
              BRUT CAPTEUR // S-LOG3 RAW
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#606060] mt-1 hidden sm:block">
              15+ STOPS · BASE ISO 800 · UNCORRECTED
            </span>
          </div>
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/90 border border-white/40 backdrop-blur-md flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110 active:scale-95">
            <svg
              className="w-4 h-4 text-[#F5F5F2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Preset Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-[#A0A0A0]">
        <div className="flex items-center gap-2">
          <span>Glisser pour comparer</span>
          <span className="text-[#606060]">//</span>
          <span className="text-[#F5F5F2]">{Math.round(sliderPosition)}%</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-3 py-1 rounded-sm border transition-all text-[11px] uppercase ${
              sliderPosition === 100
                ? "bg-white text-black border-white"
                : "border-white/10 hover:border-white/30 text-[#A0A0A0]"
            }`}
          >
            100% Brut
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1 rounded-sm border transition-all text-[11px] uppercase ${
              sliderPosition === 50
                ? "bg-white text-black border-white"
                : "border-white/10 hover:border-white/30 text-[#A0A0A0]"
            }`}
          >
            Split 50/50
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-3 py-1 rounded-sm border transition-all text-[11px] uppercase ${
              sliderPosition === 0
                ? "bg-white text-black border-white"
                : "border-white/10 hover:border-white/30 text-[#A0A0A0]"
            }`}
          >
            100% Étalonné
          </button>
        </div>
      </div>
    </div>
  );
}
