import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { satoshi } from "./fonts/satoshi";

// const inter = Inter({ subsets: ["latin"] });

// const satoshi = localFont({
//   src: "./fonts/Satoshi-Variable.woff2", // Ensure path matches your file location
//   variable: "--font-satoshi", // This CSS variable will be exposed to Tailwind
//   weight: "300 900", // Variable fonts cover a range of weights
// });

export const metadata: Metadata = {
  title: "The Skills That Matter Next - Simplilearn Executive Roundtable",
  description:
    "Preparing Your Workforce & Leaders for the AI Era - An invite-only executive roundtable lunch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="font-satoshi">{children}</body>
    </html>
  );
}
