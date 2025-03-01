import { MongoClient, ServerApiVersion } from "mongodb";

let db;
console.log(process.env.NEXT_PUBLIC_MONGODB_URL);
export const connectDB = async()=>{

    if(db) return db;
    const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
    console.log(uri);
    try {
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          db = client.db('ecomerce')
          return db;
    } catch (error) {
        console.log(error);
    }
}