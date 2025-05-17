"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { submitContactForm } from "@/app/actions/contact-form"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    societe: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setStatusMessage(result.message)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          societe: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        setStatusMessage(result.message)
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
      // Reset status after 8 seconds
      setTimeout(() => setSubmitStatus(null), 8000)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contactez-nous</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h3>
              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter par téléphone, email ou en personne. Notre équipe est disponible pour
                vous répondre et vous accompagner dans vos projets.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-600">71 Boulevard National, 92250 La Garennes Colombes, France</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Téléphone</h4>
                  <p className="text-gray-600">+33 1 81 51 71 45, +33 1 81 51 71 44</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">contact@almatek.fr</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                <Link
                  href="http://www.facebook.com/almatek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href="https://twitter.com/almatek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Suivez-nous sur X (Twitter)"
                >
                  <Twitter size={20} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="societe" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre société
                  </label>
                  <input
                    type="text"
                    id="societe"
                    name="societe"
                    value={formData.societe}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Objet du message <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all h-12 px-6 py-3 bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>

                <div className="h-12 flex items-center">
                  {submitStatus === "success" && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      <p>{statusMessage}</p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="flex items-center text-red-600">
                      <AlertCircle className="mr-2 h-5 w-5" />
                      <p>{statusMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
