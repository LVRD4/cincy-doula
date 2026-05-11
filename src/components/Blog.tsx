import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "88px 28px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "16px" }}>
              From the Blog
            </p>
            <h2
              className="section-heading"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 3rem)",
                color: "#fff",
              }}
            >
              Resources for your journey.
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#9b97c4",
              textDecoration: "none",
              borderBottom: "1px solid #9b97c4",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            View all posts →
          </Link>
        </div>

        {/* Post list */}
        <div>
          {posts.map((post, i) => (
            <article
              key={i}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                padding: "32px 0",
              }}
              className="blog-post-row"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "12px",
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
                    padding: "3px 10px",
                    borderRadius: "100px",
                  }}
                >
                  {post.category}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.38)",
                  }}
                >
                  {post.date}
                </span>
              </div>

              <h3
                className="section-heading"
                style={{
                  fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
                  color: "#fff",
                  fontWeight: 400,
                  marginBottom: "12px",
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.75,
                  maxWidth: "640px",
                  marginBottom: "16px",
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderBottom: "1px solid rgba(155,151,196,0.4)",
                  paddingBottom: "2px",
                }}
              >
                Read more →
              </Link>
            </article>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
        </div>
      </div>

      <style>{`
        .blog-post-row:hover h3 {
          color: rgba(255,255,255,0.85) !important;
          transition: color 0.2s;
        }
      `}</style>
    </section>
  );
}
