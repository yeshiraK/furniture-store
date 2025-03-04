"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  src: string
  alt: string
  heading: string
  subheading: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
}

export function ImageCarousel({ images, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [isTransitioning, images.length])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [isTransitioning, images.length])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlayInterval, goToNext])

  // Reset transition state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 700) // Match this with the CSS transition duration
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1
              className={`text-4xl md:text-6xl font-light text-white mb-6 transition-all duration-700 ease-in-out ${
                index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {image.heading}
            </h1>
            <p
              className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-100 ease-in-out ${
                index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {image.subheading}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ease-in-out ${
                index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-white to-gray-200 text-black hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <a href="/products">Shop Collection</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <a href="/about">Our Story</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

