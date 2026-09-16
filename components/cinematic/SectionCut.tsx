"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionCut() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Kinetic text motion
      if (textRef.current && containerRef.current) {
        gsap.fromTo(
          textRef.current,
          { xPercent: 15 },
          {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }

      // Parallax film strip
      if (imageStripRef.current && containerRef.current) {
        gsap.fromTo(
          imageStripRef.current,
          { xPercent: -15, scale: 0.96 },
          {
            xPercent: 10,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-36 overflow-hidden bg-[#080808] border-y border-white/5 flex flex-col justify-center"
      aria-label="Transition Cinématique"
    >
      {/* Background oversized kinetic text */}
      <div
        ref={textRef}
        className="whitespace-nowrap select-none font-serif text-[14vw] md:text-[12vw] font-light leading-none tracking-tight text-white/[0.04] pointer-events-none uppercase"
      >
        CUT // SCENE 06 // LE PLAN PARLE AVANT LE MOT // 4K SHOOT //
      </div>

      {/* Foreground film slice banner */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full -mt-8 md:-mt-16">
        <div
          ref={imageStripRef}
          className="relative w-full aspect-[2.6/1] md:aspect-[3/1] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black"
        >
          <Image
            src="/images/hero.jpg"
            alt="Cinematic Transition Still"
            fill
            className="object-cover brightness-75 contrast-125"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Letterbox bars overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/80" />

          {/* Lens data badge */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3 text-[10px] md:text-xs font-mono tracking-widest text-white/70 uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            TRANSITION CUT // T1.4 // 50MM ANAMORPHIC
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-[10px] md:text-xs font-mono tracking-widest text-white/50 uppercase">
            FPS: 24.000 // SHUTTER: 180.0°
          </div>
        </div>
      </div>
    </section>
  );
}
