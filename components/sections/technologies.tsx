"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Define technology data with proper typing
interface Technology {
  name: string
  icon: string
  color: string
}

const technologies: Technology[] = [
  // Digital Technologies
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Angular", icon: "angularjs", color: "#DD0031" },
  { name: "Vue.js", icon: "vuejs", color: "#4FC08D" },
  { name: "Next.js", icon: "nextjs", color: "#000000" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "PHP", icon: "php", color: "#777BB3" },
  { name: "Laravel", icon: "laravel", color: "#FF2D20" },
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS3", icon: "css3", color: "#1572B6" },
  { name: "Sass", icon: "sass", color: "#CC6699" },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
  { name: "GraphQL", icon: "graphql", color: "#E10098" },

  // Infrastructure Technologies
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
  { name: "Azure", icon: "azure", color: "#0078D4" },
  { name: "Google Cloud", icon: "googlecloud", color: "#4285F4" },
  { name: "Terraform", icon: "terraform", color: "#7B42BC" },
  { name: "Ansible", icon: "ansible", color: "#EE0000" },
  { name: "Linux", icon: "linux", color: "#FCC624" },
  { name: "Nginx", icon: "nginx", color: "#009639" },

  // Programming Languages
  { name: "Java", icon: "java", color: "#E76F00" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "C#", icon: "csharp", color: "#239120" },
  { name: "Go", icon: "go", color: "#00ADD8" },

  // Database Technologies
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "Elasticsearch", icon: "elasticsearch", color: "#005571" },

  // BI & Big Data
  { name: "Hadoop", icon: "hadoop", color: "#FF5A0E" },
  { name: "Spark", icon: "apachespark", color: "#E25A1C" },

  // Version Control
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#181717" },
  { name: "GitLab", icon: "gitlab", color: "#FC6D26" },

  // CRM Systems
  { name: "Salesforce", icon: "salesforce", color: "#00A1E0" },
]

// Technology Icon Component with CSS-based hover effects
function TechIcon({ tech }: { tech: Technology }) {
  const { name, icon, color } = tech

  return (
    <div className="tech-item flex flex-col items-center gap-1 md:gap-2 mx-3 md:mx-6">
      <div
        className="tech-icon-container w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg border border-transparent transition-all duration-300 relative group"
        style={{
          boxShadow: `0 2px 10px ${color}30`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget
          target.style.borderColor = color
          target.style.boxShadow = `0 4px 12px ${color}60`
          target.style.transform = "translateY(-3px)"
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget
          target.style.borderColor = "transparent"
          target.style.boxShadow = `0 2px 10px ${color}30`
          target.style.transform = "translateY(0)"
        }}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt={name}
            width={40}
            height={40}
            className="object-contain"
            onError={(e) => {
              // Try plain version as fallback
              const target = e.target as HTMLImageElement
              target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-plain.svg`

              // Add another error handler for the fallback
              target.onerror = () => {
                // Try wordmark version as second fallback
                target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-wordmark.svg`

                // Final fallback
                target.onerror = () => {
                  // If all fail, replace with a letter in a colored box
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-10 h-10 flex items-center justify-center rounded-md text-white font-bold" style="background-color: ${color}">
                        ${name[0]}
                      </div>
                    `
                  }
                }
              }
            }}
          />
        </div>
      </div>
      <span className="text-xs md:text-sm font-medium">{name}</span>
    </div>
  )
}

export default function Technologies() {
  // Add CSS styles to the document head
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")
    style.innerHTML = `
  @keyframes scroll {
    0% {
      transform: translateX(calc(-100% / 2));
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .tech-slider {
    animation: scroll 60s linear infinite;
    will-change: transform;
  }
  
  .tech-slider:hover {
    animation-play-state: paused;
  }
  
  @media (prefers-reduced-motion) {
    .tech-slider {
      animation: none;
    }
  }
`
    document.head.appendChild(style)

    // Clean up function
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="section-title-container mb-16"
        >
          <h2 className="section-title">Technologies</h2>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>

        {/* Gradient overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="tech-slider-container overflow-hidden whitespace-nowrap py-8">
          <div className="tech-slider inline-block">
            {technologies.map((tech, index) => (
              <motion.div
                key={`tech-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: (index * 0.05) % 0.8, // Create a cycle of delays to avoid waiting too long
                  ease: "easeOut",
                }}
              >
                <TechIcon tech={tech} />
              </motion.div>
            ))}
            {/* Duplicate the items to create a seamless loop */}
            {technologies.map((tech, index) => (
              <motion.div
                key={`tech-dup-${index}`}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: (index * 0.05 + 0.4) % 0.8, // Offset the delay for duplicates
                  ease: "easeOut",
                }}
              >
                <TechIcon tech={tech} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
