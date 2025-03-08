"use client";

import { useState } from "react";

export default function EbookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    cover_image: "",
    google_drive_link: "",
    category: "",
    description: "",
    page_count: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/ebooks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Ebook added successfully!");
        setFormData({
          title: "",
          author: "",
          price: "",
          cover_image: "",
          google_drive_link: "",
          category: "",
          description: "",
          page_count: "",
        });
      } else {
        setMessage("Error adding eBook.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New eBook</h2>

      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
          required
        />

        <input 
          type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
          required
        />

        <input 
          type="number" step="0.01" name="price" placeholder="Price (Leave empty for free)" 
          value={formData.price} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
        />

        <input 
          type="url" name="cover_image" placeholder="Cover Image URL" value={formData.cover_image} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
          required
        />

        <input 
          type="url" name="google_drive_link" placeholder="Google Drive Link" value={formData.google_drive_link} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
          required
        />

        <input 
          type="text" name="category" placeholder="Category (e.g., Fiction, Tech)" value={formData.category} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
        />

        <textarea 
          name="description" placeholder="Description" value={formData.description} onChange={handleChange} 
          className="w-full p-2 border rounded-md h-20"
        />

        <input 
          type="number" name="page_count" placeholder="Page Count" value={formData.page_count} onChange={handleChange} 
          className="w-full p-2 border rounded-md"
        />

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400" 
          disabled={loading}
        >
          {loading ? "Adding..." : "Add eBook"}
        </button>
      </form>
    </div>
  );
}
