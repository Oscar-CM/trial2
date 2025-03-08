import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const popularProducts = [
  {
    name: "Ultimate Self-Help Guide",
    category: "E-books",
    price: "$19.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Professional Resume Template",
    category: "Templates",
    price: "$9.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Minimalist Wall Art Bundle",
    category: "Printables",
    price: "$14.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Royalty-Free Music Pack",
    category: "Music & Audio",
    price: "$29.99",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function PopularProductsSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full mb-20"
        >
          <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">FEATURED</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Popular Products</h1>
        </motion.div>
        <div className="flex flex-wrap -m-4">
          {popularProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <Card>
                <CardHeader>
                  <Image
                    className="object-cover w-full h-48 rounded-t-lg"
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-medium text-gray-900">{product.name}</CardTitle>
                  <p className="mt-1 text-teal-500 text-sm">{product.category}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <Button variant="outline">Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

