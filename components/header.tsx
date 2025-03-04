"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium">
                  Shop All
                </Link>
                <Link href="/products/furniture" className="text-lg font-medium">
                  Furniture
                </Link>
                <Link href="/products/marble" className="text-lg font-medium">
                  Marble
                </Link>
                <Link href="/products/accessories" className="text-lg font-medium">
                  Accessories
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-xl font-light gradient-text">
            MARBLE & WOOD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm hover:text-neutral-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
            >
              Shop All
            </Link>
            <Link
              href="/products/furniture"
              className="text-sm hover:text-neutral-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
            >
              Furniture
            </Link>
            <Link
              href="/products/marble"
              className="text-sm hover:text-neutral-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
            >
              Marble
            </Link>
            <Link
              href="/products/accessories"
              className="text-sm hover:text-neutral-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
            >
              Accessories
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-neutral-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all"
            >
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-light">Search</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Search for products..." className="flex-1" />
                  <Button>Search</Button>
                </div>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hover:rotate-12 transition-transform"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Button variant="ghost" size="icon" asChild className="hover:rotate-12 transition-transform">
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:rotate-12 transition-transform">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

