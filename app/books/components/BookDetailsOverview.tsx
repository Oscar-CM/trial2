import React from "react";
import Image from "next/image";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import BookCover from "./BookCover";
import { Book } from "@/types";

interface Props extends Book {
    userId: string;
}
const BookOverview = async ({
    title,
    author,
    category,
    rating,
    total_copies,
    available_copies,
    description,
    color,
    cover_image,
    price,


    id,

}: Book) => {

    return (
        <section className="book-details_overview">
            <div className="flex flex-1 flex-col gap-5">
                <h1 className="text-lg">{title.split(" ").slice(0, 20).join(" ") + (title.split(" ").length > 5 ? "..." : "")}</h1>

                <div className="book-info">
                    <p>
                        By <span className="font-semibold text-light-200">{author}</span>
                    </p>

                    <p>
                        Category{" "}
                        <span className="font-semibold text-light-200">{category}</span>
                    </p>

                    <div className="flex flex-row gap-1">
                        <Image src="/icons/star.svg" alt="star" width={22} height={22} />
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="book-copies">
                    <p>
                        Total Books <span>{total_copies}</span>
                    </p>

                    <p>
                        Available Books <span>{available_copies}</span>
                    </p>
                </div>

                <p className="book-description">
                    {description
                        ? description.split(" ").slice(0, 80).join(" ") +
                        (description.split(" ").length > 10 ? "..." : "")
                        : ""}
                </p>
                <Button className="book-overview_btn">
                    <Image src="/icons/book.svg" alt="book"
                        width={20} height={20} />
                    <p className="font-bebas-neue text-xl text-dark-100"> Buy</p>

                </Button>


            </div>
            <div className="relative flex flex-1 justify-center">
                <div className="relative">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={color ?? "#FFFFFF"}
                        coverUrl={cover_image ?? "https://ik.imagekit.io/wle95blwoj/nuval.jpg?updatedAt=1740395891997"}
                    />
                </div>
                <div className="absolute left-16 top-[-8] rotate-12 opacity-40 max-sm:hidden">
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={color ?? "#FFFFFF"}
                        coverUrl={cover_image ?? "https://ik.imagekit.io/wle95blwoj/nuval.jpg?updatedAt=1740395891997"}
                    />



                </div>
            </div>


        </section>
    );
};

export default BookOverview;