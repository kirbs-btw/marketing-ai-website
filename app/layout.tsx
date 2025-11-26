import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Maler Marketing – Landingpage",
  description: "Landingpage für KI-gestützte Marketing-Automation für Malerbetriebe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-white font-sans text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

