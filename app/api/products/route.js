import { NextResponse } from "next/server";
import { supabase } from "../../../configs/supabaseClient";
import { db } from "@/configs/db";
import { productsTable } from "@/configs/schema";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const image = formData.get("image");
        const file = formData.get("file");
        const productData = JSON.parse(formData.get("data"));
   

        console.log("Form data received:", { image, file, productData });

        // Ensure both image and file are provided
        if (!file || !image) {
            return NextResponse.json(
                { error: "File or image is missing in the request" },
                { status: 400 }
            );
        }

        // Image Upload
        const { data: imageUploadData, error: imageUploadError } = await supabase.storage
            .from("myImages") // Replace with your bucket name
            .upload(`images/${image.name}`, image, {
                cacheControl: "3600",
                upsert: false,
            });

        if (imageUploadError) {
            console.error("Image upload failed:", imageUploadError.message);
            return NextResponse.json(
                { error: "Image upload failed", details: imageUploadError.message },
                { status: 500 }
            );
        }

        const imageUrl = supabase.storage
            .from("myImages")
            .getPublicUrl(`images/${image.name}`).data.publicUrl;

        console.log("Image URL:", imageUrl);

        // File Upload
        const { data: fileUploadData, error: fileUploadError } = await supabase.storage
            .from("files") // Replace with your bucket name
            .upload(`uploads/${file.name}`, file, {
                cacheControl: "3600",
                upsert: false,
            });

        if (fileUploadError) {
            console.error("File upload failed:", fileUploadError.message);
            return NextResponse.json(
                { error: "File upload failed", details: fileUploadError.message },
                { status: 500 }
            );
        }

        const fileUrl = supabase.storage
            .from("files")
            .getPublicUrl(`uploads/${file.name}`).data.publicUrl;

        console.log("File URL:", fileUrl);

        // Save product data to the database
        const result = await db
            .insert(productsTable)
            .values({
                title: productData?.title,
                category: productData?.category,
                description: productData?.description,
                fileUrl: fileUrl,
                imageUrl: imageUrl,
                price: productData?.price,
                about: productData?.about,
                message: productData?.message,
                createdBy: productData?.userEmail, // Replace with dynamic user data if needed
            })
            .returning(productsTable);

        console.log("Database insert result:", result);

        return NextResponse.json({
            success: true,
            message: "File and image uploaded successfully, and product data saved to database",
            fileUrl,
            imageUrl,
            productData: result,
        });
    } catch (error) {
        console.error("Error processing request:", error.message);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}
