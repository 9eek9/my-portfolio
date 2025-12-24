import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-portfolio-liart-zeta-9mnpnr6usz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ei Khaing | Full-Stack Software Engineer + Applied AI/ML",
    template: "%s | Ei Khaing",
  },
  description:
    "Portfolio of Ei Khaing — Full-Stack Software Engineer (C#/.NET + React/Next.js) with applied AI/ML experience. Projects in LLM integration, forecasting, computer vision, and NLP.",
  applicationName: "Ei Khaing Portfolio",
  authors: [{ name: "Ei Khaing" }],
  creator: "Ei Khaing",
  publisher: "Ei Khaing",
  keywords: [
    "Ei Khaing",
    "Full-Stack Software Engineer",
    ".NET",
    "C#",
    "React",
    "Next.js",
    "TypeScript",
    "Azure",
    "Machine Learning",
    "AI",
    "LLM",
    "Computer Vision",
    "NLP",
    "Forecasting",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ei Khaing | Full-Stack Software Engineer + Applied AI/ML",
    description:
      "Enterprise software engineer with applied AI/ML experience. Explore projects, experience, and contact info.",
    url: siteUrl,
    siteName: "Ei Khaing Portfolio",
    type: "website",
    locale: "en_CA",

  },
  twitter: {
    card: "summary_large_image",
    title: "Ei Khaing | Full-Stack Software Engineer + Applied AI/ML",
    description:
      "Full-Stack Software Engineer (C#/.NET + React/Next.js) with applied AI/ML experience.",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
