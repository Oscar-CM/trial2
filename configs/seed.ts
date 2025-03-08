import { db } from "./db"; // Replace with your actual db instance import
import { ebooks } from "./schema"; // Adjust schema path as needed

async function seedEbooks() {
  try {
    await db.insert(ebooks).values([
      {
        title: "The Great Adventure",
        author: "John Doe",
        price: "$12.99",
        cover_image: "https://drive.google.com/file/d/19YmHA6CfW5vV0V8C1fmzSU8aJEH58FTH/view?usp=drive_link",
        google_drive_link: "https://drive.google.com/file/d/19YmHA6CfW5vV0V8C1fmzSU8aJEH58FTH/view?usp=drive_link",
        category: "Fiction",
        description: "An adventurous journey through mystical lands.",
        page_count: 320,
      },
      {
        title: "Tech Revolution",
        author: "Jane Smith",
        price: "$15.50",
        cover_image: "https://drive.google.com/file/d/19YmHA6CfW5vV0V8C1fmzSU8aJEH58FTH/view?usp=drive_link",
        google_drive_link: "https://drive.google.com/file/d/19YmHA6CfW5vV0V8C1fmzSU8aJEH58FTH/view?usp=drive_link",
        category: "Technology",
        description: "A deep dive into technological trends.",
        page_count: 250,
      },
    ]);

    console.log("Ebook data inserted successfully!");
  } catch (error) {
    console.error("Error inserting data: ", error);
  }
}

seedEbooks();
