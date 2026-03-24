"use client";

import Footer from "@/components/client/Footer";
import Header from "@/components/client/header/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import PopularProducts from "@/components/sections/PopularProducts";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularProducts />
      <WhyUs />
      <CTA />
    </>
  );
}
