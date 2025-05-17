"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Lock, UserCheck, AlertTriangle } from "lucide-react"

export default function SecuriteContent() {
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
            La sécurité informatique est un enjeu fondamental pour les entreprises et les organisations. Elle devient de
            plus en plus complexe et versatile. Nous vous apportons des solutions simples, complètes et pertinentes pour
            assurer la sécurité de tous vos supports informatiques.
          </p>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Sécurité informatique"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">
            Notre engagement est d'offrir à nos clients les solutions optimales dans les domaines suivants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gestion et régulation de la sécurité</h3>
              <p className="text-gray-600">
                Nous mettons en place des politiques de sécurité adaptées à votre organisation et veillons à leur
                application.
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
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sécurité des infrastructures et applications</h3>
              <p className="text-gray-600">
                Nous sécurisons vos infrastructures et applications contre les menaces internes et externes.
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
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gestions des identités</h3>
              <p className="text-gray-600">
                Nous mettons en place des solutions de gestion des identités et des accès pour contrôler qui accède à
                vos ressources.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Management automatisé des événements et incidents de sécurité (SIEM)
              </h3>
              <p className="text-gray-600">
                Nous déployons des solutions de gestion des événements et incidents de sécurité pour détecter et
                répondre rapidement aux menaces.
              </p>
            </motion.div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Nos services de sécurité</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Audit de sécurité</h3>
              <p>
                Nous réalisons des audits de sécurité pour identifier les vulnérabilités de votre système d'information
                et vous proposer des solutions adaptées.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Tests d'intrusion</h3>
              <p>
                Nos experts réalisent des tests d'intrusion pour évaluer la résistance de vos systèmes face aux attaques
                et vous aider à renforcer votre sécurité.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Conformité RGPD</h3>
              <p>
                Nous vous accompagnons dans la mise en conformité de votre système d'information avec le Règlement
                Général sur la Protection des Données.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Formation et sensibilisation</h3>
              <p>
                Nous formons vos équipes aux bonnes pratiques de sécurité informatique et les sensibilisons aux risques
                liés à l'utilisation des outils numériques.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
