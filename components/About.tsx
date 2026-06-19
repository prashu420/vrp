import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

const highlights = [
  "Personalised designs tailored to your lifestyle & budget",
  "Photo-realistic 3D walkthroughs before construction begins",
  "Vastu-compliant planning for harmony & positivity",
  "Single accountable team from concept to handover",
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-16 md:py-20">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-6 md:px-10 lg:px-16 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxe sm:aspect-[4/5]">
            <Image
              src="/gallery/bedroom-02.jpeg"
              alt="Master bedroom with walk-in wardrobe"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-luxe sm:block md:w-56">
            <Image
              src="/gallery/kitchen-02.jpeg"
              alt="Modern modular kitchen"
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 hidden items-center gap-3 rounded-xl bg-ink px-5 py-4 text-cream shadow-luxe md:flex">
            <span className="font-display text-3xl font-semibold text-gold-soft">A→Z</span>
            <span className="text-xs leading-tight text-cream/80">
              Turnkey
              <br />
              Delivery
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About VRP Interiors
            </p>
            <div className="accent-rule mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
              Where thoughtful design meets flawless execution
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Based in Jhotwara, Jaipur, VRP Interiors is a full-service interior
              design and construction studio. We blend creativity, engineering
              discipline and Vastu wisdom to deliver homes and workspaces that
              are as functional as they are beautiful — managed end-to-end so you
              never have to coordinate a dozen vendors.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={180 + i * 70} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-ink/80">{h}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={460}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
