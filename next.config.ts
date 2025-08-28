import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // قد يساعد هذا في حل مشاكل التوافق
    serverComponentsExternalPackages: [],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "62.169.17.101",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
     
    ],
  },
};


export default nextConfig;