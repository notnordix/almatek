import Image from "next/image"
import Link from "next/link"
import WaveDivider from "@/components/ui/wave-divider"

interface ServiceHeroProps {
  title: string
  backgroundImage?: string
}

export default function ServiceHero({
  title,
  backgroundImage = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}: ServiceHeroProps) {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center justify-center text-white/80 text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link href="/nos-services" className="hover:text-primary transition-colors">
            Nos services
          </Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider />
    </section>
  )
}
