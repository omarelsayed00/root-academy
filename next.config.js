/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*   experimental: {
    appDir: true,
  }, */
};

module.exports = nextConfig;

module.exports = {
  env: {
    BASE_URL: "http://16.16.201.47/api",
  },
};
