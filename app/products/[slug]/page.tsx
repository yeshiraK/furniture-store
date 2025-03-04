import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Share2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "@/components/ui/image-gallery"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API based on the slug
  const product = {
    id: 1,
    name: "Marble Coffee Table",
    price: 1299,
    description:
      "A stunning coffee table with a solid marble top and sleek metal legs. The perfect centerpiece for your living room.",
    details:
      "Dimensions: 120cm x 60cm x 45cm\nMaterials: Carrara marble, powder-coated steel\nWeight: 45kg\nAssembly required: Yes",
    care: "Clean with a soft, damp cloth. Avoid harsh chemicals. Use coasters to prevent staining. Apply marble sealant every 6-12 months.",
    shipping:
      "Free shipping within the continental US. White glove delivery available for an additional fee. Please allow 2-3 weeks for delivery.",
    images: [
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633789638578-b1644cef9b39?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Tables",
    material: "Marble",
    inStock: true,
    relatedProducts: [
      {
        id: 4,
        name: "Marble Side Table",
        price: 799,
        image: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=600&auto=format&fit=crop",
        slug: "marble-side-table",
      },
      {
        id: 5,
        name: "Wooden Dining Table",
        price: 1899,
        image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=600&auto=format&fit=crop",
        slug: "wooden-dining-table",
      },
      {
        id: 2,
        name: "Minimalist Sofa",
        price: 2499,
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=600&auto=format&fit=crop",
        slug: "minimalist-sofa",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="lg:w-2/3">
          <ImageGallery images={product.images} alt={product.name} />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/3 space-y-6">
          <div>
            <h1 className="text-3xl font-light">{product.name}</h1>
            <p className="text-2xl mt-2">${product.price.toLocaleString()}</p>
          </div>

          <p className="text-neutral-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-12 text-center">1</span>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-black to-neutral-800 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              className="w-full hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              size="lg"
            >
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
          </div>

          <Separator />

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <div className="whitespace-pre-line text-neutral-600">{product.details}</div>
            </TabsContent>
            <TabsContent value="care" className="mt-4">
              <div className="whitespace-pre-line text-neutral-600">{product.care}</div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <div className="whitespace-pre-line text-neutral-600">{product.shipping}</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-light mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`} className="group">
              <div className="overflow-hidden rounded-lg mb-4 aspect-square bg-neutral-100">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium">{relatedProduct.name}</h3>
              <p className="text-neutral-600">${relatedProduct.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

