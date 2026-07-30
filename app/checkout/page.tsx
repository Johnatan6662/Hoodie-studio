import CheckoutForm from "@/components/CheckoutFrom"
import OrderSummary from "@/components/OrderSummary"

export default function CheckoutPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-10 p-10 md:grid-cols-2">
      <CheckoutForm />
      <OrderSummary />
    </main>
  )
}
