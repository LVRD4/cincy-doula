"use client";

export default function WhoIAm() {
  return (
    <section
      id="who-i-am"
      style={{
        backgroundColor: "#fff",
        padding: "80px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="who-i-am-grid"
      >
        {/* Photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/erika-portrait.jpeg"
            alt="Erika Harrison, Cincinnati Doula"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p className="eyebrow" style={{ marginBottom: "16px" }}>
            Who I Am
          </p>
          <span className="divider-line" />
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.5rem)",
              color: "#0a0a0a",
              marginBottom: "24px",
              marginTop: "8px",
            }}
          >
            I&apos;m Erika Harrison.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "#444",
              lineHeight: 1.85,
              marginBottom: "32px",
            }}
          >
            I&apos;m a Cincinnati-based doula passionate about supporting
            individuals and families through pregnancy, birth, and beyond. My
            role is to bring calm, clarity, and unwavering support so you can
            feel informed, empowered, and cared for every step of the way.
          </p>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#philosophy")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9b97c4",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid #9b97c4",
              paddingBottom: "2px",
            }}
          >
            Learn more about me →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .who-i-am-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
