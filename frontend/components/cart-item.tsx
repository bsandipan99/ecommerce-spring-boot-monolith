"use client"

import Image from "next/image"
import { useCart } from "@/context/cart-context"

type CartItemProps = {
  item: {
    id: string
    title: string
    price: number
    quantity: number
    thumbnail: string
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center py-4 border-b">
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover rounded" />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center border rounded mr-4">
          <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
            -
          </button>
          <span className="px-3 py-1">{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
            +
          </button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </div>
  )
}
