/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oc2ieziz4xyynoqi.public.blob.vercel-storage.com',
      },
    ],
  },
};

module.exports = nextConfig;
