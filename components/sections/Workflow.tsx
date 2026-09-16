"use client";

import { workflowSteps } from "@/data/siteContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-1"
      aria-label="Comment ça marche"
    >
      <div className="section-container flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="badge-pill-indigo m-0">
                ✦ DÉROULEMENT D&apos;UN SHOOTING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Comment{" "}
              <span className="text-gradient-indigo">ça se passe ?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Un accompagnement chaleureux et professionnel pour des photos et vidéos qui subliment votre histoire.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workflowSteps.map((step, idx) => (
            <ScrollReveal
              key={step.step}
              variant="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-[#12141A] border border-white/10 p-7 flex flex-col space-y-4 hover:border-[#6366F1]/50 hover:bg-[#151822] transition-all duration-300 hover:-translate-y-1.5 group">
                <div className="w-10 h-10 rounded-full bg-[#6366F1]/15 border border-[#6366F1]/30 flex items-center justify-center text-sm font-bold text-[#818CF8] group-hover:scale-110 group-hover:bg-[#6366F1] group-hover:text-white transition-all">
                  {step.step}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-[#818CF8] uppercase block">
                    {step.iconTag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A5B4FC] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

