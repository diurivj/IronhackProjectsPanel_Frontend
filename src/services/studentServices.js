const localAPI = "http://localhost:3000/student";
const herokuAPI = "https://ironhack-projects.herokuapp.com/student";

export function createStudent(student) {
  return fetch(localAPI + '/create_new', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  })
    .then(r => r.json())
    .then(student => student);
}

export function getStudents(cohort) {
  return fetch(herokuAPI + '/cohort/' + cohort)
    .then(r => r.json())
    .then(students => students)
}

