import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{
    const db = await connectDB()

    const productsCollection = await db.collection('products')

    try {
        const items = await request.json()
        const res = await productsCollection.insertOne(items)
        return NextResponse.json({message: "Items has been stored successfully!", res}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status:303})
    }
}