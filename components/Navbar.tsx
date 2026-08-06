"use client"

import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { useCart } from "@/store/cart"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const items = useCart((state) => state.items)
  const toggleCart = useCart((state) => state.toggleCart)

  const links = [
    { name: "Home", href: "#home" },
    { name: "Explore", href: "#explore" },
    { name: "Customize", href: "#customize" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="#home"
          className="text-3xl font-black tracking-wider text-orange-500"
        >
          CREATE.
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <SearchBar />

          <button
            onClick={toggleCart}
            className="relative rounded-xl bg-orange-500 p-3 transition hover:scale-105"
          >
            <ShoppingCart size={20} />

            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {items.length}
              </span>
            )}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-zinc-900 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-6 py-4 hover:bg-zinc-800"
            >
              {link.name}
            </Link>
          ))}

          <div className="p-6">
            <button
              onClick={toggleCart}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold"
            >
              <ShoppingCart size={18} />
              Cart ({items.length})
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
