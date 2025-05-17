"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BarChart, PieChart, LineChart, TrendingUp, BarChart2, Activity } from "lucide-react"

export default function BiBigDataContent() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed mb-8">
            Développement des applications décisionnelles & Reporting pour une meilleure analyse de vos données.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-6">QlikView</h2>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="QlikView Dashboard"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Qlikview est une solution de business intelligence performante, intuitive, accessible à tous, adaptée aux
            petites structures comme aux grands comptes et rapidement déployée.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            QlikView est un outil d'analyse nouvelle génération, rentabilisé en un temps record, grâce à sa simplicité
            d'utilisation qui masque sa puissance et élimine la complexité. Son succès auprès des entreprises qui l'ont
            adopté en fait le produit de Business Discovery dont la croissance est la plus rapide au monde.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            ALMATEK propose de nombreux services autour de la solution QlikView. Quelques soient les données que vous
            souhaitez analyser, nos experts mettent en place pour vous un modèle d'analyse 100% adapté et 100% évolutif.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mb-12">
            <h3 className="font-bold text-xl mb-4">Un modèle qui vous permet de :</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  text: "Bénéficier de tableaux de bord pertinents et dynamiques",
                  icon: <BarChart className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Mesurer la performance de vos équipes commerciales",
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Analyser l'efficacité de votre service après-vente",
                  icon: <PieChart className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Quantifier le retour sur investissement d'une campagne marketing",
                  icon: <LineChart className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Analyser l'évolution de votre CA dans le temps",
                  icon: <BarChart2 className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Segmenter et organiser vos données sans limite",
                  icon: <Activity className="w-5 h-5 text-primary" />,
                },
                {
                  text: "Etre en mesure de prendre les meilleures décisions et d'agir instantanément",
                  icon: <TrendingUp className="w-5 h-5 text-primary" />,
                },
                { text: "Modéliser des scénarios d'évolutions", icon: <LineChart className="w-5 h-5 text-primary" /> },
                {
                  text: "Exploiter et tirer profit des données de votre entreprise",
                  icon: <BarChart className="w-5 h-5 text-primary" />,
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Reporting</h2>

          <p className="text-lg leading-relaxed mb-6">
            Les outils de reporting permettent aux responsables et dirigeants de disposer d'une précieuse vue d'ensemble
            de leur activité, et de rendre compte du travail effectué. Il s'agit non seulement de disposer de la bonne
            information, mais également d'être capable de la transmettre de façon efficace à la bonne personne.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            ALMATEK propose de nombreux services de reporting autour des technologies Jasperreports, Itext et Birt. Nos
            experts mettent à votre disposition des rapports simples, dynamiques et 100% évolutifs qui vous permettent
            d'avoir un reporting de qualité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BarChart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Jasperreports</h3>
              <p className="text-gray-600">
                Solution open source de reporting permettant de créer, gérer et diffuser des rapports complexes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <PieChart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Itext</h3>
              <p className="text-gray-600">
                Bibliothèque permettant de créer et manipuler des documents PDF avec une grande flexibilité.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <LineChart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Birt</h3>
              <p className="text-gray-600">
                Projet open source offrant une plateforme de reporting et d'analyse de données complète et intégrée.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
