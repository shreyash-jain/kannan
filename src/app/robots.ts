import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: everyone may crawl everything except the private admin area.
      { userAgent: "*", allow: "/", disallow: "/admin" },
      // Explicitly welcome AI search/answer crawlers so Kanaan can be cited in
      // ChatGPT, Claude, Perplexity and Google AI Overviews. (The "*" rule above
      // already permits these — listing them documents intent.)
      // NOTE: Cloudflare's "Block AI bots" can still block these UPSTREAM,
      // before robots.txt is ever read — verify in the Cloudflare dashboard.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "Amazonbot",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: "/admin",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
