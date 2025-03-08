"use client"
import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Book } from '@/types'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'


const BookCard = ({ id, title, category, color, price,
  cover_image }: Book) => {

  const { user } = useUser();
  const addToCart = async () => {
    const result = await axios.post('/api/cart',{
      email: user?.primaryEmailAddress?.emailAddress,
      bookId: id,
    })
    console.log(result.data)

  }
  return (
    <div>
      <li>
        <Link href={`/books/bookDetails/${id}`}>
          <BookCover coverColor={color ?? "#FFFFFF"} coverUrl={cover_image ?? "https://ik.imagekit.io/wle95blwoj/nuval.jpg?updatedAt=1740395891997"} />
          <div className={cn('mt-4', "xs:max-w-40 max-w-28")}>
            <p className='book-title'>{title.split(" ").slice(0, 5).join(" ") + (title.split(" ").length > 5 ? "..." : "")}</p>
            <p className='book-genre'>{category}</p>
          </div>

        </Link>
        <div className='book-title flex items-center justify-between'>
          <p className='text-sm'>$ {price}</p>
          <Button className='text-black text-sm' onClick={addToCart}>
            Cart
          </Button>
        </div>

      </li >
    </div >
  )
}

export default BookCard
