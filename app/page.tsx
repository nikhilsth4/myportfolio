import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import HorizontalLine from "@/components/HorizontalLine";
import Navbar from "@/components/Navbar";
import { HomeLinks } from "@/data/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikhil Shrestha",
};

export default function Home() {
  return (
    <>
      <Navbar linksData={HomeLinks} />
      <Hero />
      <HorizontalLine />
      <Featured />
      <HorizontalLine className="bg-secondary" />
      <Contact />
    </>
  );
}
