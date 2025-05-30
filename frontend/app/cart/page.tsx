"use client"

import { useCart } from "@/context/cart-context"
import Navbar from "@/components/navbar"
import CartItem from "@/components/cart-item"
import Link from "next/link"

export default function CartPage() {
  const { cartItems, cartTotal } = useCart()

  const handleCheckout = () => {
    alert("Thank you for your order! This is a dummy checkout.")
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
            <Link
              href="/"
              className="inline-block bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-semibold">₹{cartTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gray-800 text-white py-3 px-4 rounded hover:bg-gray-700 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
