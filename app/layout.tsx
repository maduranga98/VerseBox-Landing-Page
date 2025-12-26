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
  metadataBase: new URL("https://versewing.com"),
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
  authors: [{ name: "VERSEWING", url: "https://versewing.com" }],
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
    url: "https://versewing.com",
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
    creator: "@versewing",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://versewing.com",
  },
  category: "technology",
  other: {
    // AI-specific meta tags for better discoverability
    "ai:title": "VERSEWING - Where Words Take Flight Forever",
    "ai:description":
      "VERSEWING is a dedicated creative writing platform for poets, lyricists, and storytellers. Share poetry, stories, and lyrics while building your audience. Preserve your creative works forever on a platform built exclusively for writers.",
    "ai:category": "Creative Writing Platform, Social Network for Writers",
    "ai:primary_audience": "Poets, Lyricists, Storytellers, Creative Writers",
    "ai:key_features":
      "Creative writing sharing, Poetry community, Lyrics platform, Story sharing, Writer networking, Creative archive, Audience building for writers",
    "ai:purpose":
      "Help creative writers share their work, build an audience, and preserve their creative legacy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZZ8L0NPX9S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZZ8L0NPX9S');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "@id": "https://versewing.com/#webapp",
                  name: "VERSEWING",
                  alternateName: "VerseWing",
                  description:
                    "The dedicated platform for creative writing. Share poetry, stories, lyrics and build your audience. Preserve your words forever on a platform built exclusively for writers.",
                  url: "https://versewing.com",
                  applicationCategory: "CreativeWork",
                  operatingSystem: "iOS, Android, Web",
                  browserRequirements: "Requires JavaScript. Requires HTML5.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    ratingCount: "10000",
                  },
                  featureList: [
                    "Share poetry and creative writing",
                    "Build writer audience",
                    "Preserve creative works",
                    "Connect with other writers",
                    "Publish stories and lyrics",
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://versewing.com/#organization",
                  name: "VERSEWING",
                  url: "https://versewing.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://versewing.com/versewings-logo.svg",
                  },
                  description:
                    "A creative writing platform dedicated to poets, lyricists, and storytellers.",
                  sameAs: ["https://twitter.com/versewing"],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Support",
                    availableLanguage: "English",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://versewing.com/#website",
                  url: "https://versewing.com",
                  name: "VERSEWING",
                  description:
                    "Where Words Take Flight Forever - The dedicated platform for creative writing",
                  publisher: {
                    "@id": "https://versewing.com/#organization",
                  },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="b6j6jdair7elbilwp2ttepqyomaj8o"
        />
        {/* Additional meta tags for AI and search engines */}
        <meta
          name="abstract"
          content="Creative writing platform for poets, lyricists, and storytellers"
        />
        <meta
          name="topic"
          content="Creative Writing, Poetry, Lyrics, Storytelling"
        />
        <meta
          name="summary"
          content="Share and preserve your creative writing on VERSEWING - a platform built exclusively for writers"
        />
        <meta name="Classification" content="Creative Writing Platform" />
        <meta name="designer" content="VERSEWING" />
        <meta name="reply-to" content="support@versewing.app" />
        <meta name="owner" content="VERSEWING" />
        <meta name="url" content="https://versewing.com" />
        <meta name="identifier-URL" content="https://versewing.com" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta httpEquiv="content-language" content="en-US" />
      </head>
      {/* suppressHydrationWarning prevents errors from browser extensions that modify the body tag */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
