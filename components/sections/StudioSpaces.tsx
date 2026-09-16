"use client";

import { photoServices } from "@/data/siteContent";
import { MessageCircle, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StudioSpaces() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-2"
      aria-label="Prestations Photo et Vidéo"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="badge-pill-indigo m-0">
                ✦ PRESTATIONS &amp; EXPERTISES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Des clichés d&apos;exception pour{" "}
              <span className="text-gradient-indigo">chaque instant</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed">
              Au studio photo à Parakou ou en déplacement sur votre événement à Cotonou et dans tout le Bénin.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photoServices.map((service, index) => {
            if (service.isFeaturedCta) {
              // Highlighted Indigo-Violet Card
              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={index * 100}
                  className="h-full flex"
                >
                  <div className="w-full rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white p-7 flex flex-col justify-between shadow-xl shadow-indigo-500/25 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="space-y-3 relative z-10">
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full inline-block">
                      SUR MESURE
                    </span>
                    <h3 className="text-2xl font-bold leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 relative z-10">
                    <a
                      href="https://wa.me/22997000000?text=Bonjour%204K%20Shoot,%20je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance%20photo%20ou%20un%20tournage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-full bg-white text-[#4F46E5] hover:bg-[#0A0B0E] hover:text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Échanger sur WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          }

          // Standard Dark Card with subtle border glow
          return (
            <ScrollReveal
              key={service.id}
              variant="fade-up"
              delay={index * 100}
              className="h-full flex"
            >
              <div className="w-full rounded-2xl bg-[#151926]/80 border border-white/10 hover:border-[#818CF8]/50 p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1.5 shadow-md shadow-black/40 backdrop-blur-xs group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-xs font-bold text-[#818CF8] group-hover:scale-110 transition-transform">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider text-[#38BDF8] uppercase">
                      DISPONIBLE
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#818CF8] transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-sm text-[#818CF8] block font-medium">
                      {service.tagline}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3.5 space-y-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8]">
                      <Check className="w-4 h-4 text-[#818CF8] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
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
