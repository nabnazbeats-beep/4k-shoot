"use client";

import { testimonials } from "@/data/siteContent";
import { Star, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-2"
      aria-label="Témoignages Clients"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="badge-pill-indigo m-0">
                ✦ AVIS DE NOS CLIENTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Ceux qui nous font{" "}
              <span className="text-gradient-indigo">confiance</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Particuliers, mariés, familles et entreprises de Parakou et de tout le Bénin partagent leur expérience.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={idx * 140}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-[#12141A] border border-white/10 p-7 flex flex-col justify-between space-y-5 hover:border-[#6366F1]/50 hover:bg-[#151822] transition-all duration-300 hover:-translate-y-1.5 group">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="border-t border-white/5 pt-3.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-white">
                    <span>{t.author}</span>
                    <CheckCircle className="w-4 h-4 text-[#6366F1]" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#94A3B8]">
                    {t.role}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#818CF8]">
                    {t.brand}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

