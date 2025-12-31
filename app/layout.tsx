import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "TWICE Archive",
    template: "%s | TWICE Archive",
  },
  description: "TWICE Archive adalah fansite yang menampilkan profil member, discography lengkap, dan perjalanan karier girl group TWICE.",
  keywords: ["TWICE", "TWICE members", "TWICE discography", "K-pop", "JYP Entertainment", "TWICE fanpage"],
  authors: [{ name: "TWICE Archive" }],
  creator: "TWICE Archive",

  icons: {
    icon: "/logo-twice1.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "TWICE Archive",
    description: "Fansite TWICE berisi profil member, album, dan konten eksklusif.",
    url: "https://twice-archive.vercel.app", // ganti nanti
    siteName: "TWICE Archive",
    images: [
      {
        url: "/og-image.png", // optional
        width: 1200,
        height: 630,
        alt: "TWICE Archive",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TWICE Archive",
    description: "Fansite TWICE berisi profil member, album, dan konten eksklusif.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-pink-50">
        <Analytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
