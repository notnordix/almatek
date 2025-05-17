"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart,
  Database,
  Settings,
  Users,
  Shield,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Award,
  Code,
} from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

export default function SapPage() {
  const [activeTab, setActiveTab] = useState("implementation")

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 transform origin-top-right z-0"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl z-0"></div>

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
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-100 text-orange-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Database className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Solutions SAP
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
                  Expertise <span className="text-orange-500">SAP</span> pour votre entreprise
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Optimisez vos processus métier avec nos solutions SAP personnalisées et notre expertise reconnue.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors shadow-md shadow-orange-200"
                  >
                    Demander un devis
                    <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
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
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/sap-lab-dashboard.png"
                    alt="SAP Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Award className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                        <span className="text-white text-sm md:text-base font-medium">Partenaire SAP certifié</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 rounded-full text-white text-xs md:text-sm">
                        Depuis 2005
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-white rounded-lg shadow-xl p-2 md:p-4 flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Projets réussis</div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900">500+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Pourquoi choisir nos services SAP ?
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Nous offrons une expertise complète pour vous aider à tirer le meilleur parti de vos investissements SAP.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Expertise certifiée",
                description:
                  "Notre équipe de consultants certifiés SAP possède une expertise approfondie dans tous les modules SAP.",
                icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
                delay: 0.1,
              },
              {
                title: "Solutions sur mesure",
                description:
                  "Nous adaptons nos solutions SAP à vos besoins spécifiques pour maximiser votre retour sur investissement.",
                icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
                delay: 0.2,
              },
              {
                title: "Support continu",
                description:
                  "Nous vous accompagnons à chaque étape, de l'implémentation à la maintenance, pour assurer le succès de votre projet.",
                icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
                delay: 0.3,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: benefit.delay }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section id="services" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Nos services SAP</h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Des solutions complètes pour répondre à tous vos besoins SAP.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
              {[
                { id: "implementation", label: "Implémentation", icon: <Database className="w-4 h-4" /> },
                { id: "development", label: "Développement ABAP", icon: <BarChart className="w-4 h-4" /> },
                { id: "consulting", label: "Conseil & Expertise", icon: <Users className="w-4 h-4" /> },
                { id: "maintenance", label: "Maintenance & Support", icon: <Shield className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
              <AnimatePresence mode="wait">
                {activeTab === "implementation" && (
                  <motion.div
                    key="implementation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Implémentation SAP</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Nous vous accompagnons dans l'implémentation de vos solutions SAP, de la conception à la mise en
                        production, en suivant une méthodologie éprouvée pour garantir le succès de votre projet.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Analyse des besoins et conception de la solution",
                          "Configuration et paramétrage des modules SAP",
                          "Migration des données",
                          "Tests et validation",
                          "Formation des utilisateurs",
                          "Mise en production et support post-implémentation",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <Image
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="SAP Implementation"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-orange-500 text-white p-2 md:p-4 rounded-lg shadow-lg">
                        <Zap className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "development" && (
                  <motion.div
                    key="development"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Développement ABAP</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Nos développeurs ABAP réalisent des développements spécifiques pour adapter SAP à vos besoins
                        particuliers. Nous développons des rapports, des interfaces, des formulaires et des extensions
                        pour enrichir les fonctionnalités standard.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Développement de programmes ABAP sur mesure",
                          "Création de rapports et d'états personnalisés",
                          "Développement d'interfaces avec des systèmes tiers",
                          "Optimisation des performances des programmes existants",
                          "Création de formulaires et d'écrans personnalisés",
                          "Développement d'extensions et d'améliorations",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <Image
                        src="/healthcare-analytics-dashboard.png"
                        alt="ABAP Development"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-orange-500 text-white p-2 md:p-4 rounded-lg shadow-lg">
                        <Code className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "consulting" && (
                  <motion.div
                    key="consulting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Conseil & Expertise</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Nos consultants SAP vous accompagnent dans la définition de votre stratégie et la mise en œuvre
                        de vos projets. Nous vous aidons à optimiser vos processus métier et à tirer le meilleur parti
                        de votre investissement SAP.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Audit et analyse de votre environnement SAP",
                          "Optimisation des processus métier",
                          "Définition de la roadmap SAP",
                          "Conseil en architecture SAP",
                          "Accompagnement au changement",
                          "Formation des équipes",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="SAP Consulting"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-orange-500 text-white p-2 md:p-4 rounded-lg shadow-lg">
                        <Briefcase className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "maintenance" && (
                  <motion.div
                    key="maintenance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                        Maintenance & Support
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                        Nous assurons la maintenance et le support de vos systèmes SAP pour garantir leur bon
                        fonctionnement et leur disponibilité. Notre équipe d'experts est à votre disposition pour
                        résoudre rapidement tout incident.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Support utilisateur (niveaux 1, 2 et 3)",
                          "Maintenance corrective et évolutive",
                          "Monitoring et supervision des systèmes",
                          "Gestion des mises à jour et des patches",
                          "Optimisation des performances",
                          "Sauvegarde et restauration des données",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <Image
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="SAP Maintenance"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                      />
                      <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-orange-500 text-white p-2 md:p-4 rounded-lg shadow-lg">
                        <Shield className="w-4 h-4 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
