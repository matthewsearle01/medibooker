const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.warn('MONGODB_URI not set');
}

let clientPromise;
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, { maxPoolSize: 10 });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

async function getDb(name = 'medibookerdb') {
  const client = await clientPromise;
  return client.db(name);
}

module.exports = { getDb };
