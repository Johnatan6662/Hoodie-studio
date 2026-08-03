"use client"

import Image from "next/image"
import Link from "next/link"

export default function Explore() {
  return (
    <section id="explore" className="relative overflow-hidden py-32">

      <div className="absolute top-20 left-0 h-96 w-96 rounded-full bg-black blur-[180px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-orange-500/20 px-4 py-2 text-orange-400">
            Explore
          </span>

          <h2 className="mt-6 text-6xl font-black">
            Premium Hoodie Collection
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Browse premium hoodies and discover your next favorite design.
          </p>

          <Link
            href="#customize"
            className="mt-10 inline-block rounded-xl bg-orange-500 px-8 py-4 font-bold transition hover:scale-105"
          >
            Start Designing
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/hoodie/red.png"
            alt="Hoodie"
            width={500}
            height={500}
            className="drop-shadow-[0_0_80px_rgba(255,115,0,.7)] transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
