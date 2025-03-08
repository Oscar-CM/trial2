// pages/index.tsx
"use client"
import React from 'react';
import BookCard from './components/BookCard';

const HomePage: React.FC = () => {
  const books = [
    {
      id: 1,
      title: "Sample Book 1",
      author: "John Doe",
      price: 19.99,
      cover_image: "/path/to/cover1.jpg",
      page_count: 200,
    },
    {
      id: 2,
      title: "Sample Book 2",
      author: "Jane Smith",
      price: 24.99,
      cover_image: "/path/to/cover2.jpg",
      page_count: 300,
    },
    // Add more books here
  ];

  const handleAddToCart = (bookId: number) => {
    alert(`Book ${bookId} added to cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Ebooks Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            cover_image={book.cover_image}
            page_count={book.page_count}
            onAddToCart={() => handleAddToCart(book.id)} // Pass the onAddToCart prop
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;