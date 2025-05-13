// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, text } = await req.json();

  if (!name || !email || !text) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'NysCamping Email',
      text: `Mail from ${name}\nEmail: ${email}\nMessage:\n${text}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Message from NysCamping Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${text}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent", info });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Email sending failed", error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sending failed", error: "Unknown error" },
      { status: 500 }
    );
  }
}
