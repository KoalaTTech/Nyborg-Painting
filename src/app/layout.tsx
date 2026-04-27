import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";

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
      <Header></Header>
      <body>{children}</body>
    </html>
  );
}
