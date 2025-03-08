import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const menuList = [
        {
            name: 'Home',
            path: "/",
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Explore',
            path: '/explore'
        }

    ]
    return (
        <div className='flex items-center justify-between p-4 px-10 md:px-32 lg:px-48 bg-primary'>
            <h1 className='font-bold'> Prime Nest</h1>
            <ul className='hidden md:flex gap-5'>
                {menuList.map((menu, index) => (
                    <li key={index}> {menu?.name}</li>

                ))}
            </ul>
            <div className='flex gap-2 items-center'>
                <Link href={"/dashboard"}>
                    <Button className='p-2 bg-red-200'> Start Selling</Button>
                </Link>
                <UserButton />
            </div>
            

        </div>
    )
}

export default Header
