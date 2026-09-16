"use client";

import { useEffect, useRef, useState } from "react";
import { achievements } from "@/data/siteContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(achievements.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1400;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const newCounts = achievements.map((a) =>
              Math.floor(a.value * easeProgress)
            );
            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(achievements.map((a) => a.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-20 border-y border-white/5 bg-[#0D0F14]"
      aria-label="Chiffres Clés du Studio"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="flex flex-col space-y-1.5 border-l border-white/10 pl-5 hover:border-[#818CF8] transition-colors group">
                <div className="flex items-baseline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tabular-nums tracking-tight group-hover:translate-x-1 transition-transform">
                  <span>{counts[idx]}</span>
                  <span className="text-[#6366F1] text-2xl sm:text-3xl ml-0.5 group-hover:text-[#818CF8] transition-colors">
                    {item.suffix}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
