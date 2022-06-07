const doctorController = require('../Controllers/DoctorController');
const appointmentController = require('../Controllers/AppointmentController');

function routes(app) {
  // Root route
  app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Medibooker Server</h1>');
  });

  app.get('/doctors', doctorController.getDoctors);
  app.get('/appointments', appointmentController.getAppointments);
  app.post('/appointments', appointmentController.addAppointment);
}

module.exports = routes;
