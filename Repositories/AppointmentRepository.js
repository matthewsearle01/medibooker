const connect = require('../Config/dbConfig');

class AppointmentRepository {
  appointmentCollection = null;

  constructor() {
    connect().then((db) => {
      this.appointmentCollection = db.collection('Appointments');
    });
  }

  async getAppointments() {
    return await this.appointmentCollection.find().toArray();
  }

  async addAppointment(appointment) {
    let addedAppointment = {};
    try {
      addedAppointment = await this.appointmentCollection.insertOne(
        appointment
      );
    } catch (err) {
      console.log('addAppointment error: ' + err);
    }
    return addedAppointment;
  }
}

module.exports = new AppointmentRepository();
