import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev indicator badge
  devIndicators: false,
  // Pin the workspace root to this project (there's a stray package-lock.json in ~/ that confused turbopack)
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
