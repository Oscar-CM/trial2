import { Decimal } from "decimal.js";


export type Book = {
  id: number;
  title: string;
  author: string;
  price: number | string | null; // Allow both types
  rating?: number | null;
  total_copies?: number | null;
  available_copies?: number | null;
  cover_image?: string | null;
  google_drive_link: string;
  category?: string | null;
  color?: string | null;
  description?: string | null;
  page_count?: number | null;
  created_at: Date;
  updated_at: Date;
};



interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  totalCopies: number;
  videoUrl: string;
  summary: string;
}

interface BorrowBookParams {
  bookId: string;
  userId: string;
}

// types/book.ts

// types/book.ts

// types/book.ts



export interface BookFormData {
  title: string; // Required
  author: string; // Required
  price: Decimal | number; // Accepts both Decimal and number for flexibility
  rating?: number | null; // Optional
  total_copies?: number | null; // Optional
  available_copies?: number | null; // Optional
  cover_image?: string | null; // Optional
  google_drive_link: string; // Required
  category?: string | null; // Optional
  color?: string | null; // Optional
  description?: string | null; // Optional
  page_count?: number | null; // Optional
}