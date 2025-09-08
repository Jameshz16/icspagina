/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Añade esta línea
  basePath: '/ICS-PROYECT', // Añade esta línea
  images: {
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