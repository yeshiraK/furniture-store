"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // This would normally come from a cart state or API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Marble Coffee Table",
      price: 1299,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc14?q=80&w=200&auto=format&fit=crop",
      slug: "marble-coffee-table",
    },
    {
      id: 3,
      name: "Accent Chair",
      price: 899,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=200&auto=format&fit=crop",
      slug: "accent-chair",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-light mb-4">Your cart is empty</h2>
          <p className="text-neutral-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="rounded-lg border border-neutral-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-50 text-sm">
                  <tr>
                    <th className="text-left p-4 font-medium">Product</th>
                    <th className="text-center p-4 font-medium">Quantity</th>
                    <th className="text-right p-4 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded bg-neutral-100 overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              <Link href={`/products/${item.slug}`}>{item.name}</Link>
                            </h3>
                            <p className="text-neutral-600">${item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-4">
                          <span>${(item.price * item.quantity).toLocaleString()}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-neutral-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Button
                variant="outline"
                asChild
                className="hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" onClick={() => setCartItems([])}>
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="rounded-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="coupon" className="block text-sm mb-2">
                    Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <Input id="coupon" placeholder="Enter coupon code" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-black to-neutral-800 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  size="lg"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

