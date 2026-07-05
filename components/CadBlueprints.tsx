"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

type BlueprintItem = {
  title: string;
  src: string;
  description: string;
};

const bedroomBlueprints: BlueprintItem[] = [
  {
    title: "Floor Layout & Furniture Plan",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-01.pdf",
    description: "Detailed bedroom zoning, entrance axes, and furniture spatial coordinates aligned to Vastu standards.",
  },
  {
    title: "Guest Bedroom Layout Detail",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-02.pdf",
    description: "Millimeter-precise carpentry dimensions, wardrobe clearances, and bed platform offsets.",
  },
  {
    title: "Master Bed Wardrobe Section & Elev.",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-03.pdf",
    description: "Internal shelving heights, drawer spacing, hanger rail levels, and exterior wood laminate elevations.",
  },
  {
    title: "Master Bedroom Electrical Plan",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-04.pdf",
    description: "Conduit layouts, switchboard ratings, pendant drop points, and custom warm profile light routings.",
  },
  {
    title: "Bed & Wall Paneling Carpentry",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-05.pdf",
    description: "Material specifications, structural backing frames, and fluted panel joining details.",
  },
  {
    title: "Ceiling & Lighting Section Plan",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-06.pdf",
    description: "False ceiling drop levels, profile channel sections, and hidden cove light routing diagrams.",
  },
  {
    title: "3D CAD Orthographic Model",
    src: "/gallery/guest-master-bedroom/blueprints/blueprint-model.pdf",
    description: "Three-dimensional axonometric wireframe model illustrating interlocking structural components.",
  },
  {
    title: "Living Room Layout Blueprint",
    src: "/gallery/living-room-blueprint.png",
    description: "Double-height media wall elevation framing structural columns and electrical conduit channels.",
  },
];

export default function CadBlueprints() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const active = bedroomBlueprints[activeIdx] ?? bedroomBlueprints[0];

  const handleDownload = (e: React.MouseEvent, src: string) => {
    e.stopPropagation();
  };

  return (
    <section id="blueprints" className="relative bg-ink py-16 md:py-24 text-cream overflow-hidden">
      {/* Blueprint Grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 relative">
        <div className="max-w-xl mb-12 md:mb-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              Architectural Detailing
            </p>
            <div className="accent-rule mt-4 bg-gold-soft" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              Precision CAD Blueprints
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-cream/70">
              We translate creative visions into constructible reality. Explore our execution sheets, structural schedules, electrical maps, and detailed carpentry layouts that guarantee error-free on-site implementation.
            </p>
          </Reveal>
        </div>

        {/* Visualizer Console */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Screen Viewer */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-3 sm:p-4 shadow-2xl relative min-h-[380px] sm:min-h-[450px] md:min-h-[580px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 flex-shrink-0" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                <span className="ml-2 text-xs font-mono text-white/50 tracking-wider truncate max-w-[200px] sm:max-w-none">
                  {active.title.toLowerCase().replace(/ /g, "_")}.{active.src.split(".").pop()}
                </span>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={() => setFullscreen(true)}
                  className="rounded-lg bg-white/5 p-2 text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                  title="View Fullscreen"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m-11.25 11.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                  </svg>
                </button>
                <a
                  href={active.src}
                  download
                  className="rounded-lg bg-gold/90 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-gold transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Sheet
                </a>
              </div>
            </div>

            {/* Viewer Screen Frame */}
            <div className="flex-grow rounded-2xl bg-white overflow-hidden relative flex items-center justify-center p-1 border border-white/5 min-h-[260px] sm:min-h-[350px] md:min-h-[420px]">
              {active.src.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={`${active.src}#toolbar=0&navpanes=0`}
                  className="h-full w-full border-none rounded-xl"
                  title={active.title}
                />
              ) : (
                <div className="relative h-full w-full min-h-[240px] sm:min-h-[300px]">
                  <Image
                    src={active.src}
                    alt={active.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Bottom Caption bar */}
            <div className="mt-4 border-t border-white/5 pt-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">Sheet Description</span>
              <p className="text-xs text-cream/70 mt-1">{active.description}</p>
            </div>
          </div>

          {/* Right Column: Sheet Selection List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col gap-3 lg:max-h-[580px] lg:overflow-y-auto pr-2 custom-scrollbar">
            {bedroomBlueprints.map((bp, index) => {
              const isSelected = index === activeIdx;
              const isPdf = bp.src.toLowerCase().endsWith(".pdf");

              return (
                <button
                  key={bp.src}
                  onClick={() => setActiveIdx(index)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-gold bg-white/10 text-white shadow-lg shadow-black/30 translate-x-1"
                      : "border-white/5 bg-white/5 text-cream/80 hover:bg-white/8 hover:border-white/10"
                  }`}
                >
                  {/* Drawing index number */}
                  <span className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-bold font-mono transition-colors ${
                    isSelected ? "bg-gold text-white" : "bg-white/5 text-white/60"
                  }`}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>

                  {/* Title & tag info */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold truncate pr-2 group-hover:text-gold transition-colors">
                        {bp.title}
                      </h4>
                      <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isPdf ? "bg-red-500/20 text-red-400 border border-red-500/20" : "bg-blue-500/20 text-blue-400 border border-blue-500/20"
                      }`}>
                        {isPdf ? "PDF" : "PNG"}
                      </span>
                    </div>
                    <p className={`text-xs mt-1.5 line-clamp-1 leading-normal ${
                      isSelected ? "text-cream/80" : "text-muted"
                    }`}>
                      {bp.description}
                    </p>
                  </div>

                  {/* External download icon */}
                  <a
                    href={bp.src}
                    download
                    onClick={(e) => handleDownload(e, bp.src)}
                    className="p-1 rounded-lg text-white/40 hover:text-gold hover:bg-white/15 transition-all self-center ml-1"
                    title="Download individual file"
                  >
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Fullscreen Overlay Viewer */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-ink p-4 md:p-8"
          onClick={() => setFullscreen(false)}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between pb-4">
            <h4 className="font-display text-lg font-semibold text-white truncate max-w-[60%]">
              {active.title} — Full Screen Blueprint
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={active.src}
                download
                className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-gold hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Download Drawing
              </a>
              <button
                onClick={() => setFullscreen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Fullscreen"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="mx-auto w-full max-w-7xl flex-grow overflow-hidden rounded-2xl bg-white shadow-2xl flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {active.src.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={`${active.src}#toolbar=0&navpanes=0`}
                className="h-full w-full border-none rounded-xl"
                title={active.title}
              />
            ) : (
              <div className="relative h-full w-full min-h-[450px]">
                <Image
                  src={active.src}
                  alt={active.title}
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
