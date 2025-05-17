"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Server,
  HardDrive,
  Network,
  Shield,
  Cloud,
  Database,
  Cpu,
  Monitor,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

export default function InfrastructurePage() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-teal-50" />
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
              alt="Infrastructure Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-teal-50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-teal-50 to-transparent" />
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
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-teal-100 text-teal-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Server className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Solutions d'infrastructure
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900">
                  Infrastructure <span className="text-teal-600">robuste</span> et{" "}
                  <span className="text-teal-600">sécurisée</span>
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Des solutions d'infrastructure évolutives et fiables pour soutenir votre transformation numérique.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-medium transition-colors"
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
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
                    alt="Infrastructure Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 md:w-6 md:h-6 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-teal-100 font-medium">Sécurité maximale</div>
                        <div className="text-sm md:text-base text-white">Protection contre les menaces avancées</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-teal-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-32"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Nos services d'infrastructure
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              ALMATEK propose une gamme complète de services pour concevoir, faire évoluer et maintenir des
              infrastructures informatiques robustes, sécurisées et performantes. Notre expertise couvre tous les
              aspects clés de votre système d'information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                title: "Cloud Computing",
                description:
                  "Nous vous accompagnons dans la migration, l'intégration et la gestion de vos environnements cloud (public, privé ou hybride). Nos solutions sont flexibles, évolutives et adaptées à vos besoins métiers, en assurant la disponibilité, la sécurité et l'optimisation des coûts.",
                icon: <Cloud className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.1,
              },
              {
                title: "Virtualisation",
                description:
                  "Réduisez vos coûts matériels et gagnez en agilité grâce à la virtualisation de vos serveurs, postes de travail et ressources réseau. Nous mettons en place des environnements virtualisés stables, évolutifs et faciles à administrer.",
                icon: <Monitor className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.2,
              },
              {
                title: "Stockage & Sauvegarde",
                description:
                  "Vos données sont essentielles : nous déployons des solutions de stockage haute disponibilité, avec des politiques de sauvegarde automatisées et des plans de reprise d'activité (PRA) pour assurer leur intégrité en toute circonstance.",
                icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.3,
              },
              {
                title: "Sécurité IT",
                description:
                  "Face à la multiplication des cybermenaces, nous assurons une protection complète de votre infrastructure : audit de sécurité, pare-feux, antivirus, contrôle des accès, chiffrement, et surveillance proactive pour sécuriser vos systèmes et vos données.",
                icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.4,
              },
              {
                title: "Réseaux & Connectivité",
                description:
                  "Nous concevons et implémentons des architectures réseau performantes, sécurisées et adaptées à la croissance de votre entreprise. Notre expertise couvre les réseaux LAN, WAN, VPN, Wi-Fi et la qualité de service (QoS).",
                icon: <Network className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.5,
              },
              {
                title: "Infogérance",
                description:
                  "Confiez-nous la gestion de tout ou partie de votre infrastructure IT. Nous assurons la supervision, la maintenance préventive, les mises à jour, et un support technique réactif pour garantir la continuité de vos opérations et une performance optimale.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.6,
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(4,120,87,0.05),transparent)] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">Notre approche</h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Une méthodologie éprouvée pour garantir la réussite de vos projets d'infrastructure, du diagnostic initial
              à la maintenance continue.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "Audit & Analyse",
                description:
                  "Nous commençons par une évaluation complète de votre environnement existant : architecture réseau, systèmes, sécurité, performances, points de défaillance. Cette phase permet d'identifier les risques, les failles et les axes d'amélioration pour poser les bases d'une solution adaptée.",
                icon: <HardDrive className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.1,
              },
              {
                title: "Conception & Planification",
                description:
                  "Sur la base de l'audit, nous concevons une architecture sur mesure, alignée avec vos objectifs métiers, vos contraintes techniques et votre budget. Un plan de déploiement détaillé est établi, intégrant délais, jalons, ressources et scénarios de bascule.",
                icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.2,
              },
              {
                title: "Implémentation",
                description:
                  "Nos équipes déploient la solution avec rigueur et discrétion, en limitant au maximum l'impact sur vos opérations. Chaque étape est contrôlée, documentée et coordonnée pour assurer une transition fluide et sécurisée.",
                icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.3,
              },
              {
                title: "Tests & Validation",
                description:
                  "Nous réalisons des tests fonctionnels, de charge, de sécurité et de compatibilité pour valider la stabilité et les performances de l'infrastructure. Aucune mise en production n'est faite sans validation complète.",
                icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.4,
              },
              {
                title: "Support & Maintenance",
                description:
                  "Une fois la solution opérationnelle, nous assurons un support réactif et une maintenance proactive (surveillance, mises à jour, correctifs, évolutions). Vous bénéficiez d'une infrastructure fiable, performante et durable.",
                icon: <Monitor className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />,
                delay: 0.5,
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="flex mb-8 md:mb-12 last:mb-0"
              >
                <div className="mr-4 md:mr-6 relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-full flex items-center justify-center border border-teal-200 z-10 relative">
                    {step.icon}
                  </div>
                  {index < 4 && (
                    <div className="absolute top-10 md:top-12 bottom-0 left-1/2 w-0.5 bg-teal-100 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-16 bg-teal-50">
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
              Nous maîtrisons un large éventail de technologies pour répondre à tous vos besoins d'infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Microsoft",
                items: ["Windows Server", "Exchange", "SharePoint", "SCOM", "SQL Server", "ForeFront"],
                delay: 0.1,
              },
              {
                title: "Virtualisation",
                items: [
                  "Microsoft Hyper-V",
                  "VMware ESXI/ESX",
                  "VMware ThinApp/Desktop",
                  "Citrix Xen Server",
                  "Citrix XenApp",
                ],
                delay: 0.2,
              },
              {
                title: "Réseau",
                items: ["Sophos / Astaro", "Cisco", "Juniper", "Watchguard", "Fortinet", "Sonicwall"],
                delay: 0.3,
              },
              {
                title: "Linux",
                items: ["Fedora", "Debian", "RedHat", "SQUID", "Postfix / Sendmail", "Scripting", "Firewall"],
                delay: 0.4,
              },
              {
                title: "Sauvegarde",
                items: [
                  "Backup Exec",
                  "Barracuda Networks",
                  "Veeam Backup",
                  "Datacore SanSymphony-V",
                  "PHP Virtual Backup",
                ],
                delay: 0.5,
              },
              {
                title: "SGBD",
                items: ["Oracle", "SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
                delay: 0.6,
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: category.delay }}
                className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-teal-600">{category.title}</h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 md:gap-2 text-sm md:text-base text-gray-700">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
