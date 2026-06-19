import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "VRP Interiors turned our 3BHK into a dream home. The 3D walkthrough was exactly what we got in real life — no surprises, just quality.",
    name: "Rohit & Neha Sharma",
    role: "Residence, Jhotwara",
  },
  {
    quote:
      "Professional team, transparent pricing and on-time turnkey delivery. Their Vastu planning gave us real peace of mind.",
    name: "Anil Agarwal",
    role: "Villa, Vaishali Nagar",
  },
  {
    quote:
      "From architectural drawings to the final handover, everything was handled by one team. Our office looks stunning and functional.",
    name: "Priya Mehta",
    role: "Office, C-Scheme",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Client Love
            </p>
            <div className="accent-rule mx-auto mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
              Trusted by families &amp; businesses
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative h-full rounded-2xl border border-ink/5 bg-sand p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
                <span className="font-display absolute right-6 top-2 text-6xl leading-none text-gold/20">
                  &rdquo;
                </span>
                <Stars />
                <blockquote className="mt-5 text-sm leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-gold-soft">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
