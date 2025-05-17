"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Users, Monitor, Code } from "lucide-react"

export default function FormationContent() {
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
            La formation est essentielle à la performance. Les logiciels et les systèmes évoluent constamment. ALMATEK
            propose des formations de qualité animées par des experts certifiés.
          </p>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Formation informatique"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Nos formations s'adressent à TOUS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">1- Utilisateurs</h3>
              <p className="text-gray-600">
                Formations adaptées aux utilisateurs finaux pour une prise en main efficace des outils informatiques.
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
                <Monitor className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">2- Administrateurs</h3>
              <p className="text-gray-600">
                Formations techniques pour les administrateurs systèmes et réseaux responsables de l'infrastructure
                informatique.
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
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">3- Développeurs</h3>
              <p className="text-gray-600">
                Formations spécialisées pour les développeurs souhaitant approfondir leurs connaissances ou acquérir de
                nouvelles compétences.
              </p>
            </motion.div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">
            Nous organisons des formations qui répondent à vos besoins en matière :
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Bureautique</h3>
                  <p>
                    Formations sur les outils bureautiques (Microsoft Office, Google Workspace, etc.) pour améliorer la
                    productivité de vos équipes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Technique</h3>
                  <p>
                    Formations techniques sur les systèmes d'exploitation, les réseaux, la sécurité informatique, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Technologique</h3>
                  <p>
                    Formations sur les dernières technologies et langages de programmation pour rester à la pointe de
                    l'innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-xl mb-12">
            <h3 className="font-bold text-xl mb-4 text-primary">Nos formations s'adressent à VOUS</h3>
            <p className="mb-4">
              Nos formations s'adressent à des groupes de plus ou moins grandes tailles : formations individuelles, en
              petits groupes, en groupes moyens ou en grands groupes.
            </p>
            <p className="font-medium">
              Notre particularité, c'est de créer une formation sur-mesure pour atteindre les objectifs fixés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
