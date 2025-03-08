import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-teal-700 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">DigitalMarket</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-teal-200">
            Home
          </Link>
          <Link href="/categories" className="mr-5 hover:text-teal-200">
            Categories
          </Link>
          <Link href="/about" className="mr-5 hover:text-teal-200">
            About
          </Link>
          <Link href="/contact" className="mr-5 hover:text-teal-200">
            Contact
          </Link>
        </nav>
        <Button
          variant="secondary"
          className="inline-flex items-center bg-teal-500 border-0 py-1 px-3 focus:outline-none hover:bg-teal-600 rounded text-base mt-4 md:mt-0"
        >
          Sign In
        </Button>
      </div>
    </header>
  )
}
export default Header;

