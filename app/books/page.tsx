import React from 'react'
import BookOverview from './components/BookOverview'
import BookList from './components/BookList'
import { sampleBooks } from '@/contants'
import { db } from "@/configs/db";
import { books } from "@/configs/schema";
import { desc } from 'drizzle-orm';
import { Book } from '@/types';

export const dynamic = "force-dynamic";

const page = async () => {

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    
    .orderBy(desc(books.created_at))) as Book[];


  return (
    <div>
       <BookOverview {...latestBooks[0]} />
      <BookList
      title='Latest Books'
      books={latestBooks}
      containerClassName="mt-28"
      />
    </div>
  )
}

export default page
