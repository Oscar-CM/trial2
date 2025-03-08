import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import AddBookForm from './../../components/AddBookForm';

const page = () => {
  return (
    <div>
        <Button asChild className='back-btn'>
            <Link href='/books/allBooks'>
            Go Back
            </Link>

        </Button>
        <div className='w-full max-w-2xl'>
            
                <AddBookForm/>
            

        </div>

    </div>
  )
}

export default page
