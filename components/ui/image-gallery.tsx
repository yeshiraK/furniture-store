"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 group">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - View ${currentIndex + 1}`}
          width={800}
          height={800}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-md"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous image</span>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-md"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next image</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={cn(
              "aspect-square overflow-hidden rounded-lg bg-neutral-100 relative group",
              currentIndex === index && "ring-2 ring-black",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} - Thumbnail ${index + 1}`}
              width={200}
              height={200}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  )
}

