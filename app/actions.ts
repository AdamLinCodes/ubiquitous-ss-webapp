"use server"

import { Resend } from "resend"
import { z } from "zod"

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable")
}

const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendEmail(formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." }
  }

  const { name, email, service, message } = validatedFields.data

  try {
    await resend.emails.send({
      from: "Ubiquitous Software Solutions <Info@ubiquitoussoftware.com>",
      to: "Info@ubiquitoussoftware.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { error: "Failed to send message. Please try again later." }
  }
}

