import { NextResponse } from "next/server";
import { Resend } from "resend";

// Expected env vars:
// RESEND_API_KEY - API key from https://resend.com
// CONTACT_TO_EMAIL - destination email address to receive leads
// RESEND_FROM - verified sender, e.g. "Maler Marketing <noreply@your-domain.com>"

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  try {
    let name = "";
    let email = "";
    let phone = "";
    let company = "";
    let message = "";
    let website = ""; // honeypot

    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = (body.name || "").toString().trim();
      email = (body.email || "").toString().trim();
      phone = (body.phone || "").toString().trim();
      company = (body.company || "").toString().trim();
      message = (body.message || "").toString().trim();
      website = (body.website || "").toString().trim();
    } else {
      const form = await request.formData();
      name = String(form.get("name") || "").trim();
      email = String(form.get("email") || "").trim();
      phone = String(form.get("phone") || "").trim();
      company = String(form.get("company") || "").trim();
      message = String(form.get("message") || "").trim();
      website = String(form.get("website") || "").trim();
    }

    // Honeypot: if filled, treat as spam
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Name und E-Mail sind erforderlich." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail an." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.RESEND_FROM;

    if (!to || !from) {
      return NextResponse.json({ error: "Server ist nicht konfiguriert (TO/ FROM fehlen)." }, { status: 500 });
    }

    const subject = `Neue Anfrage: ${name} (${company || "ohne Firma"})`;

    const html = `
      <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif">
        <h2>Neue Anfrage über die Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
        ${message ? `<p><strong>Nachricht:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
        <hr />
        <p>Gesendet: ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      reply_to: email,
      html,
    } as any);

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: "E-Mail Versand fehlgeschlagen." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: "Unerwarteter Fehler." }, { status: 500 });
  }
}
