export function getDoctors() {
  return fetch('/api/doctors')
    .then(data => data.json())
}