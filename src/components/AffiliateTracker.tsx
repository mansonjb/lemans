"use client";

import { useEffect } from "react";

/**
 * Fires a GA4 `affiliate_click` event whenever a visitor clicks an outbound
 * affiliate link (Booking.com and the Stay22-monetised partners). One
 * delegated listener covers every hotel card and map CTA without touching
 * each link. The event carries the page path (so it attributes to the circuit)
 * and the hotel name when the card exposes it via `data-stay`.
 *
 * To count these as conversions, mark `affiliate_click` as a Key event in the
 * GA4 admin (Admin -> Events). That is a dashboard action, not code.
 */
const AFFILIATE_HOSTS = [
  "booking.com",
  "stay22",
  "letmeallez",
  "expedia",
  "agoda",
  "hotels.com",
  "vrbo",
  "kayak",
  "hostelworld",
];

export function AffiliateTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href) return;
      let host = "";
      try {
        host = new URL(href, window.location.href).hostname.toLowerCase();
      } catch {
        return;
      }
      if (!AFFILIATE_HOSTS.some((h) => host.includes(h))) return;

      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void })
        .gtag;
      if (typeof gtag !== "function") return;

      const stay =
        a.closest("[data-stay]")?.getAttribute("data-stay") || undefined;

      gtag("event", "affiliate_click", {
        link_domain: host.replace(/^www\./, ""),
        link_url: href.slice(0, 400),
        page_path: window.location.pathname,
        ...(stay ? { item_name: stay.slice(0, 100) } : {}),
      });
    };

    // Capture phase so we log even if a partner script stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
