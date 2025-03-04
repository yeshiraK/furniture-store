import Link from "next/link"
import Image from "next/image"
import { ChevronDown, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function ProductsPage() {
  // This would normally come from a database or API
  const products = [
    {
      id: 1,
      name: "Marble Coffee Table",
      price: 1299,
      category: "Tables",
      material: "Marble",
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?q=80&w=600&auto=format&fit=crop",
      slug: "marble-coffee-table",
    },
    {
      id: 2,
      name: "Minimalist Sofa",
      price: 2499,
      category: "Seating",
      material: "Fabric",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=600&auto=format&fit=crop",
      slug: "minimalist-sofa",
    },
    {
      id: 3,
      name: "Accent Chair",
      price: 899,
      category: "Seating",
      material: "Leather",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop",
      slug: "accent-chair",
    },
    {
      id: 4,
      name: "Marble Side Table",
      price: 799,
      category: "Tables",
      material: "Marble",
      image: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=600&auto=format&fit=crop",
      slug: "marble-side-table",
    },
    {
      id: 5,
      name: "Wooden Dining Table",
      price: 1899,
      category: "Tables",
      material: "Wood",
      image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=600&auto=format&fit=crop",
      slug: "wooden-dining-table",
    },
    {
      id: 6,
      name: "Marble Bookend",
      price: 129,
      category: "Accessories",
      material: "Marble",
      image: "https://images.unsplash.com/photo-1581139830152-03f3692d9f04?q=80&w=600&auto=format&fit=crop",
      slug: "marble-bookend",
    },
    {
      id: 7,
      name: "Lounge Chair",
      price: 1299,
      category: "Seating",
      material: "Leather",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=600&auto=format&fit=crop",
      slug: "lounge-chair",
    },
    {
      id: 8,
      name: "Marble Vase",
      price: 249,
      category: "Accessories",
      material: "Marble",
      image: "https://images.unsplash.com/photo-1602816889438-1aa27fea9bc1?q=80&w=600&auto=format&fit=crop",
      slug: "marble-vase",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-light">All Products</h1>
          <p className="text-neutral-600 mt-2">Showing {products.length} products</p>
        </div>

        <div className="flex justify-between items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your product search with the following filters.</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-4">Category</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tables" />
                      <Label htmlFor="tables">Tables</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="seating" />
                      <Label htmlFor="seating">Seating</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="storage" />
                      <Label htmlFor="storage">Storage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="accessories" />
                      <Label htmlFor="accessories">Accessories</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium mb-4">Material</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marble" />
                      <Label htmlFor="marble">Marble</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wood" />
                      <Label htmlFor="wood">Wood</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fabric" />
                      <Label htmlFor="fabric">Fabric</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="leather" />
                      <Label htmlFor="leather">Leather</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-medium mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-1" />
                      <Label htmlFor="price-1">$0 - $500</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-2" />
                      <Label htmlFor="price-2">$500 - $1000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-3" />
                      <Label htmlFor="price-3">$1000 - $2000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-4" />
                      <Label htmlFor="price-4">$2000+</Label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Apply Filters</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
              >
                Sort by: Featured
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Featured</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <div className="overflow-hidden rounded-lg mb-4 aspect-square bg-neutral-100 relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
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
              <h3 className="font-medium group-hover:text-neutral-700 transition-colors">{product.name}</h3>
              <p className="text-neutral-600">${product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

