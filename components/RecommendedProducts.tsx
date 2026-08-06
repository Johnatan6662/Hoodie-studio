"use client"

import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { recommendedHoodies } from "@/data/recommendedHoodies"
import { useCart } from "@/store/cart"

export default function RecommendedProducts() {
  const addItem = useCart((state) => state.addItem)

  return (
    <section className="mt-20">
      <h2 className="mb-10 text-4xl font-bold">You May Also Like</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {recommendedHoodies.map((hoodie) => (
          <div
            key={hoodie.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-5 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,.35)]"
          >
            <div className="relative h-56 overflow-hidden rounded-2xl bg-zinc-800">
              <Image
                src={hoodie.image}
                alt={hoodie.name}
                fill
                className="object-contain transition duration-500 group-hover:scale-110"
              />

              <button className="absolute top-3 right-3 rounded-full bg-black/50 p-2">
                <Heart size={18} />
              </button>
            </div>
            <h3 className="mt-5 text-xl font-bold">{hoodie.name}</h3>

            <div className="mt-2 flex items-center gap-2 text-yellow-400">
              <Star size={16} fill="currentColor" />
              {hoodie.rating}
            </div>

            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400">
                {hoodie.color}
              </span>

              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                {hoodie.size}
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-500">
                ${hoodie.price}
              </span>

              <button
                onClick={() =>
                  addItem({
                    ...hoodie,
                    quantity: 1,
                  })
                }
                className="rounded-xl bg-orange-500 p-3 transition hover:scale-105"
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
