import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erika Harrison – Cincinnati Doula",
  description:
    "Calm, steady support through pregnancy, birth, and postpartum. Cincinnati-based doula offering birth support, postpartum care, and consultations.",
  keywords: "Cincinnati doula, birth support, postpartum, pregnancy support, Erika Harrison",
  openGraph: {
    title: "Erika Harrison – Cincinnati Doula",
    description: "You are supported. In every moment.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
