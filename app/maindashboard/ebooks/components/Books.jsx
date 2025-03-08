"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    title: "The Great Adventure",
    author: "John Doe",
    price: "$12.99",
    coverImage: "/globe.png",
  },
  {
    id: 2,
    title: "Tech Revolution",
    author: "Jane Smith",
    price: "$15.50",
    coverImage: "/globe.png",
  },
  // Add more books as needed
];

export default function Books() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col h-full"
          >
            {/* Book Cover */}
            <Image
              src={book.coverImage}
              alt={book.title}
              width={200}
              height={300}
              className="object-cover w-full h-48"
            />
            
            {/* Book Details Section */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-700">by {book.author}</p>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  {book.price}
                </p>
              </div>

              {/* Button Pinned to Bottom */}
              <Button
                className="mt-4 w-full"
                onClick={() => alert(`View details for ${book.title}`)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
