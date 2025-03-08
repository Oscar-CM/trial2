// pages/api/add-book.js

import { db } from "../../../configs/db";
import { books } from "../../../configs/schema";

export async function POST(request) {
  try {
    // Parse the request body
    const formData = await request.json();

    // Validate required fields
    if (!formData.title || !formData.author || !formData.google_drive_link) {
      return Response.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Insert data into the database
    await db.insert(books).values({
      title: formData.title,
      author: formData.author,
      price: parseFloat(formData.price) || 0.0,
      rating: parseInt(formData.rating, 10) || null,
      total_copies: parseInt(formData.total_copies, 10) || null,
      available_copies: parseInt(formData.available_copies, 10) || null,
      cover_image: formData.cover_image || null,
      google_drive_link: formData.google_drive_link,
      category: formData.category || null,
      color: formData.color || null,
      description: formData.description || null,
      page_count: parseInt(formData.page_count, 10) || null,
    });

    // Return success response
    return Response.json({ message: "Book added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error inserting book:", error);
    return Response.json({ message: "Failed to add book." }, { status: 500 });
  }
}