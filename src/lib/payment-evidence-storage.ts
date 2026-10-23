import "server-only";
import { randomUUID } from "node:crypto";

const MAX_BYTES = 1 * 1024 * 1024;
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

function config() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const bucket = process.env.SUPABASE_PAYMENT_EVIDENCE_BUCKET || "payment-evidence";
  if (!url || !key) throw new Error("Payment evidence storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  return { url, key, bucket };
}

export async function storePaymentEvidence(file: File, paymentId: string) {
  const ext = ALLOWED_TYPES[file.type];
  if (!ext) throw new Error("Upload a JPG, PNG, or WEBP screenshot.");
  if (file.size <= 0 || file.size > MAX_BYTES) throw new Error("Screenshot must be smaller than 5 MB.");
  const { url, key, bucket } = config();
  const path = `${paymentId}/${randomUUID()}.${ext}`;
  const response = await fetch(`${url}/storage/v1/object/${encodeURIComponent(bucket)}/${path.split("/").map(encodeURIComponent).join("/")}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": file.type, "x-upsert": "false" },
    body: await file.arrayBuffer(),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("The screenshot could not be saved securely. Please try again later.");
  return path;
}

export async function createPaymentEvidenceSignedUrl(path: string, expiresIn = 300) {
  const { url, key, bucket } = config();
  const response = await fetch(`${url}/storage/v1/object/sign/${encodeURIComponent(bucket)}/${path.split("/").map(encodeURIComponent).join("/")}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify({ expiresIn }),
    cache: "no-store",
  });
  if (!response.ok) return null;
  const data = await response.json() as { signedURL?: string; signedUrl?: string };
  const signed = data.signedURL || data.signedUrl;
  if (!signed) return null;
  return signed.startsWith("http") ? signed : `${url}/storage/v1${signed.startsWith("/") ? "" : "/"}${signed}`;
}
