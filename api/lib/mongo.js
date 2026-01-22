const { MongoClient } = require('mongodb');

let clientPromise;

async function getDb(name = 'medibookerdb') {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  if (!clientPromise) {
    const client = new MongoClient(uri, { 
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    });
    clientPromise = client.connect();
  }
  
  const client = await clientPromise;
  return client.db(name);
}

module.exports = { getDb };
