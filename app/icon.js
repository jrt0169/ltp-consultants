import { ImageResponse } from "next/og";

// App Router icon convention: Next.js uses this to generate the favicon
// <link> tags. Rendered with next/og (same approach as opengraph-image.js)
// so there is no binary .ico file that can corrupt the Turbopack build.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A3848",
          borderRadius: "12px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#E8B96A",
          }}
        >
          PDN
        </div>
      </div>
    ),
    { ...size }
  );
}
