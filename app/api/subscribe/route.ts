export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const cleanEmail = String(email || "").trim();

    if (!cleanEmail) {
      return Response.json(
        { ok: false, error: "Email is required" },
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

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        replyTo: cleanEmail,
        subject: "New Newsletter Subscription",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${cleanEmail}</p>
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