"use client"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { HeroSection } from "./components/HeroSection"
import { CategoriesSection } from "./components/CategoriesSection"
import { PopularProductsSection } from "./components/PopularProductsSection"
import { NewsletterSection } from "./components/NewsletterSection"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <AnimatePresence>
        <main className="flex-grow">
        <Header/>
          <HeroSection />
          <CategoriesSection />
          <PopularProductsSection />
          <NewsletterSection />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

