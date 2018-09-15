import {base_url} from "../variables";

const herokuAPI = `${base_url}/cohort`;

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

export function createCohort(cohort) {
  return fetch(herokuAPI + "/create_new", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cohort)
  })
    .then(r => r.json())
    .then(cohort => cohort)
}