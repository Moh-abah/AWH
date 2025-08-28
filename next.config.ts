import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",                     // HTTPS بدل HTTP
        hostname: "api.digitalworldhorizon.com", // الدومين الفرعي للـ Strapi
        pathname: "/uploads/**",               // كل الملفات داخل uploads
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
