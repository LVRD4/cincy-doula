"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default function StudioPage() {
  if (!projectId) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          padding: "40px",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <p style={{ color: "#9b97c4", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Studio Configuration Error
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", maxWidth: "400px", lineHeight: 1.7 }}>
          <code style={{ color: "#fff" }}>NEXT_PUBLIC_SANITY_PROJECT_ID</code> is not set.
          Add it in Vercel → Settings → Environment Variables, then redeploy.
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
