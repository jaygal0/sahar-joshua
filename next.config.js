/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'external-content.duckduckgo.com',
      'unsplash.com',
      'www.anaexperienceclass.com',
    ],
  },
}

module.exports = nextConfig
