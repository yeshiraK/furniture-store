import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShowroomsPage() {
  // Mock data for showrooms
  const showrooms = [
    {
      id: 1,
      name: "New York Flagship",
      address: "123 Design District, New York, NY 10001",
      phone: "+1 (212) 555-7890",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop",
      mapLink: "https://maps.google.com/?q=New+York+Design+District",
    },
    {
      id: 2,
      name: "Los Angeles",
      address: "456 Beverly Blvd, Los Angeles, CA 90048",
      phone: "+1 (310) 555-1234",
      hours: "Mon-Sat: 10am-6pm, Sun: 12pm-5pm",
      image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=1200&auto=format&fit=crop",
      mapLink: "https://maps.google.com/?q=Beverly+Blvd+Los+Angeles",
    },
    {
      id: 3,
      name: "Chicago",
      address: "789 Michigan Ave, Chicago, IL 60611",
      phone: "+1 (312) 555-5678",
      hours: "Mon-Sat: 10am-6pm, Sun: Closed",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop",
      mapLink: "https://maps.google.com/?q=Michigan+Ave+Chicago",
    },
    {
      id: 4,
      name: "Miami",
      address: "101 Design Plaza, Miami, FL 33137",
      phone: "+1 (305) 555-9012",
      hours: "Mon-Sat: 11am-7pm, Sun: 12pm-6pm",
      image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=1200&auto=format&fit=crop",
      mapLink: "https://maps.google.com/?q=Design+Plaza+Miami",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-light mb-4 text-center">Our Showrooms</h1>
      <p className="text-neutral-600 max-w-3xl mx-auto text-center mb-12">
        Visit one of our showrooms to experience our collection in person. Our design consultants are available to help
        you find the perfect pieces for your space.
      </p>

      <div className="grid gap-12 mb-16">
        {showrooms.map((showroom) => (
          <div key={showroom.id} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image src={showroom.image || "/placeholder.svg"} alt={showroom.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-light mb-4">{showroom.name}</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-700 mt-0.5" />
                  <span className="text-neutral-600">{showroom.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-700 mt-0.5" />
                  <span className="text-neutral-600">{showroom.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-700 mt-0.5" />
                  <span className="text-neutral-600">{showroom.hours}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href={showroom.mapLink} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Book an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Virtual Showroom CTA */}
      <div className="bg-neutral-50 p-8 md:p-12 rounded-xl text-center">
        <h2 className="text-2xl font-light mb-4">Can't Visit in Person?</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
          Explore our virtual showroom or schedule a video consultation with one of our design experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/virtual-showroom">Virtual Showroom Tour</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Schedule Video Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

