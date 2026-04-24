import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio RTF AI Agent Builder Fellowship",
  description:
    "A selective hands-on fellowship for builders learning to ship AI agents businesses actually pay for.",
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
