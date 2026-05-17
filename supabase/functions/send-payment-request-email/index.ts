const RESEND_API_URL = "https://api.resend.com/emails";
// Resend testing note:
// BROVI <onboarding@resend.dev> can send only to the Resend account owner email without a verified domain.
// Set PAYMENT_ADMIN_EMAIL to that owner email for no-domain testing.
// In production, verify a BROVI domain in Resend and update the sender to a verified sender.
const EMAIL_SUBJECT = "New BROVI Payment Request";
const EMAIL_FROM = "BROVI <onboarding@resend.dev>";
const WEBHOOK_SECRET_HEADER = "x-broadmobility-webhook-secret";

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

function safe(value: unknown): string {
  if (value === null || value === undefined || value === "") return "Not provided";
  return String(value);
}

function escapeHtml(value: unknown): string {
  return safe(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

type PaymentRequestRecord = Record<string, unknown>;

type WebhookPayload = {
  type?: string;
  table?: string;
  schema?: string;
  record?: PaymentRequestRecord;
};

function row(label: string, value: unknown): string {
  return `
    <tr>
      <th style="width: 38%; padding: 12px 14px; text-align: left; color: #001F3F; background: #F8FAFC; border: 1px solid #E5EDF5; font-size: 14px;">${escapeHtml(label)}</th>
      <td style="padding: 12px 14px; color: #1A1A1A; border: 1px solid #E5EDF5; font-size: 14px; word-break: break-word;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildTextBody(record: PaymentRequestRecord): string {
  return [
    "New BROVI Payment Request",
    "",
    "A new manual payment request was submitted and is pending verification.",
    "",
    `Request Code: ${safe(record.request_code)}`,
    `Plan Name: ${safe(record.plan_name)}`,
    `USD Price: ${safe(record.plan_price_usd)}`,
    `ETB Price: ${safe(record.plan_price_etb)}`,
    `Full Name: ${safe(record.full_name)}`,
    `Email: ${safe(record.email)}`,
    `Phone: ${safe(record.phone)}`,
    `Payment Method: ${safe(record.payment_method)}`,
    `Transaction Reference: ${safe(record.transaction_reference)}`,
    `Receipt Storage Path: ${safe(record.receipt_path)}`,
    "Status: pending",
    "",
    "Do not treat this request as plan access until an admin reviews the private receipt inside Supabase. The receipt is stored in a private bucket and is not attached."
  ].join("\n");
}

function buildHtmlBody(record: PaymentRequestRecord): string {
  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>${escapeHtml(EMAIL_SUBJECT)}</title></head>
  <body style="margin: 0; padding: 0; background: #F8F9FA; font-family: Arial, sans-serif; color: #1A1A1A;">
    <main style="max-width: 720px; margin: 0 auto; padding: 28px 18px;">
      <section style="background: #FFFFFF; border: 1px solid #E5EDF5; border-radius: 18px; overflow: hidden;">
        <div style="height: 5px; background: #00A651;"></div>
        <div style="padding: 26px;">
          <p style="margin: 0 0 8px; color: #00A651; font-weight: 700; letter-spacing: 0.02em;">BROVI</p>
          <h2 style="margin: 0 0 10px; color: #001F3F; font-size: 24px; line-height: 1.25;">New BROVI Payment Request</h2>
          <p style="margin: 0 0 24px; color: #475569; line-height: 1.6;">A new manual payment request was submitted and is pending verification.</p>
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${row("Request Code", record.request_code)}
            ${row("Plan Name", record.plan_name)}
            ${row("USD Price", record.plan_price_usd)}
            ${row("ETB Price", record.plan_price_etb)}
            ${row("Full Name", record.full_name)}
            ${row("Email", record.email)}
            ${row("Phone", record.phone)}
            ${row("Payment Method", record.payment_method)}
            ${row("Transaction Reference", record.transaction_reference)}
            ${row("Receipt Storage Path", record.receipt_path)}
            ${row("Status", "pending")}
          </table>
          <p style="margin: 0; padding: 14px 16px; border-left: 4px solid #00A651; background: #F2FBF5; color: #334155; line-height: 1.6;">Do not treat this request as plan access until an admin reviews the private receipt inside Supabase. The receipt is stored in a private bucket and is not attached.</p>
        </div>
      </section>
    </main>
  </body>
</html>`;
}

function isValidWebhookPayload(payload: WebhookPayload): payload is Required<Pick<WebhookPayload, "record">> & WebhookPayload {
  return payload.type === "INSERT"
    && payload.table === "payment_requests"
    && payload.schema === "public"
    && typeof payload.record === "object"
    && payload.record !== null;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed" }, 405);
  }

  const expectedSecret = Deno.env.get("BROAD_MOBILITY_WEBHOOK_SECRET");
  if (!expectedSecret) {
    console.error("Missing BROVI webhook secret.");
    return jsonResponse({ ok: false, error: "Webhook secret is not configured" }, 500);
  }

  const receivedSecret = req.headers.get(WEBHOOK_SECRET_HEADER);
  if (receivedSecret !== expectedSecret) {
    console.warn("Rejected payment request email webhook request with invalid secret.");
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("Missing Resend API key.");
    return jsonResponse({ ok: false, error: "Email provider is not configured" }, 500);
  }

  const paymentAdminEmail = Deno.env.get("PAYMENT_ADMIN_EMAIL");
  if (!paymentAdminEmail) {
    console.error("Missing payment admin email.");
    return jsonResponse({ ok: false, error: "Payment admin email is not configured" }, 500);
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid JSON payload" }, 400);
  }

  if (!isValidWebhookPayload(payload)) {
    console.warn("Rejected payment request email webhook request with invalid payload metadata.");
    return jsonResponse({ ok: false, error: "Invalid webhook payload" }, 400);
  }

  const record = payload.record;
  const emailPayload: Record<string, unknown> = {
    from: EMAIL_FROM,
    to: [paymentAdminEmail],
    subject: EMAIL_SUBJECT,
    html: buildHtmlBody(record),
    text: buildTextBody(record)
  };

  if (record.email) {
    emailPayload.reply_to = safe(record.email);
  }

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${resendApiKey}`
    },
    body: JSON.stringify(emailPayload)
  });

  if (!resendResponse.ok) {
    const resendErrorText = await resendResponse.text();
    console.error("Resend payment email request failed.", {
      status: resendResponse.status,
      response: resendErrorText.slice(0, 500)
    });
    return jsonResponse({ ok: false, error: "Email provider failed" }, 502);
  }

  console.log("Payment request notification email sent.");
  return jsonResponse({ ok: true });
});
