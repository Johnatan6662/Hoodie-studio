"use client";

import { ShoppingCart } from "lucide-react";
import { useCart, CartItem } from "@/store/cart";

interface Props {
  item: CartItem;
}

export default function AddToCartButton({ item }: Props) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(item)}
      className="
        group
        mt-6
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-leiner-to-r
        from-orange-500
        via-red-500
        to-pink-500
        px-6
        py-4
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-orange-500/40
        active:scale-95
      "
    >
      <ShoppingCart
        size={22}
        className="transition-transform duration-300 group-hover:rotate-12"
      />

      Add To Cart
    </button>
  );
}
