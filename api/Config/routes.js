const { Router } = require('express');
const DoctorController = require('../Controllers/DoctorController');
const AppointmentController = require('../Controllers/AppointmentController');

module.exports = function routes(app) {
  const r = Router();

  // doctors
  r.get('/doctors', DoctorController.getDoctors.bind(DoctorController));

  // appointments
  r.get('/appointments', AppointmentController.getAppointments.bind(AppointmentController));
  r.post('/appointments', AppointmentController.addAppointment.bind(AppointmentController));

  // Mount at root for Vercel (rewrite strips /api prefix)
  // Also mount at /api for local development
  app.use('/', r);
  app.use('/api', r);
};
