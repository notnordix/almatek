"use client"

import { useEffect } from "react"

export default function SectionObserver() {
  useEffect(() => {
    // Create an Intersection Observer to detect when section titles are in view
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add or remove the 'in-view' class based on visibility
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          } else {
            entry.target.classList.remove("in-view")
          }
        })
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the element is visible
      },
    )

    // Create an Intersection Observer for animated elements
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get animation type from data attribute or default to fade-up
            const animationType = entry.target.getAttribute("data-animation") || "fade-up"
            const delay = entry.target.getAttribute("data-delay") || ""

            // Add animation classes
            entry.target.classList.add(`animate-${animationType}`)
            if (delay) {
              entry.target.classList.add(`animate-delay-${delay}`)
            }

            // Optional: unobserve after animation is applied if you want it to happen only once
            // animationObserver.unobserve(entry.target)
          } else {
            // Remove animation classes to reset for next scroll
            entry.target.classList.remove(
              "animate-fade-up",
              "animate-fade-down",
              "animate-fade-left",
              "animate-fade-right",
              "animate-fade-in",
              "animate-delay-100",
              "animate-delay-200",
              "animate-delay-300",
              "animate-delay-400",
              "animate-delay-500",
            )
          }
        })
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0.1,
      },
    )

    // Function to observe all section titles
    const observeSectionTitles = () => {
      const sectionTitles = document.querySelectorAll(".section-title")
      sectionTitles.forEach((title) => {
        titleObserver.observe(title)
      })
    }

    // Function to observe all animated elements
    const observeAnimatedElements = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((element) => {
        animationObserver.observe(element)
      })
    }

    // Initial observation
    observeSectionTitles()
    observeAnimatedElements()

    // Set up a mutation observer to detect new elements that might be added dynamically
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          // Check if any new section titles were added
          const newSectionTitles = Array.from(mutation.addedNodes)
            .filter((node) => node.nodeType === 1) // Only element nodes
            .flatMap((node) => (node instanceof Element ? Array.from(node.querySelectorAll(".section-title")) : []))

          // Observe any new section titles
          newSectionTitles.forEach((title) => titleObserver.observe(title))

          // Check if any new animated elements were added
          const newAnimatedElements = Array.from(mutation.addedNodes)
            .filter((node) => node.nodeType === 1) // Only element nodes
            .flatMap((node) => (node instanceof Element ? Array.from(node.querySelectorAll(".animate-on-scroll")) : []))

          // Observe any new animated elements
          newAnimatedElements.forEach((element) => animationObserver.observe(element))
        }
      })
    })

    // Start observing the document body for changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Cleanup function
    return () => {
      titleObserver.disconnect()
      animationObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
