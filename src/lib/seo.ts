/**
 * Final domain still to be confirmed. Override with NEXT_PUBLIC_SITE_URL
 * in Vercel once the domain is bought.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lemansstays.com";

/** Centralised site identity for legal notices and copyright. */
export const SITE = {
  name: "Le Mans Stays",
  /** Copyright year, bump on each yearly content refresh. */
  year: 2026,
  contactEmail: "hello@lemansstays.com",
  /** Default deployment host, surfaced in the legal notice. */
  host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
};

export const CIRCUIT = {
  lat: 47.9499,
  lng: 0.2078,
  name: "Circuit des 24 Heures",
  locality: "Le Mans",
  postalCode: "72100",
  country: "FR",
};

export const formatDateRange = (
  locale: string,
  startISO: string,
  endISO: string
): string => {
  const fmt = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  });
  const short = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  });
  const start = new Date(`${startISO}T12:00:00Z`);
  const end = new Date(`${endISO}T12:00:00Z`);
  if (startISO === endISO) return fmt.format(start);
  return `${short.format(start)} - ${fmt.format(end)}`;
};

export const eventYear = (startISO: string): number =>
  Number(startISO.slice(0, 4));
