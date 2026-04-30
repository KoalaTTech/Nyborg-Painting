import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar/NavBar";

export const metadata: Metadata = {
  title: "Nyborg Painting",
  description: "Professional Painting Services For Salt Lake Area Utah : Salt Lake City SLC, Sandy, Holiday, South Jordan, Provo, Murray, Bountiful, West Jordan, Draper, Cottonwood Heights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<NavBar /></body>
    </html>
  );
}
