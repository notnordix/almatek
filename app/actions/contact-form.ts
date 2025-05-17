"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Define form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().optional(),
  societe: z.string().optional(),
  subject: z.string().min(3, { message: "L'objet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "site-web@almatek.fr",
      to: process.env.EMAIL_TO || "contact@almatek.fr",
      replyTo: validatedData.email,
      subject: `Formulaire de contact: ${validatedData.subject}`,
      text: `
Nouveau message du formulaire de contact

Nom: ${validatedData.name}
Email: ${validatedData.email}
Téléphone: ${validatedData.phone || "Non renseigné"}
Société: ${validatedData.societe || "Non renseignée"}
Objet: ${validatedData.subject}

Message:
${validatedData.message}
      `,
      html: `
<h2>Nouveau message du formulaire de contact</h2>
<p><strong>Nom:</strong> ${validatedData.name}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Téléphone:</strong> ${validatedData.phone || "Non renseigné"}</p>
<p><strong>Société:</strong> ${validatedData.societe || "Non renseignée"}</p>
<p><strong>Objet:</strong> ${validatedData.subject}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Return success response
    return { success: true, message: "Votre message a été envoyé avec succès!" }
  } catch (error) {
    console.error("Error sending email:", error)

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return {
        success: false,
        message: `Erreur de validation: ${errorMessages}`,
      }
    }

    // Generic error
    return {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
    }
  }
}
