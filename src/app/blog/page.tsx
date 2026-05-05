import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Erika Harrison, Cincinnati Doula",
  description:
    "Resources, insights, and support for your pregnancy, birth, and postpartum journey.",
};

const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

export default function BlogPage() {
  return (
    <>
      {/* Header bar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: "#fff",
          borderBottom: "1px solid #f0f0f0",
          boxShadow: "0 1px 12px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
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
                  marginTop: "3px",
                }}
              >
                Cincinnati Doula
              </div>
            </div>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#666",
                textDecoration: "none",
              }}
            >
              ← Back to home
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-periwinkle"
              style={{ fontSize: "0.6rem", padding: "10px 16px" }}
            >
              Talk to a Doula
            </a>
          </div>
        </div>
      </header>

      <main
        style={{
          paddingTop: "68px",
          backgroundColor: "#0a0a0a",
          minHeight: "100vh",
        }}
      >
        {/* Page hero */}
        <div
          style={{
            padding: "80px 28px 64px",
            maxWidth: "1100px",
            margin: "0 auto",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "16px" }}>
            The Blog
          </p>
          <h1
            className="section-heading"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              color: "#fff",
              maxWidth: "600px",
            }}
          >
            Resources for your journey.
          </h1>
        </div>

        {/* Post list */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 28px 96px",
          }}
        >
          {posts.map((post, i) => (
            <article
              key={i}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "44px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 400,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9b97c4",
                    border: "1px solid rgba(155,151,196,0.4)",
                    padding: "4px 12px",
                    borderRadius: "100px",
                  }}
                >
                  {post.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {post.date}
                </span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <h2
                  className="section-heading blog-title-hover"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                    color: "#fff",
                    fontWeight: 400,
                    marginBottom: "16px",
                    transition: "color 0.2s",
                  }}
                >
                  {post.title}
                </h2>
              </Link>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.8,
                  maxWidth: "680px",
                  marginBottom: "24px",
                }}
              >
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.62rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#9b97c4",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(155,151,196,0.5)",
                  paddingBottom: "2px",
                }}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            backgroundColor: "#111",
            padding: "72px 28px",
            textAlign: "center",
          }}
        >
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Ready to connect?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.58)",
              marginBottom: "36px",
            }}
          >
            I offer a free 30-minute consult — no pressure, just a conversation.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-periwinkle"
          >
            Talk to a Doula →
          </a>
        </div>
      </main>

      <style>{`
        .blog-title-hover:hover { color: rgba(155,151,196,0.9) !important; }
      `}</style>
    </>
  );
}
