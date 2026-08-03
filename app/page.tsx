import Hero from "@/components/Hero";
import HoodieCustomizer from "@/components/HoodieCustomzier";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import Explore from "@/components/Explore";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[180px]" />

      <div className="absolute right-0 top-[600px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[200px]" />

      <div className="absolute left-1/2 top-[1200px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10">

      <Navbar />
      <Hero />
      <Explore />
      <HoodieCustomizer />
      <Contact />
      <Cart />
      <Footer />

      </div>
    </main>
  );
}