/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/v1/:slug*',
        destination: `${process.env.NEXT_PUBLIC_RECIPE}/v1/:slug*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'asset-2.tstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'statics.indozone.news',
      },
      {
        protocol: 'https',
        hostname: 'thumb.viva.id',
      },
      {
        protocol: 'https',
        hostname: 'google.com',
      },
      {
        protocol: 'http',
        hostname: 'google.com',
      },
      {
        protocol: 'https',
        hostname: 'img-global.cpcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn1-production-images-kly.akamaized.net',
      },
      {
        protocol: 'https',
        hostname: 'asset.kompas.com',
      },
      {
        protocol: 'https',
        hostname: 'static.promediateknologi.id',
      },
      {
        protocol: 'https',
        hostname: 'img.kurio.network',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
