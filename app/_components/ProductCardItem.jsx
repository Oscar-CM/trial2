import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ProductCardItem = ({product}) => {
  return (
    <div>
      <Card className='p-3'>
        <Image src={product?.image} alt={product?.name} width={400} height={400}/>
        <div className='mt-3'>
            <h2 className='font-bold text-xl'>{product?.name}</h2>
            <h2 className='font-bold text-primary'> $ {product.price}</h2>
            <div className='md:flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Image src={product?.user?.image} alt={product?.user?.name} width={20} height={20} className='rounded-full'/>
                    <h2 className='text-gray-400'>
                        {product?.user?.name}
                    </h2>
                </div>
                <Button size='sm' className='mt-1'> Add to Cart </Button>
            </div>
        </div>

      </Card>
      
    </div>
  )
}

export default ProductCardItem
