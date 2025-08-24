import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "62.169.17.101",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};
