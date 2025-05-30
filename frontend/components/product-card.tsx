"use client"

import Image from "next/image"
import { useCart } from "@/context/cart-context"

type ProductCardProps = {
  product: {
    id: string
    title: string
    price: number
    thumbnail: string
    description: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  const cartItem = cartItems.find((item) => item.id === product.id)
  const isInCart = !!cartItem

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={product.thumbnail || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
        <p className="text-gray-600 mt-1">₹{product.price.toFixed(2)}</p>

        {!isInCart ? (
          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-3 py-1">{cartItem.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
