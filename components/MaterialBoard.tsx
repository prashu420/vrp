"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type MaterialItem = {
  id: string;
  name: string;
  type: string;
  usage: string;
  spec: string;
  style: {
    bg: string;
    border?: string;
    pattern?: string;
  };
};

type MoodBoardStyle = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  materials: MaterialItem[];
};

const boards: MoodBoardStyle[] = [
  {
    id: "muted-luxury",
    name: "Muted Luxury",
    tagline: "Contemporary Warmth & Brass",
    description: "A timeless blend of dark charcoal tones, natural oak textures, and polished brass accents. Perfect for premium duplexes and contemporary living rooms in Jaipur.",
    materials: [
      {
        id: "oak",
        name: "Natural Oak Veneer",
        type: "Premium Timber Veneer",
        usage: "TV Units, Custom Wardrobes & Wall Panels",
        spec: "Natural grain, matte PU coating, 0.4mm veneer on BWP Ply",
        style: {
          bg: "bg-[#bca07d]",
          pattern: "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, #d3bba0, #bc9f82)",
        },
      },
      {
        id: "marble",
        name: "Calacatta Gold Quartz",
        type: "Sintered Stone / Engineered Quartz",
        usage: "Kitchen Countertops, Island Tops & Bathroom Vanity",
        spec: "15mm thick, scratch-proof, heat-resistant, high-gloss polish",
        style: {
          bg: "bg-[#e8e6e1]",
          pattern: "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 80%), linear-gradient(135deg, #e8e6e1 20%, #dcdad4 50%, #eeebe5 80%)",
          border: "border-gold/20",
        },
      },
      {
        id: "charcoal",
        name: "Charcoal Fluted Louvers",
        type: "Polystyrene Wall Panel",
        usage: "Feature Walls, Bed Headboard & Accent Pillars",
        spec: "12mm profile depth, termite-proof, moisture-resistant",
        style: {
          bg: "bg-[#2b2724]",
          pattern: "repeating-linear-gradient(90deg, #2b2724, #2b2724 10px, #1a1715 10px, #1a1715 12px)",
        },
      },
      {
        id: "brass",
        name: "Brushed Brass Trims",
        type: "Anodized T-Profile",
        usage: "Wall Paneling Grooves & Wardrobe Handle Trims",
        spec: "PVD coated, scratch-resistant, anti-fingerprint brushed finish",
        style: {
          bg: "bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a018]",
          border: "border-gold",
        },
      },
      {
        id: "boucle",
        name: "Off-White Bouclé",
        type: "Premium Knitted Fabric",
        usage: "Accent Chairs, Custom Curved Sofas & Cushions",
        spec: "450 GSM upholstery fabric, high rub test score, stain-guarded",
        style: {
          bg: "bg-[#f4f2ed]",
          pattern: "radial-gradient(circle, #e0ddd6 20%, transparent 20%) 0 0, radial-gradient(circle, #e0ddd6 20%, transparent 20%) 4px 4px",
        },
      },
    ],
  },
  {
    id: "japandi",
    name: "Minimalist Japandi",
    tagline: "Eco-friendly, Functional & Calm",
    description: "Combining Japanese minimalism with Scandinavian warmth. Emphasizes organic cottons, terrazzo stonework, light ash timbers, and natural concrete washes.",
    materials: [
      {
        id: "ash",
        name: "Light Ash Timber",
        type: "Solid Ash Wood & Laminates",
        usage: "Dining Table Tops, Open Shelving & Dining Chairs",
        spec: "FSC certified timber, organic wax sealer, eco-friendly",
        style: {
          bg: "bg-[#e5dcd2]",
          pattern: "linear-gradient(to bottom, #eae2da 0%, #dcd3c8 100%)",
        },
      },
      {
        id: "terrazzo",
        name: "Terrazzo Quartz",
        type: "Composite Ceramic Quartz",
        usage: "Kitchen Backsplashes, Powder Room & Niche Shelves",
        spec: "Recycled porcelain aggregates, polished, stain-proof",
        style: {
          bg: "bg-[#dedbd5]",
          pattern: "radial-gradient(circle, #8a7f72 8%, transparent 8%) 0 0, radial-gradient(circle, #bca07d 5%, transparent 5%) 8px 8px, radial-gradient(circle, #2b2724 4%, transparent 4%) 4px 12px",
        },
      },
      {
        id: "linen",
        name: "Organic Flax Linen",
        type: "Natural Fibers",
        usage: "Curtains, Sheers & Bed Sheets",
        spec: "100% pure flax, pre-washed, breathable natural drapes",
        style: {
          bg: "bg-[#ded6ca]",
          pattern: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 2px, transparent 2px, transparent 4px)",
        },
      },
      {
        id: "iron",
        name: "Matte Black Hardware",
        type: "Powder Coated Metal",
        usage: "Taps, Cabinet Knobs, Spotlight Tracks & Window Frames",
        spec: "Anti-rust, matte finish, soft-close hydraulic joints",
        style: {
          bg: "bg-[#1f1e1d]",
        },
      },
      {
        id: "wabisabi",
        name: "Micro-concrete Plaster",
        type: "Textured Lime Wash",
        usage: "Accent Walls, Ceiling Panels & Arched Alcoves",
        spec: "Breathable mineral plaster, jointless hand-troweled finish",
        style: {
          bg: "bg-[#cfcbc4]",
          pattern: "radial-gradient(circle at 30% 20%, #d8d5ce 0%, #c4bfb7 100%)",
        },
      },
    ],
  },
  {
    id: "royal-classic",
    name: "Royal Classic",
    tagline: "Regal Jaipur Heritage Redefined",
    description: "Deep walnut timbers, gold accents, royal emerald velvets, and striking marble floors. Bringing the palace vibe into luxury Jaipur residences.",
    materials: [
      {
        id: "walnut",
        name: "Burr Walnut Veneer",
        type: "Premium Exotic Wood Veneer",
        usage: "Main Doors, Ceiling Beams & Wardrobe Accents",
        spec: "Exotic burr grain, mirror-gloss polyester finish",
        style: {
          bg: "bg-[#543b2a]",
          pattern: "linear-gradient(to right, #402c1f, #5a412e, #493323)",
        },
      },
      {
        id: "emerald",
        name: "Emerald Green Velvet",
        type: "Royal Velvet Fabric",
        usage: "Upholstered Headboards, Wing Chairs & Cushions",
        spec: "High pile thickness, water-repellent coating, flame-retardant",
        style: {
          bg: "bg-[#093e30]",
        },
      },
      {
        id: "white-marble",
        name: "Statuary White Marble",
        type: "Imported Italian Marble",
        usage: "Living Room Floor, Pooja Room & Arch Inlays",
        spec: "Pre-polished slabs, book-matched veining, crystal white",
        style: {
          bg: "bg-[#fafafa]",
          pattern: "linear-gradient(45deg, transparent 45%, #d1d1d1 48%, #c2c2c2 50%, #d1d1d1 52%, transparent 55%), linear-gradient(-45deg, transparent 40%, #e0e0e0 43%, #d6d6d6 45%, #e0e0e0 47%, transparent 50%)",
          border: "border-gold/30",
        },
      },
      {
        id: "gold-inlay",
        name: "Polished Gold PVD Inlay",
        type: "Stainless Steel Inlay Profile",
        usage: "Flooring Borders & TV Wall Inlays",
        spec: "Grade 304 stainless steel, PVD gold plating, flush alignment",
        style: {
          bg: "bg-[#e5c158]",
          pattern: "linear-gradient(to right, #cfaf4b, #eed885, #c7a743)",
        },
      },
      {
        id: "wallpaper",
        name: "Metallic Damask Wallpaper",
        type: "Non-woven Embossed Wallpaper",
        usage: "Pooja Room Backdrop, Bedroom Accent Wall",
        spec: "Eco-friendly inks, scrubbable wash test passed, golden sheen",
        style: {
          bg: "bg-[#dbceb5]",
          pattern: "repeating-radial-gradient(circle, #cca862 0%, #dbceb5 10px, #dbceb5 30px)",
        },
      },
    ],
  },
];

export default function MaterialBoard() {
  const [activeBoard, setActiveBoard] = useState(boards[0]);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(boards[0].materials[0]);

  const selectBoard = (id: string) => {
    const board = boards.find((b) => b.id === id);
    if (board) {
      setActiveBoard(board);
      setSelectedMaterial(board.materials[0]);
    }
  };

  return (
    <section id="materials" className="relative bg-cream py-16 md:py-20 overflow-hidden">
      {/* Background radial elements */}
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text copy & controls */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Material Board
              </p>
              <div className="accent-rule mt-4" />
            </Reveal>

            <Reveal delay={80}>
              <h2 className="font-display mt-6 text-3xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl">
                Tactile palettes, luxury finishes
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Explore how we layer textures to orchestrate emotional response in a space. Select an aesthetic scheme below, then click any material swatch on the board to view its quality specifications and applications.
              </p>
            </Reveal>

            {/* Board Selector Tabs */}
            <Reveal delay={200} className="mt-8">
              <div className="flex flex-col gap-2.5">
                {boards.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => selectBoard(b.id)}
                    className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                      activeBoard.id === b.id
                        ? "border-gold bg-ink text-cream shadow-md"
                        : "border-ink/10 hover:border-gold/45 text-ink/80 hover:bg-sand/30"
                    }`}
                  >
                    <span className="text-sm font-semibold">{b.name}</span>
                    <span className={`text-xs mt-1 ${activeBoard.id === b.id ? "text-gold-soft" : "text-muted"}`}>
                      {b.tagline}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Board & Details */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center">
            {/* Swatch Collage */}
            <Reveal delay={240} className="w-full md:w-1/2 aspect-square max-w-[340px] relative">
              <div className="absolute inset-0 bg-sand/35 rounded-3xl border border-ink/5 shadow-inner p-6 flex items-center justify-center">
                {/* Asymmetric layout of swatches */}
                {activeBoard.materials.map((m, idx) => {
                  const isSelected = selectedMaterial.id === m.id;
                  
                  // Coordinate positions for collage look
                  const positions = [
                    "top-[10%] left-[10%] w-[45%] h-[45%] z-10",  // 0: Oak/Ash/Walnut
                    "bottom-[12%] right-[10%] w-[50%] h-[50%] z-0", // 1: Marble
                    "top-[12%] right-[12%] w-[38%] h-[38%] z-10",  // 2: Fluted panel
                    "bottom-[15%] left-[15%] w-[30%] h-[30%] z-20", // 3: Brass Trim
                    "top-[40%] left-[30%] w-[36%] h-[36%] z-20",  // 4: Boucle/Linen/Velvet
                  ];

                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMaterial(m)}
                      style={{
                        backgroundImage: m.style.pattern ?? undefined,
                        backgroundSize: m.style.pattern ? "cover" : undefined,
                      }}
                      className={`absolute rounded-2xl cursor-pointer transition-all duration-300 ${
                        positions[idx]
                      } ${m.style.bg} ${m.style.border ? `border ${m.style.border}` : ""} ${
                        isSelected
                          ? "ring-4 ring-gold scale-105 z-30 shadow-lg translate-y-[-4px]"
                          : "shadow-md hover:scale-102 hover:shadow-lg"
                      }`}
                      aria-label={m.name}
                    >
                      {/* Swatch initial label */}
                      <span className={`absolute bottom-2.5 left-2.5 text-[8px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded backdrop-blur-sm ${
                        idx === 2 || idx === 3 ? "bg-white/90 text-ink" : "bg-ink/75 text-white"
                      }`}>
                        {m.name.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Material Details Card */}
            <Reveal delay={280} className="w-full md:w-1/2">
              <div className="border border-ink/5 bg-cream rounded-3xl p-6 shadow-luxe min-h-[260px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      style={{
                        backgroundImage: selectedMaterial.style.pattern ?? undefined,
                        backgroundSize: selectedMaterial.style.pattern ? "cover" : undefined,
                      }}
                      className={`h-5 w-5 rounded-full border border-ink/10 ${selectedMaterial.style.bg}`}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      {selectedMaterial.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {selectedMaterial.name}
                  </h3>
                  <div className="mt-4 space-y-3.5">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider font-semibold text-ink/50">
                        Primary Applications
                      </span>
                      <p className="mt-0.5 text-xs text-ink/80 leading-relaxed">
                        {selectedMaterial.usage}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider font-semibold text-ink/50">
                        Quality Specification
                      </span>
                      <p className="mt-0.5 text-xs text-muted leading-relaxed">
                        {selectedMaterial.spec}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-ink/5 pt-4 text-[10px] text-muted">
                  VRP Interiors sources premium raw materials directly from authorized partner brands (Hafele, Merino, Greenply, Century) to ensure authentic performance.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
