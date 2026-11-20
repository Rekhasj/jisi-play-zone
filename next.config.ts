import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // On Windows the dev server's on-disk webpack cache sometimes gets corrupted
    // ("Caching failed for pack … rename"), which breaks the page with a 500 error.
    // Keeping the cache in memory during development avoids that. Production builds are unaffected.
    if (dev) config.cache = { type: "memory" };
    return config;
  },
};

export default nextConfig;
