"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { X, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, Calendar, MapPin } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentProject, setCurrentProject] = useState<Project | null>(project);

  // Sync internal state with prop
  useEffect(() => {
    setCurrentProject(project);
  }, [project]);

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (!currentProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentProject, onClose]);

  if (!currentProject) return null;

  const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
  const totalProjects = projects.length;

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalProjects;
    setCurrentProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    setCurrentProject(projects[prevIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentProject.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="badge-pill-indigo text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>{currentProject.category}</span>
          </span>
          <span className="text-xs font-medium text-[#94A3B8] hidden sm:inline-block">
            {currentIndex + 1} / {totalProjects}
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Fermer la vue"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold tracking-wider transition-all cursor-pointer backdrop-blur-md"
        >
          <span>Fermer</span>
          <span className="text-white/40 text-[10px]">[ESC]</span>
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
        </button>
      </div>

      {/* Main Lightbox Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center pt-12 sm:pt-14 pb-2">
        {/* Previous Button (Desktop) */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Photo précédente"
          className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#6366F1] border border-white/20 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button (Desktop) */}
        <button
          onClick={handleNext}
          type="button"
          aria-label="Photo suivante"
          className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-[#6366F1] border border-white/20 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* The Stylish Image Frame */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[58vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-indigo-500/15 bg-[#0D0F17]">
          <Image
            key={currentProject.id}
            src={currentProject.coverImage}
            alt={currentProject.title}
            fill
            priority
            className="object-cover animate-in fade-in zoom-in-95 duration-300"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Minimal Stylish Caption Bar */}
        <div className="w-full mt-3.5 p-4 sm:p-5 rounded-2xl bg-[#121522]/90 border border-white/10 backdrop-blur-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#818CF8]">
              <span className="font-semibold">{currentProject.client}</span>
              <span className="text-white/20">•</span>
              <span className="text-[#94A3B8] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {currentProject.year}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {currentProject.title}
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
              {currentProject.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-indigo-500/25 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">Réserver un shooting</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

