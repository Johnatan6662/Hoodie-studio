"use client"

import { Heart } from "lucide-react"
import { useWishlist } from "@/store/wishlist"

interface Props {
  product: {
    id: number
    image: string
    color: string
    size: string
  }
}

export default function FavoriteButton({ product }: Props) {
  const add = useWishlist((state) => state.add)

  return (
    <button
      onClick={() => add(product)}
      className="rounded-full bg-white/10 p-3 transition hover:bg-orange-500"
    >
      <Heart />
    </button>
  )
}
