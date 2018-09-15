import {base_url} from "../variables";

const herokuAPI = `${base_url}/student`;

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

export function getCohortProjects(cohort) {
  return fetch(herokuAPI + '/cohort/' + cohort)
    .then(projects => projects.json())
    .then(projects => projects)
}

