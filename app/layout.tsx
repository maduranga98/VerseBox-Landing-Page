import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INKWINGS - Your Creative Archive",
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
  authors: [{ name: "INKWINGS" }],
  icons: {
    icon: "/inkwings-logo.svg",
    shortcut: "/inkwings-logo.svg",
    apple: "/inkwings-logo.svg",
  },
  openGraph: {
    title: "INKWINGS - Your Creative Archive",
    description:
      "The YouTube of creative writing. Share your creativity and preserve it forever.",
    type: "website",
    url: "https://inkwings.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "INKWINGS - Your Creative Archive",
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
      {/* suppressHydrationWarning prevents errors from browser extensions that modify the body tag */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
