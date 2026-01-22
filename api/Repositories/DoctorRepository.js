const { getDb } = require('../lib/mongo');

async function getDoctors() {
  const db = await getDb();
  return db.collection('doctors').find().toArray();
}

module.exports = { getDoctors };