const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#9b97c4" strokeWidth="1.2">
        <path d="M20 34C20 34 6 26 6 16a8 8 0 0 1 14-5.29A8 8 0 0 1 34 16c0 10-14 18-14 18z" />
        <path d="M20 20c0-2.5 2-4 4-4" strokeLinecap="round" />
      </svg>
    ),
    title: "Birth Support",
    description:
      "Physical, emotional, and informational support through your birth experience. I&apos;m by your side from early labor through delivery.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#9b97c4" strokeWidth="1.2">
        <path d="M20 8 C20 8, 14 14, 14 20 C14 26 20 34 20 34 C20 34 26 26 26 20 C26 14 20 8 20 8Z" />
        <path d="M14 20 H26" strokeLinecap="round" />
        <path d="M20 8 V34" strokeLinecap="round" />
      </svg>
    ),
    title: "Postpartum Support",
    description:
      "Compassionate care as you heal, bond, and adjust to life with your baby. You deserve support beyond the birth.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#9b97c4" strokeWidth="1.2">
        <path d="M8 12 C8 10 10 8 12 8 H28 C30 8 32 10 32 12 V24 C32 26 30 28 28 28 H22 L16 34 V28 H12 C10 28 8 26 8 24 Z" />
        <path d="M15 18 H25" strokeLinecap="round" />
        <path d="M15 22 H21" strokeLinecap="round" />
      </svg>
    ),
    title: "Consultations",
    description:
      "Personalized guidance to help you feel prepared, confident, and empowered before, during, and after birth.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "88px 28px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p className="eyebrow" style={{ marginBottom: "20px" }}>
          How I Support You
        </p>
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 3rem)",
            color: "#fff",
            marginBottom: "64px",
            maxWidth: "480px",
            margin: "0 auto 64px",
          }}
        >
          Support that meets you where you are.
        </h2>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="services-grid"
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "0 16px",
              }}
            >
              <div style={{ opacity: 0.9 }}>{s.icon}</div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: "12px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.8,
                    maxWidth: "260px",
                    margin: "0 auto",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "48px",
            backgroundColor: "rgba(155,151,196,0.3)",
            margin: "0 auto 40px",
          }}
        />

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-periwinkle"
        >
          Talk to a Doula →
        </a>
        <p className="cta-subtext" style={{ color: "rgba(255,255,255,0.65)" }}>
          Free 30-minute consult
        </p>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
