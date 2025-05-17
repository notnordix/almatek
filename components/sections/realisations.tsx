"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Project data - keeping the same content
const projects = [
  {
    id: 1,
    title: "Refonte de la plateforme Emploi Store sous JAHIA",
    client: "Emploi",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description:
      "La plateforme Emploi Store a été entièrement repensée pour offrir une meilleure expérience utilisateur. Utilisant JAHIA comme CMS, cette refonte a permis d'améliorer la navigation, l'accessibilité et les performances du site.",
  },
  {
    id: 2,
    title: "Mise en place d'une plateforme sous JAHIA de location d'utilitaires",
    client: "Mobilités",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1554260570-83dc2f46ef79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Développement d'une plateforme complète de services de mobilité intégrant la location de véhicules utilitaires, les services de chauffeur et l'auto-partage.",
  },
  {
    id: 3,
    title: "Refonte de site Internet et solutions Tablette",
    client: "Banque",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Modernisation complète du site internet d'une institution bancaire avec développement parallèle d'applications tablettes pour les conseillers clientèle.",
  },
  {
    id: 4,
    title: "Intégration de systèmes existants avec la nouvelle plateforme SAP",
    client: "Laboratoire",
    category: "SAP",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Projet d'intégration complexe visant à connecter les systèmes existants d'un laboratoire avec une nouvelle implémentation SAP.",
  },
  {
    id: 5,
    title: "Développement de reportings sous Qlikview",
    client: "Santé",
    category: "BI & BIG DATA",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Création d'un système complet de reporting et d'analyse de données pour le secteur de la santé utilisant Qlikview.",
  },
]

export default function Realisations() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const currentProject = projects[currentIndex]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-container mb-8"
        >
          <h2 className="section-title">Nos réalisations</h2>
        </motion.div>

        {/* Project Thumbnails - Now smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-1.5 mb-3"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => goToProject(index)}
              className={`relative w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-primary scale-[1.05]"
                  : "hover:scale-[1.05] opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 48px, 64px"
              />
              <div
                className={`absolute inset-0 ${
                  index === currentIndex ? "bg-primary/30" : "bg-black/40 hover:bg-black/30"
                }`}
              />
            </div>
          ))}
        </motion.div>

        {/* Main Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Project Display */}
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={currentProject.image || "/placeholder.svg"}
              alt={currentProject.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovering ? "scale(1.05)" : "scale(1)",
              }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                  {currentProject.category}
                </span>
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {currentProject.client}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
              <p className="text-white/90 text-sm max-w-3xl line-clamp-2 md:line-clamp-3">
                {currentProject.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 rounded-full transition-all duration-200 opacity-0 md:opacity-70 hover:opacity-100"
              style={{ opacity: isHovering ? 0.9 : 0 }}
              aria-label="Projet précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 rounded-full transition-all duration-200 opacity-0 md:opacity-70 hover:opacity-100"
              style={{ opacity: isHovering ? 0.9 : 0 }}
              aria-label="Projet suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-4 gap-1.5">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Voir le projet: ${project.title}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
