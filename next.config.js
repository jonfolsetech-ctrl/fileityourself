/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable static export for Amplify
  trailingSlash: true,
}

module.exports = nextConfig
