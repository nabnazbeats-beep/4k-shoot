"use client";

import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { ArrowUpRight, Camera } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  return (
    <section
      id="work"
      className="relative w-full py-20 md:py-28 bg-[#0A0B0E]"
      aria-label="Portfolio Photographe et Vidéaste"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="mb-6">
                <span className="badge-pill-indigo m-0">
                  ✦ PORTFOLIO SÉLECTIONNÉ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Des instants précieux figés avec{" "}
                <span className="text-gradient-indigo">émotion</span>.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-md leading-relaxed">
              Découvrez un aperçu de nos séances studio, mariages, familles et publicités au Bénin.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Project Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              variant="fade-up"
              delay={idx * 120}
              className="h-full"
            >
              <div
                onClick={() => onSelectProject(proj)}
                className="group cursor-pointer rounded-2xl bg-[#131624] border border-white/10 overflow-hidden shadow-lg hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0B0E]">
                  <Image
                    src={proj.coverImage}
                    alt={proj.title}
                    fill
                    className="object-cover brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0B0E]/90 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold tracking-wider text-white uppercase bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {proj.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-[#818CF8] uppercase block">
                        {proj.client}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
                        {proj.title}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#6366F1] group-hover:border-[#6366F1] group-hover:text-white transition-all shrink-0">
                      <Camera className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between text-sm text-[#94A3B8] border-t border-white/5 bg-[#131624]">
                  <span>{proj.camera} · {proj.year}</span>
                  <span className="text-[#818CF8] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform text-sm">
                    <span>Voir la séance</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
