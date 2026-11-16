/** Stay22 "Let Me Allez" script id (lmaID), used by the global letmeallez.js
 *  that rewrites Booking links into monetised affiliate links. */
export const STAY22_LMA_ID = "6a2c123a7b2971f6f75fff73";

/** Stay22 affiliate id (aid) for the embedded maps: it attributes bookings
 *  made inside a map to our account. This is the account handle, NOT the
 *  lmaID above (using the lmaID as aid mis-attributes map bookings). */
export const STAY22_AID = "eijeanbaptistemanson";

export interface MapParams {
  lat: number;
  lng: number;
  checkin?: string;
  checkout?: string;
  zoom?: number;
  locale?: string;
}

/**
 * Stay22 embeddable map. The aid links bookings made inside the map to
 * our affiliate account; checkin/checkout pre-fill the event dates.
 */
export const stay22MapUrl = ({
  lat,
  lng,
  checkin,
  checkout,
  zoom = 12,
  locale = "en",
}: MapParams): string => {
  const params = new URLSearchParams({
    aid: STAY22_AID,
    lat: String(lat),
    lng: String(lng),
    zoom: String(zoom),
    currency: "EUR",
    language: locale,
    hidefooter: "true",
  });
  if (checkin) params.set("checkin", checkin);
  if (checkout) params.set("checkout", checkout);
  return `https://www.stay22.com/embed/gm?${params.toString()}`;
};
