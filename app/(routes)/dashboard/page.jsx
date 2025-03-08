import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserListings from './_components/UserListings'

const Dashboard = () => {
    return (
        <div>
            <div className='font-bold text-2xl'>
                Dashboard

            </div>
            <Tabs defaultValue="listing" className="w-[400px] mt-3">
                <TabsList>
                    <TabsTrigger value="listing">Listing</TabsTrigger>
                    <TabsTrigger value="Purchase">Purchase</TabsTrigger>
                </TabsList>
                <TabsContent value="listing"><UserListings/></TabsContent>
                <TabsContent value="purchase">Change your password here.</TabsContent>
            </Tabs>


        </div>
    )
}

export default Dashboard
