export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    
    // Parse the form data (could be JSON depending on how it's sent)
    let body;
    const contentType = request.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData);
    }

    const { name, email, phone, challenge } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Here you would typically integrate with an email service provider
    // (like SendGrid, Resend, etc.) or insert into a database/spreadsheet.
    // For example, if you had a SendGrid API key stored in Cloudflare environment variables:
    //
    // const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY;
    // await fetch("https://api.sendgrid.com/v3/mail/send", { ... })

    // Simulate successful processing
    console.log("Form submission received:", { name, email, phone, challenge });

    return new Response(JSON.stringify({ success: true, message: "Contact request received." }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process request." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
