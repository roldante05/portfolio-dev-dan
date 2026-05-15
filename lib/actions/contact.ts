"use server";

import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  emailId?: string;
  field?: string;
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime };
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.toLowerCase());
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  const ip = "unknown";

  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: "Too many requests. Please try again later.",
    };
  }

  const sanitizedData = {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    subject: sanitizeInput(formData.subject),
    message: sanitizeInput(formData.message),
  };

  if (!sanitizedData.name || sanitizedData.name.length < 1 || sanitizedData.name.length > 100) {
    return { success: false, message: "Name must be between 1 and 100 characters.", field: "name" };
  }

  if (!validateEmail(sanitizedData.email)) {
    return { success: false, message: "Please enter a valid email address.", field: "email" };
  }

  if (!sanitizedData.subject || sanitizedData.subject.length < 1 || sanitizedData.subject.length > 200) {
    return { success: false, message: "Subject must be between 1 and 200 characters.", field: "subject" };
  }

  if (!sanitizedData.message || sanitizedData.message.length < 1 || sanitizedData.message.length > 2000) {
    return { success: false, message: "Message must be between 1 and 2000 characters.", field: "message" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #FF6B00;">New Contact from Portfolio</h2>
      <p><strong>Sender:</strong> ${sanitizedData.name}</p>
      <p><strong>Email:</strong> ${sanitizedData.email}</p>
      <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
        <p style="white-space: pre-wrap; margin: 0;">${sanitizedData.message}</p>
      </div>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">
        Received at: ${new Date().toISOString()}
      </p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["contact@danrotoldan.dev"],
      subject: `[Portfolio] ${sanitizedData.subject}`,
      html: emailHtml,
      replyTo: sanitizedData.email,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Failed to send message. Please try again." };
    }

    console.log("Email sent successfully:", data?.id);

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      emailId: data?.id,
    };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}