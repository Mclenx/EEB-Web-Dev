import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New inquiry — ${name}`,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Contact:</strong> ${contact}<br/><br/>
        <strong>Message:</strong><br/>
        ${message.replace(/\n/g, "<br/>")}
      `,
      replyTo: contact.includes("@") ? contact : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
