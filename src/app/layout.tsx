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

export const metadata: Metadata = {
  title: "Ei Khaing | Full-Stack Software Engineer + Applied AI/ML",
  description:
    "Portfolio of Ei Khaing — Full-Stack Software Engineer (C#/.NET + React) with applied AI/ML experience. Projects in LLM integration, forecasting, computer vision, and NLP.",
  metadataBase: new URL("https://example.com"), // change later when you deploy (e.g., Vercel URL)
  openGraph: {
    title: "Ei Khaing | Full-Stack + Applied AI/ML",
    description:
      "Enterprise software engineer with applied AI/ML experience. Explore projects, experience, and contact info.",
    url: "https://example.com", // change later
    siteName: "Ei Khaing Portfolio",
    type: "website",
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
