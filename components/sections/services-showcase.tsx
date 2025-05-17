"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Computer, Network, Database, BarChart3, Shield, GraduationCap, Users, ArrowRight } from "lucide-react"

// Define the service interface
interface Service {
  id: number
  title: string
  icon: React.ReactNode
  image: string
  description: string
  features: string[]
  link: string
  color: string
}

// Service data
const services: Service[] = [
  {
    id: 1,
    title: "Digital",
    icon: <Computer className="w-6 h-6" />,
    image:
      "https://plus.unsplash.com/premium_photo-1680700015824-b2b7c7ca41ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ALMATEK intervient dans la réalisation d'outils innovants et pertinents. Nous développons des applications de gestion, extranet/intranet, des solutions de paiement, etc.",
    features: [
      "Applications web sur mesure",
      "Sites internet dynamiques",
      "Solutions e-commerce",
      "Applications mobiles",
    ],
    link: "/nos-services/digital",
    color: "#0f75bc", // primary color
  },
  {
    id: 2,
    title: "Infrastructure",
    icon: <Network className="w-6 h-6" />,
    image:
      "https://plus.unsplash.com/premium_photo-1745306842355-76a97ed6d803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ALMATEK propose une gamme étendue de services afin de répondre à tous vos besoins en terme de création ou d'évolution de votre système informatique.",
    features: ["Audit d'infrastructure", "Solutions cloud", "Virtualisation", "Maintenance préventive"],
    link: "/nos-services/infrastructure",
    color: "#10B981", // emerald-500
  },
  {
    id: 3,
    title: "SAP",
    icon: <Database className="w-6 h-6" />,
    image:
      "https://www.t-systems.com/resource/image/601928/ratio3x2/1440/960/a9a1b568a76f4a188184d2bc4cb9ec27/5E4DE00C8E0949C08543817F4BA2555F/im-sap-system-software-automation.jpg",
    description:
      "ALMATEK propose des contrats d'infogérance aux entreprises et organisations désireuses d'externaliser totalement ou partiellement la gestion et l'exploitation de leur service informatique.",
    features: ["Implémentation SAP", "Migration et mise à niveau", "Développement ABAP", "Support et maintenance"],
    link: "/nos-services/sap",
    color: "#8B5CF6", // violet-500
  },
  {
    id: 4,
    title: "BI & BIG DATA",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "https://www.almatek.fr/uploads/images/8c90b98f3644c7d58e10c78cefda53aa.jpg",
    description: "Développement des applications décisionnelles & Reporting pour une meilleure analyse de vos données.",
    features: ["Tableaux de bord interactifs", "Analyse prédictive", "Intégration de données", "Visualisation avancée"],
    link: "/nos-services/bi-&-big-data",
    color: "#0f75bc", // primary color
  },
  {
    id: 5,
    title: "Sécurité",
    icon: <Shield className="w-6 h-6" />,
    image: "https://www.almatek.fr/uploads/images/d99711a83705bfddae14188d6acdaf52.jpg",
    description:
      "La sécurité informatique est un enjeu fondamental pour les entreprises. Nous vous apportons des solutions simples, complètes et pertinentes.",
    features: ["Audit de sécurité", "Protection des données", "Gestion des accès", "Conformité RGPD"],
    link: "/nos-services/securite",
    color: "#F59E0B", // amber-500
  },
  {
    id: 6,
    title: "Formation",
    icon: <GraduationCap className="w-6 h-6" />,
    image: "https://www.almatek.fr/uploads/images/40dca178139b8082f7e6dd684464c327.jpg",
    description:
      "La formation est essentielle à la performance. Les logiciels et les systèmes évoluent constamment. ALMATEK propose des formations de qualité animées par des experts certifiés.",
    features: [
      "Formations personnalisées",
      "Ateliers pratiques",
      "Certification professionnelle",
      "Support post-formation",
    ],
    link: "/nos-services/formation",
    color: "#EF4444", // red-500
  },
  {
    id: 7,
    title: "CRM",
    icon: <Users className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "ALMATEK propose des solutions CRM personnalisées pour optimiser la gestion de vos relations clients et améliorer votre efficacité commerciale.",
    features: [
      "Gestion des contacts clients",
      "Automatisation des processus de vente",
      "Analyse des performances commerciales",
      "Intégration avec vos outils existants",
    ],
    link: "/nos-services/crm",
    color: "#0EA5E9", // sky-500
  },
]

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get the active service object
  const currentService = services.find((service) => service.id === activeService) || services[0]

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title - Updated to match Realisations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-container mb-12"
        >
          <h2 className="section-title">Nos Services</h2>
        </motion.div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" ref={containerRef}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeService === service.id ? "text-white shadow-md" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
              style={{
                backgroundColor: activeService === service.id ? service.color : undefined,
              }}
              aria-pressed={activeService === service.id}
            >
              <span>{service.icon}</span>
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Service Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={currentService.image || "/placeholder.svg"}
                alt={currentService.title}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 opacity-50"
                style={{ backgroundColor: `${currentService.color}30` }}
              ></div>

              {/* Service Icon Badge */}
              <div
                className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: currentService.color }}
              >
                {currentService.icon}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: currentService.color }}>
              {currentService.title}
            </h3>

            <p className="text-gray-600 mb-6">{currentService.description}</p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Caractéristiques principales</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className="mr-2 mt-1 text-white p-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: currentService.color }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={currentService.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-200"
              style={{ backgroundColor: currentService.color }}
            >
              <span>En savoir plus</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
