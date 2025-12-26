import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,

  // CRITICAL: Ensure proper HTML rendering
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Add this for better SSG
    scrollRestoration: true,
  },

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Add lazy loading
    loader: 'default',
  },

  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  trailingSlash: false,

  // NEW: Reduce JS bloat
  swcMinify: true,
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
};

export default nextConfig;
