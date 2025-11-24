import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MalerMarketing KI – Landingpage",
  description: "Landingpage für KI-gestützte Marketing-Automation für Malerbetriebe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-white font-sans text-slate-900">{children}</body>
    </html>
  );
}

