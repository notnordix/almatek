"use client"

import { motion } from "framer-motion"
import { Building2, Users, Lightbulb, Award, MapPin } from "lucide-react"

export default function PresentationContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">À propos d'ALMATEK</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                ALMATEK est une Entreprise de Services du Numérique (ESN) spécialisée dans le développement applicatif
                sur mesure et le placement de talents IT. Notre mission : fournir des solutions technologiques
                performantes et des expertises pointues pour accompagner les entreprises dans leur transformation
                digitale, tout en maximisant leur agilité, productivité et compétitivité.
              </p>
              <p>
                Nous intervenons à toutes les étapes du cycle de vie d'un projet : conseil, conception, réalisation,
                maintenance et transfert de compétences. Nos équipes, composées d'experts techniques et commerciaux,
                allient savoir-faire technologique et sens de l'écoute pour répondre aux exigences spécifiques de chaque
                client.
              </p>
              <p>
                Nos domaines d'intervention couvrent aussi bien la MOE que l'AMOA, avec des compétences éprouvées en
                Digital, Infrastructure, SAP, BI, Big Data, ERP, CRM, cybersécurité et plus encore.
              </p>
              <p>
                Grâce à un vivier de plus de 50 000 professionnels qualifiés et un processus de sourcing réactif, nous
                proposons des profils adaptés à chaque mission : développeurs, ingénieurs, techniciens, chefs de projet,
                analystes… qu'il s'agisse de projets ponctuels ou de collaborations longues.
              </p>
              <p>
                De la création de sites vitrines aux applications web complexes, en passant par les solutions
                décisionnelles comme QlikView, ALMATEK conçoit des solutions sur mesure en parfaite adéquation avec vos
                objectifs métiers.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Une entreprise à taille humaine</h3>
              <p className="text-gray-700">
                ALMATEK place l'humain au cœur de sa démarche. Notre taille nous permet de privilégier une approche sur
                mesure, fondée sur l'écoute active, la proximité et la réactivité. En étant au plus près de nos clients,
                nous construisons des partenariats durables, basés sur la confiance et une compréhension fine de leurs
                enjeux.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Précurseur dans le secteur IT</h3>
              <p className="text-gray-700">
                Toujours en veille sur les évolutions technologiques, ALMATEK anticipe les tendances pour proposer à ses
                clients des solutions innovantes, robustes et durables. Notre expertise multisectorielle et notre
                culture de l'innovation nous permettent de relever les défis technologiques d'aujourd'hui et de demain
                avec agilité et pertinence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 md:col-span-2"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Des experts certifiés, au cœur des technologies clés
              </h3>
              <p className="text-gray-700">
                Chez ALMATEK, nous nous appuyons sur un réseau de consultants hautement qualifiés, régulièrement
                certifiés sur les dernières technologies du marché. Qu'il s'agisse de systèmes d'information,
                d'infrastructures, d'ERP, de BI & Big Data, ou encore de cybersécurité, nos experts assurent un haut
                niveau de maîtrise technique. Leur formation continue et leur polyvalence nous permettent de garantir
                des interventions précises, efficaces et en parfaite adéquation avec les exigences de vos projets.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre approche : écoute, expertise et engagement</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Compréhension sur mesure</h3>
                <p className="text-gray-700">
                  Chez ALMATEK, chaque collaboration débute par une phase d'écoute active et d'analyse approfondie. Nous
                  nous imprégnons de vos enjeux métiers et de vos objectifs pour construire des réponses technologiques
                  parfaitement alignées sur vos besoins.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Excellence technique</h3>
                <p className="text-gray-700">
                  Notre équipe pluridisciplinaire maîtrise un large éventail de technologies – du développement
                  applicatif à l'infrastructure, en passant par le Big Data, le décisionnel, les ERP ou la
                  cybersécurité. Cette expertise nous permet de concevoir des solutions innovantes, robustes et
                  évolutives.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Un accompagnement durable</h3>
                <p className="text-gray-700">
                  Au-delà de la livraison, nous assurons un suivi rigoureux et un support réactif à chaque étape. Notre
                  engagement : rester présents pour garantir la continuité, la performance et l'optimisation de vos
                  solutions.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Transparence et confiance</h3>
                <p className="text-gray-700">
                  Nous construisons avec nos clients des relations durables, fondées sur la transparence et le dialogue.
                  Vous bénéficiez d'un interlocuteur dédié, de communications régulières et d'une visibilité claire sur
                  l'avancement de vos projets.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre équipe</h2>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Notre force réside dans une équipe soudée, réactive et experte, capable de répondre avec précision
                    et rapidité à chaque demande client. Nos commerciaux, dotés d'une solide culture IT, comprennent
                    immédiatement vos enjeux et vous proposent, sous 48 heures, des profils ciblés et qualifiés, en
                    parfaite adéquation avec vos besoins techniques et votre environnement.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Grâce à une organisation agile et une communication fluide entre les pôles techniques et
                    commerciaux, nous garantissons le respect des délais, des budgets et des exigences métier. Chaque
                    projet est piloté avec rigueur, réactivité et engagement, pour assurer un accompagnement sans faille
                    et des résultats concrets.
                  </p>
                  <p className="text-gray-700 mt-4 font-medium">
                    Chez ALMATEK, la performance humaine est au service de la réussite de vos projets.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Nos bureaux</h2>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Si notre siège est en région parisienne, notre portée, elle, est nationale. Grâce à un réseau étendu
                    de consultants présents sur tout le territoire, nous sommes en mesure d'intervenir rapidement,
                    partout en France. Ouverts aux enjeux globaux, nous répondons également à des projets à dimension
                    internationale.
                  </p>
                  <p className="text-gray-700 mt-4 font-medium">
                    Peu importe où vous vous trouvez : notre proximité est avant tout une question de réactivité,
                    d'écoute… et d'engagement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
