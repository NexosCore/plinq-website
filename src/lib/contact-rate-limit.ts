const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 8;

type Bucket = { count: number; windowStart: number };

const buckets = new Map<string, Bucket>();

function prune(now: number) {
  if (buckets.size < 500) return;
  for (const [key, bucket] of buckets) {
    if (now - bucket.windowStart > WINDOW_MS) buckets.delete(key);
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function isRateLimited(ip: string, now = Date.now()): boolean {
  prune(now);
  const bucket = buckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

/** @internal test helper */
export function resetContactRateLimits() {
  buckets.clear();
}
