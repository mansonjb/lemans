import { NextResponse } from "next/server";

/**
 * Owner listing requests. Forwarded to LEAD_WEBHOOK_URL when configured
 * (Make/Zapier/Slack webhook), logged otherwise so nothing is lost in dev.
 */
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || typeof data.email !== "string" || typeof data.name !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload = { ...data, receivedAt: new Date().toISOString() };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("[lead] webhook forward failed", e);
    }
  } else {
    console.log("[lead]", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
