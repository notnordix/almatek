"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Notre localisation</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venez nous rencontrer dans nos bureaux à La Garenne-Colombes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.0088566539!2d2.2407123!3d48.9068873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665a7d1b0a01f%3A0x5c4f0f3a30c5c80e!2s71%20Bd%20National%2C%2092250%20La%20Garenne-Colombes!5e0!3m2!1sfr!2sfr!4v1682506548018!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ALMATEK Location"
            className="w-full md:h-[500px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
