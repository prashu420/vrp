export const site = {
  name: "VRP Interiors",
  tagline: "Designing Spaces, Building Dreams",
  description:
    "VRP Interiors is a Jaipur-based interior design & construction company crafting luxurious, Vastu-aligned living and working spaces — from JDA-compliant architectural drawings to complete turnkey delivery.",
  phone: "8426093444",
  phoneIntl: "+918426093444",
  email: "pawanatm01@gmail.com",
  address: "78, Brij Mandal Colony, Jhotwara, Jaipur, Rajasthan",
  mapsQuery: "Brij Mandal Colony, Jhotwara, Jaipur, Rajasthan",
  whatsapp: "918426093444",
  brands: [
    "Hafele",
    "Hettich",
    "Greenply BWP",
    "Century Club Prime",
    "Saint-Gobain",
    "Asian Paints Royale",
    "Blum Motion",
    "Somany Tiles",
  ],
  localities: [
    "Jhotwara",
    "Vaishali Nagar",
    "C-Scheme",
    "Mansarovar",
    "Malviya Nagar",
    "Jagatpura",
    "Chitrakoot",
  ],
} as const;

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Architectural Drawing 2D & 3D",
    description:
      "Precise JDA-compliant 2D floor plans and high-fidelity 3D architectural visualizations that let you walk through your space before a single brick is laid.",
    icon: "blueprint",
  },
  {
    title: "Architectural Consultant",
    description:
      "Expert consultation on structural engineering, cross-ventilation, natural light pathing, and space utilization tailored to your plot and JDA guidelines.",
    icon: "compass",
  },
  {
    title: "Luxury Interiors",
    description:
      "Bespoke modular kitchens, sliding tinted glass wardrobes, false ceilings with LED profile layouts, and curated accent walls styled for elite living.",
    icon: "sofa",
  },
  {
    title: "Turnkey Construction",
    description:
      "Full civil construction using premium materials (TATA steel, JK cement), managed by certified engineers with clear timeline tracking and zero contractor coordination.",
    icon: "crane",
  },
  {
    title: "Vastu Shastra Consultant",
    description:
      "Scientific Vastu guidelines to align entrance directions, water bodies, stove positions, and sleeping axes to invite positive energy and prosperity.",
    icon: "compass-rose",
  },
  {
    title: "Turnkey Handover Projects",
    description:
      "From preliminary sketches to final cleaning and key handover — a single accountable partner delivering a ready-to-move-in, fully realized dream space.",
    icon: "key",
  },
];
