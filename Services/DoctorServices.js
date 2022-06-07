const DoctorRepository = require('../Repositories/DoctorRepository');

class DoctorServices {
  async getDoctors() {
    let allDoctors = await DoctorRepository.getDoctors();
    return allDoctors;
  }
}

module.exports = new DoctorServices();
