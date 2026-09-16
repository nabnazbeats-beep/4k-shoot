"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const triptychSets = [
  {
    image: "/images/fashion_noir.jpg",
    title: "Portraits en Studio",
    detail: "Éclairage d'art & retouches soignées à Parakou",
  },
  {
    image: "/images/studio_fashion.jpg",
    title: "Mariages & Événements",
    detail: "Couverture photo & vidéo dans tout le Bénin",
  },
  {
    image: "/images/luxury_watch.jpg",
    title: "Publicité & Packshot",
    detail: "Sublimation de vos produits et marques",
  },
];

export default function StudioTriptych() {
  return (
    <section
      className="relative w-full py-8 md:py-12 bg-[#0A0B0E]"
      aria-label="Aperçu des Shooting Photos"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {triptychSets.map((item, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#151926] shadow-xl hover:border-indigo-500/40 transition-colors">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0B0E]/90 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#818CF8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#94A3B8]">
                    {item.detail}
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
