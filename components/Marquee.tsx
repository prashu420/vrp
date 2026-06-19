const items = [
  "2D & 3D Drawings",
  "Modular Kitchens",
  "Turnkey Projects",
  "Vastu Aligned",
  "False Ceiling",
  "Architectural Design",
  "Luxury Interiors",
  "Civil Construction",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex items-center"
            aria-hidden={dup === 1}
          >
            {items.map((it) => (
              <li
                key={`${dup}-${it}`}
                className="flex items-center gap-6 whitespace-nowrap px-6"
              >
                <span className="font-display text-lg text-cream/90">{it}</span>
                <span className="text-gold">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
