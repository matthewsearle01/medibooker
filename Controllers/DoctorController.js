const DoctorServices = require('../Services/DoctorServices');

class DoctorController {
  getDoctors(req, res) {
    DoctorServices.getDoctors().then((data) => res.json(data));
  }
}

module.exports = new DoctorController();
