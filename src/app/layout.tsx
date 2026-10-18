
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prajwal Deotare | AI Engineer",
  description:
    "Explore Prajwal Deotare's work in AI agents, Generative AI, machine learning, Microsoft Copilot Studio, Azure AI Foundry, and enterprise automation.",
  applicationName: "Prajwal Deotare Portfolio",
  openGraph: {
    title: "Prajwal Deotare | AI Engineer",
    description:
      "AI engineering, intelligent agents, machine learning, and enterprise workflow automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
