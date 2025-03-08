"use client"
import React, { useState } from 'react';
import BookList from '../components/BookList';
import { db } from '@/configs/db';
import { books } from '@/configs/schema';
import { desc } from 'drizzle-orm';
import { Book } from '@/types';

export const dynamic = 'force-dynamic';

const Page = async () => {
  // Fetch all books from the database
  const allBooks = (await db
    .select()
    .from(books)
    .orderBy(desc(books.created_at))) as Book[];

  return (
    <SearchableBookList initialBooks={allBooks} />
  );
};

const SearchableBookList = ({ initialBooks }: { initialBooks: Book[] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter books based on the search query
  const filteredBooks = initialBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-[-100px]">
      {/* Search Input Field */}
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-md md:w-[500px] w-64 focus:outline-none focus:border-blue-500 text-black"
        />
      </div>

      {/* Display the filtered books */}
      <div className=''>
      <BookList
        title={searchQuery ? 'Search Results' : 'Latest Books'}
        books={filteredBooks}
        containerClassName=""
      />

      </div>
      
    </div>
  );
};

export default Page;