import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function NewsletterSection() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="newsletter-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0h20v20H0z" fill="#0d9488" fillOpacity="0.05" />
            <path
              d="M20 0v20H0V0h20zM9 9h2v2H9V9zm0-4h2v2H9V5zm4 4h2v2h-2V9zm0-4h2v2h-2V5zm-8 8h2v2H5v-2zm0-4h2v2H5V9zm0-4h2v2H5V5z"
              fill="#0d9488"
              fillOpacity="0.1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#newsletter-pattern)" />
        </svg>
      </div>
      <div className="container px-5 py-24 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full mb-12"
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Subscribe to Our Newsletter
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Stay updated with our latest digital products and exclusive offers.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
        >
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-teal-500 focus:bg-transparent focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <Button className="text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
            Subscribe
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

