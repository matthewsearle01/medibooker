const { getDb } = require('../lib/mongo');

async function getAppointments() {
  const db = await getDb();
  return db.collection('appointments').find().sort({ startsAt: 1 }).toArray();
}

async function addAppointment(doc) {
  const db = await getDb();
  const result = await db.collection('appointments').insertOne(doc);
  return { insertedId: result.insertedId };
}

module.exports = { getAppointments, addAppointment };
