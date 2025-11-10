import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VERSEBOX - Your Creative Archive",
  description:
    "The YouTube of creative writing. Share poetry, stories, lyrics and build your audience. Preserve your words forever.",
  keywords: [
    "creative writing",
    "poetry",
    "lyrics",
    "stories",
    "writing platform",
    "poets",
    "writers",
    "creative archive",
  ],
  authors: [{ name: "VERSEBOX" }],
  openGraph: {
    title: "VERSEBOX - Your Creative Archive",
    description:
      "The YouTube of creative writing. Share your creativity and preserve it forever.",
    type: "website",
    url: "https://versebox.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSEBOX - Your Creative Archive",
    description:
      "The YouTube of creative writing. Share poetry, stories, lyrics and build your audience.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
