"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      // In a real app, this would call a registration API
      console.log("Registration attempt:", { firstName, lastName, email, password })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, always succeed unless empty fields
      if (!firstName || !lastName || !email || !password) {
        throw new Error("Please fill in all fields")
      }

      // Redirect to account page on success
      router.push("/account")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during registration")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light mb-2">Create an Account</h1>
          <p className="text-neutral-600">Join Marble & Wood for a personalized shopping experience</p>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-md mb-6">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <Input id="password" name="password" type={showPassword ? "text" : "password"} required />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Password must be at least 8 characters long and include a number and a special character.
            </p>
          </div>

          <div className="flex items-center">
            <input
              id="marketing"
              name="marketing"
              type="checkbox"
              className="h-4 w-4 rounded border-neutral-300 text-primary focus:ring-primary"
            />
            <label htmlFor="marketing" className="ml-2 block text-sm text-neutral-600">
              I want to receive marketing emails and updates
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>

          <p className="text-xs text-neutral-500 text-center">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-neutral-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              Apple
            </Button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-black hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

