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
    ];
  },
};

module.exports = nextConfig;
