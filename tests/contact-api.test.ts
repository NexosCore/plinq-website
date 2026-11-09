import { test } from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST } from "../src/app/api/contact/route";
import { resetContactRateLimits } from "../src/lib/contact-rate-limit";

const envKeys = [
  "RESEND_API_KEY",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;

function saveEnv() {
  return Object.fromEntries(
    envKeys.map((key) => [key, process.env[key]]),
  ) as Record<(typeof envKeys)[number], string | undefined>;
}

function restoreEnv(snapshot: Record<string, string | undefined>) {
  for (const key of envKeys) {
    const value = snapshot[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

test("POST /api/contact returns 503 when Resend is not configured", async () => {
  const snapshot = saveEnv();
  delete process.env.RESEND_API_KEY;
  resetContactRateLimits();

  const request = new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "1.2.3.4" },
    body: JSON.stringify({
      name: "Test Bruker",
      email: "test@example.com",
      message: "Dette er en testmelding med nok tegn.",
    }),
  });

  const response = await POST(request);
  assert.equal(response.status, 503);
  restoreEnv(snapshot);
});

test("POST /api/contact accepts honeypot without sending", async () => {
  const snapshot = saveEnv();
  delete process.env.RESEND_API_KEY;
  resetContactRateLimits();

  const request = new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "5.6.7.8" },
    body: JSON.stringify({
      name: "Bot",
      email: "bot@spam.invalid",
      message: "Spam spam spam spam.",
      companyWebsite: "https://spam.example",
    }),
  });

  const response = await POST(request);
  assert.equal(response.status, 200);
  const body = (await response.json()) as { ok?: boolean };
  assert.equal(body.ok, true);
  restoreEnv(snapshot);
});
