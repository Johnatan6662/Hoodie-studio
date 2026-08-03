"use client"

import Link from "next/link"
import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
          <div className="flex items-center rounded-xl bg-zinc-800 px-3 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent outline-none"
            />
          </div>

          <button className="rounded-xl bg-orange-500 p-3 transition hover:scale-105">
            <ShoppingCart size={20} />
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
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold">
              <ShoppingCart size={18} />
              Cart
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
