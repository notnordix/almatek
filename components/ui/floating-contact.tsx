"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MapPin, X, MessageSquare, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { JSX } from "react"

type ContactOption = {
  id: string
  icon: JSX.Element
  label: string
  info: string
  href: string
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeOption, setActiveOption] = useState<string | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Define contact options
  const contactOptions: ContactOption[] = [
    {
      id: "phone",
      icon: <Phone size={20} />,
      label: "Téléphone",
      info: "+33 1 81 51 71 45",
      href: "tel:+33181517145",
    },
    {
      id: "email",
      icon: <Mail size={20} />,
      label: "Email",
      info: "contact@almatek.fr",
      href: "mailto:contact@almatek.fr",
    },
    {
      id: "address",
      icon: <MapPin size={20} />,
      label: "Adresse",
      info: "71 Boulevard National, 92250 La Garennes Colombes",
      href: "https://maps.google.com/?q=71+Boulevard+National,+92250+La+Garennes+Colombes,+France",
    },
    {
      id: "message",
      icon: <MessageSquare size={20} />,
      label: "Message",
      info: "Envoyez-nous un message",
      href: "/contactez-nous",
    },
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setActiveOption(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
        setActiveOption(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  }

  const mainButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
    pulse: {
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 4px 12px rgba(22, 163, 74, 0.2)",
        "0px 8px 24px rgba(22, 163, 74, 0.4)",
        "0px 4px 12px rgba(22, 163, 74, 0.2)",
      ],
      transition: {
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          times: [0, 0.5, 1],
        },
        boxShadow: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          times: [0, 0.5, 1],
        },
      },
    },
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact Options Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="mb-4 flex flex-col gap-3"
          >
            {contactOptions.map((option) => (
              <motion.div key={option.id} variants={itemVariants} className="relative">
                <motion.a
                  href={option.href}
                  target={option.id === "address" ? "_blank" : undefined}
                  rel={option.id === "address" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 bg-white rounded-2xl pl-4 pr-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    boxShadow:
                      activeOption === option.id
                        ? "0 8px 24px rgba(22, 163, 74, 0.25)"
                        : "0 4px 14px rgba(22, 163, 74, 0.15)",
                  }}
                  whileHover={{
                    y: -2,
                    x: -5,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    },
                  }}
                  onMouseEnter={() => setActiveOption(option.id)}
                  onMouseLeave={() => setActiveOption(null)}
                  onFocus={() => setActiveOption(option.id)}
                  onBlur={() => setActiveOption(null)}
                  aria-label={`${option.label}: ${option.info}`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
                      activeOption === option.id ? "bg-green-600 text-white" : "bg-green-600/10 text-green-600"
                    }`}
                  >
                    {option.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">{option.label}</span>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-600 line-clamp-1 mr-1">{option.info}</span>
                      {option.id === "address" && <ExternalLink size={10} className="text-green-600 opacity-70" />}
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        variants={mainButtonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate={isOpen ? "initial" : "pulse"}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-green-600 shadow-lg transition-all duration-300 relative z-10 overflow-hidden"
        aria-label={isOpen ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
        aria-expanded={isOpen}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-green-600/5 rounded-full"></div>

        {/* Animated ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-600/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X size={24} className="text-green-600" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <MessageSquare size={24} className="text-green-600" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -3, 0],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  },
                  y: {
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
