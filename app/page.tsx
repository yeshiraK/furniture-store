import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/animated-button"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  // Hero carousel images
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop",
      alt: "Modern living room with marble coffee table",
      heading: "Timeless Elegance",
      subheading: "Curated furniture and marble pieces for the modern home",
    },
    {
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1920&auto=format&fit=crop",
      alt: "Minimalist dining room with wooden table",
      heading: "Refined Simplicity",
      subheading: "Thoughtfully designed pieces that elevate your space",
    },
    {
      src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
      alt: "Luxury marble bathroom",
      heading: "Natural Luxury",
      subheading: "Premium materials crafted with exceptional attention to detail",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Image Carousel */}
      <section className="relative w-full h-[80vh]">
        <ImageCarousel images={heroImages} />
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-light mb-12 text-center">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            title="Furniture"
            image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
            href="/products/furniture"
          />
          <CategoryCard
            title="Marble"
            image="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=800&auto=format&fit=crop"
            href="/products/marble"
          />
          <CategoryCard
            title="Accessories"
            image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
            href="/products/accessories"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full bg-gradient-to-b from-white to-neutral-50">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-light">Featured Products</h2>
          <Button variant="ghost" asChild className="group">
            <Link href="/products" className="flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            name="Marble Coffee Table"
            price={1299}
            image="https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?q=80&w=600&auto=format&fit=crop"
            href="/products/marble-coffee-table"
          />
          <ProductCard
            name="Minimalist Sofa"
            price={2499}
            image="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=600&auto=format&fit=crop"
            href="/products/minimalist-sofa"
          />
          <ProductCard
            name="Accent Chair"
            price={899}
            image="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop"
            href="/products/accent-chair"
          />
          <ProductCard
            name="Marble Side Table"
            price={799}
            image="https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=600&auto=format&fit=crop"
            href="/products/marble-side-table"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The marble coffee table is absolutely stunning. It's the centerpiece of our living room and we get compliments on it all the time."
              author="Sarah J."
              location="New York, NY"
            />
            <TestimonialCard
              quote="Exceptional quality and craftsmanship. The attention to detail is remarkable and the customer service was outstanding."
              author="Michael T."
              location="Los Angeles, CA"
            />
            <TestimonialCard
              quote="We furnished our entire home with Marble & Wood pieces. The cohesive aesthetic and quality of each item exceeded our expectations."
              author="Emma R."
              location="Chicago, IL"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section with Animated Button */}
      <section className="py-20 px-4 md:px-6 max-w-3xl mx-auto w-full text-center">
        <h2 className="text-3xl font-light mb-4 gradient-text animate-fade-in">Join Our Newsletter</h2>
        <p className="text-neutral-600 mb-8 animate-slide-up">
          Subscribe to receive updates on new collections and exclusive offers.
        </p>
        <form action="/api/subscribe" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all duration-300"
            required
          />
          <AnimatedButton variant="primary" size="md" type="submit">
            Subscribe
          </AnimatedButton>
        </form>
      </section>
    </div>
  )
}

function CategoryCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg aspect-square">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 group-hover:from-black/70 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-light text-white group-hover:scale-110 transition-transform duration-300">
          {title}
        </h3>
      </div>
    </Link>
  )
}

function ProductCard({ name, price, image, href }: { name: string; price: number; image: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="overflow-hidden rounded-lg mb-4 aspect-square bg-neutral-100 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={600}
          height={600}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="bg-white text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            View Product
          </span>
        </div>
      </div>
      <h3 className="font-medium group-hover:text-neutral-700 transition-colors">{name}</h3>
      <p className="text-neutral-600">${price.toLocaleString()}</p>
    </Link>
  )
}

function TestimonialCard({ quote, author, location }: { quote: string; author: string; location: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-neutral-600 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-neutral-500">{location}</p>
      </div>
    </div>
  )
}

