"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, UserCheck, AlertTriangle, ArrowRight, FileText, ChevronRight, Key, Eye } from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

export default function SecuritePage() {
  const [activeTab, setActiveTab] = useState("protection")

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-900 to-transparent opacity-20" />
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-transparent bg-clip-text">
                  Sécurité Informatique
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  Des solutions simples, complètes et pertinentes pour assurer la sécurité de tous vos supports
                  informatiques.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors"
                  >
                    Demander un audit
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
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Sécurité Informatique"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br from-red-600 to-orange-600 text-white p-2 md:p-4 rounded-lg shadow-lg">
                  <div className="text-xs md:text-sm font-medium">Menaces bloquées</div>
                  <div className="text-xl md:text-3xl font-bold">99.9%</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Tabs */}
      <section id="expertise" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Nos domaines d'expertise
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              La sécurité informatique est un enjeu fondamental pour les entreprises et les organisations. Elle devient
              de plus en plus complexe et versatile.
            </p>
          </motion.div>

          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
              {[
                { id: "protection", label: "Protection", icon: <Shield className="w-4 h-4" /> },
                { id: "audit", label: "Audit & Tests", icon: <Eye className="w-4 h-4" /> },
                { id: "identite", label: "Gestion des identités", icon: <UserCheck className="w-4 h-4" /> },
                { id: "conformite", label: "Conformité RGPD", icon: <FileText className="w-4 h-4" /> },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-red-600 text-white shadow-md shadow-red-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 shadow-inner">
              <AnimatePresence mode="wait">
                {activeTab === "protection" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-700">
                        Protection des infrastructures
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Nous mettons en place des solutions de sécurité robustes pour protéger vos infrastructures et
                        applications contre les menaces internes et externes, garantissant la continuité de vos
                        activités.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Protection contre les malwares et ransomwares",
                          "Sécurisation des réseaux et pare-feu nouvelle génération",
                          "Protection des endpoints et serveurs",
                          "Sécurité des applications web et mobiles",
                          "Détection et réponse aux incidents",
                          "Surveillance continue et alertes en temps réel",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-red-100 text-red-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Protection des infrastructures"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "audit" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-700">
                        Audit & Tests d'intrusion
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Nos experts réalisent des audits de sécurité et des tests d'intrusion pour identifier les
                        vulnérabilités de votre système d'information et vous proposer des solutions adaptées pour les
                        corriger.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Audit complet de votre infrastructure IT",
                          "Tests d'intrusion (pentest) externes et internes",
                          "Analyse des vulnérabilités",
                          "Évaluation de la sécurité des applications",
                          "Revue de code sécuritaire",
                          "Recommandations et plan d'action détaillé",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-red-100 text-red-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Audit et Tests d'intrusion"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "identite" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-700">Gestion des identités</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Nous mettons en place des solutions de gestion des identités et des accès pour contrôler qui
                        accède à vos ressources, quand et comment, renforçant ainsi la sécurité de votre système
                        d'information.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Authentification multi-facteurs (MFA)",
                          "Single Sign-On (SSO)",
                          "Gestion des accès privilégiés (PAM)",
                          "Contrôle d'accès basé sur les rôles (RBAC)",
                          "Gestion du cycle de vie des identités",
                          "Audit et reporting des accès",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-red-100 text-red-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Gestion des identités"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "conformite" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-red-700">Conformité RGPD</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Nous vous accompagnons dans la mise en conformité de votre système d'information avec le
                        Règlement Général sur la Protection des Données (RGPD) et autres réglementations en vigueur.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Audit de conformité RGPD",
                          "Cartographie des données personnelles",
                          "Mise en place de procédures de protection des données",
                          "Registre des traitements",
                          "Formation et sensibilisation des équipes",
                          "Accompagnement DPO (Délégué à la Protection des Données)",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-red-100 text-red-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                        alt="Conformité RGPD"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Nos solutions de sécurité
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Notre engagement est d'offrir à nos clients les solutions optimales dans les domaines suivants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: "Gestion et régulation de la sécurité",
                description:
                  "Nous mettons en place des politiques de sécurité adaptées à votre organisation et veillons à leur application.",
                icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.1,
              },
              {
                title: "Sécurité des infrastructures et applications",
                description:
                  "Nous sécurisons vos infrastructures et applications contre les menaces internes et externes.",
                icon: <Lock className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.2,
              },
              {
                title: "Gestion des identités",
                description:
                  "Nous mettons en place des solutions de gestion des identités et des accès pour contrôler qui accède à vos ressources.",
                icon: <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.3,
              },
              {
                title: "Management des événements et incidents (SIEM)",
                description:
                  "Nous déployons des solutions de gestion des événements et incidents de sécurité pour détecter et répondre rapidement aux menaces.",
                icon: <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.4,
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: solution.delay }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-red-100 hover:border-red-200 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-red-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{solution.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nos services de sécurité
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Des services complets pour garantir la sécurité de votre système d'information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Audit de sécurité",
                description:
                  "Nous réalisons des audits de sécurité pour identifier les vulnérabilités de votre système d'information et vous proposer des solutions adaptées.",
                icon: <Eye className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.1,
              },
              {
                title: "Tests d'intrusion",
                description:
                  "Nos experts réalisent des tests d'intrusion pour évaluer la résistance de vos systèmes face aux attaques et vous aider à renforcer votre sécurité.",
                icon: <Key className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.2,
              },
              {
                title: "Conformité RGPD",
                description:
                  "Nous vous accompagnons dans la mise en conformité de votre système d'information avec le Règlement Général sur la Protection des Données.",
                icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.3,
              },
              {
                title: "Formation et sensibilisation",
                description:
                  "Nous formons vos équipes aux bonnes pratiques de sécurité informatique et les sensibilisons aux risques liés à l'utilisation des outils numériques.",
                icon: <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-red-500" />,
                delay: 0.4,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="bg-gradient-to-br from-white to-red-50 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-red-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-red-700">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
