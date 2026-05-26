import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack does not climb up to C:\Aadi (which
  // contains its own .git) and try to resolve node_modules from there.
  turbopack: {
    root: path.resolve(__dirname),
  },
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/lodge", destination: "/stay#lodge", permanent: true },
      { source: "/backpackers", destination: "/stay#backpackers", permanent: true },
      { source: "/camping", destination: "/stay#camping", permanent: true },
      { source: "/amenities", destination: "/the-land", permanent: true },
      { source: "/attractions", destination: "/the-land", permanent: true },
      { source: "/groups", destination: "/weddings", permanent: true },
    ];
  },
};

export default nextConfig;
