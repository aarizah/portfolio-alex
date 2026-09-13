import { ImageResponse } from "next/og";

export const alt = "Alex Ariza — AI Product Engineering";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #05070d 0%, #0b1120 55%, #1a103a 100%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#93c5fd",
          }}
        >
          AI PRODUCT ENGINEERING
        </div>
        <div style={{ display: "flex", fontSize: 92, margin: "28px 0 18px" }}>Alex Ariza</div>
        <div style={{ display: "flex", fontSize: 34, color: "#c4b5fd" }}>
          FROM OPPORTUNITY TO TRUSTED AI PRODUCT
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64748b", marginTop: 44 }}>
          www.alexariza.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
