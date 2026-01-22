export async function getAvailableAppointments(doctor, date) {
  const response = await fetch('/api/appointments');
  const appointments = await response.json();
  let selectedAppointments = [];
  appointments.map((appointment) => {
    if (appointment.Doctor === doctor && appointment.Date === date) {
      selectedAppointments.push(appointment);
    }
  });
  return selectedAppointments;
}
