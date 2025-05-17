"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Computer, Network, Database, BarChart3, Shield, GraduationCap, Users } from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

// Define the service interface with expanded properties
interface Service {
  id: number
  title: string
  icon: React.ReactNode
  description: string
  image: string
  link: string
  gradient: string
  textGradient: string
  stats: {
    label: string
    value: string
  }
  buttonColor: string
  buttonHoverColor: string
}

// Service data with expanded properties
const services: Service[] = [
  {
    id: 1,
    title: "Digital",
    icon: <Computer className="w-5 h-5" />,
    description:
      "Développement d'applications innovantes, solutions web et mobiles, et intégration de systèmes pour transformer votre présence numérique.",
    image:
      "https://plus.unsplash.com/premium_photo-1680700015824-b2b7c7ca41ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nos-services/digital",
    gradient: "from-purple-500 to-teal-500",
    textGradient: "from-purple-700 via-indigo-600 to-teal-600",
    stats: {
      label: "Projets réalisés",
      value: "200+",
    },
    buttonColor: "bg-purple-600",
    buttonHoverColor: "hover:bg-purple-700",
  },
  {
    id: 2,
    title: "Infrastructure",
    icon: <Network className="w-5 h-5" />,
    description:
      "Conception, déploiement et gestion d'infrastructures IT robustes et évolutives pour soutenir vos opérations commerciales.",
    image:
      "https://plus.unsplash.com/premium_photo-1745306842355-76a97ed6d803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nos-services/infrastructure",
    gradient: "from-blue-500 to-indigo-600",
    textGradient: "from-blue-700 via-blue-600 to-indigo-600",
    stats: {
      label: "Infrastructures gérées",
      value: "150+",
    },
    buttonColor: "bg-blue-600",
    buttonHoverColor: "hover:bg-blue-700",
  },
  {
    id: 3,
    title: "SAP",
    icon: <Database className="w-5 h-5" />,
    description:
      "Implémentation, personnalisation et support de solutions SAP pour optimiser vos processus métier et améliorer votre efficacité opérationnelle.",
    image:
      "https://www.t-systems.com/resource/image/601928/ratio3x2/1440/960/a9a1b568a76f4a188184d2bc4cb9ec27/5E4DE00C8E0949C08543817F4BA2555F/im-sap-system-software-automation.jpg",
    link: "/nos-services/sap",
    gradient: "from-orange-500 to-amber-500",
    textGradient: "from-orange-700 via-orange-600 to-amber-600",
    stats: {
      label: "Projets réussis",
      value: "500+",
    },
    buttonColor: "bg-orange-500",
    buttonHoverColor: "hover:bg-orange-600",
  },
  {
    id: 4,
    title: "BI & Big Data",
    icon: <BarChart3 className="w-5 h-5" />,
    description:
      "Analyse de données avancée, business intelligence et solutions de big data pour transformer vos données en insights stratégiques.",
    image: "https://www.smartdatacollective.com/wp-content/uploads/2017/08/big-data-and-business-intelligence.jpg",
    link: "/nos-services/bi-&-big-data",
    gradient: "from-green-500 to-teal-500",
    textGradient: "from-green-700 via-teal-600 to-emerald-600",
    stats: {
      label: "Analyses réalisées",
      value: "300+",
    },
    buttonColor: "bg-green-600",
    buttonHoverColor: "hover:bg-green-700",
  },
  {
    id: 5,
    title: "Sécurité",
    icon: <Shield className="w-5 h-5" />,
    description:
      "Protection de vos systèmes et données avec des solutions de sécurité complètes, audits et services de conformité réglementaire.",
    image:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nos-services/securite",
    gradient: "from-red-500 to-orange-500",
    textGradient: "from-red-700 via-red-600 to-orange-600",
    stats: {
      label: "Menaces bloquées",
      value: "99.9%",
    },
    buttonColor: "bg-red-600",
    buttonHoverColor: "hover:bg-red-700",
  },
  {
    id: 6,
    title: "Formation",
    icon: <GraduationCap className="w-5 h-5" />,
    description:
      "Programmes de formation personnalisés pour développer les compétences de vos équipes et maximiser l'utilisation de vos outils technologiques.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/nos-services/formation",
    gradient: "from-amber-500 to-yellow-400",
    textGradient: "from-amber-700 via-amber-600 to-yellow-600",
    stats: {
      label: "Personnes formées",
      value: "1000+",
    },
    buttonColor: "bg-amber-600",
    buttonHoverColor: "hover:bg-amber-700",
  },
  {
    id: 7,
    title: "CRM",
    icon: <Users className="w-5 h-5" />,
    description:
      "Solutions CRM personnalisées pour optimiser la gestion de vos relations clients et améliorer votre efficacité commerciale.",
    image: "https://th.bing.com/th/id/OIP.FSW2lw-iJKKkRVoMtHdDxwHaE7?w=2000&h=1333&rs=1&pid=ImgDetMain",
    link: "/nos-services/crm",
    gradient: "from-pink-500 to-rose-400",
    textGradient: "from-pink-700 via-pink-600 to-rose-600",
    stats: {
      label: "Productivité commerciale",
      value: "+30%",
    },
    buttonColor: "bg-pink-600",
    buttonHoverColor: "hover:bg-pink-700",
  },
]

export default function ServicesPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-900 to-transparent opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Nos Services
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  ALMATEK vous propose une gamme complète de services informatiques pour répondre à tous vos besoins
                  technologiques.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-colors text-sm md:text-base"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 p-1 aspect-[4/3]">
                  {services.slice(0, 4).map((service, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80`}
                      ></div>
                      <div className="absolute bottom-1 left-1 md:bottom-2 md:left-2 text-white text-xs font-medium flex items-center gap-1">
                        {service.icon}
                        <span className="text-[10px] md:text-xs">{service.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 md:p-4 rounded-lg shadow-lg">
                  <div className="text-xs md:text-sm font-medium">Nos expertises</div>
                  <div className="text-2xl md:text-3xl font-bold">7</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Découvrez nos domaines d'expertise
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Nos équipes d'experts vous accompagnent dans tous vos projets informatiques avec des solutions sur mesure
              adaptées à vos besoins.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 md:space-y-24"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative">
                    <div
                      className={`absolute -inset-3 md:-inset-4 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-20`}
                    ></div>
                    <div
                      className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
                      style={{ height: "300px", maxHeight: "60vh" }}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br ${service.gradient} text-white p-2 md:p-4 rounded-lg shadow-lg`}
                    >
                      <div className="text-xs md:text-sm font-medium">{service.stats.label}</div>
                      <div className="text-xl md:text-3xl font-bold">{service.stats.value}</div>
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-800 text-xs md:text-sm font-medium mb-4 md:mb-6">
                    {service.icon}
                    <span className="ml-2">Service</span>
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 bg-gradient-to-r ${service.textGradient} text-transparent bg-clip-text`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 ${service.buttonColor} ${service.buttonHoverColor} text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-colors text-sm md:text-base`}
                  >
                    Découvrir
                    <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
