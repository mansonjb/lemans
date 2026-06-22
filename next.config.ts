import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Canonicalise www → apex (raceweekstays.com).
        source: "/:path*",
        has: [{ type: "host", value: "www.raceweekstays.com" }],
        destination: "https://raceweekstays.com/:path*",
        permanent: true,
      },
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
