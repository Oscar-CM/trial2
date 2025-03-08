import React from "react";
import { db } from "@/configs/db";
import { books } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import BookDetailsOverview from "../../components/BookDetailsOverview";


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
 
  const numericId = Number(id);

  // Fetch data based on id
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, numericId))
    .limit(1);

  if (!bookDetails) redirect("/404");

  return (
    <>
      <BookDetailsOverview {...bookDetails} />

      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>

           
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
             
            </div>
          </section>
        </div>

        {/*  SIMILAR*/}
      </div>
    </>
  );
};
export default Page;