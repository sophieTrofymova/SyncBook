export async function POST(req: Request) {
  try {
    const { name, email, description } = await req.json();

    const cleanName = String(name || "").trim();
    const cleanEmail = String(email || "").trim();
    const cleanDescription = String(description || "").trim();

    if (!cleanName || !cleanEmail || !cleanDescription) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!emailIsValid) {
      return Response.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      return Response.json(
        { ok: false, error: "Missing email configuration" },
        { status: 500 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `New website request from ${cleanName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New contact form request</h2>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> ${cleanEmail}</p>
            <p><strong>Description:</strong></p>
            <p>${cleanDescription.replace(/\n/g, "<br />")}</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();

      return Response.json(
        { ok: false, error },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}