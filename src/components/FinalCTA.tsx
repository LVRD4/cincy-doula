"use client";

const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 28px",
        textAlign: "center",
        backgroundColor: "#edeaf5",
      }}
    >
      {/* Soft radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(155,151,196,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Optional background image slot */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cta-bg.jpg"
        alt=""
        aria-hidden="true"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "grayscale(40%) brightness(0.95)",
          opacity: 0.18,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "560px",
          margin: "0 auto",
        }}
      >
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(2.4rem, 8vw, 4rem)",
            color: "#0a0a0a",
            marginBottom: "16px",
            lineHeight: 1.15,
          }}
        >
          You don&apos;t have to do this alone.
        </h2>

        <span className="divider-line" style={{ margin: "20px auto 24px" }} />

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "#555",
            marginBottom: "44px",
            lineHeight: 1.7,
          }}
        >
          I&apos;m here to support you — every step of the way.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-periwinkle"
        >
          Talk to a Doula →
        </a>
        <p className="cta-subtext" style={{ color: "#666" }}>
          Free 30-minute consult
        </p>
      </div>
    </section>
  );
}
