"use server"

import { revalidatePath } from "next/cache"

// Type for product data
export type Product = {
  id: number
  name: string
  price: number
  description: string
  details?: string
  care?: string
  shipping?: string
  images: string[]
  category: string
  material: string
  inStock: boolean
  slug: string
}

// Mock database for products
const products: Product[] = [
  {
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
    slug: "marble-coffee-table",
  },
  {
    id: 2,
    name: "Minimalist Sofa",
    price: 2499,
    description:
      "A sleek and comfortable sofa with clean lines and premium upholstery. Perfect for modern living spaces.",
    details:
      "Dimensions: 220cm x 90cm x 80cm\nMaterials: Solid wood frame, high-density foam, premium fabric\nWeight: 65kg\nAssembly required: Minimal",
    care: "Vacuum regularly. Spot clean with mild soap and water. Professional cleaning recommended for stubborn stains.",
    shipping:
      "Free shipping within the continental US. White glove delivery included. Please allow 3-4 weeks for delivery.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Seating",
    material: "Fabric",
    inStock: true,
    slug: "minimalist-sofa",
  },
  // More products would be added here
]

// Get all products
export async function getProducts() {
  // In a real app, this would fetch from a database
  return products
}

// Get products by category
export async function getProductsByCategory(category: string) {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

// Add to cart functionality
export async function addToCart(productId: number, quantity = 1) {
  // In a real app, this would add to a cart in a database or session
  console.log(`Added product ${productId} to cart with quantity ${quantity}`)

  // Revalidate the cart page to show updated items
  revalidatePath("/cart")

  return { success: true }
}

// Newsletter subscription
export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // In a real app, this would add the email to a newsletter service
  console.log(`Subscribed email: ${email}`)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

// Contact form submission
export async function sendContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real app, this would send the form data to an email service or CRM
  console.log(`Contact form submission from ${firstName} ${lastName} (${email})`)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return { success: true }
}

