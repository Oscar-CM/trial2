import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="text-gray-600 body-font relative mt-[-5]">
      <div className="absolute inset-0  opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20v-1.41l2.83-2.83 1.41 1.41L1.41 20H0zm20 0v-1.41l2.83-2.83 1.41 1.41L21.41 20H20zM0 0v1.41l2.83 2.83-1.41 1.41L0 3.41V0h1.41l2.83 2.83-1.41 1.41L0 1.41V0h20v1.41l-2.83 2.83 1.41 1.41L20 3.41V0h1.41l-2.83 2.83 1.41 1.41L20 1.41V0h-1.41l-2.83 2.83-1.41-1.41L20 0H0zm0 18.59L2.83 15.7l1.41 1.41L1.41 20H0v-1.41zM20 18.59L17.17 15.7l1.41-1.41L20 16.41V18.59z"
              fill="#0d9488"
              fillOpacity="0.1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover Amazing Digital Products
          </h1>
          <p className="mb-8 leading-relaxed">
            Explore our vast collection of e-books, templates, printables, and more. Find the perfect digital asset for
            your next project or personal use.
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/globe.png"
            width={720}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  )
}

