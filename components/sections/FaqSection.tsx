"use client";

import { useState } from "react";
import { faqItems } from "@/data/siteContent";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-1"
      aria-label="Foire Aux Questions"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col space-y-12">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="badge-pill-indigo m-0">
                ✦ FOIRE AUX QUESTIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Tu as des{" "}
              <span className="text-gradient-indigo">questions ?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Tout ce que vous devez savoir pour votre séance au studio à Parakou ou vos shootings à Cotonou et partout au Bénin.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordions */}
        <div className="flex flex-col space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={index * 60}
              >
                <div
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#151822] border-[#6366F1]/50 shadow-md shadow-indigo-500/10"
                      : "bg-[#12141A] border-white/5 hover:border-white/15"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden group"
                  >
                    <span className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-[#A5B4FC]" : "text-white group-hover:text-indigo-200"}`}>
                      {item.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-[#6366F1] text-white rotate-180" : "bg-white/5 text-[#94A3B8] group-hover:bg-white/10"
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

