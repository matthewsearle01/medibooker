const DoctorRepository = require('../Repositories/DoctorRepository');

class DoctorServices {
  async getDoctors() {
    return DoctorRepository.getDoctors();
  }
}

module.exports = new DoctorServices();
