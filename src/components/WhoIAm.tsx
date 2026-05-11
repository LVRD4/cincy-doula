"use client";

interface WhoIAmProps {
  portraitUrl?: string | null;
}

export default function WhoIAm({ portraitUrl }: WhoIAmProps) {
  const imgSrc = portraitUrl ?? "/erika-portrait.jpeg";
  return (
    <section
      id="who-i-am"
      style={{ backgroundColor: "#fff", padding: "80px 28px" }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "56px",
          alignItems: "flex-start",
        }}
        className="who-i-am-grid"
      >
        {/* Photo with periwinkle accent block */}
        <div style={{ position: "relative" }} className="who-i-am-photo-wrap">
          {/* Periwinkle accent square — bottom left, offset behind photo */}
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              left: "-18px",
              width: "52%",
              height: "52%",
              backgroundColor: "#eeedf6",
              zIndex: 0,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt="Erika Harrison, Cincinnati Doula"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ paddingTop: "8px" }}>
          <p className="eyebrow" style={{ marginBottom: "12px" }}>
            About Me
          </p>
          <span className="divider-line" style={{ marginBottom: "24px" }} />

          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 3.2rem)",
              color: "#0a0a0a",
              marginBottom: "28px",
              lineHeight: 1.15,
            }}
          >
            More than support&mdash;
            <br />
            presence.
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.92rem",
              fontWeight: 300,
              color: "#444",
              lineHeight: 1.85,
              marginBottom: "20px",
            }}
          >
            I became a doula because I believe birth experiences matter deeply.
            The way someone feels during birth can stay with them for years—and
            I wanted to be the kind of support that helps people feel calm,
            respected, and empowered in those moments.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.92rem",
              fontWeight: 300,
              color: "#444",
              lineHeight: 1.85,
              marginBottom: "28px",
            }}
          >
            I&apos;m a Cincinnati-based doula supporting individuals and
            families through pregnancy, birth, and beyond. My approach is
            grounded in compassion, evidence-based information, and unwavering
            belief in your ability to make the right choices for you.
          </p>

          {/* Second divider */}
          <span
            className="divider-line"
            style={{ marginBottom: "24px" }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              fontWeight: 400,
              color: "#555",
              lineHeight: 1.75,
            }}
          >
            Outside of birth work, I value calm spaces, meaningful connection,
            and slowing down enough to truly be present. Whether I&apos;m
            spending quiet time at home, reading, or caring for the people
            around me, I believe support begins with presence.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .who-i-am-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
          }
          .who-i-am-photo-wrap {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
