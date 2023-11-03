import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const databaseName = process.env.DATABASE_NAME; 
        const collectionName = process.env.COLLECTION_NAME;

        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        const uniqueSpiderNames = await collection.distinct('spider_name');
        res.status(200).json({ uniqueSpiderNames });
    } 
        catch (e) {
        console.error(e);
    }
};