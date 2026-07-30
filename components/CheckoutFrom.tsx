export default function CheckoutForm() {
  return (
    <div className="space-y-5">
      <input
        placeholder="Full Name"
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Email"
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Address"
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <button className="w-full rounded-xl bg-orange-500 p-4 font-bold">
        Place Order
      </button>
    </div>
  )
}
