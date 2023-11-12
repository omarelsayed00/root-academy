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
    BASE_URL: "http://51.20.18.129:8000",
  },
};
