"use client";

const CALENDLY_URL = "https://calendly.com/erikaharrisondoula";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Fallback dark background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #0d0d0d 0%, #1c1c1c 40%, #111 70%, #0a0a0a 100%)",
          zIndex: 0,
        }}
      />

      {/*
        Hero photo: /public/hero-bg.jpg
        The woman is on the right side of the image.
        - Mobile (portrait): objectPosition shifts RIGHT so she stays visible
        - Desktop: full composition shows naturally
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/IMG_1046.png"
        alt=""
        aria-hidden="true"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
        className="hero-photo"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          /* Mobile default: shift right so woman is visible */
          objectPosition: "72% center",
          filter: "grayscale(100%)",
          opacity: 0.65,
          zIndex: 2,
        }}
      />

      {/*
        Gradient overlay:
        - Left: heavy dark → text stays legible over the image
        - Bottom: dark fade upward
        - Right: stays lighter so the woman shows through
      */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 45%)",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 28px 80px",
        }}
      >
        <div style={{ maxWidth: "520px" }}>
          <h1
            className="section-heading"
            style={{
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            You are supported.
            <br />
            In every moment.
          </h1>

          <span
            className="divider-line"
            style={{ backgroundColor: "#9b97c4", marginBottom: "20px" }}
          />

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 300,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.78)",
              marginBottom: "44px",
              lineHeight: 2,
            }}
          >
            Calm, steady support through
            <br />
            pregnancy, birth, and postpartum.
          </p>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-periwinkle"
          >
            Talk to a Doula
            <span style={{ marginLeft: "4px" }}>→</span>
          </a>
          <p
            className="cta-subtext"
            style={{ color: "rgba(255,255,255,0.62)", marginTop: "12px" }}
          >
            Free 30-minute consult
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          right: "28px",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "36px",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
      </div>

      {/* Desktop: reposition image to show full composition */}
      <style>{`
        @media (min-width: 768px) {
          .hero-photo {
            object-position: center center !important;
          }
        }
      `}</style>
    </section>
  );
}
