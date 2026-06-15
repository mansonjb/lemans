import { ImageResponse } from "next/og";

export const runtime = "edge";

/**
 * Branded Open Graph image generated per page.
 * /api/og?title=...&kicker=...
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? "RaceWeekStays").slice(0, 120);
  const kicker = (searchParams.get("kicker") ?? "Race-week accommodation").slice(
    0,
    60
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f3",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 800,
              fontStyle: "italic",
              color: "#2049d6",
              letterSpacing: "-1px",
            }}
          >
            RACEWEEK
          </div>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#161a22" }}>
            STAYS
          </div>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#ffb400",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "#2049d6",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "60px" : "76px",
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: 1.02,
              color: "#161a22",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "20px",
                  height: "20px",
                  background: i % 2 === 0 ? "#161a22" : "#ffffff",
                  border: "1px solid #161a22",
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: "22px", color: "#5b6372" }}>
            Hotels · camping · rentals, ranked by real drive time
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
      },
    }
  );
}
