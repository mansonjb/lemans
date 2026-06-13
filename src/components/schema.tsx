import type { Hotel, RaceEvent } from "@/lib/types";
import { JsonLd } from "./JsonLd";
import { SITE_URL, CIRCUIT } from "@/lib/seo";
import { bookingUrl } from "@/lib/booking";
import { placeByKey } from "@/data/places";

const KIND_SCHEMA: Record<Hotel["kind"], string> = {
  hotel: "Hotel",
  camping: "Campground",
  rental: "LodgingBusiness",
};

/** Sitewide Organization + WebSite, emitted once in the layout. */
export function SiteSchema({ siteName }: { siteName: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#org`,
            name: siteName,
            url: SITE_URL,
            description:
              "Independent accommodation guide for the major race weekends at the Le Mans circuit.",
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#site`,
            name: siteName,
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#org` },
            inLanguage: ["en", "fr", "nl", "de", "it", "es"],
          },
        ],
      }}
    />
  );
}

/** ItemList of LodgingBusiness for an accommodation list, great for rich
 *  results and generative-engine extraction. */
export function LodgingListSchema({
  hotels,
  event,
  name,
}: {
  hotels: Hotel[];
  event?: Pick<RaceEvent, "checkin" | "checkout">;
  name: string;
}) {
  if (!hotels.length) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        numberOfItems: hotels.length,
        itemListElement: hotels.map((h, i) => {
          const place = placeByKey(h.zone);
          const locality =
            h.zone === "le-mans-city-centre" || h.zone === "circuit-area"
              ? "Le Mans"
              : place?.name ?? "Le Mans";
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": KIND_SCHEMA[h.kind],
              name: h.name,
              description: h.note,
              url: bookingUrl(h, event),
              address: {
                "@type": "PostalAddress",
                addressLocality: locality,
                addressRegion: "Pays de la Loire",
                addressCountry: "FR",
              },
              ...(place
                ? {
                    geo: {
                      "@type": "GeoCoordinates",
                      latitude: place.lat,
                      longitude: place.lng,
                    },
                  }
                : {}),
            },
          };
        }),
      }}
    />
  );
}

/** A zone as a TouristDestination near the circuit. */
export function ZoneSchema({
  name,
  lat,
  lng,
  description,
}: {
  name: string;
  lat: number;
  lng: number;
  description: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        name,
        description,
        geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
        containedInPlace: {
          "@type": "Place",
          name: CIRCUIT.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: CIRCUIT.locality,
            addressCountry: "FR",
          },
        },
      }}
    />
  );
}
