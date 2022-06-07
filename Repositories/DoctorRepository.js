const connect = require('../Config/dbConfig');

class DoctorRepository {
  doctorCollection = null;

  constructor() {
    connect().then((db) => {
      this.doctorCollection = db.collection('Doctors');
    });
  }

  async getDoctors() {
    return await this.doctorCollection.find().toArray();
  }
}

module.exports = new DoctorRepository();
