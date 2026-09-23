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
    // Cloudinary already serves AVIF/WebP via f_auto, so we let it deliver
    // the optimised bytes and pass the URL through next/image unchanged.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dprx4pret/**",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/lodge", destination: "/stay/lodge", permanent: true },
      { source: "/backpackers", destination: "/stay/wooden-house", permanent: true },
      { source: "/amenities", destination: "/facilities", permanent: true },
      { source: "/attractions", destination: "/the-land", permanent: true },
      { source: "/weddings", destination: "/group-functions", permanent: true },
      { source: "/groups", destination: "/group-functions", permanent: true },
    ];
  },
};

export default nextConfig;
