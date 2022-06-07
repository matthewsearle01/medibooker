const AppointmentRepository = require('../Repositories/AppointmentRepository');

class AppointmentServices {
  async getAppointments() {
    let allAppointments = await AppointmentRepository.getAppointments();
    return allAppointments;
  }

  async addAppointment(appointment) {
    let result = await AppointmentRepository.addAppointment(appointment);
    return result;
  }
}

module.exports = new AppointmentServices();
