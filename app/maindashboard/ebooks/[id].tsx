// pages/books/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext, GetStaticPathsResult } from 'next';
import { db } from '@/configs/db'; // Your Drizzle DB instance
import { ebooks } from '@/configs/schema'; // Your schema
import { eq } from 'drizzle-orm'; // For querying

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover_image: string;
  category: string;
  description: string;
  page_count: number;
  google_drive_link: string;
}

interface BookDetailsPageProps {
  book: Book;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const allEbooks = await db.select().from(ebooks);
  const paths = allEbooks.map((ebook) => ({
    params: { id: ebook.id.toString() },
  }));

  return {
    paths,
    fallback: true, // or 'blocking' if you want to block until the page is generated
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params?.id) {
    return {
      notFound: true, // Return a 404 page if the ID is not found
    };
  }

  const ebook = (await db.select().from(ebooks).where(eq(ebooks.id, parseInt(params.id as string))))[0];

  if (!ebook) {
    return {
      notFound: true, // Return a 404 page if the ebook is not found
    };
  }

  // Map the ebook object to the Book interface
  const book: Book = {
    id: ebook.id,
    title: ebook.title,
    author: ebook.author,
    price: ebook.price,
    cover_image: ebook.cover_image,
    category: ebook.category,
    description: ebook.description,
    page_count: ebook.page_count,
    google_drive_link: ebook.google_drive_link,
  };

  return {
    props: {
      book,
    },
  };
}

const BookDetailsPage: React.FC<BookDetailsPageProps> = ({ book }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold mt-4">{book.title}</h1>
        <p className="text-gray-600 mt-2">By {book.author}</p>
        <p className="text-gray-600 mt-2">{book.category}</p>
        <p className="text-gray-600 mt-2">{book.description}</p>
        <p className="text-gray-600 mt-2">{book.page_count} pages</p>
        <p className="text-2xl font-bold mt-4">${book.price}</p>
        <a
          href={book.google_drive_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Download Ebook
        </a>
        <button
          onClick={() => alert(`${book.title} added to cart!`)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;