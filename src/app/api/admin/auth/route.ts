import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

/**
 * Simple credential check against environment variables.
 *
 * NOTE: this mirrors the Krazy Kreators admin exactly, by request. The session
 * it grants is a `localStorage` flag set by the client, so it gates the UI but
 * not the data — /api/admin/analytics remains publicly fetchable. Swapping in
 * a signed httpOnly cookie would be a change to this file, the login page and
 * the layout only; the dashboard itself would not need to change.
 */
export async function POST(req: Request) {
  try {
    const { username, password } = (await req.json()) as {
      username?: string;
      password?: string;
    };

    const validUsername = process.env.ADMIN_USERNAME;
    const validPassword = process.env.ADMIN_PASSWORD;

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { error: "Server auth not configured" },
        { status: 500 },
      );
    }

    if (username === validUsername && password === validPassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
