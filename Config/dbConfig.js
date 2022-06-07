const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URI;
const dbName = 'medibookerdb';

async function connect() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  return db;
}

module.exports = connect;
