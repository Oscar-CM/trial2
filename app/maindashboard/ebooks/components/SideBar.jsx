"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Books from "./Books";

export default function EbookSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "Technology",
    "Self-Help",
    "Biography",
    "Fantasy",
    "Mystery",
    "Romance",
  ];

  return (
    <div className="flex h-screen">
      
      {/* Mobile Sidebar Toggle Button */}
      <div className="absolute top-4 left-4 md:hidden">
      
        <Button onClick={() => setIsOpen(true)} variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-[#3b82f1] via-[#23c55e] to-[#a755f7] text-white p-5 shadow-lg transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static`}
      >
        
        {/* Close Button for Mobile */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Category List */}
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Button
                variant="ghost"
                className="w-full justify-start text-lg hover:bg-white hover:text-black transition"
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      
    </div>
  );
}
