/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/visi',
        destination: '/Home/visi',
      },
      {
        source: '/career',
        destination: '/Home/career',
      },
    ];
  },
};

module.exports = nextConfig;
