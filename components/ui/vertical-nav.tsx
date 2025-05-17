"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Info,
  Briefcase,
  Phone,
  ChevronRight,
  Server,
  Code,
  Database,
  Shield,
  GraduationCap,
  MessageSquare,
} from "lucide-react"

type NavItem = {
  name: string
  href: string
  icon: React.ReactNode
  subItems?: { name: string; href: string; icon: React.ReactNode }[]
}

export default function VerticalNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Handle scroll to show/hide nav
  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height - approximate value, adjust as needed
      const heroHeight = window.innerHeight * 0.8 // Assuming hero is about 80vh

      // Show nav after scrolling past hero
      if (window.scrollY > heroHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        // Reset expanded state when nav is hidden
        setIsExpanded(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems: NavItem[] = [
    {
      name: "Accueil",
      href: "/",
      icon: <Home size={20} />,
    },
    {
      name: "Présentation",
      href: "/presentation",
      icon: <Info size={20} />,
    },
    {
      name: "Nos services",
      href: "/nos-services",
      icon: <Briefcase size={20} />,
      subItems: [
        { name: "Digital", href: "/nos-services/digital", icon: <Code size={18} /> },
        { name: "Infrastructure", href: "/nos-services/infrastructure", icon: <Server size={18} /> },
        { name: "SAP", href: "/nos-services/sap", icon: <Database size={18} /> },
        { name: "BI & BIG DATA", href: "/nos-services/bi-&-big-data", icon: <Database size={18} /> },
        { name: "Sécurité", href: "/nos-services/securite", icon: <Shield size={18} /> },
        { name: "Formation", href: "/nos-services/formation", icon: <GraduationCap size={18} /> },
        { name: "CRM", href: "/nos-services/crm", icon: <MessageSquare size={18} /> },
      ],
    },
    {
      name: "Contactez-nous",
      href: "/contactez-nous",
      icon: <Phone size={20} />,
    },
  ]

  // If mobile, don't render
  if (isMobile) {
    return null
  }

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
    setActiveSubMenu(null)
  }

  const toggleSubMenu = (name: string) => {
    if (activeSubMenu === name) {
      setActiveSubMenu(null)
    } else {
      setActiveSubMenu(name)
    }
  }

  // Define the variants outside the JSX for clarity
  const containerVariants = {
    expanded: {
      width: "auto",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    },
    collapsed: {
      width: "60px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    },
  }

  const textVariants = {
    expanded: { opacity: 1, display: "block", marginLeft: "0.75rem" },
    collapsed: { opacity: 0, display: "none", marginLeft: 0 },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-3 top-[40%] z-30"
          style={{ top: "calc(40% - 20px)" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden"
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Main menu item */}
                <div className="relative">
                  {item.subItems ? (
                    <button
                      onClick={() => isExpanded && toggleSubMenu(item.name)}
                      className={`flex items-center w-full px-4 py-3 transition-colors ${
                        pathname === item.href || pathname?.startsWith(item.href + "/")
                          ? "text-primary bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center justify-center w-8">{item.icon}</span>

                      <motion.span
                        className="whitespace-nowrap font-medium"
                        initial="collapsed"
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={textVariants}
                      >
                        {item.name}
                      </motion.span>

                      {isExpanded && item.subItems && (
                        <motion.div
                          className="ml-auto"
                          animate={{ rotate: activeSubMenu === item.name ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={16} />
                        </motion.div>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 transition-colors ${
                        pathname === item.href ? "text-primary bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center justify-center w-8">{item.icon}</span>

                      <motion.span
                        className="whitespace-nowrap font-medium"
                        initial="collapsed"
                        animate={isExpanded ? "expanded" : "collapsed"}
                        variants={textVariants}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  )}
                </div>

                {/* Submenu */}
                {item.subItems && isExpanded && (
                  <motion.div
                    className="overflow-hidden bg-gray-50"
                    initial={{ height: 0 }}
                    animate={{
                      height: activeSubMenu === item.name ? "auto" : 0,
                      opacity: activeSubMenu === item.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`flex items-center pl-12 pr-4 py-2 transition-colors ${
                          pathname === subItem.href ? "text-primary bg-blue-50" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <span className="flex items-center justify-center w-6 mr-2">{subItem.icon}</span>
                        <span className="text-sm whitespace-nowrap">{subItem.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
