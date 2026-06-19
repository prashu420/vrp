"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const enterCinema = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play();
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
    setPlaying(true);
  };

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-20">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              See It In Motion
            </p>
            <div className="accent-rule mx-auto mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Step inside our designs
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-cream/65">
              A cinematic walkthrough of the spaces we craft — from concept
              renders to lived-in luxury.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cream/10 shadow-luxe">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/gallery/living-room-02.jpeg"
              controls={playing}
            >
              <source src="/videos/showreel.mp4" type="video/mp4" />
            </video>

            {!playing && (
              <button
                onClick={enterCinema}
                aria-label="Play showreel with sound"
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-ink/70 via-ink/10 to-ink/20 transition-colors hover:bg-ink/30"
              >
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gold text-white shadow-[0_18px_40px_-12px_rgba(199,154,75,0.9)] transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold opacity-30" />
                  <svg viewBox="0 0 24 24" className="relative ml-1 h-8 w-8" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.25em] text-cream/90">
                  Watch Showreel
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
