type IconProps = { className?: string };

const base = "stroke-current";

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "blueprint":
      return <Blueprint className={className} />;
    case "compass":
      return <Compass className={className} />;
    case "sofa":
      return <Sofa className={className} />;
    case "crane":
      return <Crane className={className} />;
    case "compass-rose":
      return <CompassRose className={className} />;
    case "key":
      return <Key className={className} />;
    default:
      return <Compass className={className} />;
  }
}

const svgProps = {
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

function Blueprint({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h6v11M9 4v5M15 4v16M9 14h6M15 9h6" />
    </svg>
  );
}

function Compass({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Sofa({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3h12v-3a2 2 0 0 1 4 0v5H2v-5Z" />
      <path d="M6 16v2M18 16v2" />
    </svg>
  );
}

function Crane({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <path d="M7 21V5l13 1-13 4M7 5l-3 3M9 21H5M12 6v4M12 10h3" />
    </svg>
  );
}

function CompassRose({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m12 7 2.5 5.5L20 15l-5.5-2.5L12 18l-2.5-5.5L4 9l5.5 2.5L12 7Z" />
    </svg>
  );
}

function Key({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <circle cx="7.5" cy="14.5" r="3.5" />
      <path d="m10 12 8-8M15 4h3v3M14 8l2 2" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Pin({ className }: IconProps) {
  return (
    <svg {...svgProps} className={`${base} ${className ?? ""}`}>
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function WhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
