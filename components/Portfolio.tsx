"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { categories, projects, type Project } from "@/lib/projects";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) =>
          i === null ? i : (i - 1 + filtered.length) % filtered.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  const current: Project | null =
    lightbox === null ? null : filtered[lightbox] ?? null;

  return (
    <section id="portfolio" className="relative bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Our Portfolio
              </p>
              <div className="accent-rule mt-4" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
                A catalogue of crafted spaces
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Explore a selection of our 3D visualisations across living
                rooms, bedrooms, kitchens and dining areas.
              </p>
            </Reveal>
          </div>

          {/* Filters */}
          <Reveal delay={120} className="w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                    active === c
                      ? "border-gold bg-gold text-white shadow-[0_12px_24px_-12px_rgba(199,154,75,0.9)]"
                      : "border-ink/15 text-ink/70 hover:border-gold hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 md:auto-rows-[300px] md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => {
            const wide = i % 6 === 0;
            return (
              <Reveal
                key={p.src}
                delay={(i % 4) * 70}
                className={`${wide ? "col-span-2 row-span-1" : ""}`}
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink text-left shadow-[0_20px_40px_-30px_rgba(26,23,20,0.7)]"
                >
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Caption: always visible on mobile (no hover on touch), reveals on hover on desktop */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:p-5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-soft md:text-[10px] md:tracking-[0.25em]">
                      {p.category}
                    </span>
                    <h3 className="font-display mt-0.5 text-sm font-semibold leading-snug text-white md:mt-1 md:text-lg">
                      {p.title}
                    </h3>
                  </div>
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white opacity-100 backdrop-blur-sm transition-all duration-500 md:right-4 md:top-4 md:h-9 md:w-9 md:bg-white/15 md:opacity-0 md:group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M21 3l-9 9M10 21H4v-6M4 21l9-9" />
                    </svg>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            onClick={() => setLightbox(null)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            aria-label="Previous"
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 md:left-8"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) =>
                i === null ? i : (i - 1 + filtered.length) % filtered.length
              );
            }}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </button>

          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={current.src}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-soft">
                {current.category}
              </span>
              <h3 className="font-display mt-1 text-xl font-semibold text-white">
                {current.title}
              </h3>
              <p className="mx-auto mt-1 max-w-md text-sm text-white/70">
                {current.blurb}
              </p>
            </figcaption>
          </figure>

          <button
            aria-label="Next"
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 md:right-8"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
