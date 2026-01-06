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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getLangFromReferer(req: Request): "en" | "fr" {
  const ref = req.headers.get("referer") || "";
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
    if (data.get("company")) return NextResponse.json({ ok: true });

    if (!name || !contact || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const lang = getLangFromReferer(req);
    const safeName = escapeHtml(name);
    const safeContact = escapeHtml(contact);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // DEBUG (shows up in Vercel function logs)
    console.log("CONTACT DEBUG", {
      lang,
      contact,
      isEmail: isEmail(contact),
      hasAutoReplyFrom: !!process.env.CONTACT_AUTOREPLY_FROM_EMAIL,
      autoReplyFrom: process.env.CONTACT_AUTOREPLY_FROM_EMAIL,
      referer: req.headers.get("referer"),
    });

    // 1) Internal email
    const internal = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New inquiry — ${name}`,
      html: `
        <strong>Name:</strong> ${safeName}<br/>
        <strong>Contact:</strong> ${safeContact}<br/><br/>
        <strong>Message:</strong><br/>
        ${safeMessage}
      `,
      replyTo: isEmail(contact) ? contact : undefined,
    });

    if (internal.error) {
      console.error("RESEND INTERNAL ERROR", internal.error);
      return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 500 });
    }

    // 2) Auto-reply (email only)
    if (isEmail(contact) && process.env.CONTACT_AUTOREPLY_FROM_EMAIL) {
      const subject =
        lang === "fr"
          ? "Merci — j’ai bien reçu votre message (EEB Web Dev)"
          : "Thanks — I got your message (EEB Web Dev)";

      const html =
        lang === "fr"
          ? `Bonjour ${safeName || ""},<br/><br/>
             Merci pour votre message — je l’ai bien reçu et je vous répondrai sous <strong>1 jour ouvrable</strong>.<br/><br/>
             Au plaisir,<br/><strong>Eric Boisvert</strong><br/>EEB Web Dev<br/>https://eebweb.dev`
          : `Hi ${safeName || ""},<br/><br/>
             Thanks for reaching out — I’ve received your message and I’ll get back to you within <strong>1 business day</strong>.<br/><br/>
             Cheers,<br/><strong>Eric Boisvert</strong><br/>EEB Web Dev<br/>https://eebweb.dev`;

      const auto = await resend.emails.send({
        from: process.env.CONTACT_AUTOREPLY_FROM_EMAIL,
        to: contact,
        subject,
        html,
        replyTo: process.env.CONTACT_TO_EMAIL!,
      });

      if (auto.error) {
        console.error("RESEND AUTOREPLY ERROR", auto.error);
        // Return 200 so the form still succeeds, but you’ll see the error in logs
        return NextResponse.json({ ok: true, autoReply: "failed" });
      }

      console.log("AUTOREPLY SENT", auto.data?.id);
      return NextResponse.json({ ok: true, autoReply: "sent" });
    }

    return NextResponse.json({ ok: true, autoReply: "skipped" });
  } catch (err) {
    console.error("CONTACT ROUTE ERROR", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

