"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-[180px]" />
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold tracking-widest text-orange-500 uppercase">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black">Get In Contact</h2>

          <p className="mt-6 text-zinc-400">
            Send us a message anytime.
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <span>odontuyajohnatan@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <span>+976 9495-6229</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <span>Ulaanbaatar, Mongolia</span>
            </div>
          </div>

          <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-zinc-900 p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-zinc-900 p-4 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Message..."
              className="w-full rounded-xl bg-zinc-900 p-4 outline-none"
            />

            <button className="w-full rounded-xl bg-orange-500 py-4 font-bold transition hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
