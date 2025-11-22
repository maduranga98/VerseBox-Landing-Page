import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compress output
  compress: true,

  // Generate etags for better caching
  generateEtags: true,

  // Powered by header removal for security
  poweredByHeader: false,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Trailing slash handling for consistent URLs
  trailingSlash: false,
};

export default nextConfig;
