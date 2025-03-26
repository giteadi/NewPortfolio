"use server"

import nodemailer from "nodemailer"

// Create transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Server action to send contact form email
export async function sendContactEmail(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")
  const phone = formData.get("phone") || "Not provided"

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "aditya.satel@gmail.com", // Your email address
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Contact form email sent from:", email)
    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}

export async function sendOtpEmail(formData) {
  const email = formData.get("email")
  const otp = Math.floor(100000 + Math.random() * 900000) // Generate 6-digit OTP

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Email Verification",
    html: `
      <h2>Your OTP for Email Verification</h2>
      <p>Your OTP is: <strong>${otp}</strong></p>
      <p>This OTP is valid for a short period. Do not share it with anyone.</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("OTP email sent to:", email)
    return { success: true, message: "OTP sent successfully!", otp: otp }
  } catch (error) {
    console.error("Error sending OTP email:", error)
    return { success: false, message: "Failed to send OTP. Please try again later." }
  }
}

