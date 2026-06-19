import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowRight, WhatsApp } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/living-room-01.jpeg"
          alt="Luxury living room interior by VRP Interiors"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-28 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="reveal is-visible mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Interiors · Architecture · Construction
          </p>

          <h1 className="font-display text-[2.1rem] font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Designing Spaces,
            <br />
            <span className="text-shimmer">Building Dreams</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Jaipur&apos;s trusted partner for luxury interiors, 2D &amp; 3D
            architectural design, Vastu consultation and end-to-end turnkey
            construction — crafted with precision and soul.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#portfolio"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(199,154,75,0.9)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi VRP Interiors, I'd like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              <WhatsApp className="h-4 w-4" />
              Free Consultation
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:gap-6 sm:pt-7">
            {[
              { n: "10+", l: "Years Experience" },
              { n: "250+", l: "Projects Delivered" },
              { n: "100%", l: "Turnkey Handover" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-semibold text-gold-soft sm:text-3xl">
                  {s.n}
                </dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-white/65 sm:text-xs">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
