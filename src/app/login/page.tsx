"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, from }),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(data.redirect);
        router.refresh();
      } else {
        setError("Incorrect password. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100svh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 28px",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 400,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: "6px",
          }}
        >
          Erika Harrison
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 300,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#9b97c4",
          }}
        >
          Cincinnati Doula
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          backgroundColor: "#111",
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "40px 32px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.6rem",
            fontWeight: 400,
            color: "#fff",
            marginBottom: "8px",
            letterSpacing: "0.01em",
          }}
        >
          Site Preview
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          This site is password protected. Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              required
              style={{
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: error
                  ? "1px solid rgba(200,100,100,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                padding: "14px 16px",
                outline: "none",
                borderRadius: "4px",
                transition: "border-color 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(155,151,196,0.6)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = error
                  ? "rgba(200,100,100,0.6)"
                  : "rgba(255,255,255,0.1)";
              }}
            />
          </div>

          {error && (
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 300,
                color: "rgba(220,120,120,0.9)",
                marginBottom: "16px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-periwinkle"
            style={{
              width: "100%",
              justifyContent: "center",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "0.72rem",
            }}
          >
            {loading ? "Verifying..." : "Enter Site →"}
          </button>
        </form>
      </div>

      {/* Subtle divider */}
      <div
        style={{
          marginTop: "48px",
          width: "1px",
          height: "40px",
          backgroundColor: "rgba(255,255,255,0.08)",
        }}
      />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
