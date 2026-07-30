"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Button from "./ui/button"

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="mb-3 text-orange-400">NEW COLLECTION</p>

          <h1 className="text-6xl leading-tight font-black">
            Create
            <br />
            Your
            <br />
            Hoodie
          </h1>

          <p className="mt-8 text-gray-400">
            Design your own premium hoodie. Choose colors, add your logo and
            customize every detail.
          </p>

          <div className="mt-10 flex gap-5">
            <Button>Customize</Button>
            <Button>Explore</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <Image
            src="/hoodie/black.png"
            alt="Black Hoodie"
            width={500}
            height={500}
            priority
            className="h-auto w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
