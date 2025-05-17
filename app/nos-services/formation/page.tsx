"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Users, Monitor, Code, CheckCircle, ArrowRight, BookOpen, Calendar, Target } from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

type TabId = 'utilisateurs' | 'administrateurs' | 'developpeurs'

type TabContent = {
  [K in TabId]: {
    title: string
    description: string
    image: string
    points: string[]
  }
}

type TabItem = {
  id: TabId
  label: string
  icon: JSX.Element
}

export default function FormationPage() {
  const [activeTab, setActiveTab] = useState<TabId>("utilisateurs")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

  const tabContent: TabContent = {
    utilisateurs: {
      title: "Formation pour Utilisateurs",
      description:
        "Nos formations pour utilisateurs sont conçues pour permettre à vos équipes de maîtriser rapidement les outils informatiques et d'optimiser leur productivité au quotidien.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Prise en main des outils bureautiques (Microsoft Office, Google Workspace)",
        "Formation sur les logiciels métiers spécifiques à votre activité",
        "Optimisation des processus de travail et de la productivité",
        "Adaptation aux nouvelles technologies et aux mises à jour",
      ],
    },
    administrateurs: {
      title: "Formation pour Administrateurs",
      description:
        "Nos formations pour administrateurs systèmes et réseaux permettent à vos équipes techniques de maîtriser les infrastructures informatiques et d'assurer leur bon fonctionnement.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab10380ed66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Administration des systèmes d'exploitation (Windows Server, Linux)",
        "Gestion des infrastructures réseau et cloud",
        "Sécurisation des systèmes d'information",
        "Mise en place et maintenance des solutions de sauvegarde",
      ],
    },
    developpeurs: {
      title: "Formation pour Développeurs",
      description:
        "Nos formations pour développeurs permettent à vos équipes techniques d'acquérir de nouvelles compétences et de rester à la pointe des dernières technologies de développement.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Langages de programmation (Java, Python, JavaScript, etc.)",
        "Frameworks et bibliothèques modernes (React, Angular, Vue.js, etc.)",
        "Développement d'applications mobiles (iOS, Android)",
        "DevOps et intégration continue / déploiement continu (CI/CD)",
      ],
    },
  }

  const tabs: TabItem[] = [
    { id: "utilisateurs", label: "Utilisateurs", icon: <Users className="w-3.5 h-3.5 md:w-4 md:h-4" /> },
    {
      id: "administrateurs",
      label: "Administrateurs",
      icon: <Monitor className="w-3.5 h-3.5 md:w-4 md:h-4" />,
    },
    { id: "developpeurs", label: "Développeurs", icon: <Code className="w-3.5 h-3.5 md:w-4 md:h-4" /> },
  ]

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-amber-900 to-transparent opacity-20" />
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
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-100 text-amber-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Expertise Formation
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 text-transparent bg-clip-text">
                  Formation
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  La formation est essentielle à la performance. Les logiciels et les systèmes évoluent constamment.
                  ALMATEK propose des formations de qualité animées par des experts certifiés.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors shadow-md shadow-amber-200"
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
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="Formation professionnelle"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br from-amber-600 to-yellow-600 text-white p-2 md:p-4 rounded-lg shadow-lg">
                  <div className="text-xs md:text-sm font-medium">Personnes formées</div>
                  <div className="text-xl md:text-3xl font-bold">500+</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-3 md:mb-4">
              Nos formations s'adressent à TOUS
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Nous proposons des formations adaptées à tous les profils, des utilisateurs finaux aux développeurs, en
              passant par les administrateurs systèmes et réseaux.
            </p>
          </motion.div>

          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="inline-flex bg-amber-50 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm transition-all ${
                    activeTab === tab.id ? "bg-amber-500 text-white shadow-md" : "text-amber-700 hover:bg-amber-100"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-600 mb-3 md:mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">{tabContent[activeTab].description}</p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-2 md:space-y-4"
              >
                {tabContent[activeTab].points.map((point, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg hidden md:block">
              <Image
                src={tabContent[activeTab].image || "/placeholder.svg"}
                alt={tabContent[activeTab].title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-3 md:mb-4">Nos domaines de formation</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Nous organisons des formations qui répondent à vos besoins dans différents domaines d'expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Bureautique",
                description:
                  "Formations sur les outils bureautiques (Microsoft Office, Google Workspace, etc.) pour améliorer la productivité de vos équipes.",
                icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
              },
              {
                title: "Technique",
                description:
                  "Formations techniques sur les systèmes d'exploitation, les réseaux, la sécurité informatique, etc.",
                icon: <Monitor className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
              },
              {
                title: "Technologique",
                description:
                  "Formations sur les dernières technologies et langages de programmation pour rester à la pointe de l'innovation.",
                icon: <Code className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow duration-300 group hover:bg-amber-50"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-amber-700">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-3 md:mb-4">Notre approche pédagogique</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Notre particularité, c'est de créer une formation sur-mesure pour atteindre les objectifs fixés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Analyse des besoins",
                description: "Nous identifions précisément vos besoins en formation pour proposer un programme adapté.",
                icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
                step: "01",
              },
              {
                title: "Conception sur-mesure",
                description: "Nous concevons des formations personnalisées en fonction de vos objectifs spécifiques.",
                icon: <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
                step: "02",
              },
              {
                title: "Formation interactive",
                description:
                  "Nos formations sont basées sur la pratique et l'interaction pour une meilleure assimilation.",
                icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
                step: "03",
              },
              {
                title: "Suivi post-formation",
                description:
                  "Nous assurons un suivi après la formation pour garantir la mise en application des acquis.",
                icon: <Calendar className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />,
                step: "04",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                  {item.step}
                </div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-amber-700">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
