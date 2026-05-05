"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/erikaharrisoncincydoula/30min";

const navLinks = [
  { label: "Who I Am", href: "#who-i-am" },
  { label: "What I Do", href: "#services" },
  { label: "My Approach", href: "#philosophy" },
  { label: "Blog", href: "#blog" },
  { label: "Talk to a Doula", href: CALENDLY_URL, external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: "#fff",
          borderBottom: scrolled ? "1px solid #f0f0f0" : "1px solid transparent",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
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
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
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

          {/* Desktop Nav */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#0a0a0a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ textAlign: "center" }}>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-periwinkle"
                style={{ fontSize: "0.6rem", padding: "10px 16px" }}
              >
                Talk to a Doula
              </a>
              {/* Hidden on mobile — shown on desktop */}
              <p
                className="cta-subtext header-consult-text"
                style={{ color: "#666", opacity: 1, marginTop: "4px" }}
              >
                Free 30-minute consult
              </p>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
              className="hamburger-btn"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#0a0a0a",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#0a0a0a",
                  transition: "opacity 0.3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  backgroundColor: "#0a0a0a",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`nav-mobile ${menuOpen ? "open" : ""}`}
        style={{ paddingTop: "68px" }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.5rem",
            lineHeight: 1,
          }}
          aria-label="Close menu"
        >
          ×
        </button>

        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#9b97c4",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Erika Harrison · Cincinnati Doula
          </div>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (!link.external) {
                e.preventDefault();
                handleNavClick(link.href);
              } else {
                setMenuOpen(false);
              }
            }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 300,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
          >
            {link.label}
          </a>
        ))}

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-periwinkle"
            onClick={() => setMenuOpen(false)}
          >
            Talk to a Doula →
          </a>
          <p className="cta-subtext" style={{ color: "#fff", marginTop: "8px" }}>
            Free 30-minute consult
          </p>
        </div>
      </div>

      <style>{`
        /* Mobile: hide consult subtext, keep header single-line height */
        .header-consult-text { display: none; }

        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .header-consult-text { display: block; }
        }
        .nav-link:hover { color: #9b97c4 !important; }
      `}</style>
    </>
  );
}
