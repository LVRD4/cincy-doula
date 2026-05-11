import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getPost, getAllSlugs, getAllPosts } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";
const SITE_URL = "https://www.erikaharrisondoula.com";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.dateISO,
      authors: ["Erika Harrison"],
      ...(post.featuredImage && { images: [{ url: post.featuredImage }] }),
    },
  };
}

// Portable Text renderer — maps Sanity block types to styled React elements
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 300, color: "#333", lineHeight: 1.9, marginBottom: "28px" }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.3, marginTop: "48px", marginBottom: "16px" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.4, marginTop: "36px", marginBottom: "12px" }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: "2px solid #9b97c4", paddingLeft: "24px", margin: "36px 0", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", color: "#444", lineHeight: 1.6 }}>
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 500, color: "#0a0a0a" }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: "#9b97c4", textDecoration: "underline" }}>
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      value?.asset && (
        <figure style={{ margin: "40px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value.asset.url ?? value.asset._ref} alt={value.alt ?? ""} style={{ width: "100%", height: "auto", display: "block" }} />
          {value.caption && (
            <figcaption style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#888", marginTop: "8px", textAlign: "center", fontStyle: "italic" }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    ),
  },
};

// Fallback renderer for local markdown-style posts (non-Sanity)
function renderLocalContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const isBold = block.startsWith("**") && block.endsWith("**");
    if (isBold) {
      return (
        <p key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.5, marginBottom: "12px", letterSpacing: "0.01em" }}>
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }
    return (
      <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 300, color: "#333", lineHeight: 1.9, marginBottom: "28px" }}>
        {block}
      </p>
    );
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug) as (Awaited<ReturnType<typeof getPost>> & { _sanityBody?: unknown[] }) | undefined;
  if (!post) notFound();

  const allPosts = await getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const hasSanityBody = Array.isArray((post as { _sanityBody?: unknown[] })._sanityBody) && (post as { _sanityBody?: unknown[] })._sanityBody!.length > 0;

  return (
    <>
      {/* Header */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, backgroundColor: "#fff", borderBottom: "1px solid #f0f0f0", boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0a0a0a" }}>Erika Harrison</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b97c4", marginTop: "3px" }}>Cincinnati Doula</div>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link href="/blog" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666", textDecoration: "none" }}>
              ← All posts
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-periwinkle" style={{ fontSize: "0.6rem", padding: "10px 16px" }}>
              Talk to a Doula
            </a>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: "68px", backgroundColor: "#fff" }}>
        {/* Dark hero */}
        <div style={{ backgroundColor: "#0a0a0a", padding: "72px 28px 64px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9b97c4", border: "1px solid rgba(155,151,196,0.4)", padding: "4px 12px", borderRadius: "100px" }}>
                {post.category}
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 300, color: "rgba(255,255,255,0.4)" }}>
                {post.date}
              </span>
            </div>
            <h1 className="section-heading" style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.62)", lineHeight: 1.7, fontStyle: "italic" }}>
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.featuredImage} alt={post.featuredImageAlt ?? post.title} style={{ width: "100%", maxHeight: "480px", objectFit: "cover", display: "block" }} />
        )}

        {/* Periwinkle accent line */}
        <div style={{ height: "3px", background: "linear-gradient(to right, #9b97c4, transparent)", maxWidth: "200px" }} />

        {/* Article body */}
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 28px 80px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b97c4" }}>
            — Erika Harrison
          </span>
          <div style={{ marginTop: "40px" }}>
            {hasSanityBody
              ? <PortableText value={(post as { _sanityBody: Parameters<typeof PortableText>[0]["value"] })._sanityBody} components={ptComponents} />
              : renderLocalContent(post.content)
            }
          </div>

          {/* Author line */}
          <div style={{ marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #ebebeb" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a0a", marginBottom: "4px" }}>Erika Harrison</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#888" }}>
              Cincinnati-based doula supporting families through pregnancy, birth, and beyond.
            </p>
          </div>
        </div>

        {/* CTA bar */}
        <div style={{ backgroundColor: "#edeaf5", padding: "64px 28px", textAlign: "center" }}>
          <h2 className="section-heading" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#0a0a0a", marginBottom: "16px" }}>Ready to talk?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#555", marginBottom: "32px" }}>
            Book a free 30-minute consult — no pressure, just a conversation.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-periwinkle">Talk to a Doula →</a>
        </div>

        {/* More posts */}
        {otherPosts.length > 0 && (
          <div style={{ backgroundColor: "#0a0a0a", padding: "72px 28px" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <p className="eyebrow" style={{ marginBottom: "32px" }}>More to read</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }} className="more-posts-grid">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                    <article style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "28px" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9b97c4", display: "block", marginBottom: "12px" }}>
                        {p.category} · {p.date}
                      </span>
                      <h3 className="section-heading" style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#fff", fontWeight: 400, marginBottom: "10px" }}>{p.title}</h3>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{p.excerpt}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`@media (min-width: 640px) { .more-posts-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </>
  );
}
