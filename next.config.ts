import type { NextConfig } from "next";

const ZOW = "https://www.zowgame.com/games/dont-sleep-with-the-fishes";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // ── Direct matches: DSWTF page → ZowGame page ──
      { source: "/", destination: `${ZOW}/`, permanent: true },
      { source: "/guide/", destination: `${ZOW}/guide/`, permanent: true },
      { source: "/walkthrough/", destination: `${ZOW}/walkthrough/`, permanent: true },
      { source: "/characters/", destination: `${ZOW}/characters/`, permanent: true },
      { source: "/items/", destination: `${ZOW}/items/`, permanent: true },
      { source: "/endings/", destination: `${ZOW}/endings/`, permanent: true },
      { source: "/events/", destination: `${ZOW}/events/`, permanent: true },
      { source: "/achievements/", destination: `${ZOW}/achievements/`, permanent: true },
      { source: "/tips-tricks/", destination: `${ZOW}/tips-tricks/`, permanent: true },
      { source: "/faq/", destination: `${ZOW}/faq/`, permanent: true },
      { source: "/steam/", destination: `${ZOW}/steam/`, permanent: true },

      // ── Deep sub-pages → closest parent on ZowGame ──
      { source: "/events/:slug/", destination: `${ZOW}/events/`, permanent: true },
      { source: "/endings/:slug/", destination: `${ZOW}/endings/`, permanent: true },
      { source: "/items/:slug/", destination: `${ZOW}/items/`, permanent: true },
      { source: "/characters/:slug/", destination: `${ZOW}/characters/`, permanent: true },
      { source: "/faq/:slug/", destination: `${ZOW}/faq/`, permanent: true },

      // ── Unmatched pages → ZowGame main ──
      { source: "/speedrun/", destination: `${ZOW}/`, permanent: true },
      { source: "/changelog/", destination: `${ZOW}/`, permanent: true },
      { source: "/about/", destination: `${ZOW}/`, permanent: true },
      { source: "/version-112/", destination: `${ZOW}/`, permanent: true },

      // ── Chinese pages → ZowGame main (no zh version on ZowGame) ──
      { source: "/zh/", destination: `${ZOW}/`, permanent: true },
      { source: "/zh/:path*", destination: `${ZOW}/`, permanent: true },
    ];
  },
};

export default nextConfig;
