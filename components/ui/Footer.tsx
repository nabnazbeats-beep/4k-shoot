"use client";

import { ArrowUp, MapPin, Phone, Mail, Compass } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-[#08090C] border-t border-white/10 pt-16 pb-12"
      aria-label="Pied de page"
    >
      <div className="section-container flex flex-col space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1]" />
              <span>4K SHOOT</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Photographe &amp; Vidéaste professionnel basé à <strong className="text-white">Parakou</strong>. Studio photo tout équipé et déplacements assurés à <strong className="text-white">Cotonou</strong> et partout au Bénin pour immortaliser vos plus beaux moments.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white tracking-wider uppercase block">
              Prestations Photo &amp; Vidéo
            </span>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><a href="#services" className="hover:text-white transition-colors">Portraits &amp; Shooting Studio (Parakou)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mariages &amp; Événements (Tout Bénin)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Photos de Famille &amp; Maternité</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Spots Publicitaires &amp; Packshot Marques</a></li>
            </ul>
          </div>

          {/* Localisation & Mobilité */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white tracking-wider uppercase block">
              Localisation &amp; Contact
            </span>
            <div className="flex flex-col space-y-2.5 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
                <span><strong className="text-white">Studio :</strong> Parakou, Bénin</span>
              </div>
              <div className="flex items-start gap-2">
                <Compass className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span><strong className="text-white">Mobilité :</strong> Cotonou, Porto-Novo, Bohicon, Natitingou...</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6366F1] shrink-0" />
                <a href="tel:+22997000000" className="hover:text-white transition-colors">
                  +229 97 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6366F1] shrink-0" />
                <a href="mailto:contact@4kshoot.studio" className="hover:text-white transition-colors">
                  contact@4kshoot.studio
                </a>
              </div>
            </div>
          </div>

          {/* Scroll up */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-white tracking-wider uppercase block mb-2">
                Navigation
              </span>
              <button
                onClick={scrollToTop}
                type="button"
                className="btn-shimmer-subtle inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-[#6366F1] hover:text-white text-xs text-[#94A3B8] transition-all cursor-pointer"
              >
                <span className="relative z-10">Haut de page</span>
                <ArrowUp className="w-3.5 h-3.5 relative z-10" />
              </button>
            </div>
            <div className="text-xs text-[#64748B]">
              Séances studio sur rendez-vous à Parakou
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6 border-t border-white/5 text-xs sm:text-sm text-[#64748B]">
          <div>
            © {new Date().getFullYear()} 4K SHOOT. Photographe &amp; Vidéaste au Bénin.
          </div>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#contact" className="hover:text-white transition-colors">Réservation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
