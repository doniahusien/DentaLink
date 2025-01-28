/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Optional, but recommended
    experimental: {
      optimizeFonts: true,  // This enables font optimization
    },
    webpack(config) {
      // Add custom webpack configurations if necessary
      return config;
    },
  };

export default nextConfig;
