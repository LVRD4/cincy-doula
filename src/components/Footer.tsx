const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        padding: "48px 28px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            marginBottom: "48px",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              Erika Harrison
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 300,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#9b97c4",
              }}
            >
              Cincinnati Doula
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.58)",
                marginTop: "16px",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Calm, steady support through pregnancy, birth, and postpartum.
            </p>

            {/* Contact info */}
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Phone", value: "513.401.5808", href: "tel:5134015808" },
                { label: "Email", value: "erikaharrisoncincydoula@gmail.com", href: "mailto:erikaharrisoncincydoula@gmail.com" },
                { label: "Instagram", value: "@erikaharrisoncincydoula", href: "https://instagram.com/erikaharrisoncincydoula" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.62)",
                    textDecoration: "none",
                    display: "flex",
                    gap: "8px",
                    alignItems: "baseline",
                    transition: "color 0.2s",
                  }}
                  className="footer-link"
                >
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b97c4", minWidth: "56px" }}>{c.label}</span>
                  {c.value}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {[
              { label: "Who I Am", href: "#who-i-am" },
              { label: "What I Do", href: "#services" },
              { label: "My Approach", href: "#philosophy" },
              { label: "Blog", href: "#blog" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 300,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.62)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-periwinkle"
              style={{ fontSize: "0.65rem" }}
            >
              Talk to a Doula →
            </a>
            <p className="cta-subtext" style={{ color: "rgba(255,255,255,0.62)" }}>
              Free 30-minute consult
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 300,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            © {year} Erika Harrison · Cincinnati, Ohio
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-top {
            flex-direction: row !important;
            justify-content: space-between;
            align-items: flex-start;
          }
        }
        .footer-link:hover { color: #9b97c4 !important; }
      `}</style>
    </footer>
  );
}
