
import { pgTable, varchar, text, integer, decimal, timestamp, serial } from 'drizzle-orm/pg-core';

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const productsTable = pgTable('products', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(), // Auto-incrementing ID
    title: varchar('', { length: 255 }).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).default(0.00), // Price with up to 2 decimal places
    category: varchar('', { length: 50 }).notNull(), // Category (e.g., Source Code, UI kit)
    description: text('').notNull(), // Product description
    about: text(''), // Optional "About Product" information
    message: text(''), // Optional message to the buyer
    imageUrl: varchar('', { length: 255 }), // URL for the uploaded image
    fileUrl: varchar('', { length: 255 }).notNull(), // URL for the file to sell
    createdBy: varchar('createdBy').notNull().references(() => usersTable.email), // References the users table
    
  });

  export const ebooks = pgTable("ebooks", {
    id: serial("id").primaryKey(),
  
    title: varchar("title", { length: 255 }).notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).default(0.00), 
    rating: integer("rating"),
    total_copies: integer("total_copies"),
    available_copies:integer("available_copies"),
    cover_image: varchar("cover_image", { length: 1000 }),
    google_drive_link: varchar("google_drive_link", { length: 1000 }).notNull(),
  
    category: varchar("category", { length: 100 }),
    color: varchar("color"),
    description: text("description"),
    page_count: integer("page_count"),
  
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
  });


  export const books = pgTable("books", {
    id: serial("id").primaryKey(),
  
    title: varchar("title", { length: 255 }).notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).default(0.00), 
    rating: integer("rating"),
    total_copies: integer("total_copies"),
    available_copies:integer("available_copies"),
    cover_image: varchar("cover_image", { length: 1000 }),
    google_drive_link: varchar("google_drive_link", { length: 1000 }).notNull(),
  
    category: varchar("category", { length: 100 }),
    color: varchar("color"),
    description: text("description"),
    page_count: integer("page_count"),
  
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
  });
  
  export const cartTable = pgTable("cart", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: varchar().notNull(),
    bookId: integer().notNull().references(() => books.id)
  });
  
  

  
