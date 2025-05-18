import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/meinWebsite' : '',
  assetPrefix: isProd ? '/meinWebsite/' : '',
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
