/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static hosting
  },
  basePath: '/my-portfolio',
};

export default nextConfig;
