"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Phone } from "./Icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#materials", label: "Materials" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#blueprints", label: "CAD Blueprints" },
  { href: "#estimator", label: "Estimator" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-[0_10px_30px_-20px_rgba(26,23,20,0.5)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={`grid h-11 w-11 place-items-center rounded-full border text-sm font-semibold tracking-tight transition-colors ${
              scrolled
                ? "border-gold/60 text-ink"
                : "border-white/50 text-white"
            }`}
          >
            VRP
          </span>
          <span className="leading-tight">
            <span
              className={`font-display block text-lg font-semibold tracking-wide transition-colors ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              VRP Interiors
            </span>
            <span
              className={`block text-[10px] uppercase tracking-[0.25em] transition-colors ${
                scrolled ? "text-muted" : "text-white/70"
              }`}
            >
              Jaipur
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? "text-ink/80 hover:text-ink" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneIntl}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-10px_rgba(199,154,75,0.8)] transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            open ? "text-cream" : scrolled ? "text-ink" : "text-white"
          }`}
        >
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-current transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl text-cream/90 transition-colors hover:text-gold"
          >
            {l.label}
          </a>
        ))}
        <a
          href={`tel:${site.phoneIntl}`}
          onClick={() => setOpen(false)}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-base font-semibold text-white"
        >
          <Phone className="h-5 w-5" />
          {site.phone}
        </a>
      </div>
    </header>
  );
}
