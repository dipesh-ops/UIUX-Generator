import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'http://localhost:3000/',
      port: '',
      pathname: '/**',
    },
  ],
},
turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
