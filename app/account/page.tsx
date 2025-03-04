"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Package, CreditCard, User, Heart, LogOut, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data - in a real app, this would come from an API or auth context
  const user = {
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
  }

  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "March 15, 2023",
      total: 2198,
      status: "Delivered",
      items: [
        { name: "Marble Coffee Table", quantity: 1, price: 1299 },
        { name: "Marble Bookend", quantity: 2, price: 129 },
      ],
    },
    {
      id: "ORD-12346",
      date: "February 2, 2023",
      total: 899,
      status: "Delivered",
      items: [{ name: "Accent Chair", quantity: 1, price: 899 }],
    },
  ]

  // Mock wishlist data
  const wishlist = [
    {
      id: 2,
      name: "Minimalist Sofa",
      price: 2499,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=200&auto=format&fit=crop",
      slug: "minimalist-sofa",
    },
    {
      id: 5,
      name: "Wooden Dining Table",
      price: 1899,
      image: "https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=200&auto=format&fit=crop",
      slug: "wooden-dining-table",
    },
  ]

  const handleLogout = async () => {
    setIsLoading(true)

    try {
      // In a real app, this would call a logout API
      console.log("Logging out...")

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirect to home page
      router.push("/")
    } catch (err) {
      console.error("Logout error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-light mb-8">My Account</h1>

      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/account">
              <User className="mr-2 h-5 w-5" />
              Account Details
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/account/orders">
              <Package className="mr-2 h-5 w-5" />
              Orders
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/account/wishlist">
              <Heart className="mr-2 h-5 w-5" />
              Wishlist
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/account/payment-methods">
              <CreditCard className="mr-2 h-5 w-5" />
              Payment Methods
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/account/settings">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600"
            onClick={handleLogout}
            disabled={isLoading}
          >
            <LogOut className="mr-2 h-5 w-5" />
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        </div>

        {/* Main Content */}
        <div>
          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h2 className="text-xl font-medium mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-neutral-500">First Name</p>
                    <p>{user.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Last Name</p>
                    <p>{user.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email</p>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Phone</p>
                    <p>{user.phone}</p>
                  </div>
                </div>
                <Button className="mt-4" size="sm" asChild>
                  <Link href="/account/edit-profile">Edit Profile</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
                <p>{user.address.street}</p>
                <p>
                  {user.address.city}, {user.address.state} {user.address.zip}
                </p>
                <p>{user.address.country}</p>
                <Button className="mt-4" size="sm" asChild>
                  <Link href="/account/edit-address">Edit Address</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h2 className="text-xl font-medium mb-4">Password</h2>
                <p className="text-neutral-600">Change your password to keep your account secure.</p>
                <Button className="mt-4" size="sm" asChild>
                  <Link href="/account/change-password">Change Password</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id} className="bg-white p-6 rounded-lg border border-neutral-200">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="font-medium">{order.id}</h3>
                        <p className="text-sm text-neutral-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total.toLocaleString()}</p>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <p>
                            {item.name} × {item.quantity}
                          </p>
                          <p>${item.price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/account/orders/${order.id}`}>View Details</Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        Track Order
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium mb-2">No Orders Yet</h3>
                  <p className="text-neutral-600 mb-6">You haven't placed any orders yet.</p>
                  <Button asChild>
                    <Link href="/products">Start Shopping</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="wishlist" className="space-y-6">
              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg border border-neutral-200">
                      <div className="aspect-square rounded bg-neutral-100 mb-4 relative overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-neutral-600 mb-4">${item.price.toLocaleString()}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1" asChild>
                          <Link href={`/products/${item.slug}`}>View Product</Link>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-medium mb-2">Your Wishlist is Empty</h3>
                  <p className="text-neutral-600 mb-6">Save items you love for later.</p>
                  <Button asChild>
                    <Link href="/products">Browse Products</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

