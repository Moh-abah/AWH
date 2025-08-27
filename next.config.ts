import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        port: "",
        pathname: "/api/**",
      }
    ],
  },
};

export default nextConfig;
