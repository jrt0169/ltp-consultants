import { ImageResponse } from "next/og";

export const alt =
  "Performance Development Network — team training, coaching & leadership development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A3848",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "64px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor: "#C9933A",
              marginBottom: "40px",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#E8B96A",
              fontWeight: 600,
            }}
          >
            Performance Development Network
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "82px",
            lineHeight: 1.05,
            color: "#ffffff",
            fontWeight: 700,
            maxWidth: "960px",
          }}
        >
          Team training, coaching &amp; leadership development
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "28px",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>Built on The Flow System</span>
          <span style={{ color: "#E8B96A", fontWeight: 600 }}>pdnlearn.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
