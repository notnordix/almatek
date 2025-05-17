"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, RefreshCw, Coffee } from "lucide-react"
import WaveDivider from "@/components/ui/wave-divider"
import { useEffect, useRef } from "react"

// Import the same competences data and styling from the homepage component
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
    animationClass: "animate-from-left",
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
    animationClass: "animate-from-bottom",
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
    animationClass: "animate-from-right",
    color: "#e74c3c", // Red color
  },
]

export default function CompetencesPage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Intersection Observer that triggers animations each time the section enters/exits viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When section enters viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible")
          } else {
            // When section leaves viewport - remove the class to reset animations
            entry.target.classList.remove("animate-visible")
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -10% 0px", // Slightly adjust when animations trigger
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Nos Compétences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Nos compétences</h1>
        </div>

        {/* Wave Divider */}
        <WaveDivider />
      </section>

      {/* Competences Grid - Using the same component as homepage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title */}
          <div className="section-title-container mb-16">
            <h2 className="section-title">Nos compétences</h2>
          </div>

          {/* Competences with repeating animations */}
          <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-parent">
            {competences.map((competence, index) => (
              <div
                key={competence.id}
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${competence.animationClass}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                }}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={competence.backgroundImage || "/placeholder.svg"}
                    alt={competence.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 2}
                  />
                  <div
                    className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-95"
                    style={{
                      background: `linear-gradient(to top, ${competence.color}ee, ${competence.color}99)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/30">
                    <div className="text-white">{competence.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{competence.title}</h3>

                  <p className="text-white/90 mb-6 flex-grow">{competence.description}</p>

                  <Link href={competence.link} className="relative inline-block group">
                    <div
                      className="relative px-5 py-2.5 rounded-md border-2 overflow-hidden transition-all duration-300 z-0"
                      style={{ borderColor: "white" }}
                    >
                      {/* Fill background */}
                      <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></span>

                      {/* Button text */}
                      <span className="relative flex items-center justify-center text-white transition-colors duration-300 z-10 group-hover:text-black">
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
                          className="transform transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
