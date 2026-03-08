import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Tice - Reform UK Deputy Leader | MP for Boston & Skegness",
  description: "Richard Tice is the Deputy Leader of Reform UK and Member of Parliament for Boston and Skegness. Property developer, businessman, and Brexit campaigner. Net worth £40 million.",
  keywords: [
    "Richard Tice",
    "Richard Tice net worth",
    "Richard Tice wife",
    "Richard Tice age",
    "Richard Tice Reform UK",
    "Richard Tice MP",
    "Richard Tice Isabel Oakeshott",
    "Richard Tice Boston Skegness",
    "Richard Tice Brexit",
    "Richard Tice property",
  ],
  openGraph: {
    title: "Richard Tice - Reform UK Deputy Leader",
    description: "Deputy Leader of Reform UK, MP for Boston & Skegness. Property tycoon worth £40 million.",
    url: "https://richardtice.co",
    siteName: "RichardTice.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Tice - Reform UK Deputy Leader",
    description: "Deputy Leader of Reform UK, MP for Boston & Skegness. Property tycoon worth £40 million.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
