"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Prestations", href: "#services" },
    { name: "Portfolio", href: "#work" },
    { name: "Studio & Mobilité", href: "#studio" },
    { name: "Tarifs", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "bg-[#0D0F17]/92 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6"
            : "bg-[#0D0F17]/80 backdrop-blur-lg border border-white/10 shadow-xl shadow-black/40 py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo Pill */}
          <Link href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-xl bg-[#0E1017] border border-indigo-500/40 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:border-indigo-400 group-hover:scale-105 transition-all">
              <span className="font-black text-xs tracking-tight select-none">
                <span className="text-white">4</span>
                <span className="bg-gradient-to-br from-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">K</span>
              </span>
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-white uppercase font-sans">
              4K SHOOT
            </span>
          </Link>

          {/* Desktop Navigation Links as Pill Items */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Shimmer Pill Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-indigo-500/25 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">Réserver un shooting</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Pill Styled Dropdown) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-35 bg-black/80 backdrop-blur-xl flex flex-col justify-start pt-24 px-6 md:hidden animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="rounded-3xl bg-[#121522] border border-white/15 p-6 shadow-2xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="badge-pill-indigo">
                ✦ 4K SHOOT · STUDIO &amp; PRODUCTION
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-shimmer w-full py-3.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="relative z-10">Réserver une séance photo</span>
                <ArrowUpRight className="w-4 h-4 relative z-10" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

