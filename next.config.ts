import type { NextConfig } from "next";

const ZOW = "https://www.zowgame.com/games/dont-sleep-with-the-fishes";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/:path*", destination: `${ZOW}/`, permanent: true },
    ];
  },
};

export default nextConfig;
