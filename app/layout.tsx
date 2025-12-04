import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7C3AED" },
    { media: "(prefers-color-scheme: dark)", color: "#7C3AED" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://versewing.app"),
  title: {
    default: "VERSEWING - Where Words Take Flight Forever",
    template: "%s | VERSEWING",
  },
  description:
    "The dedicated platform for creative writing. Share poetry, stories, lyrics and build your audience. Preserve your words forever on a platform built exclusively for writers.",
  keywords: [
    "creative writing",
    "poetry",
    "lyrics",
    "stories",
    "writing platform",
    "poets",
    "writers",
    "creative archive",
    "storytelling",
    "poem sharing",
    "writer community",
    "creative writing app",
  ],
  authors: [{ name: "VERSEWING", url: "https://versewing.app" }],
  creator: "VERSEWING",
  publisher: "VERSEWING",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/versewings-logo.svg",
    shortcut: "/versewings-logo.svg",
    apple: "/versewings-logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://versewing.app",
    title: "VERSEWING - Where Words Take Flight Forever",
    description:
      "The dedicated platform for creative writing. Share your creativity and preserve it forever on a platform built exclusively for writers.",
    siteName: "VERSEWING",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VERSEWING - Where Words Take Flight Forever",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSEWING - Where Words Take Flight Forever",
    description:
      "The dedicated platform for creative writing. Share poetry, stories, lyrics and build your audience.",
    creator: "@versewings",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://versewing.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "VERSEWING",
              description:
                "The dedicated platform for creative writing. Share poetry, stories, lyrics and build your audience.",
              url: "https://versewing.app",
              applicationCategory: "CreativeWork",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "10000",
              },
            }),
          }}
        />
      </head>
      {/* suppressHydrationWarning prevents errors from browser extensions that modify the body tag */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
