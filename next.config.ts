import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/getting-started", destination: "/guide", permanent: true },
    ];
  },
};

export default nextConfig;
