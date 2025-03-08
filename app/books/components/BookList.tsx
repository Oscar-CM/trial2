import React from 'react'
import BookCard from './BookCard';
import { Book } from '@/types';

interface Props {
  title:string;
  books:Book[];
  containerClassName?:string

}

const BookList = ({
  title,books, containerClassName
}:Props) => {
  return (
    <div className={containerClassName}>
      <h2 className='font-bebas-neue text-4xl text-light-100'>
        {title}
        <ul className='book-list'>
          {books.map((book)=>(
            <BookCard key={book.title} {...book}/>

          ))}
          

        </ul>

      </h2>
      
    </div>
  )
}

export default BookList
