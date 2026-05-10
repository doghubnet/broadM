const RESEND_API_URL = "https://api.resend.com/emails";
const ADMIN_EMAIL = "sceltainfinity@gmail.com";
const EMAIL_SUBJECT = "New Broad Mobility Application Submitted";
const EMAIL_FROM = "Broad Mobility <onboarding@resend.dev>";
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

type ApplicationRecord = Record<string, unknown>;

type WebhookPayload = {
  type?: string;
  table?: string;
  schema?: string;
  record?: ApplicationRecord;
};

function getSubmittedAt(record: ApplicationRecord): string {
  return safe(record.created_at === null || record.created_at === undefined || record.created_at === ""
    ? new Date().toISOString()
    : record.created_at);
}

function buildTextBody(record: ApplicationRecord): string {
  const submittedAt = getSubmittedAt(record);

  return [
    "New Broad Mobility Application Submitted",
    "",
    "A new application has been submitted through the Broad Mobility website.",
    "",
    "Applicant Details",
    `Full Name: ${safe(record.full_name)}`,
    `Email: ${safe(record.email)}`,
    `Phone: ${safe(record.phone)}`,
    `Secondary Phone: ${safe(record.secondary_phone)}`,
    `Application Level: ${safe(record.application_level)}`,
    `Application Area: ${safe(record.application_area)}`,
    `Countries Interested In: ${safe(record.countries_interested)}`,
    `How Did You Hear About Us: ${safe(record.heard_about_us)}`,
    `Submitted Date/Time: ${submittedAt}`,
    "",
    "Document File Paths",
    `Grade 10 and 12 Exam Path: ${safe(record.grade_10_12_exam_path)}`,
    `High School Transcript Path: ${safe(record.high_school_transcript_path)}`,
    `Passport Path: ${safe(record.passport_path)}`,
    `Bachelor Degree Certificate Path: ${safe(record.bachelor_degree_certificate_path)}`,
    `Bachelor Transcript Path: ${safe(record.bachelor_transcript_path)}`,
    "",
    "Internal Note",
    "Uploaded files are stored in the private Supabase Storage bucket. Review them from the Supabase dashboard or a protected admin workflow."
  ].join("\n");
}

function row(label: string, value: unknown): string {
  return `
    <tr>
      <th style="width: 38%; padding: 12px 14px; text-align: left; color: #001F3F; background: #F8FAFC; border: 1px solid #E5EDF5; font-size: 14px;">${escapeHtml(label)}</th>
      <td style="padding: 12px 14px; color: #1A1A1A; border: 1px solid #E5EDF5; font-size: 14px; word-break: break-word;">${escapeHtml(value)}</td>
    </tr>`;
}

function buildHtmlBody(record: ApplicationRecord): string {
  const submittedAt = getSubmittedAt(record);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${escapeHtml(EMAIL_SUBJECT)}</title>
  </head>
  <body style="margin: 0; padding: 0; background: #F8F9FA; font-family: Arial, sans-serif; color: #1A1A1A;">
    <main style="max-width: 720px; margin: 0 auto; padding: 28px 18px;">
      <section style="background: #FFFFFF; border: 1px solid #E5EDF5; border-radius: 18px; overflow: hidden;">
        <div style="height: 5px; background: #00A651;"></div>
        <div style="padding: 26px;">
          <p style="margin: 0 0 8px; color: #00A651; font-weight: 700; letter-spacing: 0.02em;">Broad Mobility</p>
          <h2 style="margin: 0 0 10px; color: #001F3F; font-size: 24px; line-height: 1.25;">New Broad Mobility Application Submitted</h2>
          <p style="margin: 0 0 24px; color: #475569; line-height: 1.6;">A new application has been submitted through the Broad Mobility website.</p>

          <h3 style="margin: 0 0 12px; color: #001F3F; font-size: 18px;">Applicant Details</h3>
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${row("Full Name", record.full_name)}
            ${row("Email", record.email)}
            ${row("Phone", record.phone)}
            ${row("Secondary Phone", record.secondary_phone)}
            ${row("Application Level", record.application_level)}
            ${row("Application Area", record.application_area)}
            ${row("Countries Interested In", record.countries_interested)}
            ${row("How Did You Hear About Us", record.heard_about_us)}
            ${row("Submitted Date/Time", submittedAt)}
          </table>

          <h3 style="margin: 0 0 12px; color: #001F3F; font-size: 18px;">Document File Paths</h3>
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${row("Grade 10 and 12 Exam Path", record.grade_10_12_exam_path)}
            ${row("High School Transcript Path", record.high_school_transcript_path)}
            ${row("Passport Path", record.passport_path)}
            ${row("Bachelor Degree Certificate Path", record.bachelor_degree_certificate_path)}
            ${row("Bachelor Transcript Path", record.bachelor_transcript_path)}
          </table>

          <h3 style="margin: 0 0 12px; color: #001F3F; font-size: 18px;">Internal Note</h3>
          <p style="margin: 0; padding: 14px 16px; border-left: 4px solid #00A651; background: #F2FBF5; color: #334155; line-height: 1.6;">Uploaded files are stored in the private Supabase Storage bucket. Review them from the Supabase dashboard or a protected admin workflow.</p>
        </div>
      </section>
    </main>
  </body>
</html>`;
}

function isValidWebhookPayload(payload: WebhookPayload): payload is Required<Pick<WebhookPayload, "record">> & WebhookPayload {
  return payload.type === "INSERT"
    && payload.table === "applications"
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
    console.error("Missing Broad Mobility webhook secret.");
    return jsonResponse({ ok: false, error: "Webhook secret is not configured" }, 500);
  }

  const receivedSecret = req.headers.get(WEBHOOK_SECRET_HEADER);
  if (receivedSecret !== expectedSecret) {
    console.warn("Rejected application email webhook request with invalid secret.");
    return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("Missing Resend API key.");
    return jsonResponse({ ok: false, error: "Email provider is not configured" }, 500);
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid JSON payload" }, 400);
  }

  if (!isValidWebhookPayload(payload)) {
    console.warn("Rejected application email webhook request with invalid payload metadata.");
    return jsonResponse({ ok: false, error: "Invalid webhook payload" }, 400);
  }

  const record = payload.record;
  const htmlBody = buildHtmlBody(record);
  const textBody = buildTextBody(record);

  const emailPayload: Record<string, unknown> = {
    from: EMAIL_FROM,
    to: [ADMIN_EMAIL],
    subject: EMAIL_SUBJECT,
    html: htmlBody,
    text: textBody
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
    console.error("Resend email request failed.", {
      status: resendResponse.status,
      response: resendErrorText.slice(0, 500)
    });
    return jsonResponse({ ok: false, error: "Email provider failed" }, 502);
  }

  console.log("Application notification email sent.");
  return jsonResponse({ ok: true });
});
