"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const heroImages = [
  "/placeholder.svg?height=600&width=1200&text=Österreichische+Alpen",
  "/placeholder.svg?height=600&width=1200&text=Traditionelle+Tracht",
  "/placeholder.svg?height=600&width=1200&text=Volksmusik+Festival",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            index === currentImage ? "opacity-100" : "opacity-0",
          )}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Österreichische Volksmusik</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            Entdecke die reiche Tradition österreichischer Volksmusik mit Gstanzln, Wirtshausliedern und Trinksprüchen
            aus allen Regionen.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/gstanzl">Gstanzl entdecken</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/wirtshauslieder">Wirtshauslieder</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/regionen">Nach Region</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentImage ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
            )}
            onClick={() => setCurrentImage(index)}
            aria-label={`Bild ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </section>
  )
}

