/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  },
  images: {
    domains: ['localhost', 'audiophile-eccomerce-server.onrender.com'],
  },
};

export default nextConfig;
