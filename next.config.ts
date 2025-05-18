import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {

  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  someFeature: {
    enabled: isProd,  // example flag only enabled in production
  }
};

export default nextConfig;
