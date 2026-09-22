import { ImageResponse } from "next/og";

export const alt = "Alex Ariza — Production AI systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#05070d",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#93c5fd",
          }}
        >
          Personal brand · AI product studio
        </div>
        <div style={{ display: "flex", fontSize: 72, marginTop: 28, lineHeight: 1.1, maxWidth: 980 }}>
          Production AI systems. Not theater.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 32 }}>
          Alex Ariza · www.alexariza.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
