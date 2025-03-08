import { NextResponse } from "next/server";
import { db } from "@/configs/db"; // Import your Drizzle connection
import { ebooks } from "@/configs/schema"; // Import your schema

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      // Ensure type conversion for numeric values
      const price = body.price ? parseFloat(body.price) : 0; // Convert price to number
      const pageCount = body.page_count ? parseInt(body.page_count) : null; // Convert page count to number
  
      // Insert into the database with proper types
      await db.insert(ebooks).values({
        title: body.title,
        author: body.author,
        price:body.price, // Ensured to be a number
        cover_image: body.cover_image,
        google_drive_link: body.google_drive_link,
        category: body.category,
        description: body.description,
        page_count: pageCount, // Ensured to be an integer
      });
  
      return NextResponse.json({ message: "Ebook added successfully!" }, { status: 201 });
    } catch (error) {
      console.error("Error inserting eBook:", error);
      return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
  }

  export async function GET() {
    try {
      const ebooksList = await db.select().from(ebooks);
      return NextResponse.json(ebooksList);
    } catch (error) {
      console.error('Error fetching eBooks:', error);
      return NextResponse.json({ error: 'Error fetching eBooks' }, { status: 500 });
    }
  }