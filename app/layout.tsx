import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio RTF Agent Builder Fellowship",
  description:
    "A selective Studio RTF fellowship for ambitious builders learning to build, deploy, and sell real AI agents for businesses.",
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
