import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(request, {params})=>{
    const db = await connectDB();
    const productsCollection = await db.collection('products')
    
    try {
        const res = await productsCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({message: "Single Data received", res}, {status: 200})
    } catch (error) {
        return NextResponse({message: 'something went wrong'}, {status: 303})
    }
}