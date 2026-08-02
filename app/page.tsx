import Hero from "@/components/Hero";
import HoodieCustomizer from "@/components/HoodieCustomzier";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HoodieCustomizer />
      <Cart />
    </main>
  );
}