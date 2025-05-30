import type React from "react"
import { CartProvider } from "@/context/cart-context"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Simple E-commerce",
  description: "A simple e-commerce website built with Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}


import './globals.css'