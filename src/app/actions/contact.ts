
'use server';

import { Resend } from 'resend';

/**
 * Server action to handle email notifications using the Resend SDK.
 */

export async function sendContactEmail(formData: { name: string, email: string, message: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const myEmail = "ganeshoruganti2022@gmail.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.");
    throw new Error("Email service not configured.");
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [myEmail],
      subject: `New Portfolio Message from ${formData.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #C9C8BF; background: #141413; padding: 10px;">New Lead from Portfolio</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p style="border-top: 1px solid #eee; pt: 10px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error(error.message || "Failed to send email via Resend.");
    }

    return { success: true, id: data?.id };
  } catch (error: any) {
    console.error("Contact Email Action failed:", error);
    throw error;
  }
}
