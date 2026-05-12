import { getTestimonials } from "@/sanity/lib/queries";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (!testimonials.length) return null;

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#fff",
        padding: "100px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9b97c4",
              marginBottom: "16px",
            }}
          >
            Client Stories
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#0a0a0a",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Words from Families I&rsquo;ve Supported
          </h2>
        </div>

        {/* Testimonial grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t._id}
              style={{
                borderTop: "1px solid #e8e4df",
                paddingTop: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Opening quote mark */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "#9b97c4",
                  display: "block",
                  marginBottom: "-8px",
                }}
              >
                &ldquo;
              </span>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "#2a2a2a",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {t.quote}
              </p>

              <div style={{ marginTop: "auto" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  — {t.clientName}
                </p>
                {t.serviceType && (
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#9b97c4",
                      margin: "4px 0 0",
                    }}
                  >
                    {t.serviceType}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
