import type { Place, ZoneRoute } from "@/lib/types";

interface Labels {
  start: string;
  finish: string;
  normalDrive: string;
  raceWeekDrive: string;
  totalDistance: string;
}

/**
 * Stylised "race route" from a zone to the circuit. Not a real map: a clean
 * schematic with the approach roads, distance per leg and drive times. The
 * checkered finish dot marks the circuit.
 */
export function RouteMap({
  place,
  route,
  labels,
}: {
  place: Place;
  route: ZoneRoute;
  labels: Labels;
}) {
  const startName =
    place.key === "le-mans-city-centre" ? "Le Mans" : place.name;
  const steps = route.steps.filter((s) => s.km > 0);
  const totalKm = steps.reduce((a, s) => a + s.km, 0) || place.km;

  // Layout: nodes evenly spaced on a horizontal track.
  const nodeCount = steps.length + 1;
  const W = 760;
  const H = 220;
  const padX = 60;
  const usable = W - padX * 2;
  const gap = nodeCount > 1 ? usable / (nodeCount - 1) : 0;
  const y = 96;
  const xOf = (i: number) => padX + gap * i;

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      <div className="h-1.5 bg-gradient-to-r from-bleu via-amber to-ink" />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`${startName} → ${labels.finish}`}
      >
        {/* base track line */}
        <line
          x1={xOf(0)}
          y1={y}
          x2={xOf(nodeCount - 1)}
          y2={y}
          stroke="var(--color-line)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <line
          x1={xOf(0)}
          y1={y}
          x2={xOf(nodeCount - 1)}
          y2={y}
          stroke="var(--color-bleu)"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />

        {/* start node */}
        <circle cx={xOf(0)} cy={y} r="11" fill="var(--color-bleu)" />
        <circle cx={xOf(0)} cy={y} r="4" fill="white" />
        <text
          x={xOf(0)}
          y={y - 26}
          textAnchor="middle"
          className="fill-ink"
          style={{ font: "600 15px var(--font-display)" }}
        >
          {startName}
        </text>
        <text
          x={xOf(0)}
          y={y + 34}
          textAnchor="middle"
          className="fill-[color:var(--color-muted)]"
          style={{ font: "500 11px var(--font-sans)", letterSpacing: "0.08em" }}
        >
          {labels.start.toUpperCase()}
        </text>

        {/* legs + intermediate nodes */}
        {steps.map((s, i) => {
          const x = xOf(i + 1);
          const midX = (xOf(i) + x) / 2;
          const isFinish = i === steps.length - 1;
          return (
            <g key={`${s.via}-${i}`}>
              <text
                x={midX}
                y={y - 14}
                textAnchor="middle"
                className="fill-[color:var(--color-muted)]"
                style={{ font: "600 12px var(--font-sans)" }}
              >
                {s.via}
              </text>
              <text
                x={midX}
                y={y + 22}
                textAnchor="middle"
                className="fill-bleu"
                style={{ font: "700 12px var(--font-display)" }}
              >
                {s.km} km
              </text>
              {isFinish ? (
                <CheckerFlag x={x} y={y} />
              ) : (
                <circle cx={x} cy={y} r="7" fill="var(--color-ink)" />
              )}
            </g>
          );
        })}

        {/* finish label */}
        <text
          x={xOf(nodeCount - 1)}
          y={y - 26}
          textAnchor="middle"
          className="fill-ink"
          style={{ font: "700 15px var(--font-display)" }}
        >
          {labels.finish}
        </text>
      </svg>

      <div className="grid grid-cols-3 divide-x divide-line border-t border-line text-center">
        <Stat value={`${totalKm} km`} label={labels.totalDistance} />
        <Stat value={`${place.driveMin} min`} label={labels.normalDrive} />
        <Stat value={`${place.raceWeekMin} min`} label={labels.raceWeekDrive} accent />
      </div>
    </figure>
  );
}

function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="px-3 py-4">
      <p
        className={`font-display text-2xl font-bold italic tabular-nums ${
          accent ? "text-signal" : "text-ink"
        }`}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">
        {label}
      </p>
    </div>
  );
}

function CheckerFlag({ x, y }: { x: number; y: number }) {
  const s = 5;
  const cells = [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ];
  return (
    <g transform={`translate(${x - (s * 3) / 2}, ${y - (s * 3) / 2})`}>
      <rect
        x={-3}
        y={-3}
        width={s * 3 + 6}
        height={s * 3 + 6}
        rx="3"
        fill="white"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />
      {cells.map(([cx, cy]) => (
        <rect
          key={`${cx}-${cy}`}
          x={cx * s}
          y={cy * s}
          width={s}
          height={s}
          fill={(cx + cy) % 2 === 0 ? "var(--color-ink)" : "white"}
        />
      ))}
    </g>
  );
}
