import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, petName, message } = await req.json()

    await sgMail.send({
      to: "tbone@akronvetclinic.com",
      from: "office@akronvetclinic.com",
      replyTo: email,
      subject: `Website Contact: ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Pet's Name: ${petName || "Not provided"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Pet's Name:</strong> ${petName || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SendGrid error:", error)
    return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 })
  }
}
