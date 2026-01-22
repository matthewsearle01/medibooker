const AppointmentServices = require('../Services/AppointmentServices');

class AppointmentController {
  async getAppointments(_req, res, next) {
    try {
      const data = await AppointmentServices.getAppointments();
      res.json(data);
    } catch (e) {
      next(e);
    }
  }

  async addAppointment(req, res, next) {
    try {
      const result = await AppointmentServices.addAppointment(req.body);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AppointmentController();
