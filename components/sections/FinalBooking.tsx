"use client";

import { useState } from "react";
import { Check, MessageCircle, Send, CheckCircle2, Phone, MapPin, Compass } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalBooking() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    serviceType: "Shooting Solo / Portrait Studio (Parakou)",
    location: "Studio Parakou",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-28 bg-gradient-subtle-2"
      aria-label="Réservation et Contact"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <ScrollReveal variant="fade-right" delay={100} className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="badge-pill-indigo m-0">
                  <span className="hidden sm:inline">✦ STUDIO À PARAKOU • MOBILITÉ TOUT LE BÉNIN</span>
                  <span className="sm:hidden">✦ STUDIO PARAKOU &amp; MOBILITÉ BÉNIN</span>
                </span>
              </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Prêt à sublimer <br />
              <span className="text-gradient-indigo">vos moments ?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Que ce soit dans notre studio photo tout équipé à <strong className="text-white">Parakou</strong> ou en déplacement à <strong className="text-white">Cotonou</strong> et partout au Bénin pour vos mariages, événements, photos de famille ou spots publicitaires.
            </p>

            <div className="space-y-3 pt-1">
              {[
                "Studio photo équipé à Parakou (éclairages pro, fonds multiples)",
                "Déplacements assurés à Cotonou, Porto-Novo, Bohicon et tout le Bénin",
                "Photos haute définition retouchées & montages vidéo 4K",
                "Couverture complète mariage, famille, événement et publicité",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-white">
                  <div className="w-5 h-5 rounded-full bg-[#6366F1]/15 text-[#818CF8] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp & Contact */}
            <div className="pt-3 space-y-3">
              <a
                href="https://wa.me/22997000000?text=Bonjour%204K%20Shoot,%20je%20souhaite%20r%C3%A9server%20un%20shooting%20photo%20ou%20vid%C3%A9o"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current relative z-10" />
                <span className="relative z-10">WhatsApp Direct Photographe</span>
              </a>

              <div className="flex flex-col space-y-2 text-sm text-[#94A3B8] pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#6366F1]" />
                  <span><strong className="text-white">Studio :</strong> Parakou, Bénin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#38BDF8]" />
                  <span><strong className="text-white">Déplacements :</strong> Cotonou et toutes les villes du Bénin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6366F1]" />
                  <a href="tel:+22997000000" className="hover:text-white transition-colors">
                    +229 97 00 00 00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Clean Form */}
        <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-7">
          <div className="bg-[#12141A] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-indigo-500/30 transition-colors">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-[#6366F1]" />
                <h3 className="text-xl font-bold text-white">Demande transmise avec succès</h3>
                <p className="text-sm sm:text-base text-[#94A3B8] max-w-sm">
                  Le photographe vous recontacte rapidement par WhatsApp pour valider la date et préparer votre shooting.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-shimmer-subtle mt-3 px-5 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10 cursor-pointer"
                >
                  <span className="relative z-10">Envoyer une autre demande</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#94A3B8] block">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Brice Bio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white placeholder-[#555] focus:outline-hidden focus:border-[#6366F1] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#94A3B8] block">
                      WhatsApp ou Téléphone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+229 ..."
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white placeholder-[#555] focus:outline-hidden focus:border-[#6366F1] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#94A3B8] block">
                      Prestation souhaitée *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white focus:outline-hidden focus:border-[#6366F1] transition-colors"
                    >
                      <option value="Shooting Solo / Portrait Studio (Parakou)">Shooting Portrait Studio (Parakou)</option>
                      <option value="Shooting Famille & Maternité">Shooting Famille &amp; Maternité</option>
                      <option value="Mariage & Cérémonie (Tout Bénin)">Mariage &amp; Cérémonie (Tout Bénin)</option>
                      <option value="Événement, Concert & Gala">Événement, Concert &amp; Gala</option>
                      <option value="Publicité, Packshot Produit & Spot">Publicité, Packshot Produit &amp; Spot</option>
                      <option value="Autre projet sur mesure">Autre projet sur mesure</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#94A3B8] block">
                      Lieu de la séance
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white focus:outline-hidden focus:border-[#6366F1] transition-colors"
                    >
                      <option value="Studio Parakou">Au studio à Parakou</option>
                      <option value="Extérieur Parakou">En extérieur à Parakou</option>
                      <option value="Déplacement Cotonou">En déplacement à Cotonou</option>
                      <option value="Déplacement Porto-Novo">En déplacement à Porto-Novo</option>
                      <option value="Autre ville Bénin">Autre ville au Bénin</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#94A3B8] block">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white focus:outline-hidden focus:border-[#6366F1] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#94A3B8] block">
                    Vos attentes &amp; détails
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Parlez-nous de l'occasion, du style souhaité, du nombre de personnes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#181B24] border border-white/10 rounded-xl text-sm text-white placeholder-[#555] focus:outline-hidden focus:border-[#6366F1] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-shimmer w-full py-3.5 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#6366F1]/25 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                >
                  {isLoading ? (
                    <span className="relative z-10">Envoi en cours...</span>
                  ) : (
                    <>
                      <span className="relative z-10">Réserver mon shooting / Demander un devis</span>
                      <Send className="w-3.5 h-3.5 relative z-10" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
}

