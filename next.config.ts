import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/meinWebsite' : '',
  assetPrefix: isProd ? '/meinWebsite/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
