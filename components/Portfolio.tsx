"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { categories, projects, type Project } from "@/lib/projects";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { WhatsApp, ArrowRight } from "./Icons";

export default function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);


  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    const isLocked = lightbox !== null || pdfUrl !== null;
    if (!isLocked) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (pdfUrl !== null) {
          setPdfUrl(null);
        } else {
          setLightbox(null);
        }
      }
      if (pdfUrl === null && lightbox !== null) {
        if (e.key === "ArrowRight") {
          setLightbox((i) => {
            if (i === null) return i;
            const nextIdx = (i + 1) % filtered.length;
            setActiveImageIdx(0);
            return nextIdx;
          });
        }
        if (e.key === "ArrowLeft") {
          setLightbox((i) => {
            if (i === null) return i;
            const prevIdx = (i - 1 + filtered.length) % filtered.length;
            setActiveImageIdx(0);
            return prevIdx;
          });
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, pdfUrl, filtered.length]);


  const current: Project | null =
    lightbox === null ? null : filtered[lightbox] ?? null;

  const handleNextProject = () => {
    setLightbox((i) => {
      if (i === null) return i;
      const nextIdx = (i + 1) % filtered.length;
      setActiveImageIdx(0);
      return nextIdx;
    });
  };

  const handlePrevProject = () => {
    setLightbox((i) => {
      if (i === null) return i;
      const prevIdx = (i - 1 + filtered.length) % filtered.length;
      setActiveImageIdx(0);
      return prevIdx;
    });
  };

  const getWhatsAppInquiry = (proj: Project) => {
    const text = `Hi VRP Interiors! I was viewing your portfolio and I am interested in the case study: "${proj.title}" in ${proj.location}. I'd like to discuss a similar project for myself.`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

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
                Explore a selection of our premium 3D visualizations and turnkey project executions across Jaipur&apos;s finest residential and commercial spaces.
              </p>
            </Reveal>
          </div>

          {/* Filters */}
          <Reveal delay={120} className="w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActive(c);
                    setLightbox(null);
                  }}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all cursor-pointer ${
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
        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:auto-rows-[320px] md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => {
            const wide = i % 6 === 0;
            return (
              <Reveal
                key={p.src}
                delay={(i % 4) * 70}
                className={`${wide ? "col-span-2 row-span-1" : ""}`}
              >
                <button
                  onClick={() => {
                    setLightbox(i);
                    setActiveImageIdx(0);
                  }}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl bg-ink text-left shadow-[0_20px_40px_-30px_rgba(26,23,20,0.7)] cursor-pointer"
                >
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:p-5">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold-soft md:text-[10px] md:tracking-[0.25em]">
                        {p.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span className="text-[9px] uppercase tracking-wider text-white/60">
                        {p.location.split(",")[0]}
                      </span>
                    </div>
                    <h3 className="font-display mt-0.5 text-sm font-semibold leading-snug text-white md:mt-1 md:text-lg">
                      {p.title}
                    </h3>
                  </div>
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 md:right-4 md:top-4 md:h-9 md:w-9 md:bg-white/15 md:opacity-0 md:group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 md:p-6 backdrop-blur-md overflow-y-auto"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-cream rounded-3xl overflow-hidden shadow-2xl border border-ink/10 flex flex-col md:flex-row md:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              aria-label="Close Case Study"
              className="absolute right-5 top-5 z-50 grid h-10 w-10 place-items-center rounded-full bg-ink text-white border border-white/10 hover:bg-gold transition-colors cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Asymmetric Image Gallery Section */}
            <div className="relative w-full md:w-1/2 bg-ink flex flex-col justify-between p-4 md:p-6 min-h-[300px] md:min-h-[500px]">
              {/* Main Image Slider View */}
              <div className="relative flex-grow rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto bg-black/10 flex items-center justify-center">
                <button
                  onClick={() => setPdfUrl(current.gallery[activeImageIdx] ?? current.src)}
                  className="absolute inset-0 h-full w-full cursor-zoom-in"
                  title="Click to view full size"
                >
                  <Image
                    src={current.gallery[activeImageIdx] ?? current.src}
                    alt={`${current.title} - View 0${activeImageIdx + 1}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-contain"
                  />
                </button>

                {/* Left/Right Navigation inside Image Panel */}
                <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button
                    onClick={handlePrevProject}
                    className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-ink/75 text-white hover:bg-gold transition-colors shadow-md border border-white/5 cursor-pointer"
                    aria-label="Previous project"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextProject}
                    className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-ink/75 text-white hover:bg-gold transition-colors shadow-md border border-white/5 cursor-pointer"
                    aria-label="Next project"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail strip & Image selection */}
              <div className="mt-4 flex gap-2 overflow-x-auto py-1">
                {current.gallery.map((imgSrc, index) => (
                  <button
                    key={imgSrc}
                    onClick={() => setActiveImageIdx(index)}
                    className={`relative h-14 w-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIdx === index ? "border-gold scale-102" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`Thumbnail 0${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Case Study Text Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                    Case Study
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                    {current.category}
                  </span>
                </div>
                
                <h3 className="font-display mt-2 text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  {current.title}
                </h3>
                
                <p className="mt-2 text-xs italic text-muted">
                  &ldquo;{current.blurb}&rdquo;
                </p>

                {/* Case Study Metadata Grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/5 py-4 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm">📍</span>
                    <div>
                      <span className="block font-semibold text-ink/65 uppercase tracking-wider text-[9px]">Location</span>
                      <span className="mt-0.5 block font-medium text-ink/90">{current.location}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm">📐</span>
                    <div>
                      <span className="block font-semibold text-ink/65 uppercase tracking-wider text-[9px]">Area / Scale</span>
                      <span className="mt-0.5 block font-medium text-ink/90">{current.size}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm">⏱️</span>
                    <div>
                      <span className="block font-semibold text-ink/65 uppercase tracking-wider text-[9px]">Duration</span>
                      <span className="mt-0.5 block font-medium text-ink/90">{current.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm">🧭</span>
                    <div>
                      <span className="block font-semibold text-ink/65 uppercase tracking-wider text-[9px]">Vastu Alignment</span>
                      <span className="mt-0.5 block font-medium text-ink/90">{current.vastu.split(",")[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Scope of Work */}
                <div className="mt-4">
                  <span className="block font-semibold text-ink/65 uppercase tracking-wider text-[9px]">Scope of Works</span>
                  <span className="mt-1 inline-block rounded bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
                    {current.scope}
                  </span>
                </div>

                {/* Narrative Sections */}
                <div className="mt-6 space-y-4 text-xs md:text-sm leading-relaxed text-ink/80">
                  <div>
                    <h4 className="font-semibold text-ink uppercase tracking-wider text-[10px] mb-1">The Client Brief</h4>
                    <p className="text-muted">{current.brief}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink uppercase tracking-wider text-[10px] mb-1">Our Engineering &amp; Design Solution</h4>
                    <p className="text-muted">{current.solution}</p>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-ink/5 flex items-center justify-between">
                <a
                  href={getWhatsAppInquiry(current)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <WhatsApp className="h-4 w-4" />
                  Inquire on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={() => setLightbox(null)}
                  className="text-xs font-medium text-ink hover:underline cursor-pointer"
                >
                  Close Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer Overlay */}
      {pdfUrl && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-ink/95 p-4 md:p-8 backdrop-blur-md"
          onClick={() => setPdfUrl(null)}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between pb-4">
            <h4 className="font-display text-lg font-semibold text-white truncate max-w-[60%]">
              {current?.title ? `${current.title} — View 0${current.gallery.indexOf(pdfUrl) + 1}` : "View Image"}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-gold hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Download Drawing
              </a>
              <button
                onClick={() => setPdfUrl(null)}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close PDF Viewer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="mx-auto w-full max-w-6xl flex-grow overflow-hidden rounded-2xl bg-white shadow-2xl border border-white/10 flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {pdfUrl.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="h-full w-full border-none"
                title="Architectural Drawing PDF"
              />
            ) : (
              <div className="relative h-full w-full min-h-[400px]">
                <Image
                  src={pdfUrl}
                  alt="Architectural Drawing"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
