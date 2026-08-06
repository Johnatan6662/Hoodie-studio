"use client"

import Link from "next/link"
import { useCart } from "@/store/cart"

export default function OrderSummary() {
  const items = useCart((state) => state.items)

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const shipping = subtotal >= 100 ? 0 : 10

  const discount = subtotal >= 150 ? subtotal * 0.1 : 0

  const tax = (subtotal - discount) * 0.08

  const total = subtotal - discount + shipping + tax

  return (
    <div className="sticky top-28 rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>

              <p className="text-sm text-zinc-400">
                {item.color} • {item.size}
              </p>

              <p className="text-sm text-zinc-500">
                Qty: {item.quantity}
              </p>
            </div>

            <span className="font-bold text-orange-400">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-zinc-400">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-400">Shipping</span>

          <span className="text-green-400">
            {shipping === 0 ? "FREE" : `${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Discount</span>

          <span className="text-green-400">
            -${discount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Tax</span>

          <span>${tax.toFixed(2)}</span>
        </div>

      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Total
        </h2>

        <h2 className="text-3xl font-black text-orange-500">
          ${total.toFixed(2)}
        </h2>

      </div>
      <button
        className="mt-8 w-full rounded-2xl bg-orange-500 py-4 text-lg font-bold transition hover:scale-105 hover:bg-orange-600"
      >
        Proceed to Checkout
      </button>

      <Link
        href="/"
        className="mt-4 block w-full rounded-2xl border border-white/10 py-4 text-center font-semibold transition hover:bg-white/10"
      >
        Continue Shopping
      </Link>


      <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
        Free Shipping on orders over 100$
      </div>

    </div>
  )
}

