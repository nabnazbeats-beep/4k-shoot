"use client";

import Image from "next/image";
import { ArrowUpRight, Camera, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-subtle-1"
      aria-label="Accueil 4K Shoot Parakou"
    >
      <div className="section-container flex flex-col items-center text-center space-y-8">
        {/* Pill Badge */}
        <div className="mb-6 flex justify-center w-full px-2 animate-hero-1">
          <span className="badge-pill-indigo max-w-full">
            <Sparkles className="w-3.5 h-3.5 text-[#818CF8] shrink-0" />
            <span className="hidden sm:inline">
              PHOTOGRAPHE PROFESSIONNEL &amp; VIDÉASTE · PARAKOU &amp; TOUT LE BÉNIN
            </span>
            <span className="sm:hidden text-[11px] tracking-normal font-semibold">
              PHOTOGRAPHE &amp; VIDÉASTE · PARAKOU &amp; BÉNIN
            </span>
          </span>
        </div>

        {/* Punchy Clean Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-5xl animate-hero-2">
          Vos moments précieux capturés avec{" "}
          <span className="text-gradient-indigo">perfection.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg sm:text-xl text-[#94A3B8] font-normal leading-relaxed animate-hero-3">
          Portraits solo en studio, mariages féeriques, photos de famille et vidéos publicitaires de marque. Basé à Parakou, disponible pour vos événements à Cotonou et partout au Bénin.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 animate-hero-4">
          <a
            href="#contact"
            className="btn-shimmer px-7 py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-sm font-semibold tracking-wide transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10">Réserver une séance photo</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
          </a>

          <a
            href="#work"
            className="btn-shimmer-subtle px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center gap-2 hover:border-indigo-400/40 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#818CF8] relative z-10" />
            <span className="relative z-10">Voir le portfolio</span>
          </a>
        </div>

        {/* 3 Quick Micro-Reassurances */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#94A3B8] pt-2 animate-hero-5">
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105 duration-200">
            <MapPin className="w-4 h-4 text-[#818CF8]" />
            <span>Studio équipé à Parakou</span>
          </div>
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105 duration-200">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>Déplacements Cotonou &amp; tout le Bénin</span>
          </div>
          <div className="flex items-center gap-1.5 transition-transform hover:scale-105 duration-200">
            <span className="w-2 h-2 rounded-full bg-[#818CF8]" />
            <span>Retouches HD livrées sous 48-72h</span>
          </div>
        </div>

        {/* Compact, Beautiful Studio & Shooter Frame */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#151926] mt-6 animate-hero-image transition-all hover:border-indigo-500/30">
          <Image
            src="/images/studio_hero_cotonou.jpg"
            alt="Séance photo au Studio 4K Shoot Parakou"
            fill
            priority
            className="object-cover brightness-90 contrast-105 hover:scale-[1.02] transition-transform duration-700 ease-out"
            sizes="(max-width: 1088px) 100vw, 1088px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0B0E]/80 via-transparent to-transparent" />

          {/* Discreet corner badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-[#0A0B0E]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white transition-all hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-[#818CF8] animate-pulse" />
            <span>Studio Photo 4K Shoot · Parakou</span>
          </div>
        </div>
      </div>
    </section>
  );
}
