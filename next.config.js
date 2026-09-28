/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/analytics',
        destination: '/progress',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
