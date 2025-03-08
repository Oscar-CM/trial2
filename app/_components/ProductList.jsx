"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Products from '@/app/_mockData/Products'
import ProductCardItem from '@/app/_components/ProductCardItem';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        setProductList(Products)
    })
  return (
    <div>
        <h2 className='font-bold text-lg flex justify-between'> Featured
            <span><Button>View All</Button></span>
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-3'>
            {productList.map((product, index)=>(
                <ProductCardItem product={product} key={index}/>

            ))}
        </div>
     
    </div>
  )
}

export default ProductList
