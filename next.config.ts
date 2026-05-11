import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
