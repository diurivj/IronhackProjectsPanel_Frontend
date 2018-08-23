//const localAPI = "http://localhost:3000/cohort";
const herokuAPI = "https://ironhack-projects.herokuapp.com/cohort";

export function getCohorts() {
  return fetch(herokuAPI + "/all")
    .then(r => r.json())
    .then(cohorts => cohorts)
}

export function updateCohort(changes, id) {
  return fetch(herokuAPI + "/update/" + id, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(changes)
  })
    .then(r => r.json())
    .then(cohort => cohort)
}