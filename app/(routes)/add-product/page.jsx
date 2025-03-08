"use client"
import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import ImageUpload from './_components/ImageUpload'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { toast } from "sonner"


const AddProduct = () => {
    const categoryOptions = ['Source Code', 'UI kit', 'Icons', 'Documents', 'Fonts', 'Themes'];
    const [formData, setFormData] = useState([]);
    const[loading, setLoading] = useState(false);
    const router = useRouter()

    const {user} = useUser();

    useEffect(()=>{
        setFormData({
            userEmail:user?.primaryEmailAddress?.emailAddress
        })
    },[user])

    const handleInputChange=(fieldName, fieldValue)=>{
        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
        console.log(formData)
    }

    const onAddProductClick=async()=>{
        setLoading(true)
        const formDataObj = new FormData();
        formDataObj.append('image', formData.image);
        formDataObj.append('file', formData.file)
        formDataObj.append('data', JSON.stringify(formData));

        const result = await axios.post('/api/products', formDataObj,{
            headers:{
                "content-Type":'multiport/form-data'
            }

            
        })
        

        setLoading(false)
        console.log(result)
        if (result){
            router.push('/dashboard')
            toast("Product has added successfully.")
        }

    }
    return (
        <div>
            <h2 className='text-2xl font-bold'>Add New Product </h2>
            <p> Start adding product details to sell your product</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='mt-3 flex flex-col gap-3'>
                    <ImageUpload onImageSelect={(e) =>handleInputChange(e.target.name, e.target.files[0])}/>
                    <div>
                        <h3> Upload File to Sell</h3>
                        <Input type='file' name='file'
                        onChange={(e)=>handleInputChange(e.target.name, e.target.files[0])}
                        />
                    </div>
                    <div>
                        <h3>Message to Buyer</h3>
                        <Textarea name='message' placeholder='Write a Message to Buyer'
                        onChange={(e)=>handleInputChange(e.target.name, e.target.value)}/>

                    </div>

                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <h3>Product Title</h3>
                        <Input name='title' placeholder='Python Tutorial' 
                        onChange={(e)=>handleInputChange(e.target.name, e.target.value)}
                        />
                    </div>
                    <div>
                        <h3>Price</h3>
                        <Input type='number' name='price' placeholder='$ 15' 
                        onChange={(e)=>handleInputChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h3>Category</h3>
                        <Select onValueChange={(Value)=> handleInputChange('category', Value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categoryOptions?.map((category, index) => (
                                    <SelectItem value={category} key={index}>{category}</SelectItem>

                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <h3>Description</h3>
                        <Textarea name='description' placeholder='Enter the Product Description'
                        onChange={(e)=>handleInputChange(e.target.name, e.target.value)}/>

                    </div>
                    <div>
                        <h3>About Product (Optional)</h3>
                        <Textarea name='about' placeholder='Add Product information'
                        onChange={(e)=>handleInputChange(e.target.name, e.target.value)}/>

                    </div>
                    <Button onClick={onAddProductClick} disabled={loading}>{loading ? "Submitting..." : "Add Product"}
                        
                        </Button>



                </div>
            </div>
        </div>
    )
}

export default AddProduct
