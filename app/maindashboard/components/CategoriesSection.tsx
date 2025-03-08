import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  { name: "E-books & Guides", icon: "📚",path:"/maindashboard/ebooks" },
  { name: "Templates", icon: "📝",path:"/maindashboard/ebooks" },
  { name: "Printables", icon: "🖨️",path:"/maindashboard/ebooks" },
  { name: "Music & Audio", icon: "🎵",path:"/maindashboard/ebooks" },
  { name: "Photos & Graphics", icon: "🖼️" ,path:"/maindashboard/ebooks"},
  { name: "Fonts", icon: "🔤" ,path:"/maindashboard/ebooks"},
  { name: "3D Models", icon: "🧊",path:"/maindashboard/ebooks" },
  { name: "Software & Apps", icon: "💻" ,path:"/maindashboard/sofwares"},
  { name: "Spreadsheets", icon: "📊",path:"/maindashboard/ebooks" },
]

export function CategoriesSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center w-full mb-20"
        >
          <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Categories</h1>
        </motion.div>
        <div className="flex flex-wrap -m-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="border border-gray-200 px-4 py-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h2 className="title-font font-medium text-lg text-gray-900"><Link href={category.path}>{category.name}</Link></h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

