"use client"

import { useCart } from "@/store/cart"

export default function OrderSummary() {
  const items = useCart((state) => state.items)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      <h2 className="mb-6 text-3xl font-bold">Order Summary</h2>

      {items.map((item) => (
        <div key={item.id} className="mb-4 flex justify-between">
          <span>
            {item.color} ({item.size})
          </span>

          <span>£{item.price * item.quantity}</span>
        </div>
      ))}

      <hr className="my-6" />

      <h3 className="text-2xl font-bold">Total: £{total}</h3>
    </div>
  )
}
