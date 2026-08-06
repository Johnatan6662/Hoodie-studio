"use client";

import Image from "next/image";
import { Heart, Trash2, Minus, Plus } from "lucide-react";
import { CartItem, useCart } from "@/store/cart";

interface Props {
  item: CartItem;
}

export default function CartItemCard({ item }: Props) {
  const increase = useCart((state) => state.increase);
  const decrease = useCart((state) => state.decrease);
  const removeItem = useCart((state) => state.removeItem);

  return (
    <div className="group flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition duration-300 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">

      
      <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-zinc-900">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

     
      <div className="flex flex-1 flex-col justify-between">

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{item.name}</h2>

            <button className="rounded-full bg-white/10 p-2 transition hover:bg-red-500">
              <Heart size={18} />
            </button>
          </div>
            <div className="mt-3 flex gap-3">
            <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400">
              {item.color}
            </span>

            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
              {item.size}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-yellow-400">
            ⭐⭐⭐⭐⭐
            <span className="text-sm text-zinc-400">(4.9)</span>
          </div>
        </div>

        
        <div className="mt-6 flex items-center justify-between">

         
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2">

            <button
              onClick={() => decrease(item.id)}
              className="rounded-lg bg-zinc-800 p-2 transition hover:bg-orange-500"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => increase(item.id)}
              className="rounded-lg bg-zinc-800 p-2 transition hover:bg-orange-500"
            >
              <Plus size={16} />
            </button>

          </div>

          <div className="text-right">
            <h2 className="text-3xl font-black text-orange-500">
              ${(item.price*item.quantity).toFixed(2)}
            </h2>

            <p className="text-sm text-green-400">
              Free Shipping
            </p>
          </div>

       
          <button
            onClick={() => removeItem(item.id)}
            className="rounded-xl bg-red-500 p-3 transition hover:scale-105"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>
    </div>
  );
}