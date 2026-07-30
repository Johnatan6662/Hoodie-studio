"use client"

import Image from "next/image"
import { useCart } from "@/store/cart"

export default function Cart() {
  const { items, removeItem } = useCart()

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed top-0 right-0 h-screen w-96 overflow-y-auto bg-zinc-900 p-36 text-white">
      <h2 className="text-3xl font-bold">Shopping Cart</h2>

      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-col gap-4 rounded-xl bg-white/10 p-4"
          >
            <Image
              src={item.image}
              alt="Hoodie"
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />

            <div className="flex-1">
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
              <p>£{item.price}</p>

              <button
                onClick={() => removeItem(item.id)}
                className="mt-2 rounded bg-red-500 px-4 py-2 text-sm block"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-3xl font-bold">Total £{total}</h2>
    </div>
  )
}
