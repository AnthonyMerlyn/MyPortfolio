import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { parse } from "querystring";

const smtpTransport = nodemailer.createTransport({
  service: "gmail", // z.B. Gmail, Outlook, etc.
  auth: {
    user: "rammraphael97@gmail.com", // Deine E-Mail-Adresse
    pass: "1997GuildWars2", // Dein E-Mail-Passwort oder App-Passwort
  },
});

export async function POST(req) {
  const body = parse(req.body.text());
  const { email, subject, message } = body;

  const mailOptions = {
    from: "rammraphael97@gmail.com",
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
