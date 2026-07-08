"use client";

import Hero from "@/components/Home/Hero";
import ConnectSection from "@/components/Home/ConnectSection";
import ServicesGrid from "@/components/Home/ServicesGrid";
import IndustriesServed from "@/components/Home/IndustriesServed";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesShowcase from "@/components/Home/ServicesShowcase";
import GSAPImageSection from "@/components/Home/GSAPImageSection";
import QuoteSection from "@/components/Home/QuoteSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ConnectSection />
      <ServicesGrid />
      <IndustriesServed />
      <WhyChooseUs />
      <ServicesShowcase />
      <GSAPImageSection />
      <QuoteSection />
    </main>
  );
}
