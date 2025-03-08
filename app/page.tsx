import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductList from '@/app/_components/ProductList'
export default function Home() {
  return (
    <div>
     <div className="p-10">
      <ProductList/>
     </div>
    </div>
  );
}
