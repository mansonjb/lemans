"use client";

import { useEffect, useState } from "react";

/**
 * template contains "%d" where the day count goes, e.g. "%d days to go".
 * Rendered client-side so the count is always fresh on a static site.
 */
export function Countdown({
  startISO,
  template,
}: {
  startISO: string;
  template: string;
}) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${startISO}T09:00:00+02:00`).getTime();
    const d = Math.max(0, Math.ceil((target - Date.now()) / 86_400_000));
    setDays(d);
  }, [startISO]);

  if (days === null) return null;

  return (
    <span className="inline-block -skew-x-12 rounded-sm bg-bleu px-3 py-1 text-white">
      <span className="inline-block skew-x-12 font-display text-sm font-semibold uppercase tracking-wide tabular-nums">
        {template.replace("%d", String(days))}
      </span>
    </span>
  );
}
