import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">MARBLE & WOOD</h3>
            <p className="text-neutral-600 mb-6">Premium furniture and marble pieces for the modern home.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-neutral-600 hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-black transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/furniture" className="text-neutral-600 hover:text-black transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/products/marble" className="text-neutral-600 hover:text-black transition-colors">
                  Marble
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-neutral-600 hover:text-black transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-neutral-600 hover:text-black transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-600 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/showrooms" className="text-neutral-600 hover:text-black transition-colors">
                  Showrooms
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-neutral-600 hover:text-black transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-neutral-600 hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-neutral-600 hover:text-black transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-neutral-600 hover:text-black transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-neutral-600 hover:text-black transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-neutral-600 hover:text-black transition-colors">
                  Product Care
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Marble & Wood. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-neutral-600 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-600 hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

