const herokuAPI = "https://ironhack-projects.herokuapp.com/";

export function getStudents(cohort) {
  return fetch(herokuAPI + "student/cohort/" + cohort)
    .then(r => r.json())
    .then(students => students)
}