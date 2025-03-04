import { NextResponse } from "next/server"
import { subscribeToNewsletter } from "@/lib/actions"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // In a real app, you would validate the email format

    // Process the subscription
    await subscribeToNewsletter(formData)

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
  }
}

