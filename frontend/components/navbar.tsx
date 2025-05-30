"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"

export default function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">ShopEasy</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/cart" className="ml-4 px-3 py-2 text-gray-700 hover:text-gray-900 relative">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
