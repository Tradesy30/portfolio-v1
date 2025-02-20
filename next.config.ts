import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable page and layout level build-time optimizations
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Enable compression
  compress: true,
  // Enable powered by header
  poweredByHeader: false,
  // Enable experimental features
  experimental: {
    // Enable optimizeCss for better CSS optimization
    optimizeCss: true,
    // Enable modern JavaScript optimization
    optimizePackageImports: ['@heroicons/react', '@radix-ui/react-icons', 'lucide-react'],
  },
};

export default nextConfig;
