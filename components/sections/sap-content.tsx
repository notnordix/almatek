"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Server, Database, Settings, Users, BarChart, Shield } from "lucide-react"

export default function SapContent() {
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
            ALMATEK propose des contrats d'infogérance aux entreprises et organisations désireuses d'externaliser
            totalement ou partiellement la gestion et l'exploitation de leur service informatique.
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
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Implémentation SAP</h3>
              <p className="text-gray-600">
                Nous vous accompagnons dans l'implémentation de vos solutions SAP, de la conception à la mise en
                production.
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
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Maintenance et support</h3>
              <p className="text-gray-600">
                Nos experts assurent la maintenance et le support de vos systèmes SAP pour garantir leur bon
                fonctionnement.
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
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Migration et mise à niveau</h3>
              <p className="text-gray-600">
                Nous vous accompagnons dans la migration et la mise à niveau de vos systèmes SAP vers les dernières
                versions.
              </p>
            </motion.div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Solutions SAP"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Nos services SAP</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Conseil et expertise</h3>
                  <p>
                    Nos consultants SAP vous accompagnent dans la définition de votre stratégie et la mise en œuvre de
                    vos projets. Nous vous aidons à optimiser vos processus métier et à tirer le meilleur parti de votre
                    investissement SAP.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Développement ABAP</h3>
                  <p>
                    Nos développeurs ABAP réalisent des développements spécifiques pour adapter SAP à vos besoins
                    particuliers. Nous développons des rapports, des interfaces, des formulaires et des extensions pour
                    enrichir les fonctionnalités standard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Infogérance SAP</h3>
                  <p>
                    Nous prenons en charge l'exploitation et la maintenance de votre système SAP, vous permettant ainsi
                    de vous concentrer sur votre cœur de métier. Notre équipe assure la surveillance, la maintenance
                    préventive et corrective, ainsi que l'optimisation continue de votre environnement SAP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
