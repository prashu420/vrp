import Reveal from "./Reveal";
import { ServiceIcon } from "./Icons";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-sand py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What We Do
            </p>
            <div className="accent-rule mx-auto mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
              Complete design &amp; build services
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Everything you need to imagine, plan and realise your dream
              space — under one roof.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/5 bg-cream p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
                <div className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                {/* Number watermark — top right, clearly visible */}
                <span className="absolute right-6 top-5 font-display text-4xl font-semibold text-gold/30 transition-colors duration-500 group-hover:text-gold/60">
                  0{i + 1}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-ink text-gold-soft transition-colors duration-500 group-hover:bg-gold group-hover:text-white">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
