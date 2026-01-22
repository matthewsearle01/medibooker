const { ObjectId } = require('mongodb');
const AppointmentRepository = require('../Repositories/AppointmentRepository');

class AppointmentServices {
  async getAppointments() {
    return AppointmentRepository.getAppointments();
  }

  async addAppointment(input) {
    // basic validation and coercion
    const doc = {
      patientName: String(input.patientName || '').trim(),
      startsAt: input.startsAt ? new Date(input.startsAt) : null,
      status: input.status || 'booked',
      doctorId: input.doctorId && ObjectId.isValid(input.doctorId)
        ? new ObjectId(input.doctorId)
        : null
    };

    if (!doc.patientName) {
      const e = new Error('patientName is required');
      e.status = 400;
      throw e;
    }
    if (!doc.startsAt || isNaN(doc.startsAt.getTime())) {
      const e = new Error('startsAt must be a valid date');
      e.status = 400;
      throw e;
    }

    return AppointmentRepository.addAppointment(doc);
  }
}

module.exports = new AppointmentServices();
