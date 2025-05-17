import Hero from "@/components/sections/hero"
import ServicesShowcase from "@/components/sections/services-showcase"
import Competences from "@/components/sections/competences"
import Realisations from "@/components/sections/realisations"
import Technologies from "@/components/sections/technologies"
import VerticalNav from "@/components/ui/vertical-nav"

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesShowcase />
      <Competences />
      <Realisations />
      <Technologies />
      <VerticalNav />
    </main>
  )
}
