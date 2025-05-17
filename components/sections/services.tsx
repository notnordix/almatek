"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Computer, Network, Database, BarChart3, Shield, GraduationCap, ArrowRight, Check, Users } from "lucide-react"

// Define the service interface
interface Service {
  id: number
  title: string
  icon: React.ReactNode
  image: string
  description: string
  features: string[]
  link: string
}

// Service data with added features
const services: Service[] = [
  {
    id: 1,
    title: "Digital",
    icon: <Computer className="w-8 h-8" />,
    image: "https://plus.unsplash.com/premium_photo-1680700015824-b2b7c7ca41ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ALMATEK intervient dans la réalisation d'outils innovants et pertinents. Nous développons des applications de gestion, extranet/intranet, des solutions de paiement, etc.",
    features: [
      "Applications web sur mesure",
      "Sites internet dynamiques",
      "Solutions e-commerce",
      "Applications mobiles",
    ],
    link: "/nos-services/digital",
  },
  {
    id: 2,
    title: "Infrastructure",
    icon: <Network className="w-8 h-8" />,
    image: "https://plus.unsplash.com/premium_photo-1745306842355-76a97ed6d803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ALMATEK propose une gamme étendue de services afin de répondre à tous vos besoins en terme de création ou d'évolution de votre système informatique.",
    features: ["Audit d'infrastructure", "Solutions cloud", "Virtualisation", "Maintenance préventive"],
    link: "/nos-services/infrastructure",
  },
  {
    id: 3,
    title: "SAP",
    icon: <Database className="w-8 h-8" />,
    image: "https://www.t-systems.com/resource/image/601928/ratio3x2/1440/960/a9a1b568a76f4a188184d2bc4cb9ec27/5E4DE00C8E0949C08543817F4BA2555F/im-sap-system-software-automation.jpg",
    description:
      "ALMATEK propose des contrats d'infogérance aux entreprises et organisations désireuses d'externaliser totalement ou partiellement la gestion et l'exploitation de leur service informatique.",
    features: ["Implémentation SAP", "Migration et mise à niveau", "Développement ABAP", "Support et maintenance"],
    link: "/nos-services/sap",
  },
  {
    id: 4,
    title: "BI & BIG DATA",
    icon: <BarChart3 className="w-8 h-8" />,
    image: "https://www.almatek.fr/uploads/images/8c90b98f3644c7d58e10c78cefda53aa.jpg",
    description: "Développement des applications décisionnelles & Reporting pour une meilleure analyse de vos données.",
    features: ["Tableaux de bord interactifs", "Analyse prédictive", "Intégration de données", "Visualisation avancée"],
    link: "/nos-services/bi-&-big-data",
  },
  {
    id: 5,
    title: "Sécurité",
    icon: <Shield className="w-8 h-8" />,
    image: "https://www.almatek.fr/uploads/images/d99711a83705bfddae14188d6acdaf52.jpg",
    description:
      "La sécurité informatique est un enjeu fondamental pour les entreprises. Nous vous apportons des solutions simples, complètes et pertinentes.",
    features: ["Audit de sécurité", "Protection des données", "Gestion des accès", "Conformité RGPD"],
    link: "/nos-services/securite",
  },
  {
    id: 6,
    title: "Formation",
    icon: <GraduationCap className="w-8 h-8" />,
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
  },
  {
    id: 7,
    title: "CRM",
    icon: <Users className="w-8 h-8" />,
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
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(1)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title-container mb-16">
          <h2 className="section-title">NOS SERVICES</h2>
          <div className="section-title-decoration">
            <span className="section-title-dot"></span>
            <span className="section-title-line"></span>
            <span className="section-title-dot"></span>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services informatiques conçus pour répondre à tous vos besoins
            technologiques et vous accompagner dans votre transformation digitale.
          </p>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === service.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="hidden md:block">{service.icon}</span>
              <span className="font-medium">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        {services.map(
          (service) =>
            activeTab === service.id && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                {/* Left Column - Service Details */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Caractéristiques principales</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">
                            <Check size={18} />
                          </span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all h-12 px-6 py-3 bg-white text-primary border border-primary hover:bg-primary hover:text-white shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden group"
                  >
                    <span className="relative z-10 mr-2">En savoir plus</span>
                    <ArrowRight size={18} className="relative z-10" />
                    <span className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </div>

                {/* Right Column - Service Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ),
        )}

        {/* Service Cards Grid (Mobile Friendly) */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-36 md:h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>

                <Link
                  href={service.link}
                  className={`inline-flex items-center text-sm font-medium ${
                    hoveredService === service.id ? "text-primary" : "text-gray-700"
                  }`}
                >
                  <span className="mr-2">Découvrir</span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      hoveredService === service.id ? "translate-x-1" : ""
                    }`}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
