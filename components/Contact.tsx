"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { Mail, Phone, Pin, WhatsApp, ArrowRight } from "./Icons";

const serviceOptions = [
  "Architectural Drawing 2D & 3D",
  "Architectural Consultancy",
  "Interiors",
  "Construction",
  "Vastu Consultancy",
  "Turnkey Project",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: serviceOptions[0],
    message: "",
  });

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello VRP Interiors!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
      .replace(/%0A/g, "\n")
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waHref, "_blank", "noopener,noreferrer");
  };

  const details = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Call / WhatsApp",
      value: site.phone,
      href: `tel:${site.phoneIntl}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: <Pin className="h-5 w-5" />,
      label: "Studio",
      value: site.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`,
    },
  ];

  return (
    <section id="contact" className="relative bg-sand py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Get In Touch
              </p>
              <div className="accent-rule mt-4" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
                Let&apos;s design your dream space
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Share a few details and we&apos;ll get back to you with ideas, a
                site visit and a transparent estimate. Free first consultation.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={180 + i * 80}>
                  <a
                    href={d.href}
                    target={d.label === "Studio" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-2xl border border-ink/5 bg-cream p-5 transition-all hover:-translate-y-0.5 hover:shadow-luxe"
                  >
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-ink text-gold-soft transition-colors group-hover:bg-gold group-hover:text-white">
                      {d.icon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted">
                        {d.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-ink">
                        {d.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-ink/5 bg-cream p-7 shadow-luxe md:p-9"
            >
              <h3 className="font-display text-2xl font-semibold text-ink">
                Request a Free Consultation
              </h3>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll reply on WhatsApp within working hours.
              </p>

              <div className="mt-7 space-y-5">
                <Field label="Your Name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rohit Sharma"
                    className="input"
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="input"
                  />
                </Field>
                <Field label="Service Needed">
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="input"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project Details">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your space, location and timeline…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(199,154,75,0.9)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsApp className="h-4 w-4" />
                Send via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgba(26,23,20,0.12);
          background: #fff;
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input::placeholder { color: rgba(138,127,114,0.7); }
        .input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(199,154,75,0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/70">
        {label}
      </span>
      {children}
    </label>
  );
}
