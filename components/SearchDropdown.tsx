"use client"

import Image from "next/image"
import { searchProducts } from "@/data/searchProducts"

interface Props {
  keyword: string
}

export default function SearchDropdown({ keyword }: Props) {
  if (!keyword) return null

  const results = searchProducts.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <div className="absolute top-16 left-0 z-50 w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
      <div className="border-b border-white/10 p-5">
        <p className="mb-3 text-sm text-zinc-400">🔥 Trending</p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm">
            Black Hoodie
          </span>

          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm">
            Oversized
          </span>

          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm">
            Streetwear
          </span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {results.length === 0 && (
          <p className="p-6 text-center text-zinc-500">No products found.</p>
        )}

        {results.map((item) => (
          <div
            key={item.id}
            className="flex cursor-pointer items-center gap-4 border-b border-white/10 p-4 transition hover:bg-white/5"
          >
            <Image src={item.image} alt={item.name} width={70} height={70} />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-zinc-400">{item.color}</p>
            </div>
            <h2 className="font-bold text-orange-500">${item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
