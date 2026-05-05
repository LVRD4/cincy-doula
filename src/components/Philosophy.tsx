const beliefs = [
  "Birth is not just a medical event—it's a sacred transition.",
  "Every person deserves to feel seen, heard, and held.",
  "Knowledge is power. Preparation is peace.",
  "You know your body. I help you trust it.",
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        backgroundColor: "#fff",
        padding: "96px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "20px", textAlign: "center" }}>
          My Approach
        </p>

        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
            color: "#0a0a0a",
            textAlign: "center",
            marginBottom: "64px",
            lineHeight: 1.2,
          }}
        >
          You deserve to feel safe
          <br />
          in your birth.
        </h2>

        {/* Belief list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {beliefs.map((belief, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid #ebebeb",
                padding: "28px 0",
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  color: "#9b97c4",
                  letterSpacing: "0.15em",
                  paddingTop: "4px",
                  minWidth: "24px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.4,
                  letterSpacing: "0.01em",
                }}
              >
                {belief}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #ebebeb" }} />
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: "72px",
            padding: "40px 32px",
            backgroundColor: "#f8f8f6",
            borderLeft: "2px solid #9b97c4",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 3.5vw, 1.7rem)",
              fontWeight: 300,
              color: "#0a0a0a",
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            &ldquo;My role is not to make decisions for you — it&apos;s to hold
            space so that you can make them with clarity and confidence.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9b97c4",
            }}
          >
            — Erika Harrison
          </p>
        </div>
      </div>
    </section>
  );
}
