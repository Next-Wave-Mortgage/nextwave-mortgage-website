import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const RECIPIENTS = [
  "phil@nextwavemortgage.com",
  "ryan@nextwavemortgage.com",
  "james@nextwavemortgage.com",
];

const contactSchema = z.object({
  type: z.enum(["loan-officer", "real-estate-agent"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  state: z.string().min(1, "State is required"),
  licenseId: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 },
      );
    }

    const { type, firstName, lastName, email, phone, state, licenseId } =
      result.data;

    const isLO = type === "loan-officer";
    const fullName = `${firstName} ${lastName}`;
    const subject = isLO
      ? `New Loan Officer Inquiry — ${fullName}`
      : `New Agent Partner Inquiry — ${fullName}`;
    const typeLabel = isLO ? "Loan Officer" : "Real Estate Agent";
    const licenseLabel = isLO ? "NMLS ID" : "MLS ID";

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
        <div style="background: #2B5464; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; font-size: 20px; margin: 0;">${subject}</h1>
          <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 8px 0 0;">
            A new ${typeLabel.toLowerCase()} inquiry was submitted on nextwavemortgage.com
          </p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px 32px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #1f2937; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-top: 1px solid #f3f4f6;">Email</td>
              <td style="padding: 10px 0; color: #1f2937; border-top: 1px solid #f3f4f6;">
                <a href="mailto:${email}" style="color: #1C96C5; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-top: 1px solid #f3f4f6;">Phone</td>
              <td style="padding: 10px 0; color: #1f2937; border-top: 1px solid #f3f4f6;">
                <a href="tel:${phone}" style="color: #1C96C5; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-top: 1px solid #f3f4f6;">State</td>
              <td style="padding: 10px 0; color: #1f2937; border-top: 1px solid #f3f4f6;">${state}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-top: 1px solid #f3f4f6;">${licenseLabel}</td>
              <td style="padding: 10px 0; color: #1f2937; border-top: 1px solid #f3f4f6;">${licenseId || "Not provided yet"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; border-top: 1px solid #f3f4f6;">Type</td>
              <td style="padding: 10px 0; color: #1f2937; border-top: 1px solid #f3f4f6;">${typeLabel}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Next Wave Mortgage <onboarding@resend.dev>",
      to: RECIPIENTS,
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
