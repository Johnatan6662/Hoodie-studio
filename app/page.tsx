import Hero from "@/components/Hero";
import HoodieCustomizer from "@/components/HoodieCustomier";
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