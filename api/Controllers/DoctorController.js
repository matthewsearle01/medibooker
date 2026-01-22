const DoctorServices = require('../Services/DoctorServices');

class DoctorController {
  async getDoctors(_req, res, next) {
    try {
      const data = await DoctorServices.getDoctors();
      res.json(data);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DoctorController();
