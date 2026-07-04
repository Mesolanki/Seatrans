"use client";

import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import ServicesGrid from "@/components/Home/ServicesGrid";
import IndustriesServed from "@/components/Home/IndustriesServed";
import GSAPImageSection from "@/components/Home/GSAPImageSection";
import QuoteSection from "@/components/Home/QuoteSection";
import ShippingShowcase from "@/components/Home/ShippingShowcase";

import Check1 from "@/components/Home/Check1";

export default function Home() {
  return (
    <main>
      {/* Hero Slider Section */}
      <Hero />

      {/* About Us & Stats Section */}
      <AboutUs />
      <Check1 />
      {/* Services Grid Section (triggers 's1' if needed externally) */}
      <div id="s1">
        <ServicesGrid />
      </div>

      {/* Industries Served Section */}
      <IndustriesServed />

      {/* Warehousing & 3PL Section (contains its own self-contained animation) */}
      <GSAPImageSection />

      {/* 10x Interactive Shipping Simulation Section */}
      <ShippingShowcase />

      {/* Get Quote Section */}
      <QuoteSection />
    </main>
  );
}
