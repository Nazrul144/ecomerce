import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async()=>{
    const db = await connectDB();

    const productCollection = await db.collection('products')

    try {
        const res = await productCollection.find().toArray()
        return NextResponse.json({message: "Products received", res}, {status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "something went wrong"}, {status: 303})
    }
}