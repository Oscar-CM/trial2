import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="my-2 flex justify-between gap-5">
      <Link href="/books" className="flex items-center gap-2">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        Prime Nest
        
      </Link>

      <ul className="flex flex-row items-center gap-8">
      <li>
            Home
        </li>
        <Link href="/books/displayBooks">
        <li>
            Books
        </li>
        </Link>
        <li>
          <form
            className="flex items-center"
          >
            Profile &nbsp; <UserButton/>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;