/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  // trailingSlash: true, // Optional: ensure trailing slashes for better static file serving
};

export default nextConfig;
