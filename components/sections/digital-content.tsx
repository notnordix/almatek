"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Database, Server, Layout, FileCode, Layers } from "lucide-react"

export default function DigitalContent() {
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
            ALMATEK intervient dans la réalisation d'outils innovants et pertinents. Nous développons des applications
            de gestion, extranet/intranet, des solutions de paiement, etc. Nous disposons d'une expertise reconnue dans
            la maîtrise d'ouvrage et l'assistance technique de projet.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-6">
            Des compétences à tous niveaux de vos projets de développement
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Conception", icon: <Layout className="w-6 h-6" /> },
              { name: "Réalisation MOE / MOA", icon: <Code className="w-6 h-6" /> },
              { name: "Intégration", icon: <Layers className="w-6 h-6" /> },
              { name: "Recette", icon: <FileCode className="w-6 h-6" /> },
              { name: "Déploiement", icon: <Server className="w-6 h-6" /> },
              { name: "Tierce maintenance", icon: <Database className="w-6 h-6" /> },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-medium">{item.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Développement digital"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6">Quelques exemples de nos domaines de compétences</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">CMS</h3>
              <p>Jahia</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Java / JEE</h3>
              <p>
                JVM, Java, Strutd, Spring MVC, JSP, Servlet, JSF, SWT, Eclipse RCP, Swing, AWT, Spring, Seam, EJB, CDI,
                Hibernate, EclipseLink, JPA, JDBC, Axis, Apache CXF, JAX-WS
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">.NET</h3>
              <p>
                Frameworks .NET, C#, VB .NET, ASP .NET, ASP .NET MVC, Silverlight, WPF/E, WinForm, WPF, Unity, ADO .NET,
                Linq, Entity Framework, WCF, IIS, Visual Studio
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">PHP</h3>
              <p>Zend Framework, Symfony, Cake PHP, Codelgniter</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Web</h3>
              <p>HTML, XHTML, CSS, JavaScript (Ajax, JSON, etc.), JQuery, Prototype, YahooUI, extJS</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Base de données</h3>
              <p>SQL, PL/SQL, Transact-SQL, Merise, Entity-Relationship Diagram, MCD/MPD (Power design)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">Programmation</h3>
              <p>UML, Design Patterns, rational Rose, Objecteering/Infrastructure</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
