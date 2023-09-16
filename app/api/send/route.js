import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { parse } from "querystring";

const smtpTransport = nodemailer.createTransport({
  service: "gmail", // z.B. Gmail, Outlook, etc.
  auth: {
    user: "", // Deine E-Mail-Adresse
    pass: "", // Dein E-Mail-Passwort oder App-Passwort
  },
});

export async function POST(req) {
  const body = parse(req.body.text());
  const { email, subject, message } = body;

  const mailOptions = {
    from: "",
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await smtpTransport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Email could not be sent" });
  }
}
