type Kind = "hotel" | "camping" | "rental";
interface ThumbHotel {
  name: string;
  kind: Kind;
}

/**
 * Deterministic branded illustration for a hotel card. Not a real photo (we
 * don't have rights to those) but a clean, varied visual derived from the
 * establishment name, with an icon for its kind and a race-track strip.
 */

const PALETTES: [string, string][] = [
  ["#2049d6", "#5b86f7"], // bleu
  ["#1b3a8f", "#3f6fe0"], // deep bleu
  ["#0e7a5f", "#3bbf94"], // grass
  ["#b9791c", "#f5b53d"], // amber
  ["#7a3aa0", "#c06fd8"], // dusk
  ["#c0432f", "#f0865f"], // sunset
  ["#1f2a44", "#46577f"], // slate
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000;
  return h;
}

function Icon({ kind }: { kind: Kind }) {
  if (kind === "camping") {
    return (
      <g
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 78 L96 30 L122 78 Z" />
        <path d="M96 30 L96 78" />
        <path d="M88 78 L96 60 L104 78" />
      </g>
    );
  }
  if (kind === "rental") {
    return (
      <g
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 60 L96 38 L122 60" />
        <path d="M76 56 L76 80 L116 80 L116 56" />
        <path d="M90 80 L90 66 L102 66 L102 80" />
      </g>
    );
  }
  // hotel
  return (
    <g
      fill="none"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M78 32 L114 32 L114 80 L78 80 Z" />
      <path d="M86 42 L92 42 M100 42 M100 42 L106 42 M86 54 L92 54 M100 54 L106 54 M86 66 L92 66 M100 66 L106 66" />
    </g>
  );
}

export function HotelThumb({
  hotel,
  className = "",
}: {
  hotel: ThumbHotel;
  className?: string;
}) {
  const h = hash(hotel.name);
  const [from, to] = PALETTES[h % PALETTES.length];
  const gid = `g${h % 100000}`;
  return (
    <svg
      viewBox="0 0 192 110"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={hotel.name}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="192" height="110" fill={`url(#${gid})`} />
      {/* soft horizon glow */}
      <circle cx="150" cy="26" r="34" fill="white" opacity="0.12" />
      <circle cx="150" cy="26" r="18" fill="white" opacity="0.14" />
      {/* kind icon */}
      <Icon kind={hotel.kind} />
      {/* checkered race strip along the bottom */}
      <g opacity="0.9">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x={i * 8}
            y={i % 2 === 0 ? 98 : 104}
            width="8"
            height="6"
            fill="white"
            opacity={i % 2 === 0 ? 0.9 : 0.5}
          />
        ))}
      </g>
    </svg>
  );
}
