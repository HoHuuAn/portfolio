/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // skip lint errors during build
  },
};

module.exports = nextConfig;
