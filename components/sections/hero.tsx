"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Define the carousel items
const carouselItems = [
  {
    text: "Sites web puissants",
    label: "JAHIA 7",
  },
  {
    text: "Campagnes SMS efficaces",
    label: "SMS+",
  },
  {
    text: "Analyse de données avancée",
    label: "QLIKVIEW",
  },
  {
    text: "Solutions CRM personnalisées",
    label: "CRM S",
  },
]

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Update viewport height to account for mobile browser chrome
  useEffect(() => {
    const updateViewportHeight = () => {
      // Use dvh if supported, otherwise fallback to vh
      if (CSS.supports("height", "100dvh")) {
        setViewportHeight("100dvh")
      } else {
        // Fallback for browsers that don't support dvh
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty("--vh", `${vh}px`)
        setViewportHeight("calc(var(--vh, 1vh) * 100)")
      }
    }

    // Initial update
    updateViewportHeight()

    // Update on resize and orientation change
    window.addEventListener("resize", updateViewportHeight)
    window.addEventListener("orientationchange", updateViewportHeight)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      window.removeEventListener("orientationchange", updateViewportHeight)
    }
  }, [])

  // Handle video container scaling based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (videoContainerRef.current) {
        const container = videoContainerRef.current
        const containerWidth = container.offsetWidth
        const containerHeight = container.offsetHeight
        const aspectRatio = 16 / 9 // Standard video aspect ratio

        // Calculate the appropriate scale to cover the container
        let scale = 1
        const videoWidth = containerHeight * aspectRatio
        const videoHeight = containerWidth / aspectRatio

        if (videoWidth < containerWidth) {
          // If video width is less than container width, scale based on width
          scale = containerWidth / videoWidth
        } else if (videoHeight < containerHeight) {
          // If video height is less than container height, scale based on height
          scale = containerHeight / videoHeight
        }

        // Apply increased scale factor - higher zoom level
        // Use different zoom levels for different screen sizes
        const isSmallScreen = window.innerWidth < 768
        const zoomFactor = isSmallScreen ? 1.5 : 1.35 // More zoom on small screens, slightly less on desktop

        scale *= zoomFactor
        container.style.transform = `scale(${scale})`
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Carousel rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 5000) // Change text every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Set visibility after component mounts for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-[#1a1f35] overflow-hidden" style={{ height: viewportHeight }} id="hero-section">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={videoContainerRef}
          className="absolute inset-0 w-full h-full origin-center transition-transform duration-1000"
        >
          {/* Local video element replacing YouTube iframe */}
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ pointerEvents: "none" }}
          >
            <source src="/background-video.mp4" type="video/mp4" />
            {/* Fallback message if video doesn't load */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Overlay with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#1a1f35]/70 to-primary/30 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left content area */}
            <div className="lg:col-span-8 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? "80px" : 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-1 bg-primary mb-6 rounded-full"
                ></motion.div>

                {/* Main heading */}
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 30, opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                  <span className="block">Transformez votre</span>
                  <span className="block">entreprise avec nos</span>
                </motion.h1>

                {/* Carousel text container */}
                <div className="relative h-[70px] sm:h-[80px] md:h-[90px] overflow-visible mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 0.5,
                      }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary drop-shadow-lg">
                        {carouselItems[currentIndex].text}
                      </span>
                      <div className="flex items-center mt-2">
                        <span className="text-sm md:text-base font-medium text-white bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                          {carouselItems[currentIndex].label}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-primary ml-3 animate-pulse"></span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-white/90 text-sm md:text-base max-w-3xl mb-0 leading-relaxed"
                >
                  ALMATEK vous accompagne dans votre transformation digitale avec des solutions innovantes et sur mesure
                  pour répondre à vos besoins spécifiques.
                </motion.p>
              </motion.div>
            </div>

            {/* Right content area - decorative element for larger screens */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="relative"
              >
                <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-md mx-auto flex items-center justify-center">
                  <div className="w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] rounded-full bg-gradient-to-tr from-primary/30 to-transparent border border-white/10 flex items-center justify-center">
                    <div className="w-[120px] h-[120px] xl:w-[180px] xl:h-[180px] rounded-full bg-primary/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] rounded-full bg-primary/40 backdrop-blur-md flex items-center justify-center"
                      >
                        <div className="text-white font-bold text-xl">ALMATEK</div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating dots decoration */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-10 w-4 h-4 rounded-full bg-primary/50"
                ></motion.div>
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-primary/30"
                ></motion.div>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-white/40"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
