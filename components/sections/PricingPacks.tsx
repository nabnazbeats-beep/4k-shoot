"use client";

import { pricingPacks } from "@/data/siteContent";
import { Check, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PricingPacks() {
  return (
    <section
      id="pricing"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-3"
      aria-label="Tarifs et Formules"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="badge-pill-indigo m-0">
                ✦ TARIFS TRANSPARENTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Des formules adaptées à vos{" "}
              <span className="text-gradient-indigo">projets</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Séances photos au studio à Parakou ou reportages photo &amp; vidéo en déplacement à Cotonou et partout au Bénin.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPacks.map((pack, idx) => {
            const isPopular = pack.isPopular;

            if (isPopular) {
              // Highlighted Electric Indigo & Royal Violet Card
              return (
                <ScrollReveal
                  key={pack.id}
                  variant="scale-up"
                  delay={idx * 120}
                  className="h-full flex"
                >
                  <div className="w-full rounded-2xl bg-gradient-to-br from-[#6366F1] via-[#7C3AED] to-[#8B5CF6] text-white p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-[#6366F1]/30 relative group transform lg:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-wider uppercase bg-black/40 text-white px-3 py-1 rounded-full border border-white/20">
                          {pack.badge || "POPULAIRE"}
                        </span>
                        <span className="text-xs font-semibold text-white/90">
                          TOUT INCLUS
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-2xl font-bold text-white">
                          {pack.name}
                        </h3>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {pack.priceFCFA}
                          </span>
                          <span className="text-xs text-white/80">
                            {pack.period}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-1">
                          {pack.description}
                        </p>
                      </div>

                      <div className="border-t border-white/20 pt-5 space-y-2.5">
                        {pack.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm text-white">
                            <Check className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <a
                        href="#contact"
                        className="btn-shimmer-dark w-full py-3.5 rounded-full bg-white hover:bg-black text-[#6366F1] hover:text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span className="relative z-10">{pack.ctaLabel}</span>
                        <ArrowUpRight className="w-4 h-4 relative z-10" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }

            // Standard Dark Card
            return (
              <ScrollReveal
                key={pack.id}
                variant="fade-up"
                delay={idx * 120}
                className="h-full flex"
              >
                <div className="w-full rounded-2xl bg-[#12141A] border border-white/10 hover:border-[#6366F1]/50 p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 group">
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
                        {pack.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {pack.priceFCFA}
                        </span>
                        <span className="text-xs text-[#94A3B8]">
                          {pack.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed pt-1">
                        {pack.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-5 space-y-2.5">
                      {pack.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                          <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#6366F1]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href="#contact"
                      className="btn-shimmer-subtle w-full py-3 rounded-full border border-white/15 bg-white/5 hover:bg-[#6366F1] hover:border-[#6366F1] text-white text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="relative z-10">{pack.ctaLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

