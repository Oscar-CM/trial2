"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const UserListings = () => {
    const [listing, setListing] = useState([])

    return (
        <div className='mt-4'>
            <div className=''>
                <h2 className='font-bold text-xl flex items-center justify-between'> Listings
                    <Link href={'/add-product'}>
                        <Button> + Add New Product</Button>
                    </Link>

                </h2>
            </div>
            <div>
                {listing?.length == 0 &&
                    <h2 className='mt-5 font-medium text-xl text-center text-gray-400'>No Listings Found</h2>
                }
            </div>
        </div>
    )
}

export default UserListings
