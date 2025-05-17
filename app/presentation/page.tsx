import PresentationHero from "@/components/sections/presentation-hero"
import PresentationContent from "@/components/sections/presentation-content"
import Technologies from "@/components/sections/technologies"
import SectionObserver from "@/components/ui/section-observer"

export default function PresentationPage() {
  return (
    <main className="overflow-hidden">
      <PresentationHero />
      <div className="bg-white relative z-10">
        <PresentationContent />
        <Technologies />
      </div>
      <SectionObserver />
    </main>
  )
}
