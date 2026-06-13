import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Le Mans Stays",
    short_name: "Le Mans Stays",
    description:
      "Independent accommodation guide for the major race weekends at the Le Mans circuit.",
    start_url: "/en",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#2049d6",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
