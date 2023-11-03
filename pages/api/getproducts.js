import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const databaseName = process.env.DATABASE_NAME;
    const collectionName = process.env.COLLECTION_NAME;

    const db = client.db(databaseName);
    const collection = db.collection(collectionName);

    const spiderName = req.query.spiderName;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * 200;
    const limit = 200;

    const filter = spiderName ? { spider_name: spiderName } : {};
    const sampleData = await collection
      .find(filter)
      .skip(skip)
      .limit(limit)
      .toArray();
    res.status(200).json({ sampleData });
  } catch (e) {
    console.error(e);
  }
};
