"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center">
        <Link
          href="/"
          className="text-3xl font-black tracking-wider text-orange-500"
        >
          CREATE.
        </Link>

        <p className="max-w-md text-sm leading-6 text-zinc-400">
          Create your own hoodie with premium quality, unique styles, and
          unlimited creativity.
        </p>

        <div className="flex items-center gap-4">
          {/* <a
            href="#"
            className="rounded-xl bg-zinc-900 p-3 transition hover:bg-orange-500"
          >
            <Facebook size={20} />
          </a>

          <a
            href="#"
            className="rounded-xl bg-zinc-900 p-3 transition hover:bg-orange-500"
          >
            <Instagram size={20} />
          </a>

          <a
            href="#"
            className="rounded-xl bg-zinc-900 p-3 transition hover:bg-orange-500"
          >
            <Github size={20} />
          </a> */}

          <a
            href="mailto:hello@create.com"
            className="rounded-xl bg-zinc-900 p-3 transition hover:bg-orange-500"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="w-full border-t border-white/10 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} CREATE. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
