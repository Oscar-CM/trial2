'use client';

import { useEffect, useState } from 'react';

interface Ebook {
  id: number;
  title: string;
  author: string;
  price: string;
  cover_image: string;
  google_drive_link: string;
  category: string;
  description: string;
  page_count: number;
  created_at: string;
  updated_at: string;
}

export default function EbookList() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch ebooks from the API
    const fetchEbooks = async () => {
      try {
        const response = await fetch('/api/ebooks');
        const data = await response.json();
        if (response.ok) {
          setEbooks(data);
        } else {
          setError('Failed to load eBooks');
        }
      } catch (err) {
        setError('An error occurred while fetching eBooks');
      }
    };

    fetchEbooks();
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;

  const handleAddToCart = (ebook: Ebook) => {
    // Add to cart logic goes here
    console.log(`Added to cart: ${ebook.title}`);
  };

  return (
    <div className="p-4">
      {ebooks.length === 0 ? (
        <p className="text-center text-xl">No eBooks available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={ebook.cover_image || '/default-cover.jpg'}
                  alt={ebook.title}
                  className="w-full h-48 object-cover rounded-xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl font-semibold rounded-xl">
                  {ebook.title}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{ebook.title}</h3>
                <p className="text-gray-500 text-sm">{ebook.author}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold text-green-600">${ebook.price}</p>
                  <button
                    onClick={() => handleAddToCart(ebook)}
                    className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
                <p className="text-gray-700 text-sm mt-2">{ebook.category}</p>
                <p className="text-gray-600 text-sm mt-2">{ebook.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
