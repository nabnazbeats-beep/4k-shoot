"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  previewImage: string;
  locationNote: string;
}

const servicesList: ServiceDetail[] = [
  {
    id: "portrait-studio",
    title: "Shooting Solo & Anniversaire",
    subtitle: "Au studio photo à Parakou",
    description:
      "Vivez une expérience photographique valorisante dans un studio équipé. Éclairages sculptés, conseils de poses bienveillants et retouches professionnelles naturelles.",
    deliverables: ["Clichés bruts fournis sous 24h", "5 à 10 photos retouchées HD", "Fonds variés & changements de tenues"],
    previewImage: "/images/fashion_noir.jpg",
    locationNote: "Studio Parakou",
  },
  {
    id: "mariages-evenements",
    title: "Mariages & Cérémonies",
    subtitle: "Déplacements à Cotonou & tout le Bénin",
    description:
      "Chaque émotion, chaque éclat de rire et chaque détail traditionnel capturés avec discrétion. Couverture photo complète et aftermovie vidéo 4K pour revivre cette journée unique.",
    deliverables: ["Reportage photo illimité", "Aftermovie vidéo 4K dynamique", "Album prestige sur demande"],
    previewImage: "/images/studio_fashion.jpg",
    locationNote: "Cotonou, Parakou, Porto-Novo...",
  },
  {
    id: "famille-grossesse",
    title: "Famille & Maternité",
    subtitle: "Des souvenirs tendres et intemporels",
    description:
      "La magie d'une grossesse, les rires des enfants ou un portrait de famille complice. Séance au studio de Parakou ou à votre domicile dans une ambiance détendue.",
    deliverables: ["Séance guidée tout en douceur", "10 à 15 photos retouchées soignées", "Tirages d'art disponibles"],
    previewImage: "/images/documentary.jpg",
    locationNote: "Studio ou à domicile",
  },
  {
    id: "publicite-marque",
    title: "Publicité & Packshot Produits",
    subtitle: "Pour commerces, marques et PME",
    description:
      "Augmentez l'attractivité de vos produits et services avec des photographies nettes et des spots vidéo publicitaires percutants pour vos réseaux sociaux et vos affichages.",
    deliverables: ["Photos packshot fond blanc/ambiance", "Vidéos publicitaires formats TV & Reels", "Cession des droits d'exploitation"],
    previewImage: "/images/luxury_watch.jpg",
    locationNote: "Studio & sur site d'entreprise",
  },
];

export default function ImmersiveServices() {
  const [activeService, setActiveService] = useState<ServiceDetail>(servicesList[0]);

  return (
    <section
      id="studio"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-3"
      aria-label="Studio Parakou et Mobilité Bénin"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="mb-6">
                <span className="badge-pill-indigo m-0">
                  ✦ STUDIO À PARAKOU &amp; MOBILITÉ BÉNIN
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                L&apos;art du regard, la précision du{" "}
                <span className="text-gradient-indigo">détail</span>.
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Un studio photo équipé à Parakou pour vos portraits, et une disponibilité totale pour vos mariages et tournages à Cotonou et partout au Bénin.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Clean Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Clean Tabs */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {servicesList.map((service, index) => {
              const isSelected = activeService.id === service.id;
              return (
                <ScrollReveal
                  key={service.id}
                  variant="fade-up"
                  delay={index * 90}
                >
                  <div
                    onClick={() => setActiveService(service)}
                    className={`p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? "bg-[#161B2E] border-[#6366F1]/60 shadow-lg shadow-indigo-500/15 translate-x-1.5"
                        : "bg-[#121522]/80 border-white/5 hover:border-white/15 hover:bg-[#141828]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold ${isSelected ? "text-[#818CF8]" : "text-[#64748B]"}`}>
                          0{index + 1}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-bold ${
                            isSelected ? "text-white" : "text-[#94A3B8]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 ${isSelected ? "bg-indigo-500/20 text-[#A5B4FC]" : "text-[#64748B]"}`}>
                        <MapPin className="w-3 h-3" />
                        <span>{service.locationNote}</span>
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-white/10 space-y-3 animate-in fade-in duration-300">
                        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.deliverables.map((deliv, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-md transition-transform hover:scale-105"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                              <span>{deliv}</span>
                            </span>
                          ))}
                        </div>

                        <div className="pt-3">
                          <a
                            href="#contact"
                            className="btn-shimmer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#6366F1]/20 hover:scale-105 cursor-pointer"
                          >
                            <span className="relative z-10">Réserver cette formule</span>
                            <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Media Viewport */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scale-up" delay={150}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#121522] shadow-xl hover:border-indigo-500/30 transition-colors">
                <Image
                  key={activeService.id}
                  src={activeService.previewImage}
                  alt={activeService.title}
                  fill
                  className="object-cover brightness-90 transition-all duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0B0E]/90 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-[#38BDF8] uppercase block">
                    4K SHOOT · PARAKOU &amp; BÉNIN
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {activeService.subtitle}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
