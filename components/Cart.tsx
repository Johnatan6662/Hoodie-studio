"use client"

import Image from "next/image"
import { useCart } from "@/store/cart"

export default function Cart() {
  const { items, removeItem } = useCart()

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="absolute right-6 top-20 z-50 w-96 rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Shopping Cart
        </h2>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
          {items.length} items
        </span>
      </div>
      {items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-gray-700">
            Your cart is empty
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Add something to get started.
          </p>
        </div>
      ) : (
        <>
          <div className="max-h-[400px] space-y-4 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl border border-gray-200 p-3"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.color} • {item.size}
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    £{item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900">
                ${total}
              </span>
            </div>

            <button className="w-full rounded-xl bg-black py-3 text-white transition hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}