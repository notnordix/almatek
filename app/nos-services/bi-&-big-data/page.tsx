"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Database,
  ChevronRight,
  FileText,
  Layers,
} from "lucide-react"
import SectionObserver from "@/components/ui/section-observer"

export default function BiBigDataPage() {
  const [activeTab, setActiveTab] = useState("qlikview")

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500" />
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-green-900 to-transparent opacity-20" />
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-700 via-teal-600 to-emerald-600 text-transparent bg-clip-text">
                  BI & Big Data
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  Développement des applications décisionnelles & Reporting pour une meilleure analyse de vos données.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Link
                    href="/contactez-nous"
                    className="inline-flex items-center gap-1.5 md:gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors"
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
                <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="BI & Big Data"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-gradient-to-br from-green-600 to-teal-600 text-white p-2 md:p-4 rounded-lg shadow-lg">
                  <div className="text-xs md:text-sm font-medium">Analyses réalisées</div>
                  <div className="text-xl md:text-3xl font-bold">300+</div>
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
              Nos solutions décisionnelles
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              ALMATEK propose des solutions complètes pour l'analyse et la visualisation de vos données d'entreprise.
            </p>
          </motion.div>

          <div className="mb-8 md:mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
              {[
                { id: "qlikview", label: "QlikView", icon: <BarChart className="w-4 h-4" /> },
                { id: "reporting", label: "Reporting", icon: <FileText className="w-4 h-4" /> },
                { id: "datavis", label: "Visualisation", icon: <PieChart className="w-4 h-4" /> },
                { id: "bigdata", label: "Big Data", icon: <Database className="w-4 h-4" /> },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white shadow-md shadow-green-200"
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
                {activeTab === "qlikview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-green-700">QlikView</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Qlikview est une solution de business intelligence performante, intuitive, accessible à tous,
                        adaptée aux petites structures comme aux grands comptes et rapidement déployée.
                      </p>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        QlikView est un outil d'analyse nouvelle génération, rentabilisé en un temps record, grâce à sa
                        simplicité d'utilisation qui masque sa puissance et élimine la complexité.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Tableaux de bord pertinents et dynamiques",
                          "Mesure de la performance des équipes commerciales",
                          "Analyse de l'efficacité du service après-vente",
                          "Quantification du ROI des campagnes marketing",
                          "Segmentation et organisation des données",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="QlikView Dashboard"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "reporting" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-green-700">Reporting</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Les outils de reporting permettent aux responsables et dirigeants de disposer d'une précieuse
                        vue d'ensemble de leur activité, et de rendre compte du travail effectué.
                      </p>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        ALMATEK propose de nombreux services de reporting autour des technologies Jasperreports, Itext
                        et Birt. Nos experts mettent à votre disposition des rapports simples, dynamiques et 100%
                        évolutifs.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Jasperreports - Solution open source de reporting",
                          "Itext - Bibliothèque pour créer et manipuler des PDF",
                          "Birt - Plateforme de reporting et d'analyse complète",
                          "Rapports personnalisés et dynamiques",
                          "Intégration avec vos systèmes existants",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                        alt="Reporting Solutions"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "datavis" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-green-700">
                        Visualisation de données
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        La visualisation de données transforme des informations complexes en représentations visuelles
                        intuitives, permettant une compréhension rapide et des insights précieux pour la prise de
                        décision.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Tableaux de bord interactifs et personnalisables",
                          "Graphiques et diagrammes avancés",
                          "Cartes de chaleur et visualisations géospatiales",
                          "Indicateurs de performance clés (KPIs)",
                          "Visualisations en temps réel",
                          "Rapports automatisés et programmés",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Data Visualization"
                        width={600}
                        height={400}
                        className="relative rounded-xl shadow-lg"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "bigdata" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                  >
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-green-700">Big Data</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                        Nos solutions Big Data vous permettent de traiter, analyser et valoriser de grands volumes de
                        données hétérogènes pour en extraire des insights stratégiques et créer de la valeur pour votre
                        entreprise.
                      </p>
                      <ul className="space-y-2 md:space-y-3">
                        {[
                          "Collecte et intégration de données massives",
                          "Traitement et analyse en temps réel",
                          "Stockage distribué et évolutif",
                          "Modélisation prédictive et machine learning",
                          "Détection de tendances et patterns",
                          "Valorisation des données non structurées",
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-1.5 md:gap-2"
                          >
                            <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                              <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            </div>
                            <span className="text-sm md:text-base">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-md opacity-20"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Big Data Solutions"
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

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
              Les avantages de nos solutions
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Découvrez comment nos solutions de Business Intelligence peuvent transformer vos données en décisions
              stratégiques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Prise de décision éclairée",
                description:
                  "Accédez à des insights précieux pour prendre des décisions stratégiques basées sur des données fiables.",
                icon: <BarChart className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.1,
              },
              {
                title: "Visualisation intuitive",
                description:
                  "Transformez des données complexes en visualisations claires et interactives pour une compréhension immédiate.",
                icon: <PieChart className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.2,
              },
              {
                title: "Performance optimisée",
                description:
                  "Identifiez les opportunités d'amélioration et suivez vos KPIs en temps réel pour optimiser vos performances.",
                icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.3,
              },
              {
                title: "Analyses prédictives",
                description:
                  "Anticipez les tendances futures grâce à des modèles prédictifs basés sur l'analyse de vos données historiques.",
                icon: <LineChart className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.4,
              },
              {
                title: "Reporting automatisé",
                description:
                  "Gagnez du temps avec des rapports générés automatiquement et distribués aux bonnes personnes au bon moment.",
                icon: <FileText className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.5,
              },
              {
                title: "Intégration complète",
                description:
                  "Connectez toutes vos sources de données pour une vue unifiée et cohérente de votre activité.",
                icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                delay: 0.6,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: benefit.delay }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-green-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Un modèle qui vous permet de
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              ALMATEK propose de nombreux services autour de la solution QlikView et d'autres outils de BI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "Bénéficier de tableaux de bord pertinents et dynamiques",
              "Mesurer la performance de vos équipes commerciales",
              "Analyser l'efficacité de votre service après-vente",
              "Quantifier le retour sur investissement d'une campagne marketing",
              "Analyser l'évolution de votre CA dans le temps",
              "Segmenter et organiser vos données sans limite",
              "Etre en mesure de prendre les meilleures décisions et d'agir instantanément",
              "Modéliser des scénarios d'évolutions",
              "Exploiter et tirer profit des données de votre entreprise",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white to-green-50 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-green-100"
              >
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionObserver />
    </main>
  )
}
