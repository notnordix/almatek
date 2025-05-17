import ContactHero from "@/components/sections/contact-hero"
import ContactSection from "@/components/sections/contact-section"
import ContactMap from "@/components/sections/contact-map"
import SectionObserver from "@/components/ui/section-observer"

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <div className="bg-white relative z-10">
        <ContactSection />
        <ContactMap />
      </div>
      <SectionObserver />
    </main>
  )
}
