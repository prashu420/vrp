"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { WhatsApp, ArrowRight } from "./Icons";

type Configuration = {
  id: string;
  name: string;
  sqft: number;
  icon: string;
};

type QualityTier = {
  id: string;
  name: string;
  pricePerSqft: number;
  description: string;
  brands: string[];
  materials: string[];
};

type ServiceOption = {
  id: string;
  name: string;
  baseCost: number;
  description: string;
};

const configs: Configuration[] = [
  { id: "1bhk", name: "1 BHK Apartment", sqft: 650, icon: "🏢" },
  { id: "2bhk", name: "2 BHK Apartment", sqft: 1100, icon: "🏠" },
  { id: "3bhk", name: "3 BHK Apartment", sqft: 1600, icon: "🏰" },
  { id: "4bhk", name: "4 BHK / Penthouse", sqft: 2400, icon: "💎" },
  { id: "villa", name: "Luxury Villa / Rowhouse", sqft: 3500, icon: "🏛️" },
  { id: "office", name: "Corporate Office", sqft: 1200, icon: "💼" },
];

const tiers: QualityTier[] = [
  {
    id: "smart",
    name: "Smart / Value",
    pricePerSqft: 750,
    description: "Functional, durable, and highly budget-friendly interiors with clean modern finishes.",
    brands: ["Merino Laminates", "Greenply Commercial", "Hettich Standard", "Asian Paints Tractor"],
    materials: ["18mm MDF & Particle Board", "0.8mm Gloss Laminate", "Stainless Steel Handles", "Standard LEDs"],
  },
  {
    id: "premium",
    name: "Premium Comfort",
    pricePerSqft: 1350,
    description: "The ideal balance. Premium moisture-resistant materials, soft-close hardware, and designer finishes.",
    brands: ["Greenply BWP Gold", "Century Laminates", "Hettich Soft-Close", "Asian Paints Royale Premium"],
    materials: ["Boiling Water Proof (BWP) Plywood", "1mm Acrylic & Textured Finishes", "Soft-Close Hinges & Tandem Drawers", "LED Profiles & COBs"],
  },
  {
    id: "luxe",
    name: "Luxury / Elite",
    pricePerSqft: 2450,
    description: "Architect-curated custom layout. Elite finishes, Italian marble accents, high-end veneer, and top-tier German motion technology.",
    brands: ["Century Club Prime BWP", "Hafele / Blum Motion", "Saint-Gobain Glass", "Asian Paints PU Finish & Veneer"],
    materials: ["Premium Marine Plywood (IS:710)", "Natural Wood Veneer & Matte PU Paint", "Hafele Lift-ups & Drawer Runners", "Magnetic Profile Lights & Tinted Glass Wardrobes"],
  },
];

const services: ServiceOption[] = [
  { id: "kitchen", name: "Premium Modular Kitchen", baseCost: 180000, description: "L-shape/U-shape layout, chimney area, wicker basket, and premium bottle pullout." },
  { id: "wardrobe", name: "Custom Bedroom Wardrobes", baseCost: 120000, description: "Built-in sliding or swing wardrobes with multi-functional internal organizers." },
  { id: "ceiling", name: "False Ceiling & Ambient Lights", baseCost: 75000, description: "Gypsum designer ceiling with concealed profile LED lights and spotlights." },
  { id: "paneling", name: "Living Room Feature Wall", baseCost: 65000, description: "Fluted charcoal or louvers paneling with marble-textured UV sheets and TV console." },
  { id: "vastu", name: "Vastu Shastra Optimization", baseCost: 15000, description: "Expert direction check, layout alignment, and energy balancing layout consult." },
  { id: "civil", name: "Civil & Flooring Works", baseCost: 110000, description: "Demolition, tile/marble overlay, premium electrical rewiring, and bathroom plumbing." },
];

export default function CostEstimator() {
  const [step, setStep] = useState(1);
  const [selectedConfig, setSelectedConfig] = useState(configs[1]); // default 2 BHK
  const [selectedTier, setSelectedTier] = useState(tiers[1]); // default Premium
  const [selectedServices, setSelectedServices] = useState<string[]>(["kitchen", "wardrobe", "ceiling"]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Budget calculations
  const baseAreaCost = selectedConfig.sqft * selectedTier.pricePerSqft;
  let servicesCost = 0;

  // Scale services cost based on config size multiplier
  const sizeMultiplier = selectedConfig.sqft / 1200; // normalized around 1200 sqft
  // Also adjust services base cost slightly based on tier chosen
  const tierMultiplier = selectedTier.id === "smart" ? 0.85 : selectedTier.id === "luxe" ? 1.45 : 1.0;

  selectedServices.forEach((sId) => {
    const service = services.find((s) => s.id === sId);
    if (service) {
      // Vastu consultancy has a flat fee, others scale with size
      const multiplier = service.id === "vastu" ? 1 : sizeMultiplier;
      servicesCost += service.baseCost * multiplier * tierMultiplier;
    }
  });

  const totalCost = baseAreaCost + servicesCost;
  // Create a realistic range (-8% to +12%)
  const minCost = Math.round((totalCost * 0.92) / 10000) * 10000;
  const maxCost = Math.round((totalCost * 1.12) / 10000) * 10000;

  const formatRupees = (num: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const getWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map((sId) => services.find((s) => s.id === sId)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hello VRP Interiors! I generated an estimate on your website and would like to discuss my project:
    
- **Property Size**: ${selectedConfig.name} (~${selectedConfig.sqft} sq.ft.)
- **Quality Package**: ${selectedTier.name} Tier
- **Selected Works**: ${serviceNames || "None selected"}
- **Estimated Budget Range**: ${formatRupees(minCost)} - ${formatRupees(maxCost)}

Please contact me for a detailed discussion and a site visit in Jaipur.`;

    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppMessage(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="estimator" className="relative bg-sand py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Budget Planner
            </p>
            <div className="accent-rule mx-auto mt-4" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
              Estimate your project cost
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Get an instant, transparent estimate for your home or workspace. Choose your configuration, select materials, and request a detailed site evaluation.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto max-w-5xl rounded-3xl border border-ink/5 bg-cream shadow-luxe overflow-hidden">
            {/* Step Progress Bar */}
            <div className="flex border-b border-ink/5 bg-ink text-cream/60">
              {[
                { step: 1, label: "Configuration" },
                { step: 2, label: "Quality Tier" },
                { step: 3, label: "Scope & Services" },
                { step: 4, label: "Est. Summary" },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => s.step < step && setStep(s.step)}
                  disabled={s.step > step}
                  className={`flex-1 py-4 text-center text-xs font-semibold uppercase tracking-wider transition-colors border-r border-cream/5 last:border-0 ${
                    step === s.step
                      ? "bg-gold text-white font-bold"
                      : s.step < step
                      ? "text-cream hover:bg-cream/5 cursor-pointer"
                      : "opacity-40 cursor-not-allowed"
                  }`}
                >
                  <span className="hidden sm:inline">Step 0{s.step}: </span>
                  {s.label}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-10 min-h-[420px] flex flex-col justify-between">
              {/* Step 1: Configuration */}
              {step === 1 && (
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-6">
                    Select your property size or configuration
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {configs.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedConfig(c)}
                        className={`flex flex-col items-center justify-center p-6 rounded-2xl border text-center transition-all ${
                          selectedConfig.id === c.id
                            ? "border-gold bg-gold/5 shadow-md scale-[1.02]"
                            : "border-ink/10 hover:border-gold hover:bg-white"
                        }`}
                      >
                        <span className="text-3xl mb-3">{c.icon}</span>
                        <span className="block text-sm font-semibold text-ink">{c.name}</span>
                        <span className="block text-xs text-muted mt-1">~{c.sqft} Sq. Ft.</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Quality Tier */}
              {step === 2 && (
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    Choose your material quality &amp; finishes package
                  </h3>
                  <p className="text-xs text-muted mb-6">Pricing scales based on structural materials and hardware brands used.</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {tiers.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTier(t)}
                        className={`flex flex-col text-left p-6 rounded-2xl border transition-all ${
                          selectedTier.id === t.id
                            ? "border-gold bg-gold/5 shadow-md scale-[1.02] ring-1 ring-gold"
                            : "border-ink/10 hover:border-gold hover:bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-center w-full mb-3">
                          <span className="text-base font-bold text-ink">{t.name}</span>
                          <span className="text-xs font-semibold text-gold bg-gold/15 px-2.5 py-1 rounded-full">
                            ₹{t.pricePerSqft}/sqft
                          </span>
                        </div>
                        <p className="text-xs text-muted leading-relaxed mb-4 flex-grow">
                          {t.description}
                        </p>
                        <div className="border-t border-ink/5 pt-4 w-full">
                          <span className="block text-[10px] uppercase tracking-wider font-semibold text-ink/70 mb-2">Key Brands:</span>
                          <ul className="space-y-1 mb-3">
                            {t.brands.slice(0, 3).map((brand) => (
                              <li key={brand} className="text-xs flex items-center gap-1.5 text-ink/80">
                                <span className="h-1 w-1 rounded-full bg-gold" />
                                {brand}
                              </li>
                            ))}
                          </ul>
                          <span className="block text-[10px] uppercase tracking-wider font-semibold text-ink/70 mb-2">Core Spec:</span>
                          <p className="text-xs text-muted truncate">{t.materials[0]}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Scope & Services */}
              {step === 3 && (
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    Select scope of works to include
                  </h3>
                  <p className="text-xs text-muted mb-6">Toggle specific modules to custom-tailor your exact requirements.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((s) => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
                            isSelected
                              ? "border-gold bg-gold/5 shadow-sm scale-[1.01]"
                              : "border-ink/10 hover:border-gold hover:bg-white"
                          }`}
                        >
                          <div className="mt-1 flex-shrink-0">
                            <div className={`h-5 w-5 rounded-md border flex items-center justify-center transition-colors ${
                              isSelected ? "bg-gold border-gold text-white" : "border-ink/20"
                            }`}>
                              {isSelected && (
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              )}
                            </div>
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-ink">{s.name}</span>
                            <p className="mt-1 text-xs text-muted leading-relaxed">
                              {s.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Summary Result */}
              {step === 4 && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                      Your Design Estimate Range
                    </h3>
                    <p className="text-sm text-muted mb-6">
                      Calculated for a **{selectedConfig.name}** (~{selectedConfig.sqft} sqft) with **{selectedTier.name}** level specifications.
                    </p>

                    <div className="bg-sand/35 rounded-2xl p-6 border border-ink/5">
                      <div className="flex justify-between items-center pb-4 border-b border-ink/10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">Specification Package</span>
                        <span className="text-sm font-bold text-ink">{selectedTier.name}</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-ink/10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">Area-based Base Cost</span>
                        <span className="text-sm font-semibold text-ink">{formatRupees(baseAreaCost)}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">Selected Scope Added</span>
                        <span className="text-sm font-semibold text-ink">{formatRupees(servicesCost)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 border border-gold/20 rounded-3xl bg-gold/5 shadow-[0_20px_40px_-20px_rgba(199,154,75,0.2)]">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">Estimated Range</span>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      {formatRupees(minCost)}
                    </div>
                    <span className="text-xs font-medium text-muted my-1">to</span>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-gold">
                      {formatRupees(maxCost)}
                    </div>
                    <p className="text-[10px] text-muted mt-3 leading-relaxed">
                      *Estimates are indicative for Jaipur. Excludes structural repairs, actual price depends on final material selection.
                    </p>

                    <button
                      onClick={handleWhatsAppClick}
                      className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                    >
                      <WhatsApp className="h-4 w-4" />
                      Discuss on WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-ink/5">
                <button
                  onClick={() => setStep((s) => s - 1)}
                  disabled={step === 1}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border border-ink/15 transition-colors ${
                    step === 1
                      ? "opacity-30 cursor-not-allowed text-muted"
                      : "text-ink hover:bg-ink hover:text-white cursor-pointer"
                  }`}
                >
                  Back
                </button>

                {step < 4 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-gold hover:underline cursor-pointer"
                  >
                    Recalculate Estimate
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
