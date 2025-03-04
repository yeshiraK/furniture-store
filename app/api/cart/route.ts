import { NextResponse } from "next/server"
import { addToCart } from "@/lib/actions"

export async function POST(request: Request) {
  try {
    const { productId, quantity } = await request.json()

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const result = await addToCart(productId, quantity || 1)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error adding to cart:", error)
    return NextResponse.json({ error: "Failed to add item to cart" }, { status: 500 })
  }
}

