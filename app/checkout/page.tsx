"use client"

import CartItemCard from "@/components/CartItemcard"
import OrderSummary from "@/components/OrderSummary"
import RecommendedProducts from "@/components/RecommendedProducts"

import { useCart } from "@/store/cart"

export default function CheckoutPage() {
  const items = useCart((state) => state.items)

  return (
    <main className="min-h-screen bg-black  px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-orange-500">Checkout</p>

          <h1 className="mt-4 text-6xl font-black">Your Shopping Cart</h1>

          <p className="mt-4 text-zinc-400">
            Review your order before completing checkout.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {items.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-zinc-700 p-16 text-center">
                <h2 className="text-3xl font-bold">Your cart is empty</h2>

                <p className="mt-4 text-zinc-400">
                  Start customizing your hoodie.
                </p>
              </div>
            ) : (
              items.map((item) => <CartItemCard key={item.id} item={item} />)
            )}
          </div>

          <OrderSummary />
        </div>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">
          <h2 className="text-3xl font-bold">Estimated Delivery</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-zinc-900 p-6">
              🚚
              <h3 className="mt-4 text-xl font-bold">Free Shipping</h3>
              <p className="mt-2 text-zinc-400">Orders over $100</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              📦
              <h3 className="mt-4 text-xl font-bold">Standard</h3>
              <p className="mt-2 text-zinc-400">5-7 Business Days</p>
            </div>

            <div className="rounded-2xl bg-zinc-900 p-6">
              ⚡<h3 className="mt-4 text-xl font-bold">Express</h3>
              <p className="mt-2 text-zinc-400">1-2 Business Days</p>
            </div>
          </div>
        </section>

        <RecommendedProducts />
      </div>
    </main>
  )
}
