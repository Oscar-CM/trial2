// components/AddBookForm.jsx

"use client";
import { useState } from "react";

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: 0.0,
    rating: 0,
    total_copies: 0,
    available_copies: 0,
    cover_image: "",
    google_drive_link: "",
    category: "",
    color: "",
    description: "",
    page_count: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data (optional)
    if (!formData.title || !formData.author || !formData.google_drive_link) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/add-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Book added successfully!");
        setFormData({
          title: "",
          author: "",
          price: 0.0,
          rating: 0,
          total_copies: 0,
          available_copies: 0,
          cover_image: "",
          google_drive_link: "",
          category: "",
          color: "",
          description: "",
          page_count: 0,
        });
      } else {
        alert("Failed to add book. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the book.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg text-black"
    >
      <h2 className="text-2xl font-bold mb-4 text-black">Add a New Book</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>

      {/* Author */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Price</label>
        <input
          type="number"
          step="0.01"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Total Copies */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Total Copies
        </label>
        <input
          type="number"
          name="total_copies"
          value={formData.total_copies}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Available Copies */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Available Copies
        </label>
        <input
          type="number"
          name="available_copies"
          value={formData.available_copies}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Cover Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Cover Image URL
        </label>
        <input
          type="url"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Google Drive Link */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Google Drive Link
        </label>
        <input
          type="url"
          name="google_drive_link"
          value={formData.google_drive_link}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Color</label>
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        ></textarea>
      </div>

      {/* Page Count */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">
          Page Count
        </label>
        <input
          type="number"
          name="page_count"
          value={formData.page_count}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Book
      </button>
    </form>
  );
}