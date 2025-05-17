"use client"
import Link from "next/link"
import Image from "next/image"
import { Users, RefreshCw, Coffee } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const competences = [
  {
    id: 1,
    title: "COMPÉTENCE",
    icon: <Users className="w-8 h-8" />,
    description:
      "ALMATEK se caractérise par ses équipes expérimentées et compétentes qui maitrisent la quasi totalité des nouvelles technologies de programmation.",
    link: "/competences/competence",
    backgroundImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "#0f75bc", // Primary color
  },
  {
    id: 2,
    title: "CONFIANCE & TRANSPARENCE",
    icon: <RefreshCw className="w-8 h-8" />,
    description:
      "ALMATEK met à la disposition de ses clients des environnements de recette afin qu'ils puissent tester et suivre l'avancement des travaux.",
    link: "/competences/confiance-&-transparence",
    backgroundImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    color: "#2c9f42", // Green color
  },
  {
    id: 3,
    title: "DISPONIBILITÉ & IMPLICATION",
    icon: <Coffee className="w-8 h-8" />,
    description:
      "ALMATEK a pour principe de s'impliquer totalement dans les projets qui lui sont confiés et souvent au niveau même de leur définition.",
    link: "/competences/disponibilite-&-implication",
    backgroundImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "#e74c3c", // Red color
  },
]

export default function Competences() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header - Updated to match Realisations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-container mb-16"
        >
          <h2 className="section-title">Nos compétences</h2>
        </motion.div>

        {/* Competences cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competences.map((competence) => (
            <div
              key={competence.id}
              className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group h-full"
              style={{
                transform: hoveredCard === competence.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === competence.id
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={() => setHoveredCard(competence.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={competence.backgroundImage || "/placeholder.svg"}
                  alt={competence.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out"
                  style={{
                    transform: hoveredCard === competence.id ? "scale(1.05)" : "scale(1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${competence.color}ee, ${competence.color}99)`,
                    opacity: hoveredCard === competence.id ? 0.95 : 0.9,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div
                  className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    transform: hoveredCard === competence.id ? "scale(1.1)" : "scale(1)",
                    backgroundColor:
                      hoveredCard === competence.id ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="text-white">{competence.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{competence.title}</h3>

                <p className="text-white/90 mb-8 flex-grow">{competence.description}</p>

                <Link
                  href={competence.link}
                  className="inline-flex items-center text-white border-2 border-white/80 rounded-md px-5 py-2.5 transition-all duration-300 hover:bg-white hover:text-gray-900 group"
                  aria-label={`En savoir plus sur ${competence.title}`}
                >
                  <span className="mr-2">Lire la suite</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
