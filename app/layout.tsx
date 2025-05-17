import type React from "react"
import type { Metadata } from "next"
import { Viewport } from 'next'
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/ui/floating-contact"
import SectionObserver from "@/components/ui/section-observer"

export const metadata: Metadata = {
  title: "ALMATEK",
  description:
    "ALMATEK est une entreprise de services du numérique qui a pour mission de concevoir et mettre en œuvre les meilleures solutions technologiques...",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" style={{ overscrollBehavior: "none" }}>
      <head>
        <style>
          @import url('https://fonts.cdnfonts.com/css/lato'); @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        </style>
      </head>
      <body className="font-['Lato',sans-serif] overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingContact />
        <SectionObserver />
      </body>
    </html>
  )
}
