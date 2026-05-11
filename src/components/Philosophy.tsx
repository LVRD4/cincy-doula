const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

const beliefs = [
  { num: "01", text: "Birth is not just a medical event—it's a sacred transition." },
  { num: "02", text: "Every person deserves to feel seen, heard, and held." },
  { num: "03", text: "Knowledge is power. Preparation is peace." },
  { num: "04", text: "You know your body. I help you trust it." },
];

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9b97c4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28S4 20 4 12a8 8 0 0 1 12-6.93A8 8 0 0 1 28 12c0 8-12 16-12 16z" />
      </svg>
    ),
    title: "Calm, Grounded Support",
    body: "I strive to create an environment where you feel safe enough to exhale. My role is not to overwhelm you with information, but to help you feel steady, informed, and supported as you move through your experience.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9b97c4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h10a6 6 0 0 1 0 12H4V6z" />
        <path d="M14 18h4a6 6 0 0 1 0 12H4V18" />
      </svg>
    ),
    title: "Advocacy & Education",
    body: "I believe informed choices create confidence. I support clients by helping them understand options, ask questions, and feel empowered in their decisions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9b97c4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="10" r="5" />
        <path d="M6 28c0-5.52 4.48-10 10-10s10 4.48 10 10" />
      </svg>
    ),
    title: "Presence Over Pressure",
    body: "Birth support should never feel rushed or performative. I believe in meeting people where they are and offering support that feels calm, attentive, and personal.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{ backgroundColor: "#fff", padding: "88px 28px 0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Eyebrow + Heading */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>
            My Approach
          </p>
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
              color: "#0a0a0a",
              lineHeight: 1.15,
            }}
          >
            You deserve to feel safe in your birth.
          </h2>
        </div>

        {/* 4-column belief grid */}
        <div className="beliefs-grid" style={{ marginBottom: "72px" }}>
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="belief-col"
              style={{
                padding: "32px 28px",
                borderLeft: i === 0 ? "1px solid #ebebeb" : "none",
                borderRight: "1px solid #ebebeb",
                borderTop: "1px solid #ebebeb",
                borderBottom: "1px solid #ebebeb",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                  color: "#c8c5de",
                  marginBottom: "20px",
                  lineHeight: 1,
                }}
              >
                {b.num}
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.05rem, 2.5vw, 1.2rem)",
                  fontWeight: 400,
                  color: "#0a0a0a",
                  lineHeight: 1.5,
                  letterSpacing: "0.01em",
                }}
              >
                {b.text}
              </p>
            </div>
          ))}
        </div>

        {/* 3 pillars */}
        <div className="pillars-grid" style={{ marginBottom: "80px" }}>
          {pillars.map((p, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid #ebebeb",
                paddingTop: "32px",
              }}
            >
              <div style={{ marginBottom: "16px" }}>{p.icon}</div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  marginBottom: "10px",
                }}
              >
                {p.title}
              </p>
              <span
                className="divider-line"
                style={{ marginBottom: "16px" }}
              />
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "#555",
                  lineHeight: 1.8,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote + CTA */}
        <div
          className="quote-cta-grid"
          style={{
            borderTop: "1px solid #ebebeb",
            paddingTop: "64px",
            paddingBottom: "88px",
          }}
        >
          {/* Quote */}
          <div
            style={{
              borderLeft: "2px solid #9b97c4",
              paddingLeft: "28px",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                fontWeight: 400,
                color: "#0a0a0a",
                lineHeight: 1.45,
                marginBottom: "20px",
              }}
            >
              &ldquo;My role is not to make decisions for you&mdash;it&apos;s
              to hold space so that you can make them with clarity and
              confidence.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9b97c4",
              }}
            >
              &mdash; Erika Harrison
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "#555",
                lineHeight: 1.75,
              }}
            >
              If you&apos;re looking for calm, grounded support through
              pregnancy, birth, or postpartum, I&apos;d love to connect with
              you.
            </p>
            <div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-periwinkle"
              >
                Talk to a Doula →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Beliefs: 2-col on mobile, 4-col on desktop */
        .beliefs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .belief-col:nth-child(n+3) {
          border-top: none !important;
        }
        @media (min-width: 768px) {
          .beliefs-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .belief-col:nth-child(n+3) {
            border-top: 1px solid #ebebeb !important;
          }
        }

        /* Pillars: stacked on mobile, 3-col on desktop */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }

        /* Quote+CTA: stacked on mobile, 2-col on desktop */
        .quote-cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 768px) {
          .quote-cta-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }
        }
      `}</style>
    </section>
  );
}
