import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Hoodie",
  description: "Custom Hoodie Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}