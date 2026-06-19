import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consult & Brief",
    desc: "We listen to your needs, visit the site and understand your vision, lifestyle and budget.",
  },
  {
    n: "02",
    title: "Design & 3D Visualise",
    desc: "2D layouts and photo-realistic 3D walkthroughs let you experience the space before we build.",
  },
  {
    n: "03",
    title: "Build & Execute",
    desc: "Skilled teams handle construction, interiors and finishing with strict quality checks.",
  },
  {
    n: "04",
    title: "Handover",
    desc: "We deliver a fully finished, Vastu-aligned, ready-to-move space — on time and turnkey.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-cream md:py-20">
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              How We Work
            </p>
            <div className="accent-rule mx-auto mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              A seamless journey, start to finish
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative h-full">
                <span className="font-display text-5xl font-semibold text-gold/40 transition-colors group-hover:text-gold">
                  {s.n}
                </span>
                <div className="mt-4 h-px w-full bg-cream/15">
                  <div className="h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
