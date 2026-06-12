import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function SpeedHeading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={className}>
      <Tag className="font-display text-3xl font-semibold uppercase italic tracking-tight sm:text-4xl">
        {children}
      </Tag>
      <div className="speedline mt-2 w-24" />
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-bleu">
      {children}
    </p>
  );
}

/** Slanted pit-lane style badge */
export function SlantBadge({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "bleu" | "amber" | "grass";
}) {
  const tones: Record<string, string> = {
    ink: "bg-ink text-white",
    bleu: "bg-bleu text-white",
    amber: "bg-amber text-ink",
    grass: "bg-grass text-white",
  };
  return (
    <span
      className={`inline-block -skew-x-12 rounded-sm px-3 py-1 ${tones[tone]}`}
    >
      <span className="inline-block skew-x-12 font-display text-sm font-semibold uppercase tracking-wide">
        {children}
      </span>
    </span>
  );
}

export function Pitboard({ children }: { children: ReactNode }) {
  return (
    <div className="pitboard rounded-r-xl bg-card p-5 text-[15px] leading-relaxed shadow-sm">
      {children}
    </div>
  );
}

export function AmberNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-amber/50 bg-amber-soft p-5 text-[15px] leading-relaxed">
      {children}
    </div>
  );
}
