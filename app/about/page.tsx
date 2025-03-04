import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="relative h-[50vh] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2000&auto=format&fit=crop"
            alt="Marble & Wood workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 animate-fade-in">Our Story</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-slide-up">
              Crafting timeless pieces with passion and precision since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">The Beginning</h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Marble & Wood was founded in 2010 by designers Emma Chen and Marcus Williams, who shared a vision of
                creating furniture that seamlessly blends natural materials with contemporary design. What began as a
                small workshop in Brooklyn has grown into an internationally recognized brand with showrooms across the
                United States and Europe.
              </p>
              <p>
                Our founders' backgrounds in architecture and industrial design inform our approach to furniture
                design—emphasizing clean lines, thoughtful proportions, and material integrity. Each piece in our
                collection is designed to stand the test of time, both in durability and aesthetic appeal.
              </p>
              <p>
                We believe that exceptional furniture should not only be beautiful but should also tell a story. Our
                pieces are designed to evolve with you, developing a rich patina and character that only improves with
                age and use.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1000&auto=format&fit=crop"
              alt="Founders in workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20 bg-neutral-50 p-12 rounded-xl">
        <h2 className="text-3xl font-light mb-10 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4">Craftsmanship</h3>
            <p className="text-neutral-600">
              We work with skilled artisans who bring decades of experience to each piece they create. Our commitment to
              traditional craftsmanship ensures that every detail is executed with precision and care.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4">Sustainability</h3>
            <p className="text-neutral-600">
              We source our materials responsibly, working with suppliers who share our commitment to environmental
              stewardship. Our wood comes from sustainably managed forests, and we prioritize local sourcing whenever
              possible.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-4">Timeless Design</h3>
            <p className="text-neutral-600">
              We believe in creating furniture that transcends trends. Our designs are informed by classic principles of
              proportion and balance, resulting in pieces that will remain relevant and beautiful for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="mb-20">
        <h2 className="text-3xl font-light mb-10 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-medium mb-2">Design</h3>
            <p className="text-neutral-600">
              Our in-house design team develops concepts that balance aesthetics, functionality, and material
              properties.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-medium mb-2">Material Selection</h3>
            <p className="text-neutral-600">
              We carefully source the finest materials, selecting each piece of marble and wood for its unique
              characteristics.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-medium mb-2">Crafting</h3>
            <p className="text-neutral-600">
              Our skilled artisans transform raw materials into finished pieces using both traditional techniques and
              modern technology.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-medium mb-2">Quality Control</h3>
            <p className="text-neutral-600">
              Each piece undergoes rigorous inspection to ensure it meets our exacting standards before it leaves our
              workshop.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-light mb-10 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
                alt="Emma Chen - Co-Founder & Creative Director"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium">Emma Chen</h3>
            <p className="text-neutral-600">Co-Founder & Creative Director</p>
          </div>
          <div>
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
                alt="Marcus Williams - Co-Founder & Head of Design"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium">Marcus Williams</h3>
            <p className="text-neutral-600">Co-Founder & Head of Design</p>
          </div>
          <div>
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
                alt="Sarah Johnson - Head of Production"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-medium">Sarah Johnson</h3>
            <p className="text-neutral-600">Head of Production</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-12 rounded-xl">
        <h2 className="text-3xl font-light mb-6">Visit Our Showroom</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Experience our collection in person at one of our showrooms. Our design consultants are available to help you
          find the perfect pieces for your space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/showrooms">Find a Showroom</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

