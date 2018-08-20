// const localAPI = "http://localhost:3000/student";
const herokuAPI = "https://ironhack-projects.herokuapp.com/student";

export function createStudent(student) {
  return fetch(herokuAPI + '/create_new', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  })
    .then(r => r.json())
    .then(student => student);
}

export function getStudents() {
  return fetch(herokuAPI + '/all')
    .then(r => r.json())
    .then(students => students)
}

