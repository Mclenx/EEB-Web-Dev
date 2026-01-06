import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value: string) {
  // Simple, pragmatic check (good enough for contact forms)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getLangFromReferer(req: Request): "en" | "fr" {
  const ref = req.headers.get("referer") || "";
  // Matches /fr or /fr/ or /fr#contact etc.
  if (/\/fr(\/|#|$)/i.test(ref)) return "fr";
  return "en";
}

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();

    // honeypot
    if (data.get("company")) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !contact || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const lang = getLangFromReferer(req);

    const safeName = escapeHtml(name);
    const safeContact = escapeHtml(contact);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // 1) Send the internal lead email to you
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New inquiry — ${name}`,
      html: `
        <strong>Name:</strong> ${safeName}<br/>
        <strong>Contact:</strong> ${safeContact}<br/><br/>
        <strong>Message:</strong><br/>
        ${safeMessage}<br/><br/>
        <hr/>
        <small>Language detected: ${lang.toUpperCase()}</small>
      `,
      replyTo: isEmail(contact) ? contact : undefined,
    });

    // 2) Send auto-reply ONLY if contact is an email
    if (isEmail(contact) && process.env.CONTACT_AUTOREPLY_FROM_EMAIL) {
      const subject =
        lang === "fr"
          ? "Merci — j’ai bien reçu votre message (EEB Web Dev)"
          : "Thanks — I got your message (EEB Web Dev)";

      const html =
        lang === "fr"
          ? `
            Bonjour ${safeName || ""},<br/><br/>
            Merci pour votre message — je l’ai bien reçu et je vous répondrai sous <strong>1 jour ouvrable</strong>.<br/><br/>
            Si possible, vous pouvez répondre avec :<br/>
            – le nom et la ville de votre entreprise<br/>
            – votre besoin (nouveau site / refonte / correctifs)<br/>
            – votre échéancier idéal<br/><br/>
            Au plaisir,<br/>
            <strong>Eric Boisvert</strong><br/>
            EEB Web Dev<br/>
            https://eebweb.dev<br/><br/>
            <small>English available — just reply to this email in English.</small>
          `
          : `
            Hi ${safeName || ""},<br/><br/>
            Thanks for reaching out — I’ve received your message and I’ll get back to you within <strong>1 business day</strong>.<br/><br/>
            If it helps, feel free to reply with:<br/>
            – your business name + location<br/>
            – what you need (new site / refresh / fixes)<br/>
            – your ideal timeline<br/><br/>
            Cheers,<br/>
            <strong>Eric Boisvert</strong><br/>
            EEB Web Dev<br/>
            https://eebweb.dev<br/><br/>
            <small>Français disponible — répondez simplement à ce courriel en français.</small>
          `;

      await resend.emails.send({
        from: process.env.CONTACT_AUTOREPLY_FROM_EMAIL,
        to: contact,
        subject,
        html,
        // optional: direct replies back to you
        replyTo: process.env.CONTACT_TO_EMAIL!,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

