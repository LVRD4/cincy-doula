import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.erikaharrisondoula.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Erika Harrison – Cincinnati Doula",
    template: "%s – Erika Harrison, Cincinnati Doula",
  },
  description:
    "Cincinnati doula Erika Harrison offers calm, steady birth support, postpartum care, and consultations for families throughout Cincinnati, Ohio.",
  keywords: [
    "Cincinnati doula",
    "doula Cincinnati Ohio",
    "birth doula Cincinnati",
    "postpartum support Cincinnati",
    "pregnancy support Cincinnati",
    "Erika Harrison doula",
    "Cincinnati birth support",
    "Hamilton County doula",
  ],
  authors: [{ name: "Erika Harrison" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Erika Harrison – Cincinnati Doula",
    description: "You are supported. In every moment. Calm, steady birth and postpartum support in Cincinnati, Ohio.",
    type: "website",
    url: SITE_URL,
    siteName: "Erika Harrison – Cincinnati Doula",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erika Harrison – Cincinnati Doula",
    description: "Calm, steady support through pregnancy, birth, and postpartum. Based in Cincinnati, Ohio.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Erika Harrison – Cincinnati Doula",
  description:
    "Cincinnati-based birth doula offering personalized support through pregnancy, birth, and postpartum.",
  url: SITE_URL,
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1031,
    longitude: -84.512,
  },
  areaServed: [
    { "@type": "City", name: "Cincinnati" },
    { "@type": "City", name: "Covington" },
    { "@type": "City", name: "Newport" },
    { "@type": "County", name: "Hamilton County" },
    { "@type": "County", name: "Kenton County" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-24:00",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
