import { NextResponse } from "next/server"
import { getProducts, getProductsByCategory } from "@/lib/actions"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    if (category) {
      const products = await getProductsByCategory(category)
      return NextResponse.json({ products })
    }

    const products = await getProducts()
    return NextResponse.json({ products })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

