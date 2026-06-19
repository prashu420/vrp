export type Category = "Living Room" | "Bedroom" | "Kitchen" | "Dining";

export type Project = {
  src: string;
  title: string;
  category: Category;
  blurb: string;
};

export const categories: ("All" | Category)[] = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Dining",
];

export const projects: Project[] = [
  {
    src: "/gallery/living-room-01.jpeg",
    title: "Grand Living & Dining",
    category: "Living Room",
    blurb: "Double-height living room with fluted wood paneling and a sculpted media wall.",
  },
  {
    src: "/gallery/living-room-02.jpeg",
    title: "Marble & Gold Lounge",
    category: "Living Room",
    blurb: "Open-plan lounge framed by an onyx feature wall and warm cove lighting.",
  },
  {
    src: "/gallery/living-room-03.jpeg",
    title: "Contemporary Sitting Room",
    category: "Living Room",
    blurb: "Plush sectional, brass accents and a sculptural floor lamp set the mood.",
  },
  {
    src: "/gallery/living-room-04.jpeg",
    title: "Designer Family Lounge",
    category: "Living Room",
    blurb: "U-shaped seating, textured wall panels and a soft, layered palette.",
  },
  {
    src: "/gallery/living-room-05.jpeg",
    title: "Tropical Accent Living",
    category: "Living Room",
    blurb: "A botanical mural and arched niches bring nature indoors.",
  },
  {
    src: "/gallery/bedroom-01.jpeg",
    title: "Master Bedroom Retreat",
    category: "Bedroom",
    blurb: "Fluted headboard wall, round dresser mirror and warm ambient lighting.",
  },
  {
    src: "/gallery/bedroom-02.jpeg",
    title: "Suite with Walk-in Wardrobe",
    category: "Bedroom",
    blurb: "Glass-front walk-in closet flows seamlessly into the sleeping zone.",
  },
  {
    src: "/gallery/bedroom-03.jpeg",
    title: "Warm Wood Bedroom",
    category: "Bedroom",
    blurb: "Cosy lounge chair, statement art and a tactile timber feature wall.",
  },
  {
    src: "/gallery/bedroom-04.jpeg",
    title: "Elegant Couple's Bedroom",
    category: "Bedroom",
    blurb: "Balanced symmetry, pendant lights and a calming neutral scheme.",
  },
  {
    src: "/gallery/bedroom-05.jpeg",
    title: "Bedroom with Study",
    category: "Bedroom",
    blurb: "Paneled wall, integrated study desk and floating display shelves.",
  },
  {
    src: "/gallery/bedroom-06.jpeg",
    title: "Garden-View Bedroom",
    category: "Bedroom",
    blurb: "Floor-to-ceiling glazing opens to a serene green outlook.",
  },
  {
    src: "/gallery/kitchen-01.jpeg",
    title: "Open Island Kitchen",
    category: "Kitchen",
    blurb: "Double-height modular kitchen with breakfast island and tall windows.",
  },
  {
    src: "/gallery/kitchen-02.jpeg",
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    blurb: "Handleless cabinetry, marble backsplash and integrated appliances.",
  },
  {
    src: "/gallery/kitchen-03.jpeg",
    title: "Kitchen & Dining Combo",
    category: "Kitchen",
    blurb: "Sage-green island kitchen opening into a jewel-toned dining space.",
  },
  {
    src: "/gallery/dining-01.jpeg",
    title: "Luxe Dining Room",
    category: "Dining",
    blurb: "Sapphire velvet chairs, a swan wall feature and tiered chandelier.",
  },
  {
    src: "/gallery/dining-02.jpeg",
    title: "Refined Dining Nook",
    category: "Dining",
    blurb: "Paneled walls and abstract art create an intimate dining setting.",
  },
];
