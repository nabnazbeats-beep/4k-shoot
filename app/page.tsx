"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

import Hero from "@/components/sections/Hero";
import StudioSpaces from "@/components/sections/StudioSpaces";
import StudioTriptych from "@/components/sections/StudioTriptych";
import ImmersiveServices from "@/components/sections/ImmersiveServices";
import SelectedWork from "@/components/sections/SelectedWork";
import Achievements from "@/components/sections/Achievements";
import Workflow from "@/components/sections/Workflow";
import Testimonials from "@/components/sections/Testimonials";
import PricingPacks from "@/components/sections/PricingPacks";
import FaqSection from "@/components/sections/FaqSection";
import FinalBooking from "@/components/sections/FinalBooking";
import ProjectModal from "@/components/cinematic/ProjectModal";

import { Project } from "@/data/projects";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative w-full min-h-screen flex flex-col bg-[#0A0B0E] text-white">
        {/* Clean Modern Navbar */}
        <Navbar />

      <main className="relative w-full flex flex-col">
        {/* 01: Hero Section */}
        <Hero />

        {/* 02: L'Espace de Tous les Possibles (Plateaux & Décors) */}
        <StudioSpaces />

        {/* 03: Triptyque Visuel des Décors */}
        <StudioTriptych />

        {/* 04: Services du Studio */}
        <ImmersiveServices />

        {/* 05: Réalisations Récents (Portfolio) */}
        <SelectedWork onSelectProject={(proj) => setActiveProject(proj)} />

        {/* 06: Chiffres Clés */}
        <Achievements />

        {/* 07: Comment ça marche ? */}
        <Workflow />

        {/* 08: Témoignages Clients */}
        <Testimonials />

        {/* 09: Formules & Tarifs en FCFA */}
        <PricingPacks />

        {/* 10: FAQ */}
        <FaqSection />

        {/* 11: Prêt à créer ? On t'attend. */}
        <FinalBooking />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  </SmoothScroll>
);
}
