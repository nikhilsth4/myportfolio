import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HorizontalLine from "@/components/HorizontalLine";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalLine />
      <Featured />
      <HorizontalLine className="bg-secondary" />
      <Contact />
    </>
  );
}
