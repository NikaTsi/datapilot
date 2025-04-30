import React from "react";
import Hero from "../components/hero";
import Features from "../components/features";
import Testimonials from "../components/testimonials";
import Pricing from "../components/pricing";
import Footer from "../components/footer";

export default function Main() {
  return (
    <main className="flex flex-col w-full h-auto font-sans text-gray-800">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
