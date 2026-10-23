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
        background: "#131512",
        color: "#efefe7",
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
          background: "radial-gradient(circle, #344427 0%, #131512 68%)",
          display: "flex",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <svg width="80" height="60" viewBox="0 0 48 36" fill="none">
          <g stroke="#d2f780" strokeWidth="3" strokeLinecap="square">
            <path d="M4 28 13 7l9 21M8 20h10" />
            <path d="M28 7v21h4" />
            <path d="m37 12 5-4v20m-5 0h10" />
            <path d="M37 33h10" strokeWidth="1.5" opacity=".55" />
          </g>
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
            color: "#abb69c",
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
            color: "#d2f780",
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
          borderTop: "1px solid #3a4331",
          paddingTop: 24,
          fontSize: 19,
          color: "#b6c0a9",
        }}
      >
        <div style={{ display: "flex" }}>Next.js · TypeScript · NestJS</div>
        <div style={{ display: "flex" }}>{profile.location}</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
