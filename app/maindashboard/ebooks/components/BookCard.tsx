// components/BookCard.tsx
"use client"
import React from 'react';
import { useRouter } from 'next/router';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  price: number;
  cover_image: string;
  page_count: number;
  onAddToCart: () => void; // Add this line
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  price,
  cover_image,
  page_count,
  onAddToCart, // Add this line
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/books/${id}`); // Navigate to the book details page
  };

  const handleAddToCart = (e:any) => {
    e.stopPropagation(); // Prevent the card click event from firing
    onAddToCart();
  };

  return (
    <div
      onClick={handleCardClick}
      className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <img src={cover_image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">By {author}</p>
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-bold">${price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
        <p className="text-gray-600 text-sm">{page_count} pages</p>
      </div>
    </div>
  );
};

export default BookCard;