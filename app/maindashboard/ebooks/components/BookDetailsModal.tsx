// components/BookDetailsModal.tsx
import React from 'react';

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    cover_image: string;
    category: string;
    description: string;
    page_count: number;
    google_drive_link: string;
  };
}

const BookDetailsModal: React.FC<BookDetailsModalProps> = ({ isOpen, onClose, book }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Book Details */}
        <div className="space-y-4">
          <img src={book.cover_image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-600">By {book.author}</p>
          <p className="text-gray-600">{book.category}</p>
          <p className="text-gray-600">{book.description}</p>
          <p className="text-gray-600">{book.page_count} pages</p>
          <p className="text-lg font-bold">${book.price}</p>
          <a
            href={book.google_drive_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Download Ebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;