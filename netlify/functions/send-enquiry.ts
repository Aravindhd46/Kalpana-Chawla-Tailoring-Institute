import nodemailer from "nodemailer"

interface HandlerEvent {
  httpMethod: string
  body: string | null
}

interface HandlerResponse {
  statusCode: number
  headers?: Record<string, string>
  body: string
}

export const handler = async (
  event: HandlerEvent
): Promise<HandlerResponse> => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    }
  }

  try {
    const data = JSON.parse(event.body || "{}")
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com"
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10)
    const smtpUser = process.env.SMTP_USER || "amudhachinnapillai@gmail.com"
    const smtpPass = (process.env.SMTP_PASS || "").trim().replace(/\s+/g, "")

    if (!smtpPass) {
      console.warn("[Netlify SMTP] Warning: SMTP_PASS is not configured in Netlify environment variables.")
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: true,
          message: "Enquiry received (simulation mode). Please set SMTP_PASS in Netlify.",
        }),
      }
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `"Kalpana Chawla Institute" <${smtpUser}>`,
      to: "amudhachinnapillai@gmail.com",
      replyTo: data.email || undefined,
      subject: `New Enquiry from ${data.name || "Visitor"} - ${data.interest || data.service || "General"}`,
      text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nInterested in / Service: ${data.interest || data.service || "N/A"}\nPreferred Date: ${data.date || "N/A"}\nMessage:\n${data.message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #681028; border-bottom: 2px solid #b7791f; padding-bottom: 8px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${data.email || "Not provided"}</td></tr>
            <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold;">Interest / Service:</td><td style="padding: 8px;">${data.interest || data.service || "General Enquiry"}</td></tr>
            ${data.date ? `<tr><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td style="padding: 8px;">${data.date}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #faf5f0; border-left: 4px solid #681028; border-radius: 4px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${data.message}</p>
          </div>
        </div>
      `,
    })

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Enquiry sent successfully",
      }),
    }
  } catch (err: any) {
    console.error("[Netlify SMTP Error]:", err)
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: err.message }),
    }
  }
}
