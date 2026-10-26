import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "58px 68px",
        background: "#fdfdfb",
        color: "#181818",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -130,
          top: -130,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, #eeeee9 0%, #fdfdfb 68%)",
          display: "flex",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <svg width="80" height="60" viewBox="0 0 72 48" fill="none">
          <g stroke="#181818" strokeWidth="3.4" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M4 37 15 9l11 28M9 26h12" />
            <path d="M33 9v28h14" />
            <path d="m53 15 8-6v27" />
          </g>
          <ellipse cx="55.5" cy="36" rx="6" ry="3.8" transform="rotate(-20 55.5 36)" fill="#181818" />
        </svg>
        <div style={{ fontSize: 26, letterSpacing: -1, display: "flex" }}>
          {profile.name}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 17,
            letterSpacing: 4,
            color: "#666663",
          }}
        >
          SOFTWARE ENGINEER / FULL STACK
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 83,
            lineHeight: 1.08,
            letterSpacing: -4,
          }}
        >
          Complex problems.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 83,
            lineHeight: 1.08,
            letterSpacing: -4,
            color: "#181818",
          }}
        >
          Thoughtful products.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #d8d8d3",
          paddingTop: 24,
          fontSize: 19,
          color: "#666663",
        }}
      >
        <div style={{ display: "flex" }}>Next.js · TypeScript · NestJS</div>
        <div style={{ display: "flex" }}>{profile.location}</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
