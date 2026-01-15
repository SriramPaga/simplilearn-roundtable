import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "./fonts/satoshi";

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
      <body>{children}</body>
    </html>
  );
}
