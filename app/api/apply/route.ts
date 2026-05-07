import { NextResponse } from "next/server";

const DEFAULT_TO_EMAIL = "miki@studiortf.com";

type ApplicationPayload = {
  fullName?: string;
  email?: string;
  schoolCompany?: string;
  technicalBackground?: string;
  builtBefore?: string;
  whyJoin?: string;
  futureWork?: string;
};

const requiredFields: Array<keyof ApplicationPayload> = [
  "fullName",
  "email",
  "schoolCompany",
  "technicalBackground",
  "builtBefore",
  "whyJoin",
];

export async function POST(request: Request) {
  const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsSecret = process.env.GOOGLE_SHEETS_SECRET;

  if (!sheetsWebhookUrl || !sheetsSecret) {
    return NextResponse.json(
      {
        error:
          "Application storage is not configured. Set GOOGLE_SHEETS_WEBHOOK_URL and GOOGLE_SHEETS_SECRET.",
      },
      { status: 500 }
    );
  }

  let payload: ApplicationPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => !payload[field]?.trim());

  if (missingField) {
    return NextResponse.json(
      { error: `Missing required field: ${missingField}` },
      { status: 400 }
    );
  }

  try {
    await submitApplicationToGoogleSheets(payload, sheetsWebhookUrl, sheetsSecret);
  } catch (error) {
    console.error("Google Sheets application submission failed", error);

    return NextResponse.json(
      {
        error:
          "Could not save application. Check the server logs for the Google Sheets error.",
      },
      { status: 502 }
    );
  }

  await sendOptionalApplicationEmail(payload);

  return NextResponse.json({ ok: true });
}

async function submitApplicationToGoogleSheets(
  payload: ApplicationPayload,
  webhookUrl: string,
  secret: string
) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      secret,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google Sheets webhook failed with ${response.status}: ${details}`);
  }

  const result = await response.json().catch(() => null);

  if (!result?.ok) {
    throw new Error(result?.error ?? "Google Sheets webhook returned an error.");
  }
}

async function sendOptionalApplicationEmail(payload: ApplicationPayload) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.APPLICATION_FROM_EMAIL;
  const toEmail = process.env.APPLICATION_TO_EMAIL || DEFAULT_TO_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return;
  }

  const subject = `New AI Agent Builder Fellowship application: ${payload.fullName}`;
  const text = formatTextEmail(payload);
  const html = formatHtmlEmail(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: payload.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend application email failed", {
      status: response.status,
      details,
    });
  }
}

function formatTextEmail(payload: ApplicationPayload) {
  return [
    "New Studio RTF AI Agent Builder Fellowship application",
    "",
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `School/company: ${payload.schoolCompany}`,
    `Technical background: ${payload.technicalBackground}`,
    `Optional paid Studio RTF project consideration: ${payload.futureWork || "Not answered"}`,
    "",
    "What have you built before?",
    payload.builtBefore,
    "",
    "Why do you want to join?",
    payload.whyJoin,
  ].join("\n");
}

function formatHtmlEmail(payload: ApplicationPayload) {
  const rows: Array<[string, string | undefined]> = [
    ["Full name", payload.fullName],
    ["Email", payload.email],
    ["School/company", payload.schoolCompany],
    ["Technical background", payload.technicalBackground],
    ["Optional paid Studio RTF project consideration", payload.futureWork || "Not answered"],
    ["What have you built before?", payload.builtBefore],
    ["Why do you want to join?", payload.whyJoin],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
      <h1 style="font-size: 22px;">New Studio RTF AI Agent Builder Fellowship application</h1>
      <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="width: 220px; padding: 12px; border: 1px solid #ddd; font-weight: 700; vertical-align: top;">
                  ${escapeHtml(label)}
                </td>
                <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">
                  ${escapeHtml(value ?? "")}
                </td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
