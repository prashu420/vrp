export const site = {
  name: "VRP Interiors",
  tagline: "Designing Spaces, Building Dreams",
  description:
    "VRP Interiors is a Jaipur-based interior design & construction company crafting luxurious, Vastu-aligned living and working spaces — from 2D & 3D architectural drawings to complete turnkey delivery.",
  phone: "8426093444",
  phoneIntl: "+918426093444",
  email: "pawanatm01@gmail.com",
  address: "78, Brij Mandal Colony, Jhotwara, Jaipur, Rajasthan",
  mapsQuery: "Brij Mandal Colony, Jhotwara, Jaipur, Rajasthan",
  whatsapp: "918426093444",
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
      "Precise 2D floor plans and photo-realistic 3D visualizations that let you walk through your space before a single brick is laid.",
    icon: "blueprint",
  },
  {
    title: "Architectural Consultant",
    description:
      "Expert guidance on layout, structure, light and flow — practical, code-compliant designs tailored to your plot and budget.",
    icon: "compass",
  },
  {
    title: "Interiors",
    description:
      "Bespoke interiors for homes and offices — modular kitchens, wardrobes, false ceilings, lighting and statement décor.",
    icon: "sofa",
  },
  {
    title: "Construction",
    description:
      "End-to-end civil construction with quality materials, skilled teams and transparent timelines you can rely on.",
    icon: "crane",
  },
  {
    title: "Vastu Consultant",
    description:
      "Harmonize your space with authentic Vastu Shastra principles to invite positivity, prosperity and balance.",
    icon: "compass-rose",
  },
  {
    title: "Turnkey Projects",
    description:
      "From the first sketch to the final handover — one accountable partner delivering a ready-to-move, fully finished space.",
    icon: "key",
  },
];
