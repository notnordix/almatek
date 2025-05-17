"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  BarChart,
  MessageSquare,
  Settings,
  CheckCircle,
  ArrowRight,
  Database,
  BarChartIcon as ChartBar,
  Zap,
} from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

export default function CrmPage() {
  const [activeTab, setActiveTab] = useState("gestion")

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

  const tabContent = {
    gestion: {
      title: "Gestion des contacts clients",
      description:
        "Centralisez toutes les informations de vos clients et prospects dans une base de données unique et accessible à tous vos collaborateurs pour une meilleure connaissance client.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Base de données clients centralisée et sécurisée",
        "Historique complet des interactions avec chaque client",
        "Segmentation avancée pour cibler vos actions commerciales",
        "Accès en temps réel à toutes les informations clients",
      ],
    },
    suivi: {
      title: "Suivi des opportunités commerciales",
      description:
        "Suivez en temps réel l'évolution de vos opportunités commerciales, de la prospection à la conclusion, pour une meilleure visibilité sur votre pipeline de vente.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      points: [
        "Pipeline de vente visuel et intuitif",
        "Prévisions de vente précises et fiables",
        "Suivi des taux de conversion à chaque étape",
        "Rapports et tableaux de bord personnalisables",
      ],
    },
    communication: {
      title: "Communication client",
      description:
        "Améliorez votre communication client grâce à des outils d'emailing, de SMS et de gestion des campagnes marketing intégrés à votre CRM pour une approche personnalisée.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Campagnes d'emailing personnalisées et ciblées",
        "Modèles de communication prêts à l'emploi",
        "Suivi des taux d'ouverture et de clic",
        "Automatisation des relances et des suivis",
      ],
    },
    automatisation: {
      title: "Automatisation des processus",
      description:
        "Automatisez vos processus de vente et de marketing pour gagner en efficacité et en productivité, tout en réduisant les risques d'erreur et en améliorant la qualité de service.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      points: [
        "Workflows automatisés pour vos processus de vente",
        "Alertes et notifications personnalisées",
        "Attribution automatique des leads",
        "Génération automatique de rapports et de documents",
      ],
    },
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-400" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-pink-900 to-transparent opacity-20" />
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
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-pink-100 text-pink-600 text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Database className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Solutions CRM
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-700 via-pink-600 to-rose-600 text-transparent bg-clip-text">
                  Gestion de la Relation Client
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  ALMATEK propose des solutions CRM personnalisées pour optimiser la gestion de vos relations clients et
                  améliorer votre efficacité commerciale.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors shadow-md shadow-pink-200"
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
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-pink-500 to-rose-400 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="https://th.bing.com/th/id/OIP.FSW2lw-iJKKkRVoMtHdDxwHaE7?w=2000&h=1333&rs=1&pid=ImgDetMain"
                    alt="CRM Solution"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br from-pink-600 to-rose-600 text-white p-2 md:p-4 rounded-lg shadow-lg">
                  <div className="text-xs md:text-sm font-medium">Productivité commerciale</div>
                  <div className="text-xl md:text-3xl font-bold">+30%</div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3 md:mb-4">Fonctionnalités CRM</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Découvrez les principales fonctionnalités de nos solutions CRM pour optimiser la gestion de vos relations
              clients.
            </p>
          </motion.div>

          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="inline-flex bg-pink-50 rounded-full p-1">
              {[
                { id: "gestion", label: "Gestion contacts", icon: <Users className="w-3.5 h-3.5 md:w-4 md:h-4" /> },
                {
                  id: "suivi",
                  label: "Suivi opportunités",
                  icon: <BarChart className="w-3.5 h-3.5 md:w-4 md:h-4" />,
                },
                {
                  id: "communication",
                  label: "Communication",
                  icon: <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />,
                },
                {
                  id: "automatisation",
                  label: "Automatisation",
                  icon: <Settings className="w-3.5 h-3.5 md:w-4 md:h-4" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm transition-all ${
                    activeTab === tab.id ? "bg-pink-500 text-white shadow-md" : "text-pink-700 hover:bg-pink-100"
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
              <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-3 md:mb-4">
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
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-pink-500 flex-shrink-0 mt-0.5" />
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
      <section className="py-12 md:py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3 md:mb-4">Nos services CRM</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Nous vous accompagnons à chaque étape de votre projet CRM, du conseil à l'implémentation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Conseil et stratégie CRM",
                description:
                  "Nos experts vous accompagnent dans la définition de votre stratégie CRM et dans le choix de la solution la plus adaptée à vos besoins et à votre secteur d'activité.",
                icon: <ChartBar className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />,
              },
              {
                title: "Implémentation et personnalisation",
                description:
                  "Nous mettons en place votre solution CRM et la personnalisons selon vos processus métier spécifiques pour une adoption rapide par vos équipes et un retour sur investissement optimal.",
                icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />,
              },
              {
                title: "Intégration et développement",
                description:
                  "Nous intégrons votre CRM avec vos autres outils métier (ERP, marketing automation, e-commerce, etc.) et développons des fonctionnalités sur mesure pour répondre à vos besoins spécifiques.",
                icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-t-4 border-pink-500 hover:shadow-xl transition-shadow duration-300 group hover:bg-pink-50"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-pink-700">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-3 md:mb-4">
              Les bénéfices d'une solution CRM
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
              Découvrez comment une solution CRM peut transformer votre entreprise et améliorer votre relation client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-pink-50 to-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4 md:mb-6">Pour votre entreprise</h3>
              <div className="space-y-2 md:space-y-4">
                {[
                  "Augmentation du chiffre d'affaires",
                  "Amélioration de la productivité commerciale",
                  "Réduction des coûts d'acquisition client",
                  "Meilleure visibilité sur l'activité commerciale",
                  "Prise de décision facilitée grâce aux données",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-4 md:mb-6">Pour vos clients</h3>
              <div className="space-y-2 md:space-y-4">
                {[
                  "Expérience client personnalisée",
                  "Réponses plus rapides à leurs demandes",
                  "Suivi cohérent à travers tous les points de contact",
                  "Communication plus pertinente et ciblée",
                  "Relation client renforcée sur le long terme",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
