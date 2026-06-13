import type { Hotel, Place, RaceEvent } from "./types";
import { placeByKey } from "@/data/places";

/**
 * Booking.com search URL pre-filled with the establishment name, town and
 * event dates. The Stay22 "letmeallez" script (loaded globally) rewrites
 * these links into affiliate links automatically on click, so no aid is
 * needed here. group_adults reflects a typical race-week party.
 */
export function bookingUrl(
  hotel: Hotel,
  event?: Pick<RaceEvent, "checkin" | "checkout">,
  adults = 2
): string {
  const place = placeByKey(hotel.zone);
  const town =
    hotel.zone === "le-mans-city-centre" || hotel.zone === "circuit-area"
      ? "Le Mans"
      : place?.name ?? "Le Mans";
  const params = new URLSearchParams({
    ss: `${hotel.name}, ${town}`,
    group_adults: String(adults),
    group_children: "0",
    no_rooms: "1",
  });
  if (event) {
    params.set("checkin", event.checkin);
    params.set("checkout", event.checkout);
  }
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

/** Generic "see all stays in this area" Booking search for a zone. */
export function bookingAreaUrl(
  place: Place,
  event?: Pick<RaceEvent, "checkin" | "checkout">,
  adults = 2
): string {
  const town =
    place.key === "le-mans-city-centre" || place.key === "circuit-area"
      ? "Le Mans"
      : place.name;
  const params = new URLSearchParams({
    ss: town,
    group_adults: String(adults),
    group_children: "0",
    no_rooms: "1",
  });
  if (event) {
    params.set("checkin", event.checkin);
    params.set("checkout", event.checkout);
  }
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}
