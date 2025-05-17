"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing for smoother motion
      },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  const staggerLinks = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <footer className="bg-[#f2f2f2] text-gray-700">
      <motion.div
        className="container mx-auto py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Main grid with all 4 columns in one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About section - 1/4 width on desktop */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="ALMATEK"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <motion.p className="text-gray-600 leading-relaxed" variants={linkVariants}>
              ALMATEK est une entreprise de services du numérique qui a pour mission de concevoir et mettre en œuvre les
              meilleures solutions technologiques visant à améliorer la productivité, la rentabilité et la compétitivité
              de ses clients.
            </motion.p>
            <motion.div className="flex gap-4" variants={staggerLinks}>
              <motion.div variants={linkVariants}>
                <Link
                  href="http://www.facebook.com/almatek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook size={18} />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link
                  href="https://twitter.com/almatek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Suivez-nous sur X (Twitter)"
                >
                  <Twitter size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links and Services in same row on mobile */}
          <div className="grid grid-cols-2 gap-6 md:gap-0 md:contents">
            {/* Quick Links - 1/4 width on desktop */}
            <motion.div className="space-y-6 col-span-1 sm:col-span-1" variants={itemVariants}>
              <h3 className="text-xl font-bold relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
                Liens rapides
              </h3>
              <motion.ul className="space-y-3" variants={staggerLinks}>
                {[
                  { name: "Accueil", href: "/" },
                  { name: "Présentation", href: "/presentation" },
                  { name: "Nos services", href: "/nos-services" },
                  { name: "Contactez-nous", href: "/contactez-nous" },
                ].map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:-translate-x-1/2 hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Services - 1/4 width on desktop */}
            <motion.div className="space-y-6 col-span-1 sm:col-span-1" variants={itemVariants}>
              <h3 className="text-xl font-bold relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
                Nos services
              </h3>
              <motion.ul className="space-y-3" variants={staggerLinks}>
                {[
                  { name: "Digital", href: "/nos-services/digital" },
                  { name: "Infrastructure", href: "/nos-services/infrastructure" },
                  { name: "SAP", href: "/nos-services/sap" },
                  { name: "BI & BIG DATA", href: "/nos-services/bi-&-big-data" },
                  { name: "Sécurité", href: "/nos-services/securite" },
                  { name: "Formation", href: "/nos-services/formation" },
                ].map((service) => (
                  <motion.li key={service.href} variants={linkVariants}>
                    <Link
                      href={service.href}
                      className="text-gray-600 hover:text-primary transition-colors relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:-translate-x-1/2 hover:after:w-full"
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Contact - 1/4 width on desktop */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-bold relative pb-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-primary">
              Contactez-nous
            </h3>
            <motion.ul className="space-y-4" variants={staggerLinks}>
              <motion.li className="flex items-start" variants={linkVariants}>
                <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-600">71 Boulevard National, 92250 La Garennes Colombes, France</span>
              </motion.li>
              <motion.li className="flex items-center" variants={linkVariants}>
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span className="text-gray-600">+33 1 81 51 71 45, +33 1 81 51 71 44</span>
              </motion.li>
              <motion.li className="flex items-center" variants={linkVariants}>
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <Link
                  href="mailto:contact@almatek.fr"
                  className="text-gray-600 hover:text-primary transition-colors relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:-translate-x-1/2 hover:after:w-full"
                >
                  contact@almatek.fr
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-300 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Copyrights © 2015 - {currentYear} Tous droits réservés.{" "}
            <Link href="/" className="text-primary hover:underline">
              ALMATEK
            </Link>
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
