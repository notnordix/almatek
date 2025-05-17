"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Monitor, Server, Network, Shield, Database, HardDrive } from "lucide-react"

export default function InfrastructureContent() {
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
            ALMATEK propose une gamme étendue de services afin de répondre à tous vos besoins en terme de création ou
            d'évolution de votre système informatique, en apportant des conseils techniques ou organisationnels.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Nos équipes d'experts, formés dans les plus grandes écoles et certifiés, vous apportent le savoir-faire et
            les outils nécessaires à la résolution de vos problématiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { name: "Administration système, supervision", icon: <Monitor className="w-6 h-6" /> },
              { name: "Intégration, déploiement et migration", icon: <Server className="w-6 h-6" /> },
              { name: "Pilotage de projets", icon: <HardDrive className="w-6 h-6" /> },
              { name: "Virtualisation", icon: <Database className="w-6 h-6" /> },
              { name: "Conseil et audit", icon: <Shield className="w-6 h-6" /> },
              { name: "IT Service Management", icon: <Network className="w-6 h-6" /> },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-medium mt-3">{item.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
              alt="Infrastructure informatique"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Quelques exemples de nos domaines de compétences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Microsoft</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Windows Server</li>
                <li>Exchange</li>
                <li>SharePoint</li>
                <li>SCOM</li>
                <li>SQL Server</li>
                <li>ForeFront, ...</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Virtualisation</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Microsoft Hyper-V</li>
                <li>MicrosoftApp-V</li>
                <li>VMware ESXI/ESX</li>
                <li>VMware ThinApp/Desktop</li>
                <li>Citrix Xen Server</li>
                <li>Citrix XenApp, ...</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Réseau</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sophos / Astaro</li>
                <li>Cisco</li>
                <li>Juniper</li>
                <li>Watchguard</li>
                <li>Fortinet</li>
                <li>Sonicwall, ...</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Linux</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fedora, Debian, RedHat</li>
                <li>SQUID</li>
                <li>Postfix / Sendmail</li>
                <li>Scripting</li>
                <li>Firewall, ...</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Sauvegarde</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Backup Exec</li>
                <li>Barracuda Networks</li>
                <li>Veeam Backup</li>
                <li>Datacore SanSymphony-V</li>
                <li>PHP Virtual Backup, ...</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">SGBD</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Oracle</li>
                <li>SQL Server</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
