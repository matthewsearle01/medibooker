const AppointmentServices = require('../Services/AppointmentServices');

class AppointmentController {
  getAppointments(req, res) {
    AppointmentServices.getAppointments().then((data) => res.json(data));
  }

  addAppointment(req, res) {
    AppointmentServices.addAppointment(req.body).then((data) => res.json(data));
  }
}

module.exports = new AppointmentController();
