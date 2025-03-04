import { NextResponse } from "next/server"
import { getProductBySlug } from "@/lib/actions"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const product = await getProductBySlug(params.slug)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ product })
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

