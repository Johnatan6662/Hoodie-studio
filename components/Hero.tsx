"use client"

import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
    >
      <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[200px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Premium Custom Hoodie
          </span>

          <h1 className="mt-6 text-5xl leading-tight font-black md:text-7xl">
            Create Your
            <span className="block text-orange-500">Dream Hoodie</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Design your own premium hoodie with custom colors, logo, text and
            size. Create something truly unique.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/checkout"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Shop Now
            </Link>

            <Link
              href="#customize"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Customize
            </Link>

            <Link
              href="#explore"
              className="rounded-xl border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/hoodie/black.png"
            alt="Black Hoodie"
            width={550}
            height={550}
            priority
            className="drop-shadow-[0_0_80px_rgba(249,115,22,.7)] transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
