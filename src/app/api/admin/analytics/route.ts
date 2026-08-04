import { NextResponse } from "next/server";
import {
  BLOG_PATH_FILTER,
  dim,
  getCredentials,
  num,
  runReport,
  type GaCredentials,
} from "@/lib/ga";
import {
  computeTotals,
  demoAnalytics,
  type AnalyticsData,
  type PageRow,
  type TrendRow,
} from "@/lib/analytics";
import { postByPath } from "@/lib/posts";

// Cloudflare Pages (via @cloudflare/next-on-pages) runs route handlers as
// Workers, so this must be the edge runtime.
export const runtime = "edge";
export const dynamic = "force-dynamic";

const DATE_RANGE = [{ startDate: "30daysAgo", endDate: "today" }];

async function liveAnalytics(creds: GaCredentials): Promise<AnalyticsData> {
  const [trend, pages, geo, channels, devices] = await Promise.all([
    // 1. Daily trend across all blog pages
    runReport(creds, {
      dateRanges: DATE_RANGE,
      dimensions: [{ name: "date" }],
      metrics: [
        { name: "activeUsers" },
        { name: "screenPageViews" },
        { name: "sessions" },
        { name: "newUsers" },
        { name: "averageSessionDuration" },
        { name: "engagementRate" },
      ],
      dimensionFilter: BLOG_PATH_FILTER,
      orderBys: [
        { dimension: { orderType: "ALPHANUMERIC", dimensionName: "date" } },
      ],
    }),

    // 2. Per-post performance
    runReport(creds, {
      dateRanges: DATE_RANGE,
      dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "averageSessionDuration" },
      ],
      dimensionFilter: BLOG_PATH_FILTER,
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 50,
    }),

    // 3. Where blog readers are
    runReport(creds, {
      dateRanges: DATE_RANGE,
      dimensions: [{ name: "country" }],
      metrics: [{ name: "activeUsers" }],
      dimensionFilter: BLOG_PATH_FILTER,
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 5,
    }),

    // 4. How they found the blog
    runReport(creds, {
      dateRanges: DATE_RANGE,
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "activeUsers" }],
      dimensionFilter: BLOG_PATH_FILTER,
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 5,
    }),

    // 5. What they read on
    runReport(creds, {
      dateRanges: DATE_RANGE,
      dimensions: [{ name: "deviceCategory" }],
      metrics: [{ name: "activeUsers" }],
      dimensionFilter: BLOG_PATH_FILTER,
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
    }),
  ]);

  const rows: TrendRow[] = (trend.rows ?? []).map((r) => ({
    date: dim(r, 0),
    activeUsers: num(r, 0),
    screenPageViews: num(r, 1),
    sessions: num(r, 2),
    newUsers: num(r, 3),
    avgSessionDuration: num(r, 4),
    engagementRate: num(r, 5),
  }));

  const pageRows: PageRow[] = (pages.rows ?? []).map((r) => {
    const path = dim(r, 0);
    // Prefer our own title over GA's pageTitle: GA records whatever the
    // <title> was at the time, so it carries stale titles and suffixes.
    const post = postByPath(path);
    return {
      path,
      title: post?.title ?? dim(r, 1),
      views: num(r, 0),
      users: num(r, 1),
      avgDuration: num(r, 2),
      category: post?.category,
      datePublished: post?.datePublished,
    };
  });

  return {
    demo: false,
    overview: { rows, totals: computeTotals(rows) },
    pages: pageRows,
    countries: (geo.rows ?? []).map((r) => ({
      country: dim(r, 0),
      users: num(r, 0),
    })),
    trafficSources: (channels.rows ?? []).map((r) => ({
      channel: dim(r, 0),
      users: num(r, 0),
    })),
    devices: (devices.rows ?? []).map((r) => ({
      device: dim(r, 0),
      users: num(r, 0),
    })),
  };
}

export async function GET() {
  const creds = getCredentials();

  // No credentials yet? Serve demo data rather than an error, so the
  // dashboard stays reviewable until the service account is provisioned.
  if (!creds) {
    return NextResponse.json(demoAnalytics(), {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const data = await liveAnalytics(creds);
    return NextResponse.json(data, {
      // GA4 has daily request quotas and the numbers barely move minute to
      // minute, so let the edge cache absorb repeat loads.
      headers: { "Cache-Control": "private, max-age=0, s-maxage=900" },
    });
  } catch (error) {
    console.error("[admin/analytics]", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 },
    );
  }
}
