// next.config.mjs

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */

// Define __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to load environment variables based on the build type
const loadEnvConfig = () => {
  const envFile = process.env.STAGING
    ? '.env.staging'
    : process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production';

  const envPath = path.resolve(__dirname, envFile);

  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`Loaded environment variables from ${envFile}`);
  } else {
    console.warn(`Environment file ${envFile} not found.`);
  }
};

// Load the appropriate environment variables
loadEnvConfig();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: { unoptimized: true },
  trailingSlash: true, // Optional: ensure trailing slashes for better static file serving
  // Expose environment variables to the browser
  env: {
    NEXT_PUBLIC_H5_URL: process.env.NEXT_PUBLIC_H5_URL,
    NEXT_PUBLIC_Android_Download: process.env.NEXT_PUBLIC_Android_Download,
    NEXT_PUBLIC_Streamy_Download: process.env.NEXT_PUBLIC_Streamy_Download,
    NEXT_PUBLIC_apiUrl: process.env.NEXT_PUBLIC_apiUrl,
  },
};

export default nextConfig;
