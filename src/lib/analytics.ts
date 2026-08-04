import { livePosts } from "@/lib/posts";

/** The payload /api/admin/analytics returns and /admin renders. */
export interface TrendRow {
  /** GA4 format: YYYYMMDD */
  date: string;
  activeUsers: number;
  screenPageViews: number;
  sessions: number;
  newUsers: number;
  avgSessionDuration: number;
  engagementRate: number;
  /** Filled in client-side for axis labels: MM/DD */
  formattedDate?: string;
}

export interface Totals {
  activeUsers: number;
  screenPageViews: number;
  sessions: number;
  newUsers: number;
  avgSessionDuration: number;
  avgEngagementRate: number;
}

export interface PageRow {
  path: string;
  title: string;
  views: number;
  users: number;
  avgDuration: number;
  /** From the post registry, when the path matches a known post. */
  category?: "story" | "guide";
  datePublished?: string;
}

export interface AnalyticsData {
  /** True when these numbers are invented because GA credentials are absent. */
  demo: boolean;
  overview: { rows: TrendRow[]; totals: Totals };
  pages: PageRow[];
  countries: { country: string; users: number }[];
  trafficSources: { channel: string; users: number }[];
  devices: { device: string; users: number }[];
}

export function computeTotals(rows: TrendRow[]): Totals {
  const n = rows.length || 1;
  return {
    activeUsers: rows.reduce((a, r) => a + r.activeUsers, 0),
    screenPageViews: rows.reduce((a, r) => a + r.screenPageViews, 0),
    sessions: rows.reduce((a, r) => a + r.sessions, 0),
    newUsers: rows.reduce((a, r) => a + r.newUsers, 0),
    avgSessionDuration: rows.reduce((a, r) => a + r.avgSessionDuration, 0) / n,
    avgEngagementRate: rows.reduce((a, r) => a + r.engagementRate, 0) / n,
  };
}

/* ------------------------------------------------------------------ *
 * Demo data
 *
 * Served whenever GA credentials are missing, so the dashboard can be
 * built, reviewed and signed off before the Google service account
 * exists. The shape is identical to the live response, so swapping to
 * real data needs no code change — only the env vars.
 *
 * Deterministic on purpose: a seeded generator means the numbers hold
 * still between refreshes instead of jittering, which makes the UI
 * reviewable. `demo: true` drives a banner in the dashboard so these
 * figures can never be mistaken for real ones.
 * ------------------------------------------------------------------ */

/** Small deterministic PRNG (mulberry32) — same seed, same numbers. */
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function yyyymmdd(d: Date) {
  return (
    d.getUTCFullYear().toString() +
    String(d.getUTCMonth() + 1).padStart(2, "0") +
    String(d.getUTCDate()).padStart(2, "0")
  );
}

export function demoAnalytics(): AnalyticsData {
  const rand = seeded(20260803);
  const rows: TrendRow[] = [];

  const today = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - i);

    // Weekends run quieter; traffic drifts gently upward over the month.
    const weekend = d.getUTCDay() === 0 || d.getUTCDay() === 6;
    const trend = 1 + (29 - i) * 0.012;
    const base = (weekend ? 26 : 41) * trend;
    const views = Math.round(base * (0.75 + rand() * 0.5));
    const users = Math.round(views * (0.62 + rand() * 0.12));

    rows.push({
      date: yyyymmdd(d),
      screenPageViews: views,
      activeUsers: users,
      sessions: Math.round(users * (1.05 + rand() * 0.2)),
      newUsers: Math.round(users * (0.68 + rand() * 0.15)),
      avgSessionDuration: 95 + rand() * 90,
      engagementRate: 0.52 + rand() * 0.22,
    });
  }

  // Older posts have had longer to accumulate; guides out-earn stories on
  // search. One post is left at zero to exercise the empty-row case.
  const pages: PageRow[] = livePosts
    .map((p, i) => {
      const ageDays = p.datePublished
        ? Math.max(
            1,
            Math.round(
              (today.getTime() - new Date(p.datePublished).getTime()) / 86_400_000,
            ),
          )
        : 30;
      const weight = p.category === "guide" ? 1.9 : 1;
      const views =
        i === livePosts.length - 1
          ? 0
          : Math.round(ageDays * weight * (0.9 + rand() * 1.4));
      return {
        path: p.href,
        title: p.title,
        views,
        users: Math.round(views * (0.7 + rand() * 0.12)),
        avgDuration: 70 + rand() * 180,
        category: p.category,
        datePublished: p.datePublished,
      };
    })
    .sort((a, b) => b.views - a.views);

  return {
    demo: true,
    overview: { rows, totals: computeTotals(rows) },
    pages,
    countries: [
      { country: "South Africa", users: 412 },
      { country: "United Kingdom", users: 138 },
      { country: "Germany", users: 96 },
      { country: "Netherlands", users: 61 },
      { country: "United States", users: 47 },
    ],
    trafficSources: [
      { channel: "Organic Search", users: 486 },
      { channel: "Direct", users: 174 },
      { channel: "Organic Social", users: 88 },
      { channel: "Referral", users: 39 },
      { channel: "Unassigned", users: 12 },
    ],
    devices: [
      { device: "mobile", users: 523 },
      { device: "desktop", users: 231 },
      { device: "tablet", users: 45 },
    ],
  };
}
