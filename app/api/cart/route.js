import { NextResponse } from "next/server";
import { db } from '@/configs/db';
import { cartTable } from '../../../configs/schema';

export async function POST(req){
    const {email, bookId} = await req.json();

    const result = await db.insert(cartTable).values({
        email:email,
        bookId:bookId,
    }).returning(cartTable)
    return NextResponse.json(result)
}