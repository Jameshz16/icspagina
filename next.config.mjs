/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Añade esta línea
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;