"use client"

import { useCart, CartItem } from "@/store/cart"

interface Props {
  item: CartItem
}

export default function AddToCartButton({ item }: Props) {
  const addItem = useCart((state) => state.addItem)

  return (
    <button
      onClick={() => addItem(item)}
      className="rounded-xl bg-orange-500 px-6 py-4 font-bold text-white"
    >
      Add To Cart 
    </button>
  )
}
