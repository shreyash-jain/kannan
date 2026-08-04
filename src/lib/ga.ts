import * as jose from "jose";

/**
 * Google Analytics 4 Data API client, written for the edge runtime.
 *
 * The official `@google-analytics/data` SDK speaks gRPC and pulls in Node
 * built-ins, so it cannot run on Cloudflare Workers (which is where
 * @cloudflare/next-on-pages puts our route handlers). Instead we do what the
 * SDK does by hand: sign a service-account JWT, swap it for an access token,
 * and call the REST endpoint with fetch.
 */

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

export interface GaCredentials {
  propertyId: string;
  clientEmail: string;
  privateKey: string;
}

/**
 * Reads credentials from the environment. Returns null when any are absent —
 * the caller then falls back to demo data rather than erroring, so the
 * dashboard is reviewable before the Google account is provisioned.
 */
export function getCredentials(): GaCredentials | null {
  const propertyId = process.env.GOOGLE_ANALYTICS_PROPERTY_ID;
  const clientEmail = process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL;
  // Stored in .env with literal "\n" sequences (that is how Google's JSON key
  // file encodes it); turn them back into real newlines before parsing.
  const privateKey = process.env.GOOGLE_ANALYTICS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!propertyId || !clientEmail || !privateKey) return null;
  return { propertyId, clientEmail, privateKey };
}

// Access tokens last an hour. Workers reuse an isolate across requests, so
// caching here saves a round-trip on most calls; it is only ever an
// optimisation, never required for correctness.
let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(
  clientEmail: string,
  privateKey: string,
): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.token;
  }

  const key = await jose.importPKCS8(privateKey, "RS256");
  const assertion = await new jose.SignJWT({ scope: SCOPE })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuer(clientEmail)
    .setSubject(clientEmail)
    .setAudience(TOKEN_URL)
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(key);

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!res.ok) {
    throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as {
    access_token?: string;
    expires_in?: number;
  };
  if (!data.access_token) throw new Error("Token exchange returned no token");

  cachedToken = {
    token: data.access_token,
    expiresAt: now + (data.expires_in ?? 3600) * 1000,
  };
  return cachedToken.token;
}

export interface GaRow {
  dimensionValues?: { value: string }[];
  metricValues?: { value: string }[];
}

export interface GaReport {
  rows?: GaRow[];
}

/** Restricts a report to blog pages only. */
export const BLOG_PATH_FILTER = {
  filter: {
    fieldName: "pagePath",
    stringFilter: { matchType: "BEGINS_WITH", value: "/blog/" },
  },
};

export async function runReport(
  creds: GaCredentials,
  body: Record<string, unknown>,
): Promise<GaReport> {
  const token = await getAccessToken(creds.clientEmail, creds.privateKey);

  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${creds.propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    throw new Error(`GA4 API error: ${res.status} ${await res.text()}`);
  }

  return res.json() as Promise<GaReport>;
}

/** Reads a dimension/metric cell, with a safe default. */
export const dim = (row: GaRow, i: number) =>
  row.dimensionValues?.[i]?.value ?? "";
export const num = (row: GaRow, i: number) =>
  Number(row.metricValues?.[i]?.value ?? 0) || 0;
