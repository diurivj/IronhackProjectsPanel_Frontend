const localAPI = "http://localhost:3000/cohort";
// const herokuAPI = "https://ironhack-projects.herokuapp.com/cohort";

export function getCohorts() {
  return fetch(localAPI + "/all")
    .then(r => r.json())
    .then(cohorts => cohorts)
}